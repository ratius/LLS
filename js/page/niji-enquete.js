//■タグデータ
const TagData = {};

//■■メイン出力
//■「アンケート一覧」のテーブルを描画
function DrawEnqueteTable(){
	document.getElementById("EnqueteResult").innerHTML = '';

	const header = `
	<div class="enquete-header pc-only">
		<div class="enquete-header-cell">開催回</div>
		<div class="enquete-header-cell">期間/お題</div>
		<div class="enquete-header-cell">最多得票キャラクター</div>
	</div>`;

	const html = window['JSON-niji-enquete'].map( enquete => {
		const headerTemp2 = `
		<div class="enquete">
			<div class="enquete-id"><a href="${enquete.url}" target="_blank" title="第${enquete.id}回 マンスリーアンケート" class="exlink">第${enquete.id}回</a></div>
			<div class="enquete-desc">
				<span class="enquete-date">期間：${LLS.formatDate(new Date(enquete.started))} 〜 ${LLS.formatDate(new Date(enquete.ended))}</span><br>
				${enquete.theme}
			</div>`;

		const winnersTemp2 = (enquete.winner1 in TagData ?
			`<div class="enquete-winner bg-${enquete.winner1}">
				<span style="font-size: small;"><span class="pc-only">「</span>${enquete.option1}<span class="pc-only">」</span></span><strong>${TagData[enquete.winner1].name}</strong>
			</div>
			<div class="enquete-winner bg-${enquete.winner2}">
				<span style="font-size: small;"><span class="pc-only">「</span>${enquete.option2}<span class="pc-only">」</span></span><strong>${TagData[enquete.winner2].name}</strong>
			</div>`
		: `<div>TBA</div><div>TBA</div><div></div>`);
		
		return headerTemp2 + winnersTemp2 + `</div>`;
	}).join('');
	document.getElementById("EnqueteResult").classList.remove("output-box-default");
	document.getElementById("EnqueteResult").innerHTML = header + html;
}

//■「キャラ別最多得票項目」のテーブルを描画
function DrawPrizeList(){
	const contents = Object.keys(TagData).map( character => {
		const headerTemp2 = `<div class="prize">
			<div class="prize-character bg-${character}">${TagData[character].name}</div>
			<div class="prize-container">`;
		const footerTemp2 = `</div></div>`;
		let timesWon = 0;
		const PrizeList = window['JSON-niji-enquete'].map( enquete => {
			if(character === enquete.winner1){
				timesWon++;
				return `<div>
					<span class="button-round button-title" title="${enquete.theme}">第${enquete.id}回</span>${enquete.option1}
				</div>`;
			}
			if(character === enquete.winner2){
				timesWon++;
				return `<div>
					<span class="button-round button-title" title="${enquete.theme}">第${enquete.id}回</span>${enquete.option2}
				</div>`;
			}
			return '';
		}).join('');
		if(timesWon === 0){ return ""; }
		return headerTemp2 + PrizeList + footerTemp2;
	}).join('');
	document.getElementById("PrizeList").classList.remove("output-box-default");
	document.getElementById("PrizeList").innerHTML = contents;
}

//■初期化処理
function initialize() {
	//TagDataにキャラクターの内容を追加
	const characterList = LLSIdol.filterCharacterList("is:group_id:nijigasaki");
	characterList.forEach(character => {
		const objtemp = new Object();
		objtemp.name = character.firstName;
		objtemp.r = character["color"].r;
		objtemp.g = character["color"].g;
		objtemp.b = character["color"].b;

		TagData[character.id] = objtemp;
	});

	//色データをCSSに追加
	document.querySelector('style').textContent +=
	Object.keys(TagData).map( character => {
		return `
		.bg-${character} {
			background-color: ${LLS.getColorFromObject(TagData[character], 1.5)};
		}`;
	}).join('');

	DrawEnqueteTable();
	DrawPrizeList();
	
	//デバックモード時の処理
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`虹ヶ咲学園スクールアイドル同好会 マンスリーアンケートまとめ\n初期化処理： ${(TimeOutputEnd - TimeLoadingStart).toFixed(1)}ミリ秒`);
	}
}