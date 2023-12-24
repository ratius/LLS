//■デバッグモード
const isDebugMode = (location.search.substring(1).split('&').indexOf('debug') >= 0);

//■キャラクターのデータ
const TagData = {
	"meets"     : {"name": "With×MEETS" , "r":160, "g":112, "b": 96, "style": "Square" },
	"live"      : {"name": "Fes×LIVE"   , "r": 80, "g":128, "b":128, "style": "Square" },
	"cancelled" : {"name": "配信中止"    , "r":128, "g":128, "b":128, "style": "Square" },
	
	"Kaho"    : {"name": "花帆"   , "r":248, "g":181, "b":  0, "style": "Round" },
	"Sayaka"  : {"name": "さやか" , "r": 83, "g":131, "b":195, "style": "Round" },
	"Kozue"   : {"name": "梢"     , "r":104, "g":190, "b":141, "style": "Round" },
	"Tsuzuri" : {"name": "綴理"   , "r":186, "g": 38, "b": 54, "style": "Round" },
	"Rurino"  : {"name": "瑠璃乃" , "r":231, "g": 96, "b":158, "style": "Round" },
	"Megumi"  : {"name": "慈"     , "r":200, "g":194, "b":198, "style": "Round" }
};

//■■サブルーチン
//■キャラクター名のボタン ver.20231222a
function DrawCharName(character){
	if(character in TagData){ //存在する場合のみ
		const target = TagData[character];
		return `<span class="button-${target.style} button_${character}">${target.name}</span>`;
	} else {
		console.error(`キャラクターID ${character} は存在しません`);
		return "Error";
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

//■■メイン出力
//■「スクールアイドルコネクト一覧」の描画
function DrawLiveList(condition){
	const TimeOutputStart = performance.now();
	let result = null;
	
	const conditionTemp = condition.split(',');
	if(conditionTemp[0] === 'date'){ //期間指定
		const DateStart = new Date(conditionTemp[1]).getTime();
		const DateEnd = new Date(conditionTemp[2]).getTime();
		result = LiveList.filter( (connect) => { //当該動画
			if(!'title' in connect || connect.title === ''){ return false;} //タイトル未指定ならスキップ
			const DateTemp = new Date(connect.date).getTime();
			if(DateTemp > DateStart
			&& DateTemp < DateEnd){ //日付の範囲指定
				return true;
			}
		});
	}
	
	if(result === null){ return false;}

	//特定の記法をリンクへと置換する
	const DecorateText = ( text => text
		// {{X:タイトル:数字17桁}} → Xへのリンク
		.replace(/\{\{[xX]:([^:]*):(\d{19})\}\}/g,
		'<span class="pc-only">（<a href="https://twitter.com/hasunosora_SIC/status/$2" target="blank">$1<\/a>）<\/span>')
		// {{L:タイトル:URL}} → リンク
		.replace(/\{\{[lL]:([^:]*):([^}]*)\}\}/g,
		'<a href="$2" class="pc-exclusive-link" target="_blank" rel="noopener noreferrer">$1<\/a>')
	);
	
	document.getElementById("OutputArea").innerHTML = result.map( connect => {
		const isCancelled = (connect.tags.find( (e) => e === 'cancelled') ? 'cancelled' : '');
		const videoContent =
		('tube' in connect && connect.tube ?
			`<a href="https://www.youtube.com/watch?v=${connect.tube}" target="_blank">
				<img src="https://img.youtube.com/vi/${connect.tube.split('&')[0]}/default.jpg" alt="${connect.title}" loading="lazy" class="pc-only">
				<span class="sp-only">動画へ</span>
			</a>`
		:'');
		const descContent = DecorateText(connect.desc)
		+ ('setlist' in connect ? 
			`<details class="setlist">
				<summary class="setlist-summary">セットリスト (クリックで展開)</summary>
				<ol class="setlist-ol">
					${connect.setlist.map(program =>
					`<li>${(program === 'MC' ? `<i class="setlist-mc">MC</i>` : program)}</li>`).join('')}
				</ol>
			</details>`
		:'');
		
		return `
		<article class="${isCancelled}">
			<div class="article-box-date">${connect.date.replaceAll('-', '/')}</div>
			<div class="article-box-title ${isCancelled}">${connect.title}</div>
			<div class="article-box-tube ${isCancelled}">${videoContent}</div>
			<div class="article-box-desc">${descContent}</div>
			<div class="article-box-tags">${connect.tags.map( tag => DrawCharName(tag)).join('')}</div>
		</article>`
	}).join('');
	
	if(isDebugMode) {
		const TimeOutputEnd = performance.now();
		console.log(`${condition} 出力完了。\n所要時間: ${TimeOutputEnd - TimeOutputStart}ミリ秒`);
	}
}

//■■初期処理
//■JSONデータベースの読み込み
const TimeOutputStart = performance.now();

const JSONPath = 'data/hasu_connect.json';
let LiveList = null;
fetch(JSONPath)
	.then(response => response.json())
	.then(data => {
		LiveList = data;
		initialize();
	}
);

const TimeOutputLoaded = performance.now();

//■初期化処理
function initialize() {
	//色データをCSSに追加
	let AddedCSS = '\n';
	Object.keys(TagData).forEach( function(key) {
		AddedCSS += '.button_' + key + '{\n\t'
		+ 'background-color: ' + getColor(TagData[key], 3) + '\n\t'
		+ 'border-color: ' + getColor(TagData[key], 1) + '\n}\n';
	});
	document.querySelector('style').textContent += AddedCSS;
	
	//「Now Loading...」解除
	document.getElementById("Loading").style.display = "none";
	
	//デバック用
	if(isDebugMode) {
		//デバッグモードであることを表示
		document.title = '[debug]' + document.title;
		document.bgColor = '#dce';
		
		document.getElementById("MainTitle").innerHTML += "*";
		document.getElementById("BackToMain").href += "?debug";
		
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`リンクラ スクールアイドルコネクトまとめ
読み込み： ${TimeOutputLoaded - TimeOutputStart}ミリ秒
初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}