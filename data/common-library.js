//■■ラブライブ！ストレージ 共通ライブラリ

//■キャラクター名のボタン ver.20231222b
//事前にTagData変数の定義が必要です
const DrawCharName = (character) => {
	if(character in TagData){ //存在する場合のみ
		const target = TagData[character];
		return `<span class="button-${target.style} button_${character}">${target.name}</span>`;
	} else {
		console.error(`キャラクターID ${character} は存在しません`);
		return
	}
}

//■オブジェクトのRGBから色を計算 ver.20240727
const getColor = (Object, white=0, black=0) => {
	if(white < 0){ white = 0;}
	else if(black < 0){ black = 0;}
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
	return `<div class="icon-n-face" style="background-position: right -${
		IconSize * (ImageGridColumn - x - 1)
	}px bottom -${
		IconSize * (ImageGridRow - y - 1)
	}px"></div>`;
}

//■ {{L:タイトル:URL}} を外部リンクに置換 ver.20240727
const replaceLinkStrings = (text, classes="") => {
	return text.replace(/\{\{[lL]:([^:]*):([^}]*)\}\}/g, `<a href="$2" class="${classes}" target="_blank" rel="noopener noreferrer">$1</a>`);
}

//■ {{S::文字列}} で作成されたネタバレの表示用
const revealSpoiler = (elm) => {
	if(elm.classList.contains('spoiler')){
		elm.classList.add('spoiler-revealed');
		elm.removeAttribute('onclick');
	}
}

//■ 文章のマークアップの処理 ver.20241215
const convertMarkup = (str) => {
	// 最初の開き括弧、2番目の開き括弧、最初の閉じ括弧の位置を把握
	const pFirstOpen = str.indexOf("{{");
	const pSecondOpen = str.indexOf("{{", pFirstOpen +2);
	const pFirstClose = str.search("}}");

	if(pFirstOpen === -1 || pFirstOpen > pFirstClose){ return str; }
	// 開き括弧や閉じ括弧が欠けているか、かつ最初の閉じ括弧が最初の開き括弧よりも先に来る場合、何もしない
		
	if(pSecondOpen < pFirstClose && pSecondOpen !== -1){
		// 【X{{Y{{Z】 最初の閉じ括弧が、2番目の開き括弧よりも後にある場合：
		// 2番目の開き括弧以降の部分を先に処理してから、改めて全体をconvertMarkupにかける
		return convertMarkup(str.substring(0, pSecondOpen) + convertMarkup(str.substring(pSecondOpen)));
	} else {
		// 【X{{Y}}Z】 最初の閉じ括弧が、2番目の最初の開き括弧より前にある場合：
		// 最初の括弧部分を変換してからconvertMarkupをやり直す
		const strFormer = str.substring(0, pFirstOpen);
		const strInParentheses =  str.substring(pFirstOpen + 2, pFirstClose).split('::');
		const strLatter = str.substring(pFirstClose + 2);
		
		let strConverted = "";
		
		switch (strInParentheses[0].toLowerCase()) {
			case 'l': // 外部リンクを作成 {{L::文字列::URL(::クラス)}} クラス省略時は "exlink"
				if(strInParentheses.length >= 3){
					const LinkClass = (strInParentheses.length>3 ? strInParentheses[3] : 'exlink');
					strConverted = makeExternalLink(strInParentheses[1], strInParentheses[2], LinkClass);
				}
				break;

			case 's': // ネタバレを作成 {{S::文字列}}
				if(strInParentheses.length >= 2){
					strConverted = `<span class="spoiler" onclick="revealSpoiler(this)">${strInParentheses[1]}</span>`;
				}
				break;
				
			case 'n': // 脚注になる部分を明記 {{N::文字列}}
				if(strInParentheses.length >= 3){
					strConverted = `<span class="_pre-note" data-note="${strInParentheses[2]}">${strInParentheses[1]}</span>`;
				}
				break;

			case 'xh': // PC版限定の、蓮ノ空女学院公式Xへのリンクを作成 {{XH::文字列::数字17桁}}
				if(strInParentheses.length >= 3){
					strConverted = `<span class="pc-only">（<a href="https://x.com/hasunosora_SIC/status/${strInParentheses[2]}" target="blank" rel="noopener noreferrer">${strInParentheses[1]}</a>）</span>`;
				}
				break;

//			case 'pc': // PC版限定 {{PC::文字列}}
//				if(strInParentheses.length >= 2){
//					strConverted =  `<span class="pc-only">${strInParentheses[1]}</span>`;
//				}
//				break;

//			case 'sp': // スマートフォン限定 {{SP::文字列}}
//				if(strInParentheses.length >= 2){
//					strConverted = `<span class="sp-only">${strInParentheses[1]}</span>`;
//				}
//				break;

			default: // 該当しない場合
				console.error(strInParentheses);
		}
		
		return strFormer + strConverted + convertMarkup(strLatter);
	}
}

//■ 外部リンクを作成
const makeExternalLink = (text, url, classes="") => {
	return `<a href="${url}" target="blank" class="${classes}" rel="noopener noreferrer">${text}</a>`;
}