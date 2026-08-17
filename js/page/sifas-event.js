//■キャラクターの並び順
const CharacterOrder = ["Honoka", "Eli", "Kotori", "Umi", "Rin", "Maki", "Nozomi", "Hanayo", "Nico", "Chika", "Riko", "Kanan", "Dia", "You", "Yoshiko", "Hanamaru", "Mari", "Ruby", "Ayumu", "Kasumi", "Shizuku", "Karin", "Ai", "Kanata", "Setsuna", "Emma", "Rina", "Shioriko", "Mia", "Lanzhu"];

//■各種データ
const TagData = {
	"Honoka": { "number": 0, "name": "穂乃果", "r": 255, "g": 163, "b": 54, "color": "black", "group": "M" },
	"Eli": { "number": 1, "name": "絵里", "r": 122, "g": 238, "b": 255, "color": "black", "group": "M" },
	"Kotori": { "number": 2, "name": "ことり", "r": 206, "g": 191, "b": 191, "color": "black", "group": "M" },
	"Umi": { "number": 3, "name": "海未", "r": 23, "g": 105, "b": 255, "color": "white", "group": "M" },
	"Rin": { "number": 4, "name": "凛", "r": 219, "g": 212, "b": 30, "color": "black", "group": "M" },
	"Maki": { "number": 5, "name": "真姫", "r": 255, "g": 80, "b": 62, "color": "white", "group": "M" },
	"Nozomi": { "number": 6, "name": "希", "r": 196, "g": 85, "b": 246, "color": "white", "group": "M" },
	"Hanayo": { "number": 7, "name": "花陽", "r": 106, "g": 230, "b": 115, "color": "black", "group": "M" },
	"Nico": { "number": 8, "name": "にこ", "r": 255, "g": 79, "b": 145, "color": "white", "group": "M" },
	"Chika": { "number": 9, "name": "千歌", "r": 255, "g": 149, "b": 71, "color": "black", "group": "A" },
	"Riko": { "number": 10, "name": "梨子", "r": 255, "g": 158, "b": 172, "color": "black", "group": "A" },
	"Kanan": { "number": 11, "name": "果南", "r": 39, "g": 193, "b": 183, "color": "black", "group": "A" },
	"Dia": { "number": 12, "name": "ダイヤ", "r": 219, "g": 8, "b": 57, "color": "white", "group": "A" },
	"You": { "number": 13, "name": "曜", "r": 102, "g": 192, "b": 255, "color": "black", "group": "A" },
	"Yoshiko": { "number": 14, "name": "善子", "r": 193, "g": 202, "b": 212, "color": "black", "group": "A" },
	"Hanamaru": { "number": 15, "name": "花丸", "r": 255, "g": 208, "b": 16, "color": "black", "group": "A" },
	"Mari": { "number": 16, "name": "鞠莉", "r": 194, "g": 82, "b": 198, "color": "white", "group": "A" },
	"Ruby": { "number": 17, "name": "ルビィ", "r": 255, "g": 111, "b": 190, "color": "black", "group": "A" },
	"Ayumu": { "number": 18, "name": "歩夢", "r": 255, "g": 191, "b": 224, "color": "black", "group": "N" },
	"Kasumi": { "number": 19, "name": "かすみ", "r": 213, "g": 222, "b": 112, "color": "black", "group": "N" },
	"Shizuku": { "number": 20, "name": "しずく", "r": 187, "g": 237, "b": 255, "color": "black", "group": "N" },
	"Karin": { "number": 21, "name": "果林", "r": 74, "g": 47, "b": 237, "color": "white", "group": "N" },
	"Ai": { "number": 22, "name": "愛", "r": 255, "g": 130, "b": 70, "color": "black", "group": "N" },
	"Kanata": { "number": 23, "name": "彼方", "r": 190, "g": 130, "b": 255, "color": "white", "group": "N" },
	"Setsuna": { "number": 24, "name": "せつ菜", "r": 246, "g": 14, "b": 14, "color": "white", "group": "N" },
	"Emma": { "number": 25, "name": "エマ", "r": 143, "g": 218, "b": 121, "color": "black", "group": "N" },
	"Rina": { "number": 26, "name": "璃奈", "r": 208, "g": 206, "b": 225, "color": "black", "group": "N" },
	"Shioriko": { "number": 27, "name": "栞子", "r": 36, "g": 189, "b": 139, "color": "white", "group": "N" },
	"Mia": { "number": 28, "name": "ミア", "r": 214, "g": 213, "b": 202, "color": "black", "group": "N" },
	"Lanzhu": { "number": 29, "name": "ランジュ", "r": 248, "g": 200, "b": 196, "color": "black", "group": "N" }
};

