//■各種データ
const TagData = {
	"Honoka":   {"number":0 , "name": "高坂 穂乃果",   "r": 255, "g": 163, "b":  54},
	"Eli":      {"number":1 , "name": "絢瀬 絵里",     "r": 122, "g": 238, "b": 255},
	"Kotori":   {"number":2 , "name": "南 ことり",     "r": 206, "g": 191, "b": 191},
	"Umi":      {"number":3 , "name": "園田 海未",     "r":  23, "g": 105, "b": 255},
	"Rin":      {"number":4 , "name": "星空 凛",       "r": 219, "g": 212, "b":  30},
	"Maki":     {"number":5 , "name": "西木野 真姫",   "r": 255, "g":  80, "b":  62},
	"Nozomi":   {"number":6 , "name": "東條 希",       "r": 196, "g":  85, "b": 246},
	"Hanayo":   {"number":7 , "name": "小泉 花陽",     "r": 106, "g": 230, "b": 115},
	"Nico":     {"number":8 , "name": "矢澤 にこ",     "r": 255, "g":  79, "b": 145},
	"Chika":    {"number":9 , "name": "高海 千歌",     "r": 255, "g": 149, "b":  71},
	"Riko":     {"number":10, "name": "桜内 梨子",     "r": 255, "g": 158, "b": 172},
	"Kanan":    {"number":11, "name": "松浦 果南",     "r":  39, "g": 193, "b": 183},
	"Dia":      {"number":12, "name": "黒澤 ダイヤ",   "r": 219, "g":   7, "b":  57},
	"You":      {"number":13, "name": "渡辺 曜",       "r": 102, "g": 192, "b": 255},
	"Yoshiko":  {"number":14, "name": "津島 善子",     "r": 193, "g": 202, "b": 212},
	"Hanamaru": {"number":15, "name": "国木田 花丸",   "r": 255, "g": 208, "b":  15},
	"Mari":     {"number":16, "name": "小原 鞠莉",     "r": 194, "g":  82, "b": 198},
	"Ruby":     {"number":17, "name": "黒澤 ルビィ",   "r": 255, "g": 111, "b": 190},
	"Ayumu":    {"number":18, "name": "上原 歩夢",     "r": 255, "g": 191, "b": 224},
	"Kasumi":   {"number":19, "name": "中須 かすみ",   "r": 213, "g": 222, "b": 112},
	"Shizuku":  {"number":20, "name": "桜坂 しずく",   "r": 187, "g": 237, "b": 255},
	"Karin":    {"number":21, "name": "朝香 果林",     "r":  74, "g":  47, "b": 237},
	"Ai":       {"number":22, "name": "宮下 愛",       "r": 255, "g": 130, "b":  70},
	"Kanata":   {"number":23, "name": "近江 彼方",     "r": 190, "g": 130, "b": 255},
	"Setsuna":  {"number":24, "name": "優木 せつ菜",   "r": 246, "g":  14, "b":  14},
	"Emma":     {"number":25, "name": "エマ・ヴェルデ","r": 143, "g": 218, "b": 121},
	"Rina":     {"number":26, "name": "天王寺 璃奈",   "r": 208, "g": 206, "b": 225},
	"Shioriko": {"number":27, "name": "三船 栞子",     "r":  36, "g": 189, "b": 139},
	"Mia":      {"number":28, "name": "ミア・テイラー","r": 214, "g": 213, "b": 202},
	"Lanzhu":   {"number":29, "name": "鐘 嵐珠",       "r": 248, "g": 200, "b": 196}
};
const numCharacters = Object.keys(TagData).length;

