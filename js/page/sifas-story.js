const tagData = {
	"main": { "name": "メイン", "r": 122, "g": 202, "b": 223, "style": "button-square" },
	"main2": { "name": "メイン", "r": 160, "g": 140, "b": 240, "style": "button-square" },
	"event": { "name": "イベント", "r": 255, "g": 130, "b": 127, "style": "button-square" },
	"kizuna": { "name": "キズナ", "r": 119, "g": 191, "b": 220, "style": "button-square" },
	"special": { "name": "特殊", "r": 240, "g": 192, "b": 128, "style": "button-square" },

	"Player": { "name": "あなた", "r": 160, "g": 192, "b": 160, "style": "button-round" },

	"Yukiho": { "name": "雪穂", "r": 128, "g": 80, "b": 96, "style": "button-round" },
	"Arisa": { "name": "亜里沙", "r": 128, "g": 80, "b": 96, "style": "button-round" },
	"Yoitsumu": { "name": "よいつむ", "r": 80, "g": 112, "b": 128, "style": "button-round" },
	"Mito": { "name": "美渡", "r": 80, "g": 112, "b": 128, "style": "button-round" },
	"Uchicchi": { "name": "うちっちー", "r": 80, "g": 112, "b": 128, "style": "button-round" },
	"Haruka": { "name": "遥", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Misato": { "name": "美里", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Mai": { "name": "マイ", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Kaoruko": { "name": "薫子", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Uzuki": { "name": "右月", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Satsuki": { "name": "左月", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Hanpen": { "name": "はんぺん", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Rijicho": { "name": "理事長", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Asagi": { "name": "浅希", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Acting": { "name": "演劇部部長", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Basketball": { "name": "バスケ部部長", "r": 128, "g": 112, "b": 80, "style": "button-round" },
	"Tsumugi": { "name": "ツムギ", "r": 128, "g": 112, "b": 80, "style": "button-round" },
};

//■プルダウンメニューを操作した時の処理
function NarrowerEvent(changed) {
	const categoryIndex = document.getElementById('SelectCategory').selectedIndex - 1;
	const category = window['JSON-sifas-story'][categoryIndex];
	const seriesElement = document.getElementById('SelectSeries');

	switch (changed) {
		case 1: //カテゴリー選択
			if (categoryIndex < 0) {
				seriesElement.style.display = "none";
			} else {
				seriesElement.style.display = "inline-block";
				seriesElement.selectedIndex = 0;
				seriesElement.length = 1;
				seriesElement.options[0].innerHTML = "(" + ["章", "イベント", "キャラクター", "区分"][categoryIndex] + "を選択)";
				category['part'].forEach(c => seriesElement.append(new Option(c.title, null)));
				return false;
			}
		case 2: //シリーズ選択
			const seriesIndex = seriesElement.selectedIndex - 1;
			if (seriesIndex < 0) return false;

			const TimeOutputStart = performance.now();
			const DecorateDate = (date) => `<span class="chapter-date">${LLS.formatDate(new Date(date))} 配信</span><br>`;

			const series = category['part'][seriesIndex];
			const seriesColor = ('color' in series ? series['color'] : category['color']);
			const isSeriesHasVideo = (['tube'] in series && series['tube'] !== "");
			const seriesDesc = ('desc' in series && series['desc'] !== "" ?
				`<div class="chapter-key pc-only">概要</div>
				<div class="chapter-info">
					${(['date'] in series ? DecorateDate(series['date']) : "") + series['desc']}
				</div>`
				: "");

			//データを出力
			document.getElementById("OutputArea").innerHTML =
				//シリーズ概要
				`<article class="chapter-container article-color-${seriesColor} ${isSeriesHasVideo ? "vid" : "novid"}">
				<div class="chapter-title">
					<span class="series-title-name">${series['title']}</span>
				</div>
				${drawYouTubeVideoContent(series['tube'], series['title'])}
				${LLS.markup(seriesDesc)}
			</article>`

				//チャプター概要
				+ series['part'].map(chapter => {
					const tags = chapter.tags.map(tag => LLS.createStyledTag(tagData[tag], tag)).join('');
					const chapterColor = (chapter?.color ?? seriesColor);
					const isChapterHasVideo = (['tube'] in chapter && chapter['tube'] !== "");
					return `
				<article class="chapter-container article-color-${chapterColor} ${isChapterHasVideo ? "vid" : "novid"}">
					<div class="chapter-title">
						<span class="chapter-title-name">${chapter.title}</span>
						${('date' in chapter ? DecorateDate(chapter['date']) : "")}
					</div>
					${drawYouTubeVideoContent(chapter['tube'], chapter['title'])}
					<div class="chapter-key pc-only">あらすじ</div>
					<div class="chapter-info">
						${chapter.desc}
					</div>
					${('memo' in chapter ? `<div class="chapter-key pc-only">メモ</div><div class="chapter-info">${chapter.memo}</div>` : '')}
					<div class="chapter-key pc-only">登場人物</div>
					<div class="chapter-info tags">${tags}</div>
				</article>`;
				}).join('');

			document.getElementById("OutputArea").scrollTop = 0;

			if (isDebugMode) {
				const TimeOutputEnd = performance.now();
				console.log(category['name'] + ' - ' + series['title'] + '\n'
					+ `出力時間:${(TimeOutputEnd - TimeOutputStart).toFixed(1)}ミリ秒`);
			}
			return;
	}
	return false;
}

//■動画へのリンクを作成
const drawYouTubeVideoContent = ((url, title) => {
	if (url === undefined || url === "") { return ""; }
	return `<div class="vid-container">
		<a href="https://www.youtube.com/watch?v=${url}" target="_blank">
			<img src="https://img.youtube.com/vi/${url.split('&')[0]}/default.jpg" ${title ? 'alt="' + title + '"' : ""} loading="lazy" class="pc-only">
			<span class="sp-only">動画へ</span>
		</a>
	</div>`
});

//■初期化処理
function initialize() {
	const TimeOutputLoaded = performance.now();

	//tagDataにメインキャラクターのデータを追加
	LLSIdol.filterCharacterList("has:color_sifas").forEach(character => {
		const characterColor = character.color_sifas[0] == '#' ? character.color_sifas.substring(1, 7) : character.color_sifas;
		const characterColorObject = {
			"r": parseInt(characterColor.substring(0, 2), 16),
			"g": parseInt(characterColor.substring(2, 4), 16),
			"b": parseInt(characterColor.substring(4, 6), 16)
		};
		tagData[character.id] = {
			"name": character.firstName === "嵐珠" ? "ランジュ" : character.firstName,
			"r": characterColorObject.r,
			"g": characterColorObject.g,
			"b": characterColorObject.b,
			"style": "button-round"
		}
	});

	//tagDataの色データからCSSを追加
	const buttonCSS = document.createElement("style");
	buttonCSS.innerHTML = ("\n<!--\n/* Generated from sifas-story.js */\n" + Object.keys(tagData).map(tag => {
		return `.article-color-${tag} {
	background-color: ${LLS.getColorFromObject(tagData[tag], 1.9, 0.1)};
	border-color: ${LLS.getColorFromObject(tagData[tag], 2, 1)};
	}
	.button-${tag} {
	background-color: ${LLS.getColorFromObject(tagData[tag], 2)};
	border-color: ${LLS.getColorFromObject(tagData[tag], 0.4, 0.1)};
	}`;
	}).join("\n") + "\n-->");
	document.head.appendChild(buttonCSS);

	//セレクトボックスに要素を追加
	window['JSON-sifas-story'].forEach(temp => {
		const option = document.createElement("option");
		option.text = temp.name;
		document.getElementById("SelectCategory").appendChild(option);
	});

	//警告解除
	document.getElementById('OutputArea').classList.remove('output-box-default');
	document.getElementById('OutputArea').innerHTML = `
		<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">
			(上のプルダウンメニューから、表示したいストーリーを選んでください)
		</div>`;

	//デバック用
	if (isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`スクスタ ストーリー便覧\n読み込み： ${(TimeOutputLoaded - TimeLoadingStart).toFixed(1)}ミリ秒\n初期化: ${(TimeOutputEnd - TimeOutputLoaded).toFixed(1)}ミリ秒`);

		//◆データの不具合チェック
		let isError = 0;
		for (temp1 of window['JSON-sifas-story']) {
			for (temp2 of temp1.part) {
				for (temp3 of temp2.part) {

					if (!('title' in temp3)) { //●タイトルが無い
						console.log('[Error] タイトルが未設定:\n\tLocation: ' + temp1.name + ' - ' + temp2.name);
						isError++;
						break;
					}
					const StoryLocation = '\tLocation: ' + temp1.name + ' - ' + temp2.name + ' - ' + temp3.title;

					if (!('desc' in temp3)) { //●あらすじが無い
						console.log('[Error] あらすじが未設定:\n' + StoryLocation);
						isError++;
					}
					if ('tags' in temp3) {
						if (temp3['tags'].length === 0) { //●タグが空
							console.log('[Error] タグが空:\n' + StoryLocation);
							isError++;
						}
					} else { //●タグが未設定
						console.log('[Error] タグが未設定:\n' + StoryLocation);
						isError++;
					}
					for (temp4 of temp3.tags) {
						if (!(temp4 in tagData)) { //●タグが不正
							console.log('[Error] タグが不正 (' + temp4 + '):\n' + StoryLocation);
							isError++;
						}
					}
					if ('tube' in temp3) {
						if (temp3['tube'] !== "" && temp3['tube'].length !== 11) { //●動画IDが不正
							console.log('[Error] 動画IDが不正: ' + temp3['tube'] + '\n' + StoryLocation);
							isError++;
						}
					}
				}
			}
		}
		if (isError > 0) {
			alert('' + isError + '件のエラーが見つかりました。コンソールを確認してください。');
		}
	}
}