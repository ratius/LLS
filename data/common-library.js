//■■ラブライブ！ストレージ 共通ライブラリ

//■キャラクター名のボタン ver.20231222a
//「name, r, g, b, style」のキーを持つ連想配列の情報からボタンを描画
function DrawCharName(character){
	if(character in TagData){ //存在する場合のみ
		const target = TagData[character];
		return `<span class="button-${target.style} button_${character}">${target.name}</span>`;
	} else {
		console.error(`キャラクターID ${character} は存在しません`);
		return
	}
}

//■オブジェクトのRGBから色を計算 ver.20231223
const getColor = (Object, divisor) => {
	if(!divisor){ divisor = 1;}
	const r = Math.floor((Object.r + (255 * (divisor-1))) / divisor);
	const g = Math.floor((Object.g + (255 * (divisor-1))) / divisor);
	const b = Math.floor((Object.b + (255 * (divisor-1))) / divisor);
	return 'rgb(' + r + ',' + g + ',' + b + ');';
}

//■Date型 → "YYYY/MM/DD" への変換
const formatDate = date => {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}/${month}/${day}`;
}