//■トリオ用のデータ集計。最大4重の配列で格納する
//  TrioHistory[a][0]   は、メンバーaの出席状況の配列
//  TrioHistory[a][b][0]は、メンバーa・a+bの共演状況の配列
//  TrioHistory[a][b][c]は、メンバーa・a+b・a+b+cの共演状況の配列
let TrioHistory = new Array(CharacterOrder.length);
for (temp1 = 0; temp1 < CharacterOrder.length; temp1++) {
	TrioHistory[temp1] = new Array(CharacterOrder.length - temp1);
	TrioHistory[temp1][0] = [];

	for (temp2 = 1; temp2 < TrioHistory[temp1].length; temp2++) {
		TrioHistory[temp1][temp2] = new Array(CharacterOrder.length - temp1 - temp2);
		TrioHistory[temp1][temp2][0] = [];

		for (temp3 = 1; temp3 < TrioHistory[temp1][temp2].length; temp3++) {
			TrioHistory[temp1][temp2][temp3] = [];
		}
	}
}
//■表にデータを埋め込む
function MakeTrioData() {
	//各イベントに埋め込まれた、参加キャラクターを見る
	window['JSON-sifas-event'].forEach(event => {
		//参加者をリストアップ・正しい順に並べ替え
		const participants = [];
		if ('UR' in event) { participants.push(...event.UR); }
		if ('SR' in event) { participants.push(...event.SR); }
		participants.sort((a, b) => {
			return CharacterOrder.findIndex(e => e === a) - CharacterOrder.findIndex(e => e === b);
		});

		if (participants.length >= 3) {
			for (let c1 = 0; c1 < participants.length; c1++) {
				const CID1 = CharacterOrder.findIndex(e => e === participants[c1]);
				TrioHistory[CID1][0].push(event.id);
				for (let c2 = c1 + 1; c2 < participants.length; c2++) {
					const CID2 = CharacterOrder.findIndex(e => e === participants[c2]);
					TrioHistory[CID1][CID2 - CID1][0].push(event.id);
					for (let c3 = c2 + 1; c3 < participants.length; c3++) {
						const CID3 = CharacterOrder.findIndex(e => e === participants[c3]);
						TrioHistory[CID1][CID2 - CID1][CID3 - CID2].push(event.id);
					}
				}

			}
		}
	});
}

//■■サブルーチン
//■該当の共演データを見つける
const findEventList = (cOrder1, cOrder2, cOrder3) => {
	if (cOrder1 === undefined) { throw new TypeError("no arguments"); }
	if (cOrder2 === undefined) { return TrioHistory[cOrder1][0]; }
	if (cOrder3 === undefined) {
		const arraytemp = [cOrder1, cOrder2].sort(function (a, b) { return a - b });
		return TrioHistory[arraytemp[0]][arraytemp[1] - arraytemp[0]][0];
	} else {
		const arraytemp = [cOrder1, cOrder2, cOrder3].sort(function (a, b) { return a - b });
		return TrioHistory[arraytemp[0]][arraytemp[1] - arraytemp[0]][arraytemp[2] - arraytemp[1]];
	}
}
//■丸ボタン
function DrawEventButton(CharId, EventId) {
	const CurrentEvent = window['JSON-sifas-event'][EventId - 1];
	const tooltip = `${CurrentEvent.name}\n(${LLS.formatDate(new Date(CurrentEvent.started))} 〜 ${LLS.formatDate(new Date(CurrentEvent.ended))})`;
	return `<div class="button-event event_${CharId}" title="${tooltip}">${EventId}</div>`;
}

//■テキストに影をつける
const ShadowText = (text) => `<strong class="shadowname">${text}</strong>`;

