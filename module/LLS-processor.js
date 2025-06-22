// ■■ ラブライブ！ストレージ データ抽出・出力用モジュール「LLS Processor」
// データとなるJSONファイル、ならびに「loader.js」「common-library.js」が必要です
//
// また、HTML側で以下のものを指定してください：
// ■タグ要素
// ・id="LLSP-Filter" (絞り込み用のプルダウンメニュー)
// ・id="LLSP-Result" (出力表示場所)
//
// ■JSONファイル
//
// ■変数
// ・tagData (Array) - 各要素は{"name":<String>, "r":<Number>, "g":<Number>, "b":<Number>, "style":<String>}
// ・filterTargets (Array) - 各要素は {"name":<String>, "condition":<String>}
//
// ■関数
// ・LLSPLayoutTemplate - 記事1つ分のデータを整形するための関数 (必須)
// ・LLSPDebug - 読み込み完了後、デバッグモードであった場合にのみ実行される関数（任意）

const LLSProcessor = {
    //YouTubeへのリンクを作成
    getYouTubeLink: (_id, _title) => {
        return `<a href="https://www.youtube.com/watch?v=${_id}" target="_blank" rel="noopener noreferrer">
		<img src="https://img.youtube.com/vi/${_id.split('&')[0]}/default.jpg" alt="${_title}" loading="lazy" class="pc-only">
		<span class="sp-only">動画へ</span></a>`;
    },

    renderEntryList: (dataSrc, conditions) => {
        if (!conditions) { return false; } //conditionが指定されていない場合、キャンセル

        //条件フィルターを行い出力する。日付が2035年以降のエントリーは入力ミスなので常に除外
        let filteredList = dataSrc.filter(_e => new Date(_e.date) <= new Date("2035-01-01"));

        const condition = conditions.split(' ');
        condition.forEach(c => {
            if (c.startsWith("before:")) { //「before:」 - 指定された日付以前
                const beforeDate = new Date(c.split(':')[1]);
                filteredList = filteredList.filter(_e => new Date(_e.date) <= beforeDate);
            }
            else if (c.startsWith("after:")) { //「after:」 - 指定された日付まで
                const afterDate = new Date(c.split(':')[1]);
                filteredList = filteredList.filter(_e => new Date(_e.date) >= afterDate);
            }
            else if (c.startsWith("has:")) { //「has:」 - trueyな特定のキー値を持つ
                const key = c.split(':')[1];
                filteredList = filteredList.filter(_e => _e?.[key]);
            }
            else if (c.startsWith("exhas:")) { //「exhas:」 - trueyな特定のキー値を持たない
                const key = c.split(':')[1];
                filteredList = filteredList.filter(_e => !_e?.[key]);
            }
            else if (c.startsWith("tag:")) { //「tag:」 - 特定のタグを持つ
                const tag = c.split(':')[1];
                filteredList = filteredList.filter(_e => _e?.tags && _e.tags.includes(tag));
            }
            else if (c.startsWith("extag:")) { //「extag:」 - 特定のタグを持たない
                const tag = c.split(':')[1];
                filteredList = filteredList.filter(_e => !(_e?.tags && _e.tags.includes(tag)));
            }
        });
        //「max」 - 最大件数の指定
        condition.forEach(c => {
            if (c.startsWith("max:")) {
                const limit = parseInt(c.split(':')[1], 10);
                filteredList = filteredList.slice(0, limit);
            }
        });

        //HTML側で個別に定義された「LLSLayoutTemplate」関数を用いて書き出しを行う
        document.getElementById('LLSP-Result').innerHTML =
            filteredList.map(entry => LLSPLayoutTemplate(entry)).join('');
	    document.getElementById('LLSP-Result').scrollTop = 0;
        return filteredList.length;
    },

    //初期化処理。プルダウンメニューのID、出力箇所のIDを指定してください
    initialize: () => {
        const TimeOutputLoaded = performance.now();
        //JSONデータのパスから変数名を取得
        const JSONpath = files.filter(file => file.endsWith('.json'));
        if (!JSONpath.length > 0) { console.error("No argument specified - initializeVideoList"); return; }
        const databasePath = JSONpath[0].replace(/^.+\/(.+)\.json$/g, "JSON-$1");

        //ボタンの色データをCSSに追加
        const buttonCSS = document.createElement("style");
        buttonCSS.innerHTML = ("\n<!--\n/* Generated from LLS-processor.js */\n" + Object.keys(tagData).map(tag => `.button-${tag} {\n\tbackground-color: ${getColor(tagData[tag], 3)};\n\tborder-color: ${getColor(tagData[tag])};\n}`).join("\n") + "\n-->");
        document.head.appendChild(buttonCSS);

        //セレクトボックスに要素を追加
        filterTargets.forEach(temp => {
            if (temp.name.substring(0, 5) === "debug" && !isDebugMode) { return; } //「debug」から始まるものは追加しない
            const option = document.createElement('option');
            option.text = temp.name;
            option.value = temp.condition || '';
            document.getElementById("LLSP-Filter").appendChild(option);
        });

        //セレクトボックス変更時の処理を追加
        document.getElementById("LLSP-Filter").addEventListener('change', function () {
            const TimeOutputStart = performance.now();
            const filteredVideos = LLSProcessor.renderEntryList(window[databasePath], this.value, "LLSP-Result");
            if (filteredVideos > 0 && isDebugMode) {
                const TimeOutputEnd = performance.now();
                console.log(`条件：${this.value} (${filteredVideos}件) 出力時間：${(TimeOutputEnd - TimeOutputStart).toFixed(1)}ミリ秒`);
            }
        });

        //警告解除
        document.getElementById("LLSP-Result").classList.remove('output-box-default');
        document.getElementById("LLSP-Result").innerHTML = `<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">(上のプルダウンメニューから、期間を選んでください)</div>`;

        //デバック用
        if (isDebugMode) {
            // 個別のデバッグ用関数を実行
            if (typeof window["LLSPDebug"] === "function") {　window["LLSPDebug"](); }

            // 共通の簡単なデータベースのチェック
            window[databasePath].forEach(_entry => {
                if (!(['date'] in _entry)) {
                    throw new Error(`JSON contains video data without "date"`);
                    return;
                }
                if (_entry['date'].indexOf("/") >= 0) {
                    throw new Error(`"date" must be written with separator hyphens`);
                }
            });

            document.getElementById("LLSP-Filter").selectedIndex = 1;
            LLSProcessor.renderEntryList(window[databasePath], document.getElementById("LLSP-Filter").value, "LLSP-Result");

            //描画時間の出力
            const TimeOutputEnd = performance.now();
            console.log(`${document.getElementById('TitleName').innerHTML} 初期設定完了。読み込み：${(TimeOutputLoaded - TimeLoadingStart).toFixed(1)}ミリ秒 初期化：${(TimeOutputEnd - TimeOutputLoaded).toFixed(1)}ミリ秒`);
        }
    }
}
initialize = () => LLSProcessor.initialize(); // loader.jsから呼び出される
