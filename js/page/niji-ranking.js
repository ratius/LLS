//■タグデータ
const TagData = {};

//■■描画
//■過去の順位一覧
function DrawRankingResults() {
	const tempHeader1 = `
	<div class="ranking-header-wrapper pc-only">
		<div class="ranking-header-cell">開催回</div>
		<div class="ranking-header-cell">1位</div>
		<div class="ranking-header-cell">2位</div>
		<div class="ranking-header-cell">3位</div>
		<div class="ranking-header-cell">4位</div>
		<div class="ranking-header-cell">5位</div>
		<div class="ranking-header-cell">6位</div>
		<div class="ranking-header-cell">7位</div>
		<div class="ranking-header-cell">8位</div>
		<div class="ranking-header-cell">9位</div>
	</div>`;

	const html = window['JSON-niji-ranking'].map((ranking) => {
		const tempHeader2 = `<div class="ranking-wrapper"><div class="ranking-date"><a href="${ranking.url}">${ranking.name}</a></div>`;
		const tempMain = ranking["rank"].map((character, counter) => {
			return `<div class="ranking-cell sp-only">${counter + 1}位</div>
			<div class="ranking-cell bg-${character}">
			${TagData[character].firstName}</div>`
		}).join('');
		const tempFooter2 = `</div>`;


		return tempHeader2 + tempMain + tempFooter2;
	}).join('');

	document.getElementById("RankingResults").innerHTML += tempHeader1 + html;
}

//■グラフ
function DrawGraph(characterId) {
	let canvas = document.getElementById("GraphCanvas");
	if (!canvas.getContext) { return; }

	const graphStartX = 40;
	const graphEndX = 280;
	const graphLineSpacing = (graphEndX - graphStartX) / (window['JSON-niji-ranking'].length - 1);
	const graphStartY = 10;
	const graphLineHeight = 10;
	const baseColor = (characterId in TagData ? LLS.getColorFromObject(TagData[characterId], 0, 0.25) : "black");

	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, 300, 120);

	//横線
	ctx.strokeStyle = "#aaa";
	ctx.lineWidth = 1;
	[...Array(9)].forEach((_, y) => {
		ctx.beginPath();
		ctx.moveTo(graphStartX, graphStartY + (graphLineHeight * y));
		ctx.lineTo(graphEndX, graphStartY + (graphLineHeight * y));
		ctx.stroke();
	});
	//縦線
	ctx.beginPath();
	ctx.moveTo(graphStartX, graphStartY);
	ctx.lineTo(graphStartX, graphStartY + (graphLineHeight * 8) + 6);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(graphEndX, graphStartY);
	ctx.lineTo(graphEndX, graphStartY + (graphLineHeight * 8) + 6);
	ctx.stroke();

	//縦(順位)見出し
	ctx.fillStyle = "#333";
	ctx.font = "14px sans-serif";
	[...Array(3)].forEach((_, y) => {
		ctx.fillText((y * 4 + 1) + "位", graphStartX - 30, graphStartY + (y * 4) * graphLineHeight + 6);
	});

	//横(回)見出し
	ctx.font = "16px sans-serif";
	ctx.fillText("1回", graphStartX - 6, graphStartY + graphLineHeight * 8 + 27);
	ctx.fillText(window['JSON-niji-ranking'].length + "回", graphEndX - 20, graphStartY + graphLineHeight * 8 + 27);

	if (characterId in TagData) {
		//折れ線グラフ
		ctx.strokeStyle = baseColor;
		window['JSON-niji-ranking'].forEach((result, c) => {
			const x = graphStartX + c * graphLineSpacing;
			const y = graphStartY + result.rank.indexOf(characterId) * graphLineHeight;

			ctx.beginPath();
			ctx.lineWidth = 2;
			if (c !== 0) {
				ctx.moveTo(graphStartX + (c - 1) * graphLineSpacing, graphStartY + window['JSON-niji-ranking'][c - 1].rank.indexOf(characterId) * graphLineHeight);
				ctx.lineTo(x, y);
				ctx.stroke();
			}
			ctx.beginPath();
			ctx.arc(x, y, 2, 0, Math.PI * 2, true);
			ctx.fillStyle = baseColor;
			ctx.fill();
			ctx.stroke();
			//グラフヘッダー
			const TimesWon = window['JSON-niji-ranking'].filter(result => result.rank.indexOf(characterId) === 0).length
			const AverageRank = window['JSON-niji-ranking'].reduce((acc, val) => {
				return acc + val.rank.indexOf(characterId) + 1;
			}, 0) / window['JSON-niji-ranking'].length;

			document.getElementById("GraphTitle").innerHTML = TagData[characterId].fullName;
			document.getElementById("GraphDesc").innerHTML = `平均順位：${AverageRank.toFixed(2)}　1位回数：${TimesWon}回`;
		});
	} else {
		document.getElementById("GraphTitle").innerHTML = "";
		document.getElementById("GraphDesc").innerHTML = "上のプルダウンメニューからキャラクターを選択してください。";
		return false;
	}
}

//■初期化処理
function initialize() {
	const TimeOutputLoaded = performance.now();

	//TagDataにキャラクターの内容を追加
	const characterList = LLSIdol.filterCharacterList("is:group_id:nijigasaki");
	characterList.forEach(character => {
		const objtemp = new Object();
		objtemp.firstName = character.firstName;
		objtemp.fullName = character.fullName;
		objtemp.r = character["color"].r;
		objtemp.g = character["color"].g;
		objtemp.b = character["color"].b;

		TagData[character.id] = objtemp;
	});

	//色データをCSSに追加
	document.querySelector('style').textContent +=
		Object.keys(TagData).map(character => {
			return `
		.bg-${character} {
			background-color: ${LLS.getColorFromObject(TagData[character], 1.5)};
		}`;
		}).join('');

	DrawRankingResults();
	DrawGraph();

	if (isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`虹ヶ咲学園 マンスリーランキングまとめ\n読み込み： ${(TimeOutputLoaded - TimeLoadingStart).toFixed(1)}ミリ秒\n初期化: ${(TimeOutputEnd - TimeOutputLoaded).toFixed(1)}ミリ秒`);
	}
}