//■■メイン出力
//■「イベント一覧」の描画
function WriteEventList() {
	const header = `
	<div class="eventlist-header wrapper-header pc-only">
		<div>No.</div>
		<div>日時/イベント名</div>
		<div>種類</div>
		<div>登場UR</div>
		<div>登場SR</div>
	</div>`;

	const html = window['JSON-sifas-event'].map(event => {
		const URs = event.UR.map(id => {
			const characterData = LLSIdol.getCharacterDataFromGroups(id, "muse", "aqours", "nijigasaki");
			return `<span class="eventlist-group-${characterData.group_id}">${characterData.firstName}</span>`
		}).join("、");
		const SRs = event.SR.map(id => {
			const characterData = LLSIdol.getCharacterDataFromGroups(id, "muse", "aqours", "nijigasaki");
			return `<span class="eventlist-group-${characterData.group_id}">${characterData.firstName}</span>`
		}).join("、");
		const eventType = (event.type === 'story' ? "ストーリー" : "交換所");
		const dateStarted = LLS.formatDate(new Date(event.started));
		const dateEnded = LLS.formatDate(new Date(event.ended));

		return `
		<div class="eventlist-wrapper">
			<div class="grid-cell eventlist-number flex-center">${event.id}</div>
			<div class="grid-cell eventlist-name">
				<span class="eventlist-date">${dateStarted} 〜 ${dateEnded}</span>
				<span class="eventlist-sp-type eventlist-color-${event.type} sp-only">${eventType}イベント</span><br>
				<strong>${event.name}</strong>
			</div>
			<div class="grid-cell flex-center eventlist-color-${event.type} pc-only">${eventType}</div>
			<div class="grid-cell eventlist-cards pc-only"><span>${URs}</span></div>
			<div class="grid-cell eventlist-cards pc-only"><span>${SRs}</span></div>
			<div class="grid-cell eventlist-cards sp-only">UR：${URs} / SR：${SRs}</div>
		</div>`
	}).join('');
	document.getElementById("EventListContainer").innerHTML = header + html;
}

// ■「キャラクター登場回数」テーブルの作成（キャラ別）
function DrawSingleTable() {
	const header =
		`<div class="singlelist-header wrapper-header pc-only">
		<div>キャラクター</div>
		<div>登場回数</div>
		<div>参加イベント</div>
	</div>`;

	const main = CharacterOrder.map((characterId, index) => {
		const characterData = LLSIdol.getCharacterDataFromGroups(characterId, "muse", "aqours", "nijigasaki");
		const ParticipatedEventId = findEventList(index);

		return `<div class="singlelist-wrapper">
			<div class="grid-cell flex-center bg_${characterId}">${ShadowText(characterData.firstName)}</div>
			<div class="grid-cell flex-center">${ParticipatedEventId.length}回</div>
			<div class="grid-cell singlelist-count">${ParticipatedEventId.map(event => DrawEventButton(characterId, event)).join('')
			}</div>
		</div>`;
	}).join('');

	document.getElementById("SingleData").innerHTML += header + main;
}

// ■「共演ペア一覧表」の作成
function DrawPairTable() {
	//■ヘッダー
	const header = `<table id="PairTable"><thead><tr><th class="pairtable-TL"></th>${CharacterOrder.map(characterId => {
		const characterData = LLSIdol.getCharacterDataFromGroups(characterId, "muse", "aqours", "nijigasaki");
		return `<th class="pairtable-TR bg_${characterId}">${ShadowText(characterData.firstName)}</th>`
	}).join('')
		}</tr ></thead > <tbody>`;

	//■メイン
	const main = CharacterOrder.map((characterIdY, indexY) => {
		const characterDataY = LLSIdol.getCharacterDataFromGroups(characterIdY, "muse", "aqours", "nijigasaki");
		return `<tr><th class="pairtable-BL bg_${characterIdY}">${ShadowText(characterDataY.firstName)}</th>`
			+ CharacterOrder.map((characterIdX, indexX) => {
				const characterDataX = LLSIdol.getCharacterDataFromGroups(characterIdX, "muse", "aqours", "nijigasaki");
				if (characterIdX === characterIdY) { return `<td class="pairtable-same"></td>`; }

				const eventList = findEventList(indexX, indexY);
				const content = (eventList.length === 0 ? "－" :
					eventList.map(event => DrawEventButton(characterIdX, event)).join('')
				);
				return `<td class="pairtable-BR pairtable-has bg_${characterIdY}">${content}</td>`;
			}).join('') + `</tr>`;

	}).join('');

	//■フッター
	const footer = `</tbody></table > `;

	document.getElementById("PairTable-border").innerHTML = header + main + footer;
}

