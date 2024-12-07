//■タグ欄データ
const TagData = {
	"meets"     : {"name": "With×MEETS" , "r":160, "g":112, "b": 96, "style": "square"},
	"live"      : {"name": "Fes×LIVE"   , "r": 80, "g":128, "b":128, "style": "square"},
	"cancelled" : {"name": "配信中止"    , "r":128, "g":128, "b":128, "style": "square"},
	
	"Nirei"   : {"name": "楡井"   , "r":248, "g":181, "b":  0, "style": "round"},
	"Nonaka"  : {"name": "野中"   , "r": 83, "g":131, "b":195, "style": "round"},
	"Hanamiya": {"name": "花宮"   , "r":104, "g":190, "b":141, "style": "round"},
	"Sasaki"  : {"name": "佐々木" , "r":186, "g": 38, "b": 54, "style": "round"},
	"Kan"     : {"name": "菅"     , "r":231, "g": 96, "b":158, "style": "round"},
	"Tsukine" : {"name": "月音"   , "r":200, "g":194, "b":198, "style": "round"},
	"Sakurai" : {"name": "櫻井"   , "r":162, "g":215, "b":221, "style": "round"},
	"Hayama"  : {"name": "葉山"   , "r":250, "g":215, "b":100, "style": "round"},
	"Kurusu"  : {"name": "来栖"   , "r":157, "g":141, "b":226, "style": "round"},
};

const SortTarget = [
	{"name": "103期 上半期（2023年5月 - 2023年9月）",  "condition": "after:2023-05-01 before:2023-09-30"},
	{"name": "103期 下半期（2023年10月 - 2024年3月）", "condition": "after:2023-10-01 before:2024-03-31"},
	{"name": "104期 上半期（2024年4月 - 2024年10月）",  "condition": "after:2024-04-01 before:2024-10-19"},
	{"name": "104期 下半期（2024年10月 - 2025年3月）", "condition": "after:2024-10-24 before:2025-03-31"},
//	{"name": "105期 上半期（2025年4月 - 2025年9月）",  "condition": "after:2025-04-01 before:2025-09-30"},
//	{"name": "105期 下半期（2025年10月 - 2026年3月）", "condition": "after:2025-10-01 before:2026-03-31"},
];

