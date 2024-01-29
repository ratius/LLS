//■タグデータ
const CharacterName = {
	"Honoka"   : "穂乃果",
	"Eli"      : "絵里",
	"Kotori"   : "ことり",
	"Umi"      : "海未",
	"Rin"      : "凛",
	"Maki"     : "真姫",
	"Nozomi"   : "希",
	"Hanayo"   : "花陽",
	"Nico"     : "にこ",

	"Chika"    : "千歌",
	"Riko"     : "梨子",
	"Kanan"    : "果南",
	"Dia"      : "ダイヤ",
	"You"      : "曜",
	"Yoshiko"  : "善子",
	"Hanamaru" : "花丸",
	"Mari"     : "鞠莉",
	"Ruby"     : "ルビィ",

	"Ayumu"    : "歩夢",
	"Kasumi"   : "かすみ",
	"Shizuku"  : "しずく",
	"Karin"    : "果林",
	"Ai"       : "愛",
	"Kanata"   : "彼方",
	"Setsuna"  : "せつ菜",
	"Emma"     : "エマ",
	"Rina"     : "璃奈",
	"Shioriko" : "栞子",
	"Mia"      : "ミア",
	"Lanzhu"   : "嵐珠",
	"Yu"       : "侑",

	"Kanon"    : "かのん",
	"Keke"     : "可可",
	"Chisato"  : "千砂都",
	"Sumire"   : "すみれ",
	"Ren"      : "恋",
	"Kinako"   : "きな子",
	"Mei"      : "メイ",
	"Shiki"    : "四季",
	"Natsumi"  : "夏美",
	"Margarete": "マルガレーテ",
	"Tomari"   : "冬毬",

	"Kaho"     : "花帆",
	"Sayaka"   : "さやか",
	"Kozue"    : "梢",
	"Tsuzuri"  : "綴理",
	"Rurino"   : "瑠璃乃",
	"Megumi"   : "慈",

	"RurikaM"  : "ルリカ",
	"YuzuhaM"  : "ユズハ",
	"YukinoM"  : "ユキノ",
	"HikaruM"  : "ヒカル",
	"MaayaM"   : "マーヤ",
	"AnzuM"    : "アンズ",
	"MisuzuM"  : "ミスズ",
	"ToaM"     : "トア",
	"RenaM"    : "レナ",
	"SayakaM"  : "サヤカ",

	"YohaneY"  : "ヨハネ",
	"HanamaruY": "ハナマル",
	"DiaY"     : "ダイヤ",
	"RubyY"    : "ルビィ",
	"ChikaY"   : "チカ",
	"KananY"   : "カナン",
	"YouY"     : "ヨウ",
	"RikoY"    : "リコ",
	"MariY"    : "マリ"
};

//■■サブルーチン
//■ 連想配列のr・g・bから、カラーコードを返す関数
const GetColorCode = (RGB) => {
	var temp = "00000" + (Math.floor(RGB.r)*65536 + Math.floor(RGB.g)*256 + Math.floor(RGB.b)).toString(16).toUpperCase();
	return "#" + temp.substr(temp.length - 6);
}

//■ 連想配列のr・g・bから、対応する文字色を返す関数
//   参考：https://katashin.info/2018/12/18/247
const chooseTextColor = (RGB) => {
	// sRGB を RGB に変換し、背景色の相対輝度を求める
	const toRgbItem = item => {
		const i = item / 255
		return i <= 0.03928 ? i / 12.92:  Math.pow((i + 0.055) / 1.055, 2.4)
	}
	const R = toRgbItem(RGB.r)
	const G = toRgbItem(RGB.g)
	const B = toRgbItem(RGB.b)
	const Lbg = 0.2126 * R + 0.7152 * G + 0.0722 * B
	
	// 白と黒の相対輝度。定義からそれぞれ 1 と 0 になる。
	const Lw = 1
	const Lb = 0
	
	// 白と背景色のコントラスト比、黒と背景色のコントラスト比をそれぞれ求める。
	const Cw = (Lw + 0.05) / (Lbg + 0.05)
	const Cb = (Lbg + 0.05) / (Lb + 0.05)
	
	// コントラスト比が大きい方を文字色として返す。
	return Cw < Cb ? "black":  "white"
}
//■ クリップボードにコピー。わざわざ書くのが長ったらしいのでCpy(this)で済ませる
const Cpy = (temp) => {
	if(event.ctrlKey){ navigator.clipboard.writeText(temp.innerHTML);}
}