// ■「頻出重複トリオ」テーブルの作成
function DrawDuplicatedTrioList(min) {
	const header = `<div class="triolist-header-wrapper wrapper-header">
		<div>重複トリオ</div>
		<div>回数</div>
		<div>参加イベント</div>
	</div>`

	let html = '';

	for (temp1 = 0; temp1 < TrioHistory.length; temp1++) {
		const Char1Data = LLSIdol.getCharacterDataFromGroups(CharacterOrder[temp1], "muse", "aqours", "nijigasaki");
		for (temp2 = temp1 + 1; temp2 < TrioHistory.length; temp2++) {
			const Char2Data = LLSIdol.getCharacterDataFromGroups(CharacterOrder[temp2], "muse", "aqours", "nijigasaki");
			for (temp3 = temp2 + 1; temp3 < TrioHistory.length; temp3++) {
				const Char3Data = LLSIdol.getCharacterDataFromGroups(CharacterOrder[temp3], "muse", "aqours", "nijigasaki");
				const eventList = findEventList(temp1, temp2, temp3);
				if (eventList.length < min) { continue; }

				html += `
					<div class="triolist-wrapper">
					<div class="grid-cell bg_${Char1Data.id} flex-center">${ShadowText(Char1Data.firstName)}</div>
					<div class="grid-cell bg_${Char2Data.id} flex-center">${ShadowText(Char2Data.firstName)}</div>
					<div class="grid-cell bg_${Char3Data.id} flex-center">${ShadowText(Char3Data.firstName)}</div>
					<div class="grid-cell triolist-rows flex-center" style="background-color: hsl(${eventList.length * 50 - 60}deg 90% ${100 - eventList.length * 7}%)">
						${eventList.length}
					<\/div>
					<div class="grid-cell triolist-rows">${eventList.map(num => `「${window['JSON-sifas-event'].find(event => event.id === num).name}」`).join('')}</div>
				</div>`;
			}
		}
	}
	//■フッター
	const footer = `</tbody></table>`;

	document.getElementById("TrioTable").innerHTML = header + html + footer;
}

//■初期化処理
function initialize() {

	//LLS-idolの定義済みデータからCSSに追加
	const SIFASCharacters = LLSIdol.filterCharacterList("has:color_sifas");
	document.querySelector('style').textContent +=
		SIFASCharacters.map(character => {
			const characterColor = LLS.getColorFromColorCode(character["color_sifas"]);
			//オブジェクトのRGB値から、白・黒のどちらが文字色に相応しいかを判定する
			//参考：https://katashin.info/2018/12/18/247
			const characterColorObject = {
				"r": parseInt(character["color_sifas"].substring(0, 2), 16),
				"g": parseInt(character["color_sifas"].substring(2, 4), 16),
				"b": parseInt(character["color_sifas"].substring(4, 6), 16)
			};
			const toLinear = (c) => {
				const s = c / 255;
				return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
			};
			const Lbg = 0.2126 * toLinear(characterColorObject.r) + 0.7152 * toLinear(characterColorObject.g) + 0.0722 * toLinear(characterColorObject.b);
			const cW = 1.05 / (Lbg + 0.05);
			const cB = (Lbg + 0.05) / 0.1;
			const textColor = cW < cB ? "black" : "white";

			return `.bg_${character.id} {
	background-color: ${characterColor};
}
.event_${character.id} {
	color: ${textColor};
	background-color: ${characterColor};
}
`;
		}).join('');

	//警告解除
	document.getElementById('EventListContainer').classList.remove('output-box-default');

	MakeTrioData();
	WriteEventList();
	DrawSingleTable();
	DrawPairTable();
	DrawDuplicatedTrioList(3);


	//■デバック用
	if (isDebugMode) {
		//◆描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`スクスタ 過去のイベントまとめ\n初期化処理： ${TimeOutputEnd - TimeLoadingStart} ミリ秒`);

		//◆データの不具合チェック
		let isError = 0;

		for (let EventTemp of window['JSON-sifas-event']) {
			if (!('name' in EventTemp)) { //●タイトルが無い
				console.log('[Error] タイトル未設定のイベントがあります');
				isError++;
				break;
			}
			const EventName = EventTemp.name

			if ('UR' in EventTemp) { //●URのチェック
				for (let CharTemp of EventTemp.UR) {
					if (!(CharacterOrder.includes(CharTemp))) { //登場人物が不正
						console.log('[Error] 登場人物が不正(UR): (' + CharTemp + ')\n\tイベント名: ' + EventName);
						isError++;
					}
				}
			} else { //未設定
				console.log('[Error] 登場人物が未設定(UR)\n\tイベント名: ' + EventName);
				isError++;
			}

			if ('SR' in EventTemp) { //●SRのチェック
				for (let CharTemp of EventTemp.UR) {
					if (!(CharacterOrder.includes(CharTemp))) { //登場人物が不正
						console.log('[Error] 登場人物が不正(SR): (' + CharTemp + ')\n\tイベント名: ' + EventName);
						isError++;
					}
				}
			} else { //未設定
				console.log('[Error] 登場人物が未設定(SR)\n\tイベント名: ' + EventName);
				isError++;
			}
		}

		let EventList = window['JSON-sifas-event'];
		for (i in EventList) {
			if (EventList[i].id - 1 != i) {
				console.log((EventList[i].id - 1) + ", " + i);
				console.log('[Error] イベント番号が不正 (' + EventList[i].id + ')\n\tイベント名: ' + EventList[i].name);
				isError++;
			}
		}

		if (isError > 0) {
			alert(`${isError} 件のエラーが見つかりました。コンソールを確認してください。`);
		}
	}
}