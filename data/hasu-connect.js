//■キャラクターのデータ
const TagData = {
	"meets"     : {"name": "With×MEETS" , "r":160, "g":112, "b": 96, "style": "square" },
	"live"      : {"name": "Fes×LIVE"   , "r": 80, "g":128, "b":128, "style": "square" },
	"cancelled" : {"name": "配信中止"    , "r":128, "g":128, "b":128, "style": "square" },
	
	"Kaho"    : {"name": "花帆"   , "r":248, "g":181, "b":  0, "style": "round" },
	"Kozue"   : {"name": "梢"     , "r":104, "g":190, "b":141, "style": "round" },
	"Sayaka"  : {"name": "さやか" , "r": 83, "g":131, "b":195, "style": "round" },
	"Tsuzuri" : {"name": "綴理"   , "r":186, "g": 38, "b": 54, "style": "round" },
	"Rurino"  : {"name": "瑠璃乃" , "r":231, "g": 96, "b":158, "style": "round" },
	"Megumi"  : {"name": "慈"     , "r":200, "g":194, "b":198, "style": "round" }
};

//■■出力
//■「スクールアイドルコネクト一覧」の描画
function DrawLiveList(condition){
	const TimeOutputStart = performance.now();
	let result = null;
	
	const conditionTemp = condition.split(',');
	if(conditionTemp[0] === 'date'){ //期間指定
		const DateStart = new Date(conditionTemp[1]).getTime();
		const DateEnd = new Date(conditionTemp[2]).getTime();
		result = window['JSON-hasu-connect'].filter( (connect) => { //当該動画
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
	
	document.getElementById("LiveList").innerHTML = result.map( connect => {
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
		console.log(`リンクラ スクールアイドルコネクトまとめ\n読み込み： ${TimeOutputLoaded - TimeLoadingStart}ミリ秒\n初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}