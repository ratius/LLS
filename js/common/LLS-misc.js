//■ ラブライブ！ストレージ 共通ライブラリ
const LLS = {
    //■ LLS.createStyledTag (tag, id, style = false)
    // キャラクター名のボタンの生成 ver.20260730
    createStyledTag: (tag, id, style = false) => {
        if (tag.hasOwnProperty('name') && tag.hasOwnProperty('style')) {
            return `<span class="${style || tag.style} button-${id}">${tag.name}</span>`;
        } else {
            return null;
        }
    },

    //■ LLS.getColorFromObject (object[, white, black])
    //オブジェクトのRGBから色を計算する。(ver.20240727)
    //0〜255の値でr, g, bが定義されたオブジェクトが必要
    getColorFromObject: (object, white = 0, black = 0) => {
        if (white < 0) { white = 0; }
        else if (black < 0) { black = 0; }
        const r = Math.floor((object.r + (255 * white)) / (white + black + 1));
        const g = Math.floor((object.g + (255 * white)) / (white + black + 1));
        const b = Math.floor((object.b + (255 * white)) / (white + black + 1));
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    },

    //■カラーコードから色を計算 ver.20260801
    getColorFromColorCode: (colorcode, white = 0, black = 0) => {
        if (colorcode.charAt(0) == "#") { return LLS.getColorFromColorCode(colorcode.substring(1), white, black); }
        const ColorHex = parseInt(colorcode, 16);
        const ColorObject = { "r": (ColorHex / 65536) % 256, "g": Math.trunc(ColorHex / 256) % 256, "b": ColorHex % 256 };
        return LLS.getColorFromObject(ColorObject, white, black);
    },

    //■Date型 → "YYYY/MM/DD" への変換
    formatDate: (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    },

    //■秒数を「h時間mm分ss秒」形式に変換する関数
    convertSecondsToHHMMSS: (len) => {
        len = Math.floor(parseInt(len, 10));
        if (isNaN(len) || len < 0) { return '不明'; }
        if (len < 60) { return `${len}秒`; }
        if (len < 3600) { return `${Math.floor(len / 60)}分${('0' + (len % 60)).slice(-2)}秒`; }
        return `${Math.floor(len / 3600)}時間${('0' + Math.floor((len % 3600) / 60)).slice(-2)}分${('0' + (len % 60)).slice(-2)}秒`;
    },

    //■filterAnd, filterOr
    //オブジェクトのリストから、与えられた各条件のANDまたはORを満たすオブジェクトのリストを返す
    //条件の各引数は、以下の形式である場合のみ判定される
    //・"is:(キー名):(キー値)" - 対象のキーを持ち、それが特定の値である
    //・"isnot:(キー名):(キー値)" - 対象のキーを持つが、それが特定の値でない
    //・"has:(キー名)" - 対象のキーを持つ
    //・"exhas:(キー名)" - 対象のキーを持たない
    filterAnd: (list, ...conditions) => {
        return list.filter((item) => {
            return conditions.every((condition) => {
                const cType = condition.split(":")[0];
                const cKeyName = condition.split(":")[1];
                const cKeyValue = condition.split(":")[2];

                if (cType === "is" && (!item?.[cKeyName] || item[cKeyName] !== cKeyValue)) { return false; }
                else if (cType === "isnot" && item?.[cKeyName] && item[cKeyName] === cKeyValue) { return false; }
                else if (cType === "has" && !item?.[cKeyName]) { return false; }
                else if (cType === "exhas" && item?.[cKeyName]) { return false; }
                return true;
            });
        });
    },

    filterOr: (list, ...conditions) => {
        return list.filter((item) => {
            return conditions.some((condition) => {
                const cType = condition.split(":")[0];
                const cKeyName = condition.split(":")[1];
                const cKeyValue = condition.split(":")[2];

                if (cType === "is" && (!item?.[cKeyName] || item[cKeyName] !== cKeyValue)) { return false; }
                else if (cType === "isnot" && item?.[cKeyName] && item[cKeyName] === cKeyValue) { return false; }
                else if (cType === "has" && !item?.[cKeyName]) { return false; }
                else if (cType === "exhas" && item?.[cKeyName]) { return false; }
                return true;
            });
        });
    },

    //■ 外部リンクを作成
    makeExternalLink: (text, url, classes = "") => {
        return `<a href="${url}" target="_blank" class="${classes}" rel="noopener noreferrer">${text}</a>`;
    },

    //■ 文章のマークアップの処理 ver.20250203
    markup: function markupSub(str) {
        // 最初の開き括弧、2番目の開き括弧、最初の閉じ括弧の位置を把握
        const pFirstOpen = str.indexOf("{{");
        const pSecondOpen = str.indexOf("{{", pFirstOpen + 2);
        const pFirstClose = str.search("}}");

        if (pFirstOpen === -1 || pFirstOpen > pFirstClose) { return str; }
        // 開き括弧が欠けているか、最初の閉じ括弧が最初の開き括弧よりも先に来る場合、何もしない

        if (pSecondOpen !== -1 && pSecondOpen < pFirstClose) {
            // 【X{{Y{{Z】 2番目の開き括弧が存在し、最初の閉じ括弧が2番目の開き括弧よりも後にある場合：
            // 【Y{{Z】部分に対してmarkupを行った後、全体に対してmarkupを行う
            return markupSub(str.substring(0, pSecondOpen) + markupSub(str.substring(pSecondOpen)));
        } else {
            // 【X{{Y}}Z】 最初の閉じ括弧が、2番目の最初の開き括弧より前にある場合：
            // 【{{Y}}】部分を変換して括弧のペアを消し、その後Zの部分に対してmarkupを行う
            const strFormer = str.substring(0, pFirstOpen); // Xの部分
            const markupArguments = str.substring(pFirstOpen + 2, pFirstClose).split('::'); // Yの部分
            const strLatter = str.substring(pFirstClose + 2); // Zの部分

            let strConverted = "";

            if (markupArguments[1] === undefined) { //変数が1つしかない書き方は許容されないので返す
                console.error(`エラー：変数が不足 (${markupArguments[0]})`);
                return strFormer + markupSub(strLatter);
            }
            switch (markupArguments[0].toLowerCase()) {
                case 'l':
                    // 外部リンクを作成 {{L::文字列::URL(::クラス)}} 
                    // 変数が2つの場合、リンクを作成せずにリンクテキストを返す
                    // 変数が3つの場合、クラスを省略したものとみなし、"exlink"のクラスのみを付与する。
                    if (markupArguments.length >= 3) {
                        const LinkClass = markupArguments[3] ?? "exlink";
                        strConverted = LLS.makeExternalLink(markupArguments[1], markupArguments[2], LinkClass);
                    } else {
                        strConverted = markupArguments[1];
                    }
                    break;

                case 's':
                    // {{S::文字列}} - スポイラーを作成
                    strConverted = `<span class="spoiler" onclick="LLS.revealSpoiler(this)">${markupArguments[1]}</span>`;
                    break;

                case 'n':
                    // {{N::文字列}} - 脚注になる部分を明記
                    if (markupArguments.length >= 3) {
                        strConverted = `<span class="_pre-note" data-note="${markupArguments[2]}">${markupArguments[1]}</span>`;
                    }
                    break;

                case 'ul':
                case 'ol':
                    // {{UL::要素1::要素2:: … }} - 箇条書きを作成
                    const listElements = markupArguments.slice(1);
                    strConverted = `<${markupArguments[0]}>`
                        + listElements.map((list) => `<li>${list}</li>`).join('')
                        + `</${markupArguments[0]}>`;
                    break;

                case 'el':
                    // {{EL::タイトル::内容::クラス}} - 折りたたみ要素を作成
                    if (markupArguments.length >= 3) {
                        const detailsClass = markupArguments[3] ?? "";
                        strConverted = `<details class=${detailsClass}><summary>${markupArguments[1]}</summary><div>${markupArguments[2]}</div></details>`;
                    }
                    break;

                case 'xl':
                    // {{XL::文字列::数字17桁}} - PC版限定の、ラブライブ！シリーズ公式Xへのリンクを作成
                    if (markupArguments.length >= 3) {
                        strConverted = `<span class="pc-only">（<a href="https://x.com/LoveLive_staff/status/${markupArguments[2]}" target="_blank" rel="noopener noreferrer">${markupArguments[1]}</a>）</span>`;
                    }
                    break;

                case 'xh':
                    // {{XH::文字列::数字17桁}} - PC版限定の、蓮ノ空女学院公式Xへのリンクを作成
                    if (markupArguments.length >= 3) {
                        strConverted = `<span class="pc-only">（<a href="https://x.com/hasunosora_SIC/status/${markupArguments[2]}" target="_blank" rel="noopener noreferrer">${markupArguments[1]}</a>）</span>`;
                    }
                    break;

                case 'xi':
                    // {{XI::文字列::数字17桁}} - PC版限定の、イキヅライブ！公式Xへのリンクを作成 {{XI::文字列::数字17桁}}
                    if (markupArguments.length >= 3) {
                        strConverted = `<span class="pc-only">（<a href="https://x.com/ikizulive_staff/status/${markupArguments[2]}" target="_blank" rel="noopener noreferrer">${markupArguments[1]}</a>）</span>`;
                    }
                    break;

                case 'yt':
                    // {{YT::動画ID::頭出し秒数}} - YouTube動画のURLを取得
                    const headstart = markupArguments[2] ? `&t=${markupArguments[2]}s` : ""
                    strConverted = `https://www.youtube.com/watch?v=${markupArguments[1]}${headstart}`;
                    break;

                case 'ys':
                    // {{YS::動画ID}} - YouTubeショート動画のURLを取得
                    strConverted = `https://www.youtube.com/shorts/${markupArguments[1]}`;
                    break;

                case 'tt':
                    // {{TT::動画ID}} - ラブライブ公式TikTok動画のURLを取得
                    strConverted = `https://www.tiktok.com/@lovelive_official/video/${markupArguments[1]}`;
                    break;

                case 'pc': // PC版限定 {{PC::文字列}}
                    strConverted = `<span class="pc-only">${markupArguments[1]}</span>`;
                    break;

                case 'sp': // スマートフォン限定 {{SP::文字列}}
                    strConverted = `<span class="sp-only">${markupArguments[1]}</span>`;
                    break;

                case 'null': // 注釈。デバッグモードでのみ表示される
                    strConverted = (isDebugMode ? `<span style="color: #76a; font-style:italic;">(${markupArguments[1]})</span>` : '');
                    break;

                default: // 該当しない場合
                    console.error(`エラー：存在しないマークアップ (${markupArguments[0]})`);
            }

            return strFormer + strConverted + markupSub(strLatter);
        }
    },

    //■ {{S::文字列}} で作成されたネタバレの表示用
    revealSpoiler: (elm) => {
        if (elm.classList.contains('spoiler')) {
            elm.classList.add('spoiler-revealed');
            elm.removeAttribute('onclick');
        }
    }
};