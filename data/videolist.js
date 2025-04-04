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
const makeVideoList = (dbPath, conditions = '') => {
	if (conditions === '') { return false; }

	//条件フィルターを行う。2035年以降は間違いなく入力ミスなので除外
	let filteredList = dbPath.filter(video => new Date(video.date) <= new Date("2035-01-01"));

	const condition = conditions.split(' ');
	condition.forEach(c => {
		if (c.startsWith("before:")) { //「before:」 - 指定された日付以前
			const beforeDate = new Date(c.split(':')[1]);
			filteredList = filteredList.filter(video => new Date(video.date) <= beforeDate);
		}
		else if (c.startsWith("after:")) { //「after:」 - 指定された日付まで
			const afterDate = new Date(c.split(':')[1]);
			filteredList = filteredList.filter(video => new Date(video.date) >= afterDate);
		}
		else if (c.startsWith("tag:")) { //「tag:」 - 特定のタグを持つ
			const tag = c.split(':')[1];
			filteredList = filteredList.filter(video => video.tags && video.tags.includes(tag));
		}
		else if (c.startsWith("extag:")) { //「extag:」 - 特定のタグを持たない
			const tag = c.split(':')[1];
			filteredList = filteredList.filter(video => video.tags && !video.tags.includes(tag));
		}
		else if (c === "nodesc") { //「nodesc」 - 概要が未設定
			filteredList = filteredList.filter(video => video.desc === "" && !video.tags.includes("cancelled"));
		}
		else if (c === "nolength") { //「nolength」 - 動画時間が未設定
			filteredList = filteredList.filter(video => !(['length'] in video) && !video.tags.includes("cancelled"));
		}
		else if (c === "novideo") { //「novideo」 - 動画が未設定
			filteredList = filteredList.filter(video => !(['tube'] in video) && !video.tags.includes("cancelled"));
		}
	});
	//「max」 - 最大件数の指定
	condition.forEach(c => {
		if (c.startsWith("max:")) {
			const limit = parseInt(c.split(':')[1], 10);
			filteredList = filteredList.slice(0, limit);
		}
	});
	//書き出し
	document.getElementById('VL-Result').innerHTML = filteredList.map(video => {
		const isCancelled = (video['tags'].find((e) => e === 'cancelled') ? 'cancelled' : '');

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
				: '');
		const isDescription = ('desc' in video && video['desc'] !== "");
		const isMemo = ('memo' in video && video['memo'] !== "");
		const descContent =
			(isDescription ? `<div class="desc">${convertMarkup(video['desc'])}</div>` : '')
			+ (isMemo ? convertMarkup(video['memo']) : '');

		const setlistContent = ('setlist' in video && video['setlist'] !== "" ?
			`<details class="setlist">
				<summary class="setlist-summary">${'setlistAlt' in video ? video['setlistAlt'] : "セットリスト"} (クリックで展開)</summary>
				<ol class="setlist-ol">
					${video['setlist'].map(program =>
				`<li>${(program === 'MC' ? `<i class="setlist-mc">MC</i>` : program)}</li>`).join('')}
				</ol>
			</details>`
			: '');

		const tagsContent = video['tags'].map(tag => {
			if (tag in tagData) { return createStyledTag(tagData[tag],tag); }
		}).join('')

		return `
		<article class="${isCancelled}">
			<div class="article-box-date">${video['date']}</div>
			<div class="article-box-title ${isCancelled}">${video['title']}</div>
			<div class="article-box-tube ${isCancelled}">${videoContent}</div>
			<div class="article-box-desc">${descContent + setlistContent}</div>
			<div class="article-box-tags">${tagsContent}</div>
		</article>`
	}).join('');
	return filteredList.length;
}


//■動画一覧ページ用共通初期処理
//loader.jsで呼び出され、data-srcに1つだけのJSONファイルが指定されていることを想定しています
const initialize = () => {
	const TimeOutputLoaded = performance.now();
	//JSONデータのパスから変数名を取得
	const JSONpath = files.filter(file => file.endsWith('.json'));
	if (!JSONpath.length > 0) { console.error("No argument specified - initializeVideoList"); return; }
	const databasePath = JSONpath[0].replace(/^.+\/(.+)\.json$/g, "JSON-$1");

	//ボタンの色データをCSSに追加
	const buttonCSS = document.createElement("style");
	buttonCSS.innerHTML = ("\n<!--\n/* Generated from videolist.js */\n" + Object.keys(tagData).map(tag => {
	return `.button-${tag} {
	background-color: ${getColor(tagData[tag], 3)};
	border-color: ${getColor(tagData[tag])};
	}`;
	}).join("\n") + "\n-->");
	document.head.appendChild(buttonCSS);
	//document.querySelector('style').textContent += AddedCSS;

	//セレクトボックスに要素を追加
	filterTargets.forEach(temp => {
		if (temp.name.substring(0, 5) === "debug" && !isDebugMode) { return; } //「debug」から始まるものは追加しない
		const option = document.createElement('option');
		option.text = temp.name;
		option.value = temp.condition || '';
		document.getElementById('VL-Filter').appendChild(option);
	});

	//セレクトボックス変更時の処理を追加
	document.getElementById('VL-Filter').addEventListener('change', function () {
		const TimeOutputStart = performance.now();
		const filteredVideos = makeVideoList(window[databasePath], this.value);
		if (filteredVideos > 0 && isDebugMode) {
			const TimeOutputEnd = performance.now();
			console.log(`条件：${this.value} (${filteredVideos}件) 出力時間：${(TimeOutputEnd - TimeOutputStart).toFixed(1)}ミリ秒`);
		}
	});

	//警告解除
	document.getElementById('VL-Result').classList.remove('output-box-default');
	document.getElementById('VL-Result').innerHTML = `<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">(上のプルダウンメニューから、期間を選んでください)</div>`;

	//デバック用
	if (isDebugMode) {
		//データベースの検証
		window[databasePath].forEach(video => {
			if(!(['date'] in video)){
				throw new Error(`JSON contains video data without "date"`);
				return;
			}
			if(video['date'].indexOf("/") >= 0){
				throw new Error(`"date" must be written with separator hyphens`);
			}
		});

		document.getElementById('VL-Filter').selectedIndex = 1;
		makeVideoList(window[databasePath], document.getElementById('VL-Filter').value);

		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`${document.getElementById('TitleName').innerHTML} 初期設定完了。読み込み：${(TimeOutputLoaded - TimeLoadingStart).toFixed(1)}ミリ秒 初期化：${(TimeOutputEnd - TimeOutputLoaded).toFixed(1)}ミリ秒`);
	}
}
