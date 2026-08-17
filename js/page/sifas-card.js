//■各種データ
const TagData = {
	"Honoka": { "number": 0, "name": "高坂 穂乃果", "r": 255, "g": 163, "b": 54 },
	"Eli": { "number": 1, "name": "絢瀬 絵里", "r": 122, "g": 238, "b": 255 },
	"Kotori": { "number": 2, "name": "南 ことり", "r": 206, "g": 191, "b": 191 },
	"Umi": { "number": 3, "name": "園田 海未", "r": 23, "g": 105, "b": 255 },
	"Rin": { "number": 4, "name": "星空 凛", "r": 219, "g": 212, "b": 30 },
	"Maki": { "number": 5, "name": "西木野 真姫", "r": 255, "g": 80, "b": 62 },
	"Nozomi": { "number": 6, "name": "東條 希", "r": 196, "g": 85, "b": 246 },
	"Hanayo": { "number": 7, "name": "小泉 花陽", "r": 106, "g": 230, "b": 115 },
	"Nico": { "number": 8, "name": "矢澤 にこ", "r": 255, "g": 79, "b": 145 },
	"Chika": { "number": 9, "name": "高海 千歌", "r": 255, "g": 149, "b": 71 },
	"Riko": { "number": 10, "name": "桜内 梨子", "r": 255, "g": 158, "b": 172 },
	"Kanan": { "number": 11, "name": "松浦 果南", "r": 39, "g": 193, "b": 183 },
	"Dia": { "number": 12, "name": "黒澤 ダイヤ", "r": 219, "g": 7, "b": 57 },
	"You": { "number": 13, "name": "渡辺 曜", "r": 102, "g": 192, "b": 255 },
	"Yoshiko": { "number": 14, "name": "津島 善子", "r": 193, "g": 202, "b": 212 },
	"Hanamaru": { "number": 15, "name": "国木田 花丸", "r": 255, "g": 208, "b": 15 },
	"Mari": { "number": 16, "name": "小原 鞠莉", "r": 194, "g": 82, "b": 198 },
	"Ruby": { "number": 17, "name": "黒澤 ルビィ", "r": 255, "g": 111, "b": 190 },
	"Ayumu": { "number": 18, "name": "上原 歩夢", "r": 255, "g": 191, "b": 224 },
	"Kasumi": { "number": 19, "name": "中須 かすみ", "r": 213, "g": 222, "b": 112 },
	"Shizuku": { "number": 20, "name": "桜坂 しずく", "r": 187, "g": 237, "b": 255 },
	"Karin": { "number": 21, "name": "朝香 果林", "r": 74, "g": 47, "b": 237 },
	"Ai": { "number": 22, "name": "宮下 愛", "r": 255, "g": 130, "b": 70 },
	"Kanata": { "number": 23, "name": "近江 彼方", "r": 190, "g": 130, "b": 255 },
	"Setsuna": { "number": 24, "name": "優木 せつ菜", "r": 246, "g": 14, "b": 14 },
	"Emma": { "number": 25, "name": "エマ・ヴェルデ", "r": 143, "g": 218, "b": 121 },
	"Rina": { "number": 26, "name": "天王寺 璃奈", "r": 208, "g": 206, "b": 225 },
	"Shioriko": { "number": 27, "name": "三船 栞子", "r": 36, "g": 189, "b": 139 },
	"Mia": { "number": 28, "name": "ミア・テイラー", "r": 214, "g": 213, "b": 202 },
	"Lanzhu": { "number": 29, "name": "鐘 嵐珠", "r": 248, "g": 200, "b": 196 }
};
const numCharacters = Object.keys(TagData).length;

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
			const characterData = LLSIdol.getCharacterDataFromGroups(characterId, group);
			const color = LLS.getColorFromObject(characterData);
			return `<th class="HeaderR">
				<div class="top-marker bg_${characterId}">
				<strong class="shadowname">${characterData.name}</strong>
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
			const characterData = LLSIdol.getCharacterDataFromGroups(characterId, "muse", "aqours", "nijigasaki");
			const characterColor = LLS.getColorFromColorCode(characterData["color_sifas"]);
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