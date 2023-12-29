//■デバッグモード
const isDebugMode = (location.search.substring(1).split('&').indexOf('debug') >= 0);
if(isDebugMode) {
	//デバッグモードであることを表示
	document.title = '[debug]' + document.title;
	document.bgColor = '#dce';
	document.getElementById("TitleName").innerHTML += "*";
	document.getElementById("TitleName").classList.add("title-debug");
	document.getElementById("BackToMain").href += "?debug";
}

//■タグデータ
const TagData = {
	"Ayumu":   {"name": "上原 歩夢",      "r":237, "g":125, "b":149, "style": "Round"},
	"Kasumi":  {"name": "中須 かすみ",    "r":231, "g":214, "b":  0, "style": "Round"},
	"Shizuku": {"name": "桜坂 しずく",    "r":  1, "g":183, "b":237, "style": "Round"},
	"Karin":   {"name": "朝香 果林",      "r": 72, "g": 94, "b":198, "style": "Round"},
	"Ai":      {"name": "宮下 愛",        "r":255, "g": 88, "b":  0, "style": "Round"},
	"Kanata":  {"name": "近江 彼方",      "r":166, "g":100, "b":160, "style": "Round"},
	"Setsuna": {"name": "優木 せつ菜",    "r":216, "g": 28, "b": 47, "style": "Round"},
	"Emma":    {"name": "エマ・ヴェルデ", "r":132, "g":195, "b":110, "style": "Round"},
	"Rina":    {"name": "天王寺 璃奈",    "r":156, "g":165, "b":185, "style": "Round"},
	"Shioriko":{"name": "三船 栞子",      "r": 55, "g":180, "b":132, "style": "Round"},
	"Mia":     {"name": "ミア・テイラー", "r":169, "g":158, "b":152, "style": "Round"},
	"Lanzhu":  {"name": "鐘 嵐珠",        "r":248, "g":200, "b":196, "style": "Round"}
};

//■■サブルーチン
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

//■■メイン出力
//■「アンケート一覧」のテーブルを描画
function DrawEnqueteTable(){
	document.getElementById("EnqueteResult").innerHTML = '';

	const header = `
	<div class="enquete-header pc-only">
		<div class="enquete-header-cell">開催回</div>
		<div class="enquete-header-cell">期間/お題</div>
		<div class="enquete-header-cell">最多得票キャラクター</div>
	</div>`;

	const html = EnqueteLog.map( enquete => {
		const headerTemp2 = `
		<div class="enquete">
			<div class="enquete-id"><a href="${enquete.url}" target="_blank" title="第${enquete.id}回 マンスリーアンケート" class="exlink">第${enquete.id}回</a></div>
			<div class="enquete-desc">
				<span class="enquete-date">期間：${formatDate(new Date(enquete.started))} 〜 ${formatDate(new Date(enquete.ended))}</span><br>
				${enquete.theme}
			</div>`;

		const winnersTemp2 = (enquete.winner1 in TagData ?
			`<div class="enquete-winner bg-${enquete.winner1}">
				<span style="font-size: small;"><span class="pc-only">「</span>${enquete.option1}<span class="pc-only">」</span></span><strong>${TagData[enquete.winner1].name}</strong>
			</div>
			<div class="enquete-winner bg-${enquete.winner2}">
				<span style="font-size: small;"><span class="pc-only">「</span>${enquete.option2}<span class="pc-only">」</span></span><strong>${TagData[enquete.winner2].name}</strong>
			</div>`
		: `<div>TBA</div><div>TBA</div><div></div>`);
		
		return headerTemp2 + winnersTemp2 + `</div>`;
	}).join('');
	document.getElementById("EnqueteResult").classList.remove("output-box-default");
	document.getElementById("EnqueteResult").innerHTML = header + html;
}

//■「キャラ別最多得票項目」のテーブルを描画
function DrawPrizeList(){
	const contents = Object.keys(TagData).map( character => {
		const headerTemp2 = `<div class="prize">
			<div class="prize-character bg-${character}">${TagData[character].name}</div>
			<div class="prize-container">`;
		const footerTemp2 = `</div></div>`;
		const PrizeList = EnqueteLog.map( enquete => {
			if(character === enquete.winner1){
				return `<div>
					<span class="button-round button-title" title="${enquete.theme}">第${enquete.id}回</span>${enquete.option1}
				</div>`;
			}
			if(character === enquete.winner2){
				return `<div>
					<span class="button-round button-title" title="${enquete.theme}">第${enquete.id}回</span>${enquete.option2}
				</div>`;
			}
			return '';
		}).join('');

		return headerTemp2 + PrizeList + footerTemp2;
	}).join('');
	document.getElementById("PrizeList").classList.remove("output-box-default");
	document.getElementById("PrizeList").innerHTML = contents;
}

//■■初期処理
//■JSONデータベースの読み込み（いらない）
const TimeOutputStart = performance.now();

const JSONPath = 'data/niji-enquete.json';
let EnqueteLog = null;
fetch(JSONPath)
	.then(response => response.json())
	.then(data => {
		EnqueteLog = data;
	initialize();
	}
);

const TimeOutputLoaded = performance.now();

//■初期化処理
function initialize() {
	//TagDataの色データをCSSに追加
	document.querySelector('style').textContent += Object.keys(TagData).map( character => {
		return `
		.bg-${character} {
			background-color: ${getColor(TagData[character], 2.5)};
		}`;
	}).join('');

	DrawEnqueteTable();
	DrawPrizeList();
	
	//デバックモード時の処理
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`虹ヶ咲学園スクールアイドル同好会 マンスリーアンケートまとめ\n読み込み： ${TimeOutputLoaded - TimeOutputStart}ミリ秒\n初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}