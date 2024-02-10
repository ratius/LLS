//■対戦相手のデータ
const TagData = {
	"Marika":   {"name": "一之瀬マリカ",   "x":2, "y":0},
	"Minami":   {"name": "永山みなみ",     "x":3, "y":0},
	"Aya":      {"name": "杉崎亜矢",       "x":4, "y":0},
	"Ayumi":    {"name": "鳥居歩美",       "x":5, "y":0},
	"Seira":    {"name": "九条聖来",       "x":6, "y":0},
	"Sachiko":  {"name": "田中さち子",     "x":7, "y":0},
	"Akiru":    {"name": "篠宮あきる",     "x":8, "y":0},
	"Yumi":     {"name": "藤城悠弓",       "x":9, "y":0},
	"Coco":     {"name": "宮下ココ",       "x":1, "y":1},
	"Sana":     {"name": "結城紗菜",       "x":2, "y":1},
	"Christina":{"name": "クリスティーナ", "x":3, "y":1},
	"Yuri":     {"name": "御堂優理",       "x":4, "y":1},
	"Rika":     {"name": "神谷理華",       "x":5, "y":1},
	"Haruka":   {"name": "近江遥",         "x":7, "y":1},
	"Kasane":   {"name": "支倉かさね",     "x":8, "y":1},
	"Mizuki":   {"name": "吉川瑞希",       "x":9, "y":1},
	"Yu":       {"name": "逢沢遊宇",       "x":1, "y":2},
	"Fumie":    {"name": "西村文絵",       "x":2, "y":2},
	"Akemi":    {"name": "菊池朱美",       "x":3, "y":2},
	"Iruka":    {"name": "須田いるか",     "x":4, "y":2},
	"Reine":    {"name": "佐伯麗音",       "x":5, "y":2},
	"Nanaka":   {"name": "森嶋ななか",     "x":6, "y":2},
	"Saki":     {"name": "下園咲",         "x":7, "y":2},
	"Ru":       {"name": "多々良るう",     "x":8, "y":2},
	"Nagi":     {"name": "白木凪",         "x":9, "y":2},
	"Shun":     {"name": "黒崎隼",         "x":1, "y":3},
	"Fumi":     {"name": "設楽ふみ",       "x":2, "y":3},
	"Tsurugi":  {"name": "門田剣",         "x":3, "y":3},
	"Yuuka":    {"name": "桐原優香",       "x":4, "y":3},
	"Fuu":      {"name": "斉木風",         "x":5, "y":3},
	"Misaki":   {"name": "紫藤美咲",       "x":6, "y":3},
	"Himeno":   {"name": "綾小路姫乃",     "x":7, "y":3},
	"Koyuki":   {"name": "白瀬小雪",       "x":8, "y":3},
	"Ryo":      {"name": "相川涼",         "x":9, "y":3},
	"Mikoto":   {"name": "福原命",         "x":1, "y":4},
	"Chiduko":  {"name": "坂巻千鶴子",     "x":2, "y":4},
	"Hitomi":   {"name": "志賀仁美",       "x":3, "y":4},
	"Akira":    {"name": "鬼崎アキラ",     "x":4, "y":4},
	"Yuka":     {"name": "月島結架",       "x":5, "y":4},
	"Sayuri":   {"name": "兵藤さゆり",     "x":6, "y":4},
	"Sakura":   {"name": "黒羽咲良",       "x":7, "y":4},
	"Sakuya":   {"name": "黒羽咲夜",       "x":8, "y":4},
	"Mutsuki":  {"name": "高天原睦月",     "x":9, "y":4},
	"Ranpha":   {"name": "蘭花",           "x":1, "y":5},
	"Rakshata": {"name": "ラクシャータ",   "x":2, "y":5},
	"Rebecca":  {"name": "レベッカ",       "x":3, "y":5},
	"Isabella": {"name": "イザベラ",       "x":4, "y":5},
	"Jennifer": {"name": "ジェニファー",   "x":6, "y":5},
	"Maria":    {"name": "マリア",         "x":7, "y":5},
	"Leo":      {"name": "レオ",           "x":8, "y":5},
	"Yukari":   {"name": "早乙女紫",       "x":9, "y":5},
	"Tsubasa":  {"name": "綺羅ツバサ",     "x":1, "y":6},
	"Anju":     {"name": "優木あんじゅ",   "x":2, "y":6},
	"Erena":    {"name": "統堂英玲奈",     "x":3, "y":6},
	"Leah":     {"name": "鹿角理亞",       "x":4, "y":6},
	"Sarah":    {"name": "鹿角聖良",       "x":5, "y":6},
	"P3":       {"name": "ペルソナ3",      "x":0, "y":3},
	"P4":       {"name": "ペルソナ4",      "x":0, "y":4},
	"P5":       {"name": "ペルソナ5",      "x":0, "y":5},
	"geass":    {"name": "コードギアス",   "x":0, "y":6}
};

let CurrentPage = 0;