const OutfitList = [
	["初期", "スノハレ", "ぼららら", "それ僕", "WR", "ユメトビ", "キラセン", "ノーブラ", "AA", "もぎゅ", "僕今", "ゆゆゆ", "豆1", "ラブレス", "HtH"],
	["初期", "君ここ", "青ジャン", "ブラメロ", "恋アク", "未ホラ", "ミラウェ", "HPT", "未ドリ", "WBNW", "MY舞", "みら僕", "サンフレ", "君瞳", "ゼロワン"],
	["初期", "アニマル", "ローズ", "マーチング", "LUMF", "3rdソロ", "虹パ", "JB!!!", "虹色の心", "L！L！L！", "ワルツ他", "CDCS", "未ハモ他", "永遠の一瞬", "ミラステ"]
];

const ToolTipSource = {'gacha':'Ｅ特効', 'reward':'Ｅ報酬', 'fes':'Ｆ限定', 'party':'Ｐ限定', 'none':'非イベ', 'release':'初期　', 'scheduled':'(追加予定)'};

// カードリストの作成
// UR・SRを分けて格納するため、キャラ数の2倍の要素数の配列を用意
const CardList = new Array(numCharacters * 2);
for(i=0; i<numCharacters * 2; i++) {
	CardList[i] = new Array();
}

// ■生データから新たなデータを作成
function LoadRawData(){
	for(let temp of window["JSON-sifas-card"]) {
		let key = TagData[temp.name].number;
		if(temp.rare == 'SR') { key += numCharacters;}
		CardList[key].push(temp);
		if(temp.id === -1){ // 欠番扱いならoffsetの枚数だけ、「id:-2」というデータをコピー
			for(j=0; j<temp.offset-1; j++){
				CardList[key].push({"id": -2});
			}
		}
	}
}

// ■テーブルを作成
function DrawTable(num1, num2, GroupNum){
	var Output = `<table class="cardlist-table" style="min-width: ${220+(num2 - num1)*110}px">\n`;

	//■ヘッダー
	Output += `<thead>\n<tr>\n<th class="HeaderL"></th>\n`;
	for(i=num1; i<=num2 ; i++){
		var TargetChar = "";
		for(var name in  TagData){
			if(TagData[name].number === i){ TargetChar = name; break; }
		}
		Output += `<th class="HeaderR"><div class="top-marker bg_${TargetChar}"`
		+ (TagData[TargetChar].name.length > 6 ? ' style="font-size:80%"' : '')
		+ '><strong class="shadowname">'
		+ TagData[TargetChar].name + `</strong></div></th>\n`;
	}
	Output += '<\/tr>\n<\/thead>\n<tbody>\n';

	//■メイン
	let TempY=0;
	let TempZ=0;
	while(TempZ <= numCharacters){
		Rarity = (TempZ==0 ? 'UR' : 'SR');
		OutputTmp = '';
		blank = 0; //仕込み
		OutputTmp += '<tr class="' + Rarity +'"><th><span class="cap">' + Rarity + ' ' + (TempY+1) + '枚目<\/span>';
		if(TempZ == numCharacters){ //SRの場合、衣装名も出す
			if(TempY < OutfitList[GroupNum].length){
				OutputTmp += '<br><span style="font-weight:normal">(' + OutfitList[GroupNum][TempY] + ')<\/span>';
			}
		}
		OutputTmp +=  '<\/th>\n';
		
		for(i=num1; i<=num2 ; i++){
			var TargetChar = "";
			for(var name in TagData){
				if(TagData[name].number === i){ TargetChar = name; break; }
			}
			if(TempY < CardList[TagData[TargetChar].number + TempZ].length){ //あるならば
				ListTmp = CardList[TagData[TargetChar].number + TempZ][TempY]

				if(ListTmp.id === -2){
					continue;
				}
				if(ListTmp.id === -1){
					OutputTmp += '<td class="na" style="width: 96px;" rowspan="' + ListTmp.offset +'"><\/td>\n';
				} else {
					ToolTipTmp = (ListTmp.id ? 'No.' + ListTmp.id : '') + ' ' + ListTmp.desc;
					
					if(ListTmp.source === 'scheduled'){
						
					} else if (ListTmp.cn1 && ListTmp.cn2){ //覚醒前後がきちんと出ていれば
						ToolTipTmp += '&#10;覚醒前：' + ListTmp.cn1 + '&#10;覚醒後：' + ListTmp.cn2 ;
					} else {
						console.log("[データ不備] " + ListTmp.id + "番の覚醒前/覚醒後カード名が設定されていません");
					}
				
					OutputTmp += '<td class="' + ListTmp.source + '" title="' + ToolTipTmp + '">'
					+ '<strong>' + ToolTipSource[ListTmp.source] + '<\/strong>'
					+ (ListTmp.atr ? ' <img src="img/atr_' + ListTmp.atr.toLowerCase() + '.png" width="24" height="24" alt="' +  ListTmp.atr.toLowerCase() + '">' : '')
					+ (ListTmp.type ? '<img src="img/type_' + ListTmp.type.toLowerCase() + '.png" width="24" height="24" alt="' + ListTmp.type.toLowerCase() + '">' : '')
					+ ('date' in ListTmp ? '<br>' + ListTmp.date : '')
					+ '<\/td>\n';
				}
			}else{
				OutputTmp += '<td><\/td>\n';
				blank++;
			}
		}
		if(blank > num2 - num1 || TempY >= 30){ //全部が空マスか、リストが長くなりすぎたら中断
			TempY = 0;
			TempZ += numCharacters;
		} else { 
			TempY++;
			Output += OutputTmp;
		}
	}
	Output += `</tbody>\n</table>\n`;
	return Output;
}

