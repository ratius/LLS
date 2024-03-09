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

//■オブジェクトのRGBから色を計算 ver.20240110
const getColor = (Object, white, black) => {
	if(white < 0){ white = 0;}
	if(black === undefined){ black = 0;}
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

//■ {{L:タイトル:URL}} をリンクに置換
const replaceLinkStrings = (text, classes) => {
	if(classes === undefined){ classes = ""; }
	return text.replace(/\{\{[lL]:([^:]*):([^}]*)\}\}/g, `<a href="$2" class="${classes}" target="_blank">$1</a>`);
}