//■セレクトボックスの初期化
function InitializeSelectBox() {
 	for(temp1 of window['JSON-llsif-arena']){
		var temp2 = document.createElement("option");
		temp2.text = temp1.title;
		if('num' in temp1){
			temp2.text = "第" + temp1.num + "回 ライブ♪アリーナ　" + temp2.text;
			document.getElementById("sb-t1").appendChild(temp2);
		} else {
			document.getElementById("sb-t2").appendChild(temp2);
		}
	}
	document.addEventListener('keydown', function(){
		act = document.activeElement.toString();
		if(act === '[object HTMLDivElement]'){
			if(event.code == 'ArrowLeft'){
				if(CurrentPage > 0){
					WriteMessage(CurrentPage-1);
				}
			}
			if(event.code == 'ArrowRight'){
				if(CurrentPage < window['JSON-llsif-arena'].length-1){
					WriteMessage(CurrentPage+1);
				}
			}
		}
	});
}

//■テキスト一覧の描画
function WriteMessage(page) {
	//引数が無い場合、セレクトボックスの状態から引数を生成する
	if(page === undefined){ page = document.getElementById('select-box').selectedIndex; }
	const CurrentSet = window['JSON-llsif-arena'][page];

	document.getElementById("sub").innerHTML = ('sub' in CurrentSet ? CurrentSet.sub : "");
	
	CurrentPage = page;
	let Output = "";
	let MessageNumber = 1;

	for(const temp1 of CurrentSet.opponent){
		Output += '\n<tr>\n\t<th>';
		if('num' in temp1){
			Output += '' + temp1.num + '<\/th>\n';
			if(Number(temp1.num) === temp1.num){ //数値型の場合、カウントを上書き
				MessageNumber = temp1.num + 1;
			}
		}else { 
			Output += '' + MessageNumber++  + '<\/th>\n';
		}
		if('name' in temp1){ //名前があるなら立ち絵も表示させる
			if(temp1.name in TagData){
				let temp2 = TagData[temp1.name];
				Output += '\t<th>' + WriteFaceN(temp2.x, temp2.y) + '<\/th>\n\t<td>'
				+ '<span class="OpponentName">'
				+ ('namealt' in temp1 ? temp1.namealt : temp2.name) + '<\/span><br>';
			} else { //名前が正しくない
				Output += '\n\t<th>Error<\/th>\n\t<td>';
			}
		}else {
			Output += '\n\t<td><\/td>\n\t<td>';
		}			
		Output += temp1.text + '<\/td>\n<\/tr>\n';
	}
	document.getElementById("message-list").innerHTML = Output;
	document.getElementById("message-box").scrollTop = 0;
	
	//左ボタンの設定変更
	if(page > 0) {
		document.getElementById('ButtonLeft').classList.add('button-enable');
		document.getElementById('ButtonLeft').classList.remove('button-disable');
		document.getElementById('ButtonLeft').setAttribute('onclick', `WriteMessage(${page-1})`);
	} else {
		document.getElementById('ButtonLeft').classList.add('button-disable');
		document.getElementById('ButtonLeft').classList.remove('button-enable');
		document.getElementById('ButtonLeft').onclick = '';
	}

	//右ボタンの設定変更
	if(page < window['JSON-llsif-arena'].length-1) {
		document.getElementById('ButtonRight').classList.add('button-enable');
		document.getElementById('ButtonRight').classList.remove('button-disable');
		document.getElementById('ButtonRight').setAttribute('onclick', `WriteMessage(${page+1})`);
	} else {
		document.getElementById('ButtonRight').classList.add('button-disable');
		document.getElementById('ButtonRight').classList.remove('button-enable');
		document.getElementById('ButtonRight').onclick = '';
	}
	
	//セレクトボックスの位置変更
	document.getElementById("select-box").selectedIndex = page;
}

//■「キャラ別登場回数」の描画
function WriteSummary() {
	let TextSummary = new Object();
	let idols = 51;
	
	for(i in TagData){
		if(idols-- <= 0){break;}
		TextSummary[i] = [];
	}
	for(i of window['JSON-llsif-arena']){
		if('num' in i){
			const temp = i.opponent;
			for(j in temp){
				if('name' in temp[j]){ //名前が設定されており
					if(temp[j].name in TextSummary){ //定義済みであれば
						TextSummary[temp[j].name].push("第" + i.num + "回");
					}
				}
			}
		}
	}
	
	let Output = "";
	for(i of Object.keys(TextSummary)){
		Output += 
		`<tr>
			<th>${WriteFaceN(TagData[i].x, TagData[i].y)}</th>
			<th>${TagData[i].name}</th>
			<td>${TextSummary[i].length}</td>
			<td>${TextSummary[i].join(", ")}</td>
		</tr>`;
	}
	document.getElementById("Summary-Contents").innerHTML = Output;
}


//■初期化処理
function initialize() {
	InitializeSelectBox();
	WriteMessage(0);
	WriteSummary();

	//■デバック用
	if(isDebugMode) {
		//◆描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`ライブ♪アリーナまとめ\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}