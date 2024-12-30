//■■「動画まとめ」ページ用共通ライブラリ ver.20241228
//利用するためにはHTML及びJavaScriptで以下の要素・タグをあらかじめ定義しておく必要があります。
//
//●HTML側に必要な要素
//・VL-Filter (絞り込み用のプルダウンメニュー)
//・VL-Result (出力表示場所)
//
//●別途定義が必要なタグ
//tagData (Associative Array) - タグのスタイル情報に利用される。
//  "tagId" : {"name": (表示名), "r": (赤), "g": (緑), "b": (青), "style": (表示スタイル)}
//filterTargets (Array) - プルダウンメニューの作成に利用される。
//  {"name": (表示名), "condition": (絞り込み条件)}

//■動画一覧の出力
Array.prototype.makeVideoList = function(conditions = ''){
	//秒数を「h時間mm分ss秒」形式に変換する関数
	const convertSecondsToHHMMSS = (len) => {
		len = parseInt(len);
		if(isNaN(len)){ return '不明';}
		if(len < 0){ console.error(len + ' is not a positive integer'); return '';}
		len = Math.floor(len);
		if(len < 60){ return len + '秒'; }
		if(len < 3600){ return Math.floor(len/60) + '分' + ('0' + (len%60)).slice(-2) + '秒'; }

		return `${Math.floor(len/3600)}時間${('0' + Math.floor((len%3600)/60)).slice(-2) + '分'}${('0' + (len%60)).slice(-2) + '秒'}`;
	};

	//条件フィルターを行う。2035年以降は間違いなく入力ミスなので除外
	let filteredList = this.filter( video => new Date(video.date) <= new Date("2035-01-01"));
	
	const condition = conditions.split(' ');
	condition.forEach( c => {
		if(c.startsWith("before:")) { //「before:」 - 指定された日付以前
			const beforeDate = new Date(c.split(':')[1]);
			filteredList = filteredList.filter( video => new Date(video.date) <= beforeDate);
		}
		else if(c.startsWith("after:")) { //「after:」 - 指定された日付まで
			const afterDate = new Date(c.split(':')[1]);
			filteredList = filteredList.filter( video => new Date(video.date) >= afterDate);
		}
		else if(c.startsWith("tag:")) { //「tag:」 - 特定のタグを持つ
			const tag = c.split(':')[1];
			filteredList = filteredList.filter( video => video.tags && video.tags.includes(tag));
		}
		else if(c.startsWith("extag:")) { //「extag:」 - 特定のタグを持たない
			const tag = c.split(':')[1];
			filteredList = filteredList.filter( video => video.tags && !video.tags.includes(tag));
		}
		else if(c === "nodesc") { //「nodesc」 - 概要が未設定
			filteredList = filteredList.filter( video => video.desc === "" && !video.tags.includes("cancelled"));
		}
		else if(c === "nolength") { //「nolength」 - 動画時間が未設定
			filteredList = filteredList.filter( video => !(['length'] in video) && !video.tags.includes("cancelled"));
		}
		else if(c === "novideo") { //「novideo」 - 動画が未設定
			filteredList = filteredList.filter( video => !(['tube'] in video) && !video.tags.includes("cancelled"));
		}
	});
	//最大件数の指定
	condition.forEach( c => {
		if(c.startsWith("max:")) {
			const limit = parseInt(c.split(':')[1], 10);
			filteredList = filteredList.slice(0, limit);
		}
	});
	
	//書き出し
	return filteredList.map( video => {
		const isCancelled = (video['tags'].find( (e) => e === 'cancelled') ? 'cancelled' : '');

		const videoLengthContent = (typeof video['length'] === 'number' ?
			`<span class="length pc-only">動画：${convertSecondsToHHMMSS(video['length'])}</span>`
		:
			(Array.isArray(video['length']) ?
				(video['length'].length >= 0 ?
					`<span class="length pc-only">動画：${convertSecondsToHHMMSS(video['length'][0])}</span>`
				: '')
				+ (video['length'].length > 1 ?
					`<span class="length pc-only">AFTER：${convertSecondsToHHMMSS(video['length'][1])}</span>`
				: '')
			: '')
		);

		const videoContent =
		('tube' in video && video['tube'] ?
			`<a href="https://www.youtube.com/watch?v=${video['tube']}" target="_blank">
				<img src="https://img.youtube.com/vi/${video['tube'].split('&')[0]}/default.jpg" alt="${video['title']}" loading="lazy" class="pc-only">
				<span class="sp-only">動画へ</span>
			</a>
			${videoLengthContent}`
		:'');
		const isDescription = ('desc' in video && video['desc'] !== "");
		const isMemo        = ('memo' in video && video['memo'] !== "");
		const descContent =
			(isDescription ? `<div class="desc">${video['desc']}</div>` : '')
			+ (isMemo ? convertMarkup(video['memo']) : '');

		const setlistContent= ('setlist' in video && video['setlist'] !== "" ?
			`<details class="setlist">
				<summary class="setlist-summary">セットリスト (クリックで展開)</summary>
				<ol class="setlist-ol">
					${video['setlist'].map(program =>
					`<li>${(program === 'MC' ? `<i class="setlist-mc">MC</i>` : program)}</li>`).join('')}
				</ol>
			</details>`
		:'');

		const tagsContent = video['tags'].map( tag => {
			if(tag in tagData){ return createStyledTag(tagData[tag]); }
		}).join('')

		return `
		<article class="${isCancelled}">
			<div class="article-box-date">${video['date'].replaceAll('-', '/')}</div>
			<div class="article-box-title ${isCancelled}">${video['title']}</div>
			<div class="article-box-tube ${isCancelled}">${videoContent}</div>
			<div class="article-box-desc">${descContent + setlistContent}</div>
			<div class="article-box-tags">${tagsContent}</div>
		</article>`
	}).join('');
}


