//■■ラブライブ！ストレージ 共通ライブラリ

//■キャラクター名のボタン ver.20231222b （近々廃止予定）
//事前にTagData変数の定義が必要です
const DrawCharName = (character) => {
	if (typeof TagData === 'object') {
		if (character in TagData) { //存在する場合のみ
			const target = TagData[character];
			return `<span class="button-${target.style} button_${character}">${target.name}</span>`;
		} else {
			console.error(`キャラクターID ${character} は存在しません`);
			return null;
		}
	} else {
		console.error("tagdata が存在しません")
		return null;
	}
}

//■キャラクター名のボタンの生成 第二弾 ver.20241231
const createStyledTag = (tag, id) => {
	if (tag.hasOwnProperty('name') && tag.hasOwnProperty('style')) {
		return `<span class="${tag.style} button-${id}">${tag.name}</span>`;
	}
	return null;
}

//■オブジェクトのRGBから色を計算 ver.20240727
const getColor = (Object, white = 0, black = 0) => {
	if (white < 0) { white = 0; }
	else if (black < 0) { black = 0; }
	const r = Math.floor((Object.r + (255 * white)) / (white + black + 1));
	const g = Math.floor((Object.g + (255 * white)) / (white + black + 1));
	const b = Math.floor((Object.b + (255 * white)) / (white + black + 1));
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//■Date型 → "YYYY/MM/DD" への変換
const formatDate = date => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}/${month}/${day}`;
}

//■スクフェス転入生の顔アイコンの作成
const WriteFaceN = (x, y) => {
	const IconSize = 64;
	const ImageGridColumn = 10;
	const ImageGridRow = 7;
	return `<div class="icon-n-face" style="background-position: right -${IconSize * (ImageGridColumn - x - 1)
		}px bottom -${IconSize * (ImageGridRow - y - 1)
		}px"></div>`;
}


//■秒数を「h時間mm分ss秒」形式に変換する関数
const convertSecondsToHHMMSS = (len) => {
	len = Math.floor(parseInt(len, 10));
	if (isNaN(len) || len < 0) { return '不明'; }
	if (len < 60) { return `${len}秒`; }
	if (len < 3600) { return `${Math.floor(len / 60)}分${('0' + (len % 60)).slice(-2)}秒`; }
	return `${Math.floor(len / 3600)}時間${('0' + Math.floor((len % 3600) / 60)).slice(-2)}分${('0' + (len % 60)).slice(-2)}秒`;
};

//■ {{S::文字列}} で作成されたネタバレの表示用
const revealSpoiler = (elm) => {
	if (elm.classList.contains('spoiler')) {
		elm.classList.add('spoiler-revealed');
		elm.removeAttribute('onclick');
	}
}

