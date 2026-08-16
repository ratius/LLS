// ■■ ラブライブ！ストレージ データ抽出・出力用モジュール「LLS Video」
// データとなるJSONファイル、ならびに「loader.js」「LLS-misc.js」が必要です
//
// また、HTML側で以下のものを指定してください：
// ■タグ要素
// ・id="LLSV-Filter" (絞り込み用のプルダウンメニュー)
// ・id="LLSV-Result" (出力表示場所)
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

const LLSVideo = {
    //YouTubeへのリンクを作成
    getYouTubeLink: (_id, _title) => {
        return `<a href="https://www.youtube.com/watch?v=${_id}" target="_blank" rel="noopener noreferrer">
		<img src="https://img.youtube.com/vi/${_id.split('&')[0]}/default.jpg" alt="${_title}" loading="lazy" class="pc-only">
		<span class="sp-only">動画へ</span></a>`;
    },

    renderEntryList: (dataSrc, conditions) => {
        if (!conditions) { return false; } //conditionが指定されていない場合、キャンセル
        conditions = conditions.split(' ');

        let maxVideos = 1000; //表示する動画の最大件数

        //与えられた条件でフィルターを行う
        const filteredList = dataSrc.filter((video) => {
            //2035年以降は間違いなく入力ミスなので除外
            if (new Date(video.date) >= new Date("2035-01-01")) { return false; }

            return conditions.every((condition) => {
                condition = condition.split(':');
                if (condition[0] === "max") { //「max」 - 最大件数の指定
                    maxVideos = parseInt(condition[1], 10);
                    return true;
                } else if (condition[0] === "before") { //「before:」 - 指定された日付以前
                    const beforeDate = new Date(condition[1]);
                    if (new Date(video.date) > beforeDate) { return false; }
                } else if (condition[0] === "after") { //「after:」 - 指定された日付以降
                    const beforeDate = new Date(condition[1]);
                    if (new Date(video.date) < beforeDate) { return false; }
                } else if (condition[0] === "tag") { //「tag:」 - 特定のタグを持つ
                    if (!video?.tags.includes(condition[1])) { return false; }
                } else if (condition[0] === "extag") { //「extag:」 - 特定のタグを持たない
                    if (video?.tags.includes(condition[1])) { return false; }
                } else if (condition[0] === "nodesc") { //「nodesc」 - 概要が未設定
                    if (!video?.['desc'] || video.tag.includes("cancelled")) { return false; }
                } else if (condition[0] === "nolength") { //「nolength」 - 動画時間が未設定
                    if (!video?.['length'] || video.tag.includes("cancelled")) { return false; }
                } else if (condition[0] === "novideo") { //「novideo」 - 動画が未設定
                    if (!video?.['tube'] || video.tag.includes("cancelled")) { return false; }
                }
                return true;
            });
        }).slice(0, maxVideos);

        //HTML側で個別に定義された「LLSLayoutTemplate」関数を用いて書き出しを行う
        document.getElementById('LLSV-Result').innerHTML =
            filteredList.map(entry => LLSPLayoutTemplate(entry)).join('');
        document.getElementById('LLSV-Result').scrollTop = 0;
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
        buttonCSS.innerHTML = ("\n<!--\n/* Generated from LLS-processor.js */\n" + Object.keys(tagData).map(tag => `.button-${tag} {\n\tbackground-color: ${LLS.getColorFromObject(tagData[tag], 3)};\n\tborder-color: ${LLS.getColorFromObject(tagData[tag], 0, 0.15)};\n}`).join("\n") + "\n-->");
        document.head.appendChild(buttonCSS);

        //セレクトボックスに要素を追加
        filterTargets.forEach(temp => {
            if (temp.name.substring(0, 5) === "debug" && !isDebugMode) { return; } //「debug」から始まるものは追加しない
            const option = document.createElement('option');
            option.text = temp.name;
            option.value = temp.condition || '';
            document.getElementById("LLSV-Filter").appendChild(option);
        });

        //セレクトボックス変更時の処理を追加
        document.getElementById("LLSV-Filter").addEventListener('change', function () {
            const TimeOutputStart = performance.now();
            const filteredVideos = LLSVideo.renderEntryList(window[databasePath], this.value, "LLSV-Result");
            if (filteredVideos > 0 && isDebugMode) {
                const TimeOutputEnd = performance.now();
                console.log(`条件：${this.value} (${filteredVideos}件) 出力時間：${(TimeOutputEnd - TimeOutputStart).toFixed(1)}ミリ秒`);
            }
        });

        //警告解除
        document.getElementById("LLSV-Result").classList.remove('output-box-default');
        document.getElementById("LLSV-Result").innerHTML = `<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">(上のプルダウンメニューから、期間を選んでください)</div>`;

        //デバック用
        if (isDebugMode) {
            // 個別のデバッグ用関数を実行
            if (typeof window["LLSPDebug"] === "function") { window["LLSPDebug"](); }

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

            // データが日付順で並んでいるかどうかのチェック
            for (i = 0; i < window[databasePath].length - 1; i++) {
                const tempDate1 = new Date(window[databasePath][i].date);
                const tempDate2 = new Date(window[databasePath][i + 1].date);
                if (tempDate2 < tempDate1) {
                    alert(`JSON isn't sorted by date: ${window[databasePath][i].title}`);
                }
            }

            document.getElementById("LLSV-Filter").selectedIndex = 1;
            LLSVideo.renderEntryList(window[databasePath], document.getElementById("LLSV-Filter").value, "LLSV-Result");

            //描画時間の出力
            const TimeOutputEnd = performance.now();
            console.log(`${document.getElementById('TitleName').innerHTML} 初期設定完了。読み込み：${(TimeOutputLoaded - TimeLoadingStart).toFixed(1)}ミリ秒 初期化：${(TimeOutputEnd - TimeOutputLoaded).toFixed(1)}ミリ秒`);
        }
    }
}
initialize = () => LLSVideo.initialize(); // loader.jsから呼び出される
