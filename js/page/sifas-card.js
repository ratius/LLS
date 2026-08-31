const sortedCardList = {};

const OutfitList = {
	"muse": ["初期", "スノハレ", "ぼららら", "それ僕", "WR", "ユメトビ", "キラセン", "ノーブラ", "AA", "もぎゅ", "僕今", "ゆゆゆ", "豆1", "ラブレス", "HtH"],
	"aqours": ["初期", "君ここ", "青ジャン", "ブラメロ", "恋アク", "未ホラ", "ミラウェ", "HPT", "未ドリ", "WBNW", "MY舞", "みら僕", "サンフレ", "君瞳", "ゼロワン"],
	"nijigasaki": ["初期", "アニマル", "ローズ", "マーチング", "LUMF", "3rdソロ", "虹パ", "JB!!!", "虹色の心", "L！L！L！", "ワルツ他", "CDCS", "未ハモ他", "永遠の一瞬", "ミラステ"]
};

const ToolTipSource = { 'gacha': 'Ｅ特効', 'reward': 'Ｅ報酬', 'fes': 'Ｆ限定', 'party': 'Ｐ限定', 'none': '非イベ', 'release': '初期　', 'scheduled': '(追加予定)' };


// ■カード情報からセルを作成
const createCellFromCard = (card) => {
	return `<td class="${card.source}" title="No.${card.id} ${card.desc}&#10;覚醒前：${card?.cn1}&#10;覚醒後：${card?.cn2}">
	<strong>${ToolTipSource[card.source]}</strong>
	<img src="img/atr_${card.atr}.png" width="24" height="24" alt="${card.atr}"
	><img src="img/type_${card.type}.png" width="24" height="24" alt="${card.type}">
	<br>${card.date}</td>`;
}

// ■テーブルを作成 (<table> 込)
const DrawCardTable = (group, characters) => {
	//ヘッダー
	const header = `<table class="cardlist-table" style="min-width: ${(characters.length + 1) * 110}px"><thead>\n<tr>\n<th class="HeaderL"></th>\n`
		+ characters.map((characterId) => {
			const characterData = LLSIdol.findCharacterData(characterId);
			return `<th class="HeaderR">
				<div class="top-marker bg_${characterId}">
				<strong class="shadowname">${characterData.fullName}</strong>
				</div>
				</th>\n`;
		}).join('')
		+ '</tr>\n</thead>\n';

	//ヘッダー以外の部分はレアリティごとに個別に出力して合体
	return header + `<tbody>`
		+ DrawCardTableByRarity(group, characters, "UR")
		+ DrawCardTableByRarity(group, characters, "SR")
		+ `</tbody></table>`;
}

// ■特定レアリティのテーブルの内容を出力
function DrawCardTableByRarity(group, characters, rarity) {
	let row = 0;
	let tableMain = "";
	while (row < 20) {
		let OutputRow = `<tr class="${rarity}"><th><span class="rowCaption">${rarity} ${row + 1}枚目</span>${rarity === "SR" ? `<br><span style="font-weight:normal">(${OutfitList[group][row]})</span>` : ""}</th>`;
		let hasCardInRow = false;

		characters.forEach(character => {
			const cardData = sortedCardList[character][rarity][row] ?? undefined;
			if (cardData) { //カードが存在する
				if (cardData.id === -2) { //欠番（上にrowspan="○○"のセルが伸びる部分）
					//何も出力しない
				} else if (cardData.id === -1) { //欠番（先頭）
					OutputRow += `<td class="na" rowspan="${cardData.offset}"></td>\n`;
				} else { //カードデータがある
					OutputRow += createCellFromCard(cardData);
				}
				hasCardInRow = true;
			} else {
				OutputRow += `<td></td>`;
			}
		});

		if (hasCardInRow) {
			tableMain += OutputRow + `</tr>`;
			row++;
		} else {
			break;
		}
	}
	return tableMain;
}