//■テーブルを描画
const CreateColorListTable = (idols, htmlId) => {
	//指定されたメンバーが1人でも含まれるカラーデータセットを取得
	const ColorDataSet = window["JSON-color"].filter( temp => {
		if("color" in temp){
			for(i of idols){
				if(Object.keys(temp["color"]).indexOf(i) >= 0){ return true;}
			}
		}
	});
	
	//ヘッダー
	const widthIndexColumn = 120;
	const widthTableColumn = 120;
	const header = `
	<table class="table-color-list" style="width: ${idols.length*widthTableColumn + widthIndexColumn}px">
		<thead>
			<tr>
				<th class="table-color-list-TL"></th>
				${idols.map(idol => `<th class="table-color-list-TR" style="width:${widthTableColumn}px">${CharacterName[idol]}</th>`).join("")}
			</tr>
		</thead>
	<tbody class="table-color-list-main">`;
	
	//メイン
	const main = ColorDataSet.map( temp => {
		return `<tr><th class="table-color-list-BL">${temp.name.replace('\n', '<br>')}</th>`
		+ idols.map( idol => {
			if(!(idol in temp["color"])){
				return `<td class="none">－</td>`;
			} else {
				const color = temp["color"][idol];
				const colorcode = GetColorCode(color);
				return `<td class="color-cell" style="color:${chooseTextColor(color)}; background-color:${colorcode}">
					<span class="rgbCode" onclick="Cpy(this)">(${
						color.r + ", " + color.g + ", " + color.b
					})</span><br>
					<span class="rgbCode" onclick="Cpy(this)">${colorcode}</span>
				</td>`
			}
		}).join("")
		+ `</tr>`;
	}).join("");
	
	//フッター
	const footer = `</tbody></table>`;
	
	document.getElementById(htmlId).innerHTML = header + main + footer;
}

//■「出典一覧」の描画
function DrawReferences() {
	const MakeLink = (url, ref) => `<a href="${url}" class="exlink" target="_blank">${ref}</a>`;

	//色データがあるもの
	const referenceList = window["JSON-color"].map( site => {
		if("ref" in site && "color" in site){
			return `<li>${site.name.replace('\n', '')} ${'group' in site ? '(' + site.group + ')' : ""}
			<ul><li>出典：${MakeLink(site.url, site.ref)}</li></ul></li>`;
		}
	}).join('');
	
	//色データがないもの
	const unpublishedList = window["JSON-color"].map( site => {
		if(!("color" in site)){
			return `<li>${site.name.replace('\n', '')} ${'group' in site ? '(' + site.group + ')' : ""}
				<ul><li>URL：${MakeLink(site.url, site.ref)}</li>
				<li>理由：${site.reason}</li></ul>`;
		}
	}).join('');
	
	document.getElementById("ReferencesContainer").innerHTML =
	`<ul>${referenceList}</ul>
	<h3>掲載できなかったもの</h3>
	<ul>${unpublishedList}</ul>`
}

//■初期化処理
function initialize () {
	const MemberIdMuse = ["Honoka", "Eli", "Kotori", "Umi", "Rin", "Maki", "Nozomi", "Hanayo", "Nico"];
	const MemberIdAqours = ["Chika", "Riko", "Kanan", "Dia", "You", "Yoshiko", "Hanamaru", "Mari", "Ruby"];
	const MemberIdNiji = ["Ayumu", "Kasumi", "Shizuku", "Karin", "Ai", "Kanata", "Setsuna", "Emma", "Rina", "Shioriko", "Mia", "Lanzhu"];
	const MemberIdLiella = ["Kanon", "Keke", "Chisato", "Sumire", "Ren", "Kinako", "Mei", "Shiki", "Natsumi", "Margarete", "Tomari"];
	const MemberIdHasu = ["Kaho", "Sayaka", "Kozue", "Tsuzuri", "Rurino", "Megumi"];
	const MemberIdMusical = ["RurikaM", "YuzuhaM", "YukinoM", "HikaruM", "MaayaM", "AnzuM", "MisuzuM", "ToaM", "RenaM", "SayakaM"];
	const MemberIdYohane = ["YohaneY", "HanamaruY", "DiaY", "RubyY", "ChikaY", "KananY", "YouY", "RikoY", "MariY"];

	CreateColorListTable(MemberIdMuse,    "TableMuse");
	CreateColorListTable(MemberIdAqours,  "TableAqours");
	CreateColorListTable(MemberIdNiji,    "TableNiji");
	CreateColorListTable(MemberIdLiella,  "TableLiella");
	CreateColorListTable(MemberIdHasu,    "TableHasu");
	CreateColorListTable(MemberIdMusical, "TableMusical");
	CreateColorListTable(MemberIdYohane,  "TableYohane");
	DrawReferences();
	//デバック用
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`ラブライブ！シリーズ イメージカラーまとめ\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}