function initialize() {
	const TimeOutputStart = performance.now();

	let CardList = [];
	LoadRawData();

	//TagDataの色データをCSSに追加
	document.querySelector('style').textContent += Object.keys(TagData).map( character => {
		return `
		.bg_${character} {
			background-color: ${getColor(TagData[character], 0)};
		}`;
	}).join('');

	document.getElementById("OutputMuse").innerHTML = DrawTable(0,8,0);
	document.getElementById("OutputAqours").innerHTML += '\n' + DrawTable(9,17,1);
	document.getElementById("OutputNiji").innerHTML   += '\n' + DrawTable(18,29,2);

	//■デバックモード時の処理
	if(isDebugMode) {
		//◆描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log('スクスタ 実装カード一覧\n初期描画処理: ' + (TimeOutputEnd - TimeOutputStart) + ' ミリ秒');

		//◆データの不具合チェック
		let isError = 0;
		let CurrentId = -1;
		let CurrentDate = new Date("2019/01/01");
		for(const CardTemp of window["JSON-sifas-card"]){
			if(CardTemp.id == -1){ continue; }
			if(CardTemp.id < CurrentId) { //●前のカードより小さいID番号
				console.log('[Error] カードNo.の順序ミス: \n'
				+ ('name' in CardTemp ? '\tName: ' + CardTemp.name + '\n' : '')
				+ ('cn1' in CardTemp ? '\tcn1: ' + CardTemp.cn1 + '\n' : '')
				+ ('cn2' in CardTemp ? '\tcn2: ' + CardTemp.cn2 + '\n' : '')
				);
				isError++;
			} else {
				CurrentId = CardTemp.id;
			}
			
			if(Math.round(CurrentDate - new Date(CardTemp.date)) > 432000000 ) { //●前のカードより5日以上早い場合
				console.log('[Error] 日付の順序ミス: \n'
				+ ('id' in CardTemp ? '\tid: ' + CardTemp.id + '\n' : '')
				+ ('name' in CardTemp ? '\tName: ' + CardTemp.name + '\n' : '')
				+ ('cn1' in CardTemp ? '\tcn1: ' + CardTemp.cn1 + '\n' : '')
				+ ('cn2' in CardTemp ? '\tcn2: ' + CardTemp.cn2 + '\n' : '')
				);
				isError++;
			} else {
				 CurrentDate = new Date(CardTemp.date);
			}
		}
		if(isError > 0){
			alert('' + isError + '件のエラーが見つかりました。コンソールを確認してください。');
		}
	}

}