function initialize() {
	const TimeOutputStart = performance.now();

	//メンバーID定義
	const MemberIdMuse = ["Honoka", "Eli", "Kotori", "Umi", "Rin", "Maki", "Nozomi", "Hanayo", "Nico"];
	const MemberIdAqours = ["Chika", "Riko", "Kanan", "Dia", "You", "Yoshiko", "Hanamaru", "Mari", "Ruby"];
	const MemberIdNiji = ["Ayumu", "Kasumi", "Shizuku", "Karin", "Ai", "Kanata", "Setsuna", "Emma", "Rina", "Shioriko", "Mia", "Lanzhu"];
	const AllMembers = [...MemberIdMuse, ...MemberIdAqours, ...MemberIdNiji];

	//キャラクターIDから色データをCSSに追加
	document.querySelector('style').textContent +=
		AllMembers.map(characterId => {
			const characterData = LLSIdol.findCharacterData(characterId);
			const characterColor = LLS.getColorFromObject(characterData["color_sifas"]);
			return `
		.bg_${characterId} {
			background-color: ${characterColor};
		}`;
		}).join('');

	//JSONからカード情報を読み込み整理する
	AllMembers.forEach(memberID => sortedCardList[memberID] = { "UR": [], "SR": [] });
	window["JSON-sifas-card"].forEach(card => {
		const rarity = card.rare;
		if (card.id === -1) { // 欠番扱いならoffsetの枚数だけ、{"id":-2} というデータを加える
			sortedCardList[card.name][rarity].push(card);
			for (i = 0; i < card.offset - 1; i++) {
				sortedCardList[card.name][rarity].push({ "id": -2 });
			}
		} else {
			sortedCardList[card.name][rarity].push(card);
		}
	});

	//書き出し
	document.getElementById("OutputMuse").innerHTML = DrawCardTable("muse", MemberIdMuse);
	document.getElementById("OutputAqours").innerHTML = DrawCardTable("aqours", MemberIdAqours);
	document.getElementById("OutputNiji").innerHTML = DrawCardTable("nijigasaki", MemberIdNiji);

	//■デバックモード時の処理
	if (isDebugMode) {
		//◆描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log('スクスタ 実装カード一覧\n初期描画処理: ' + (TimeOutputEnd - TimeOutputStart).toFixed(1) + ' ミリ秒');

		//◆データの不具合チェック
		let isError = 0;
		let CurrentId = -1;
		let CurrentDate = new Date("2019/01/01");
		for (const CardTemp of window["JSON-sifas-card"]) {
			if (CardTemp.id == -1) { continue; }
			if (CardTemp.id < CurrentId) { //●前のカードより小さいID番号
				console.log('[Error] カードNo.の順序ミス: \n'
					+ ('name' in CardTemp ? '\tName: ' + CardTemp.name + '\n' : '')
					+ ('cn1' in CardTemp ? '\tcn1: ' + CardTemp.cn1 + '\n' : '')
					+ ('cn2' in CardTemp ? '\tcn2: ' + CardTemp.cn2 + '\n' : '')
				);
				isError++;
			} else {
				CurrentId = CardTemp.id;
			}

			if (Math.round(CurrentDate - new Date(CardTemp.date)) > 432000000) { //●前のカードより5日以上早い場合
				console.log('[Error] 日付の順序ミス: \n'
					+ ('id' in CardTemp ? '\tid: ' + CardTemp.id + '\n' : '')
					+ ('name' in CardTemp ? '\tName: ' + CardTemp.name + '\n' : '')
					+ ('cn1' in CardTemp ? '\tcn1: ' + CardTemp.cn1 + '\n' : '')
					+ ('cn2' in CardTemp ? '\tcn2: ' + CardTemp.cn2 + '\n' : '')
				);
				isError++;
			} else {
				CurrentDate = new Date(CardTemp.date);
			}
		}
		if (isError > 0) {
			alert('' + isError + '件のエラーが見つかりました。コンソールを確認してください。');
		}
	}

}