//■動画一覧ページ用共通初期処理
//loader.jsで呼び出され、data-srcに1つだけのJSONファイルパスを持つことを想定しています
const initialize = () => {
	const TimeOutputLoaded = performance.now();
	//JSONデータのパスから変数名を取得
	const JSONpath = files.filter(file => file.endsWith('.json'));
	if(!JSONpath.length > 0){ console.error("No argument specified - initializeVideoList"); return;}
	const databasePath = JSONpath[0].replace(/^.+\/(.+)\.json$/g, "JSON-$1");
	
	//ボタンの色データをCSSに追加
	const AddedCSS = "\n<!--\n" + Object.keys(tagData).map(tag => {
		return `.button-${tag} {
	background-color: ${getColor(tagData[tag], 2)};
	border-color: ${getColor(tagData[tag], 0)};
}`;
	}).join("\n") + "-->";
	document.querySelector('style').textContent += AddedCSS;
	
	//セレクトボックスに要素を追加
	filterTargets.forEach( temp => {
		if(temp.name.substring(0,5) === "debug" && !isDebugMode){ return;} //「debug」から始まるものは追加しない
		const option = document.createElement('option');
		option.text = temp.name;
		option.value = temp.condition;
		document.getElementById('VL-Filter').appendChild(option);
	});
	
	//セレクトボックス変更時の処理を追加
	document.getElementById('VL-Filter').addEventListener('change', function(){
		const TimeOutputStart = performance.now();
		document.getElementById('VL-Result').innerHTML = window[databasePath].makeVideoList(this.value);
		if(isDebugMode) {
			const TimeOutputEnd = performance.now();
			console.log(`${this.value} 出力完了。\n所要時間: ${TimeOutputEnd - TimeOutputStart}ミリ秒`);
		}
	});
	
	//警告解除
	document.getElementById('VL-Result').classList.remove('output-box-default');
	document.getElementById('VL-Result').innerHTML = `<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">(上のプルダウンメニューから、期間を選んでください)</div>`;
	
	//デバック用
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`${document.getElementById('TitleName').innerHTML}\n読み込み： ${TimeOutputLoaded - TimeLoadingStart}ミリ秒\n初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}
