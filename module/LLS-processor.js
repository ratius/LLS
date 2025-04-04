// ラブライブ！ストレージ データ抽出・整形用モジュール「LLS Processor」
// 「loader.js」「common-library.js」が必須となります。
// HTML側で以下のものを指定してください：
//
// ■変数
// tagData (Array) - 各要素は{"name":<String>, "r":<Number>, "g":<Number>, "b":<Number>, "style":<String>}
// filterTargets (Array) - 各要素は {"name":<String>, "condition":<String>}
//
// ■関数
// LLSPLayoutTemplate - 記事1つ分のデータを整形するための関数
// initialize - 各種ファイルの読み込みが完了した時に実行される変数。引数なし
//     LLSProcessor.initialize(<String:プルダウンメニューのID>, <String:出力フィールドのID>); を実行してください

const LLSProcessor = {
    //初期化処理。プルダウンメニューのID、出力箇所のIDを指定してください
    initialize: (filterId, outputFieldId) => {
        const TimeOutputLoaded = performance.now();
        //JSONデータのパスから変数名を取得
        const JSONpath = files.filter(file => file.endsWith('.json'));
        if (!JSONpath.length > 0) { console.error("No argument specified - initializeVideoList"); return; }
        const databasePath = JSONpath[0].replace(/^.+\/(.+)\.json$/g, "JSON-$1");

        //ボタンの色データをCSSに追加
        const buttonCSS = document.createElement("style");
        buttonCSS.innerHTML = ("\n<!--\n/* Generated from videolist.js */\n" + Object.keys(tagData).map(tag => `.button-${tag} {\n\tbackground-color: ${getColor(tagData[tag], 3)};\n\tborder-color: ${getColor(tagData[tag])};\n}`).join("\n") + "\n-->");
        document.head.appendChild(buttonCSS);

        //セレクトボックスに要素を追加
        filterTargets.forEach(temp => {
            if (temp.name.substring(0, 5) === "debug" && !isDebugMode) { return; } //「debug」から始まるものは追加しない
            const option = document.createElement('option');
            option.text = temp.name;
            option.value = temp.condition || '';
            document.getElementById(filterId).appendChild(option);
        });

        //セレクトボックス変更時の処理を追加
        document.getElementById(filterId).addEventListener('change', function () {
            const TimeOutputStart = performance.now();
            const filteredVideos = LLSProcessor.renderEntryList(window[databasePath], this.value, outputFieldId);
            if (filteredVideos > 0 && isDebugMode) {
                const TimeOutputEnd = performance.now();
                console.log(`条件：${this.value} (${filteredVideos}件) 出力時間：${(TimeOutputEnd - TimeOutputStart).toFixed(1)}ミリ秒`);
            }
        });

        //警告解除
        document.getElementById(outputFieldId).classList.remove('output-box-default');
        document.getElementById(outputFieldId).innerHTML = `<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">(上のプルダウンメニューから、期間を選んでください)</div>`;

        //デバック用
        if (isDebugMode) {
            //データベースの検証
            window[databasePath].forEach(_entry => {
                if (!(['date'] in _entry)) {
                    throw new Error(`JSON contains video data without "date"`);
                    return;
                }
                if (_entry['date'].indexOf("/") >= 0) {
                    throw new Error(`"date" must be written with separator hyphens`);
                }
            });

            document.getElementById(filterId).selectedIndex = 1;
            LLSProcessor.renderEntryList(window[databasePath], document.getElementById(filterId).value, outputFieldId);

            //描画時間の出力
            const TimeOutputEnd = performance.now();
            console.log(`${document.getElementById('TitleName').innerHTML} 初期設定完了。読み込み：${(TimeOutputLoaded - TimeLoadingStart).toFixed(1)}ミリ秒 初期化：${(TimeOutputEnd - TimeOutputLoaded).toFixed(1)}ミリ秒`);
        }
    },

    //数値を秒と解釈し、「h時間mm分ss秒」形式に変換
    convertSecondsToHHMMSS: (len) => {
        len = Math.floor(parseInt(len, 10));
        if (isNaN(len) || len < 0) { return '不明'; }
        if (len < 60) { return `${len}秒`; }
        if (len < 3600) { return `${Math.floor(len / 60)}分${('0' + (len % 60)).slice(-2)}秒`; }
        return `${Math.floor(len / 3600)}時間${('0' + Math.floor((len % 3600) / 60)).slice(-2)}分${('0' + (len % 60)).slice(-2)}秒`;
    },

    //YouTubeへのリンクを作成
    getYouTubeLink: (_id, _title) => {
        return `<a href="https://www.youtube.com/watch?v=${_id}">
		<img src="https://img.youtube.com/vi/${_id.split('&')[0]}/default.jpg" alt="${_title}" loading="lazy" class="pc-only">
		<span class="sp-only">動画へ</span></a>`;
    },

    renderEntryList: (dataSrc, conditions, targetId) => {
        //条件フィルターを行い出力する。日付が2035年以降のエントリーは入力ミスなので除外する
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
            else if (c.startsWith("has:")) { //「has:」 - 特定のキー値を持つ
                const key = c.split(':')[1];
                filteredList = filteredList.filter(_e => key in _e);
            }
            else if (c.startsWith("tag:")) { //「tag:」 - 特定のタグを持つ
                const tag = c.split(':')[1];
                filteredList = filteredList.filter(_e => _e.tags && _e.tags.includes(tag));
            }
            else if (c.startsWith("extag:")) { //「extag:」 - 特定のタグを持たない
                const tag = c.split(':')[1];
                filteredList = filteredList.filter(_e => _e.tags && !_e.tags.includes(tag));
            }
            else if (c === "nodesc") { //「nodesc」 - 概要が未設定
                filteredList = filteredList.filter(_e => _e.desc === "" && !_e.tags.includes("cancelled"));
            }
            else if (c === "nolength") { //「nolength」 - 動画時間が未設定
                filteredList = filteredList.filter(_e => !(['length'] in _e) && !_e.tags.includes("cancelled"));
            }
            else if (c === "novideo") { //「novideo」 - 動画が未設定
                filteredList = filteredList.filter(_e => !(['tube'] in _e) && !_e.tags.includes("cancelled"));
            }
        });

        //書き出しは、HTML側で個別に定義された「LLSLayoutTemplate」を利用する
        document.getElementById(targetId).innerHTML =
            filteredList.map(entry => LLSPLayoutTemplate(entry)).join('');
        return filteredList.length;
    }
}