//■ 文章のマークアップの処理 ver.20250203
const convertMarkup = (str) => {
	// 最初の開き括弧、2番目の開き括弧、最初の閉じ括弧の位置を把握
	const pFirstOpen = str.indexOf("{{");
	const pSecondOpen = str.indexOf("{{", pFirstOpen + 2);
	const pFirstClose = str.search("}}");

	if (pFirstOpen === -1 || pFirstOpen > pFirstClose) { return str; }
	// 開き括弧や閉じ括弧が欠けているか、かつ最初の閉じ括弧が最初の開き括弧よりも先に来る場合、何もしない

	if (pSecondOpen < pFirstClose && pSecondOpen !== -1) {
		// 【X{{Y{{Z】 最初の閉じ括弧が、2番目の開き括弧よりも後にある場合：
		// 【Y{{Z】部分に対してconvertMarkUpを行った後、全体に対してconvertMarkupにを行う
		return convertMarkup(str.substring(0, pSecondOpen) + convertMarkup(str.substring(pSecondOpen)));
	} else {
		// 【X{{Y}}Z】 最初の閉じ括弧が、2番目の最初の開き括弧より前にある場合：
		// 【{{Y}}】部分を変換し、Zの部分に対してconvertMarkupを行う
		const strFormer = str.substring(0, pFirstOpen);
		const strInParentheses = str.substring(pFirstOpen + 2, pFirstClose).split('::');
		const strLatter = str.substring(pFirstClose + 2);

		let strConverted = "";

		switch (strInParentheses[0].toLowerCase()) {
			case 'l': // 外部リンクを作成 {{L::文字列::URL(::クラス)}} クラス省略時は "exlink"
				if (strInParentheses.length >= 3) {
					const LinkClass = (strInParentheses.length > 3 ? strInParentheses[3] : 'exlink');
					strConverted = makeExternalLink(strInParentheses[1], strInParentheses[2], LinkClass);
				}
				break;

			case 's': // ネタバレを作成 {{S::文字列}}
				if (strInParentheses.length >= 2) {
					strConverted = `<span class="spoiler" onclick="revealSpoiler(this)">${strInParentheses[1]}</span>`;
				}
				break;

			case 'n': // 脚注になる部分を明記 {{N::文字列}}
				if (strInParentheses.length >= 3) {
					strConverted = `<span class="_pre-note" data-note="${strInParentheses[2]}">${strInParentheses[1]}</span>`;
				}
				break;

			case 'ul': // 箇条書きを作成 {{UL::要素1::要素2:: … }}
			case 'ol':
				const listElements = strInParentheses.slice(1);
				strConverted = `<${strInParentheses[0]}>`
					+ listElements.map((e) => `<li>${e}</li>`).join('')
					+ `</${strInParentheses[0]}>`;
				break;

			case 'el': // 折りたたみ要素を展開　{{EL::タイトル::内容::クラス}}
				const detailsClass = (strInParentheses[3] ? ` class="${strInParentheses[3]}"` : "");
				strConverted = `<details${detailsClass}><summary>${strInParentheses[1]}</summary><div>${strInParentheses[2]}</div></details>`;
				break;

			case 'xl': // PC版限定の、ラブライブ！シリーズ公式Xへのリンクを作成 {{XH::文字列::数字17桁}}
				if (strInParentheses.length >= 3) {
					strConverted = `<span class="pc-only">（<a href="https://x.com/LoveLive_staff/status/${strInParentheses[2]}" target="_blank" rel="noopener noreferrer">${strInParentheses[1]}</a>）</span>`;
				}
				break;

			case 'xh': // PC版限定の、蓮ノ空女学院公式Xへのリンクを作成 {{XH::文字列::数字17桁}}
				if (strInParentheses.length >= 3) {
					strConverted = `<span class="pc-only">（<a href="https://x.com/hasunosora_SIC/status/${strInParentheses[2]}" target="_blank" rel="noopener noreferrer">${strInParentheses[1]}</a>）</span>`;
				}
				break;

			case 'yt': // YouTube動画のURLを取得 {{YT::動画ID::頭出し秒数}}
				const videoId = strInParentheses[1];
				if (strInParentheses.length >= 2) {
					strConverted = `https://www.youtube.com/watch?v=${videoId}${strInParentheses.length >= 3 ? `&t=${strInParentheses[2]}s` : ""}`
				}
				break;

			//case 'pc': // PC版限定 {{PC::文字列}}
			//	if(strInParentheses.length >= 2){
			//		strConverted =  `<span class="pc-only">${strInParentheses[1]}</span>`;
			//	}
			//	break;

			//case 'sp': // スマートフォン限定 {{SP::文字列}}
			//	if(strInParentheses.length >= 2){
			//		strConverted = `<span class="sp-only">${strInParentheses[1]}</span>`;
			//	}
			//	break;

			case 'null': // 注釈。デバッグモードでのみ表示される
				strConverted = (isDebugMode && strInParentheses[1] ? `<span style="color: #76a; font-style:italic;">(${strInParentheses[1]})</span>` : '')
				break;

			default: // 該当しない場合
				console.error(`エラー：存在しないマークアップ (${strInParentheses[0]})`);
		}

		return strFormer + strConverted + convertMarkup(strLatter);
	}
}

//■ 外部リンクを作成
const makeExternalLink = (text, url, classes = "") => {
	return `<a href="${url}" target="_blank" class="${classes}" rel="noopener noreferrer">${text}</a>`;
}