//■■出力
//■「動画一覧」の描画
function DrawVideoList(conditions = ''){
	if(conditions === '' || conditions === "undefined"){ return false;}
	const TimeOutputStart = performance.now();
	let filteredData = window['JSON-sehasu'].filter( connect => new Date(connect.date) <= new Date("2030-01-01"));
	
	const condition = conditions.split(' ');
	condition.forEach( c => { //条件フィルター
		if(c.startsWith("before:")) { //「before:」 - 指定された日付以前
			const beforeDate = new Date(c.split(':')[1]);
			filteredData = filteredData.filter( connect => new Date(connect.date) <= beforeDate);
		}
		else if(c.startsWith("after:")) { //「after:」 - 指定された日付まで
			const afterDate = new Date(c.split(':')[1]);
			filteredData = filteredData.filter( connect => new Date(connect.date) >= afterDate);
		}
		else if(c.startsWith("tag:")) { //「tag:」 - 特定のタグを持つ
			const tag = c.split(':')[1];
			filteredData = filteredData.filter( connect => connect.tags && connect.tags.includes(tag));
		}
		else if(c.startsWith("extag:")) { //「extag:」 - 特定のタグを持たない
			const tag = c.split(':')[1];
			filteredData = filteredData.filter( connect => connect.tags && !connect.tags.includes(tag));
		}
		else if(c === "nodesc") { //「nodesc」 - 概要が未設定
			filteredData = filteredData.filter( connect => connect.desc === "" && !connect.tags.includes("cancelled"));
		}
		else if(c === "nolength") { //「nolength」 - 動画時間が未設定
			filteredData = filteredData.filter( connect => !(['length'] in connect) && !connect.tags.includes("cancelled"));
		}
	});
	condition.forEach( c => {
		if(c.startsWith("max:")) {
			const limit = parseInt(c.split(':')[1], 10);
			filteredData = filteredData.slice(0, limit);
		}
	});
	if(filteredData === []){ return false;}

	//特定の記法をリンクへと置換する
	const DecorateText = ( text => {
		// {{X:タイトル:数字17桁}} → Xへのリンク
		text = text.replace(/\{\{[xX]:([^:]*):(\d{19})\}\}/g,
		`<span class="pc-only">（<a href="https://twitter.com/hasunosora_SIC/status/$2" target="blank">$1</a>）</span>`);
		// {{L:タイトル:URL}} → リンク
		text = replaceLinkStrings(text);
		
		// {{S:タイトル}} → ネタバレ
		text = replaceSpoilers(text);
		
		return text;
	});
	
	//秒数を「h時間mm分ss秒」形式に変換
	const showLength = ( len => {
		len = parseInt(len);
		if(isNaN(len)){ return '不明';}
		if(len < 0){ console.error(len + ' is not a positive integer'); return '';}
		len = Math.floor(len);
		if(len < 60){ return len + '秒'; }
		if(len < 3600){ return Math.floor(len/60) + '分' + ('0' + (len%60)).slice(-2) + '秒'; }

		return Math.floor(len/3600) + '時間'
		+ ('0' + Math.floor((len%3600)/60)).slice(-2) + '分'
		+ ('0' + (len%60)).slice(-2) + '秒';
	});
	
	document.getElementById("LiveList").innerHTML = filteredData.map( connect => {
		const isCancelled = (connect['tags'].find( (e) => e === 'cancelled') ? 'cancelled' : '');
		const videoLength = 
		('length' in connect ? (Array.isArray(connect['length']) ? connect['length'] : [connect['length']]) :[]);
		const videoContent =
		('tube' in connect && connect['tube'] ?
			`<a href="https://www.youtube.com/watch?v=${connect['tube']}" target="_blank">
				<img src="https://img.youtube.com/vi/${connect['tube'].split('&')[0]}/default.jpg" alt="${connect['title']}" loading="lazy" class="pc-only">
				<span class="sp-only">動画へ</span>
			</a>`
			+ ('length' in connect ?
				`<span class="length pc-only">動画：${showLength(videoLength)}</span>`
			:'')
		:'');
		const isDescription = ('desc' in connect && connect['desc'] !== "");
		const isMemo        = ('memo' in connect && connect['memo'] !== "");
		const descContent =
			(isDescription ? `<div class="desc">${connect['desc']}</div>` : '')
			+ (isMemo ?
				DecorateText(connect['memo'])
				//With×MEETS AFTERが無いことを示す一文を表示
				+ (connect['tags'].find(m => m === 'noafter') ? "<br>この配信ではWith×MEETS AFTERは行われなかった。" : "")
				//セットリストを表示
				+ ('setlist' in connect ? 
					`<details class="setlist">
						<summary class="setlist-summary">セットリスト (クリックで展開)</summary>
						<ol class="setlist-ol">
							${connect['setlist'].map(program =>
							`<li>${(program === 'MC' ? `<i class="setlist-mc">MC</i>` : program)}</li>`).join('')}
						</ol>
					</details>`
				:'')
			:'')
		;
		const tagsContent = connect['tags'].map( tag => {
			if(tag in TagData){ return DrawCharName(tag); }
		}).join('')
		
		return `
		<article class="${isCancelled}">
			<div class="article-box-date">${connect['date'].replaceAll('-', '/')}</div>
			<div class="article-box-title ${isCancelled}">${connect['title']}</div>
			<div class="article-box-tube ${isCancelled}">${videoContent}</div>
			<div class="article-box-desc">${descContent}</div>
			<div class="article-box-tags">${tagsContent}</div>
		</article>`
	}).join('');
	
	if(isDebugMode) {
		const TimeOutputEnd = performance.now();
		console.log(`${condition} 出力完了。\n所要時間: ${TimeOutputEnd - TimeOutputStart}ミリ秒`);
	}
}

//■初期化処理
function initialize () {
	const TimeOutputLoaded = performance.now();
	//色データをCSSに追加
	let AddedCSS = '\n';
	Object.keys(TagData).forEach( function(key) {
		AddedCSS += '.button_' + key + '{\n\t'
		+ 'background-color: ' + getColor(TagData[key], 2) + ';\n\t'
		+ 'border-color: ' + getColor(TagData[key], 0) + '\n}\n';
	});
	document.querySelector('style').textContent += AddedCSS;
	
	//セレクトボックスに要素を追加
	SortTarget.forEach( temp => {
		if(temp.name.substring(0,5) === "debug" && !isDebugMode){ return;}
		const option = document.createElement("option");
		option.text = temp.name;
		option.value = temp.condition;
		document.getElementById("PullDownList").appendChild(option);
	});

	//警告解除
	document.getElementById('LiveList').classList.remove('output-box-default');
	document.getElementById('LiveList').innerHTML = `
		<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">
			(上のプルダウンメニューから、期間を選んでください)
		</div>`;
	
	//デバック用
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`蓮ノ空 せーはす動画まとめ\n読み込み： ${TimeOutputLoaded - TimeLoadingStart}ミリ秒\n初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}