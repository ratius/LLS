//タグとデータベースを橋渡しする対照表
const NameMap = {
	"穂乃果": "Honoka",
	"絵里":   "Eli",
	"ことり": "Kotori",
	"海未":   "Umi",
	"凛":     "Rin",
	"真姫":   "Maki",
	"希":     "Nozomi",
	"花陽":   "Hanayo",
	"にこ":   "Nico",
	"千歌":   "Chika",
	"梨子":   "Riko",
	"果南":   "Kanan",
	"ダイヤ": "Dia",
	"曜":     "You",
	"善子":   "Yoshiko",
	"花丸":   "Hanamaru",
	"鞠莉":   "Mari",
	"ルビィ": "Ruby",
	"歩夢":   "Ayumu",
	"かすみ": "Kasumi",
	"しずく": "Shizuku",
	"果林":   "Karin",
	"愛":     "Ai", 
	"彼方":   "Kanata",
	"せつ菜": "Setsuna",
	"エマ":   "Emma",
	"璃奈":   "Rina",
	"栞子":   "Shioriko",
	"ミア":   "Mia",
	"嵐珠":   "Lanzhu"
};

//■表示するタグのデータ
const TagData = {
	"Season":       {"name": "季節の行事",                 "r":100, "g":140, "b":160, "style": "button-square"},
	"Birthday":     {"name": "誕生日",                     "r":100, "g":140, "b":160, "style": "button-square"},
	"Event":        {"name": "イベント",                   "r":100, "g":140, "b":160, "style": "button-square"},
	"Yohane":       {"name": "堕天使ヨハネ",               "r":180, "g":160, "b": 80, "style": "button-square"},
	"Washi":        {"name": "わしわしの秘密",             "r":180, "g":160, "b": 80, "style": "button-square"},
	"25252":        {"name": "にっこにっこにー",           "r":180, "g":160, "b": 80, "style": "button-square"},
	"Triathlon":    {"name": "地獄のトライアスロン",       "r":180, "g":160, "b": 80, "style": "button-square"},
	"Broadcast":    {"name": "スクールアイドル達の生配信", "r":180, "g":160, "b": 80, "style": "button-square"},
	"Meshimazu":    {"name": "せつ菜の料理",               "r":180, "g":160, "b": 80, "style": "button-square"},
	"Calorie":      {"name": "絵里のカロリー事情",         "r":180, "g":160, "b": 80, "style": "button-square"},
	"Helicopter":   {"name": "小原家のヘリコプター",       "r":180, "g":160, "b": 80, "style": "button-square"},
	"Airborne":     {"name": "空の上のステージ",           "r":180, "g":160, "b": 80, "style": "button-square"},
	"Amazake":      {"name": "おいしい甘酒のお店",         "r":180, "g":160, "b": 80, "style": "button-square"},
	"Marathon":     {"name": "スクールアイドルDVDマラソン","r":180, "g":160, "b": 80, "style": "button-square"},
	"SelectShop":   {"name": "セレクトショップ",           "r":180, "g":160, "b": 80, "style": "button-square"},
	"ChouCream":    {"name": "にこにこシュークリーム",     "r":180, "g":160, "b": 80, "style": "button-square"},
	"HoneyLemon":   {"name": "ナイショのはちみつレモン",   "r":180, "g":160, "b": 80, "style": "button-square"},
	"Channel":      {"name": "スクールアイドルチャンネル", "r":180, "g":160, "b": 80, "style": "button-square"},
	"Karaage":      {"name": "にこちゃんの唐揚げ",         "r":180, "g":160, "b": 80, "style": "button-square"},
	"Xmas2021":     {"name": "2021年のクリスマス",         "r":180, "g":160, "b": 80, "style": "button-square"},
	"Sentai":       {"name": "スクールアイドル戦隊",       "r":180, "g":160, "b": 80, "style": "button-square"},
	"Maid":         {"name": "ことりのメイドカフェ",       "r":180, "g":160, "b": 80, "style": "button-square"},
	"Skateboarding":{"name": "GWはみんなでスケボー",       "r":180, "g":160, "b": 80, "style": "button-square"}
};
//■絞り込みのソート対象
const SortTarget = [
	{"name": "2020年 2月〜3月",   "condition": "after:2020-02-01 before:2020-03-31"},
	{"name": "2020年 4月〜6月",   "condition": "after:2020-04-01 before:2020-06-30"},
	{"name": "2020年 7月〜9月",   "condition": "after:2020-07-01 before:2020-09-30"},
	{"name": "2020年 10月〜12月", "condition": "after:2020-10-01 before:2020-12-31"},
	{"name": "2021年 1月〜3月",   "condition": "after:2021-01-01 before:2021-03-31"},
	{"name": "2021年 4月〜6月",   "condition": "after:2021-04-01 before:2021-06-30"},
	{"name": "2021年 7月〜9月",   "condition": "after:2021-07-01 before:2021-09-30"},
	{"name": "2021年 10月〜12月", "condition": "after:2021-10-01 before:2021-12-31"},
	{"name": "2022年 1月〜3月",   "condition": "after:2022-01-01 before:2022-03-31"},
	{"name": "2022年 4月〜6月",   "condition": "after:2022-04-01 before:2022-06-30"},
	{"name": "2022年 7月〜9月",   "condition": "after:2022-07-01 before:2022-09-30"},
	{"name": "2022年 10月〜12月", "condition": "after:2022-10-01 before:2022-12-31"},
	{"name": "2023年 1月〜3月",   "condition": "after:2023-01-01 before:2023-03-31"},
	{"name": "2023年 4月〜6月",   "condition": "after:2023-04-01 before:2023-06-30"},
	{"name": "----"},
	{"name": "出演：高坂 穂乃果", "condition": "tag:Honoka"},
	{"name": "出演：絢瀬 絵里", "condition": "tag:Eli"},
	{"name": "出演：南 ことり", "condition": "tag:Kotori"},
	{"name": "出演：園田 海未", "condition": "tag:Umi"},
	{"name": "出演：星空 凛", "condition": "tag:Rin"},
	{"name": "出演：西木野 真姫", "condition": "tag:Maki"},
	{"name": "出演：東條 希", "condition": "tag:Nozomi"},
	{"name": "出演：小泉 花陽", "condition": "tag:Hanayo"},
	{"name": "出演：矢澤 にこ", "condition": "tag:Nico"},
	{"name": "出演：高海 千歌", "condition": "tag:Chika"},
	{"name": "出演：桜内 梨子", "condition": "tag:Riko"},
	{"name": "出演：松浦 果南", "condition": "tag:Kanan"},
	{"name": "出演：黒澤 ダイヤ", "condition": "tag:Dia"},
	{"name": "出演：渡辺 曜", "condition": "tag:You"},
	{"name": "出演：津島 善子", "condition": "tag:Yoshiko"},
	{"name": "出演：国木田 花丸", "condition": "tag:Hanamaru"},
	{"name": "出演：小原 鞠莉", "condition": "tag:Mari"},
	{"name": "出演：黒澤 ルビィ", "condition": "tag:Ruby"},
	{"name": "出演：上原 歩夢", "condition": "tag:Ayumu"},
	{"name": "出演：中須 かすみ", "condition": "tag:Kasumi"},
	{"name": "出演：桜坂 しずく", "condition": "tag:Shizuku"},
	{"name": "出演：朝香 果林", "condition": "tag:Karin"},
	{"name": "出演：宮下 愛", "condition": "tag:Ai"},
	{"name": "出演：近江 彼方", "condition": "tag:Kanata"},
	{"name": "出演：優木 せつ菜", "condition": "tag:Setsuna"},
	{"name": "出演：エマ・ヴェルデ", "condition": "tag:Emma"},
	{"name": "出演：天王寺 璃奈", "condition": "tag:Rina"},
	{"name": "出演：三船 栞子", "condition": "tag:Shioriko"},
	{"name": "出演：ミア・テイラー", "condition": "tag:Mia"},
	{"name": "出演：鐘 嵐珠", "condition": "tag:Lanzhu"},
	{"name": "----"},
	{"name": "テーマ：季節の行事", "condition": "tag:Season"},
	{"name": "テーマ：誕生日", "condition": "tag:Birthday"},
	{"name": "テーマ：イベント", "condition": "tag:Event"},
	{"name": "----"},
	{"name": "シリーズ：堕天使ヨハネ", "condition": "tag:Yohane"},
	{"name": "シリーズ：わしわしの秘密", "condition": "tag:Washi"},
	{"name": "シリーズ：にっこにっこにー", "condition": "tag:25252"},
	{"name": "シリーズ：地獄のトライアスロン", "condition": "tag:Triathlon"},
	{"name": "シリーズ：スクールアイドル達の生配信", "condition": "tag:Broadcast"},
	{"name": "シリーズ：せつ菜の料理", "condition": "tag:Meshimazu"},
	{"name": "シリーズ：絵里のカロリー事情", "condition": "tag:Calorie"},
	{"name": "シリーズ：小原家のヘリコプター", "condition": "tag:Helicopter"},
	{"name": "シリーズ：空の上のステージ", "condition": "tag:Airborne"},
	{"name": "シリーズ：おいしい甘酒のお店", "condition": "tag:Amazake"},
	{"name": "シリーズ：スクールアイドルDVDマラソン", "condition": "tag:Marathon"},
	{"name": "シリーズ：セレクトショップ", "condition": "tag:SelectShop"},
	{"name": "シリーズ：にこにこシュークリーム", "condition": "tag:ChouCream"},
	{"name": "シリーズ：ナイショのはちみつレモン", "condition": "tag:HoneyLemon"},
	{"name": "シリーズ：スクールアイドルチャンネル", "condition": "tag:Channel"},
	{"name": "シリーズ：にこちゃんの唐揚げ", "condition": "tag:Karaage"},
	{"name": "シリーズ：2021年のクリスマス", "condition": "tag:Xmas2021"},
	{"name": "シリーズ：スクールアイドル戦隊", "condition": "tag:Sentai"},
	{"name": "シリーズ：ことりのメイドカフェ", "condition": "tag:Maid"},
	{"name": "シリーズ：GWはみんなでスケボー", "condition": "tag:Skateboarding"},
];

//■■メイン出力
//■条件に合致するストーリーを抜き出してリストアップ
function DrawStoryList(conditions){
	if(conditions === "undefined"){ return; }
	const TimeOutputStart = performance.now();
	let filteredData = window['JSON-sifas-theater'];
	
	const condition = conditions.split(' ');
	condition.forEach( c => {
		if(c.startsWith('before:')) { //「before:」 - 指定された日付以前
			const beforeDate = new Date(c.split(':')[1]);
			filteredData = filteredData.filter( connect => new Date(connect.date) <= beforeDate);
		}
		else if(c.startsWith('after:')) { //「after:」 - 指定された日付まで
			const afterDate = new Date(c.split(':')[1]);
			filteredData = filteredData.filter( connect => new Date(connect.date) >= afterDate);
		}
		else if(c.startsWith('tag:')) {
			const tag = c.split(':')[1];
			filteredData = filteredData.filter( connect => connect.tags && connect.tags.includes(tag));
		}
	});
	if(filteredData.length === 0){ return false;}
	
	document.getElementById("StoryContainer").innerHTML = filteredData.map( story => {
		const hasStory = ('text' in story && story["text"] !== "");
		const storyTitleAtttribute = 
		(hasStory ?
			`class="story-title has_text" onclick="MakeModal('${story.id}')"`
		:
			`class="story-title"`
		);
		const tagContent = story.tags.map( tag => tag in TagData ? createStyledTag(TagData[tag], tag) : '').join('');

		return `
		<article class="story">
			<div class="story-date">${story.date.replaceAll('-', '/')}</div>
			<div class="story-titleContainer">
				<div ${storyTitleAtttribute}>${story.title}</div>
				<div class="story-memo">${('memo' in story ? convertMarkup(story.memo) : '')}</div>
			</div>
			<div class="story-tags">${tagContent}</div>
			</div>
		</article>`;
	}).join('');
	
	if(isDebugMode) {
		const TimeOutputEnd = performance.now();
		console.log(`${conditions} (${filteredData.length}件) 出力完了。\n所要時間: ${TimeOutputEnd - TimeOutputStart}ミリ秒`);
	}
}

//■指定されたIDの毎日劇場をモーダルウィンドウに描画
function MakeModal(id){
	const result = window['JSON-sifas-theater'].find((temp) => temp.id === id);
	if(!result){ return false;}
	result.text = convertMarkup(result.text);
	
	//タイトルを表示
	document.getElementById("Modal-Title").innerHTML = result.title;
	
	//注釈リストの作成
	let noteList = [];
	const pattern = new RegExp(/<span class="_pre-note" data-note="(.+)">(.+)<\/span>/g);
	while ((match = pattern.exec(result.text)) !== null) {
		noteList.push(match[1]);
	}
	
	//本文の置換
	let noteNumber = 1;
	const processedText = result.text.replace(pattern, function(match, s1, s2) {
        return `<span class="underline">${s2}<sup style="color:purple">*${noteNumber}</sup></span>{{notenum:${noteNumber++}}}`
    });
    const textLines = processedText.split('\n');
	
	//本文の描画
	document.getElementById("Modal-Text").innerHTML = textLines.map( (text, index) => {
		text = text.split('\t');
		
		let currentNote = [];
        const processedLine = text.map(x => {
			x = x.replace(/\{\{notenum:(\d+)\}\}/g, function(match, noteIndex){
				if(match) { currentNote.push(`<span>*${noteIndex}： ${noteList[parseInt(noteIndex, 10)-1]}</span>`);}
				return '';
			});
			return x;
		});
		const characterTagName = result.tags[parseInt(text[0],10)];
		const characterName = (isNaN(text[0]) ? text[0] : createStyledTag(TagData[characterTagName], characterTagName));
		
		return characterName
		+ (processedLine.length >= 2 ? `<p>${processedLine[1]}</p>` : '')
		+ (currentNote.length ? `<p class="note">${currentNote.join('<br>')}</p>` : '')
		+ (index === result.text.length-1 ? '' : '<hr>');
	}).join("");
	
	//ポップアップを表示
    document.getElementById("Modal").style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
	document.getElementById("Modal").classList.remove("fadeout");
	document.getElementById("Modal").style.display = "flex";
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
	document.body.style.overflow = 'hidden';
}

//■モーダルウィンドウを閉じる
function CloseModal(target){
	let ModalBG = document.getElementById('Modal');
	if(target === null){ //ターゲット指定
		if(target !== event.target.closest('#Modal-Container')){
			return false;
		}
	}
    document.getElementById("Modal").style.paddingRight = '';
	document.body.style.overflow = '';
    document.body.style.paddingRight = '';
	ModalBG.classList.add("fadeout");
	setTimeout(function(){
		document.getElementById("Modal-ReaderBox").scrollTop = 0;
		ModalBG.style.display = "none";
	}, 200);
}

//■初期化処理
function initialize() {
	//TagDataにキャラクターの内容を追加
	const characterList = window['JSON-characterDB'].filter(entry => entry.hasOwnProperty('color_sifas'));
	characterList.forEach(character => {
		const objtemp = new Object();
		objtemp.name = (character.firstName === '嵐珠' ? 'ランジュ' : character.firstName); //鐘嵐珠はスクスタでは「ランジュ」表記
		objtemp.r = parseInt(character['color_sifas'].substring(0, 2), 16);
		objtemp.g = parseInt(character['color_sifas'].substring(2, 4), 16);
		objtemp.b = parseInt(character['color_sifas'].substring(4, 6), 16);
		objtemp.style = "button-round";

		TagData[NameMap[character.firstName]] = objtemp;
	});

	//TagDataの色データをCSSに追加
	document.querySelector('style').textContent += Object.keys(TagData).map( character => {
		return `
		.button-${character} {
			background-color: ${getColor(TagData[character], 2)};
			border-color: ${getColor(TagData[character], 0)}
		}`;
	}).join('');

	//セレクトボックスに要素を追加
	SortTarget.forEach( temp => {
		if(temp.name !== "debug" || isDebugMode){
			const option = document.createElement("option");
			option.text = temp.name;
			option.value = temp.condition;
			document.getElementById("PullDownMenu").appendChild(option);
		}
	});

	//警告解除
	document.getElementById('StoryContainer').classList.remove('output-box-default');
	document.getElementById('StoryContainer').innerHTML = `
		<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">
			(上のプルダウンメニューから、期間を選んでください)
		</div>`;

	//Escキーでモーダルウィンドウを閉じる
	document.addEventListener('keydown', function(e){
		if(e.key === 'Escape'){ CloseModal() };
	});

	//デバック用
	if(isDebugMode) {
		document.getElementById('PullDownMenu').selectedIndex = 1;
		DrawStoryList(document.getElementById('PullDownMenu').value);
	
		let publishedStory = 0;
		//データの不具合チェック
		const isError = window['JSON-sifas-theater'].reduce( (acc, story) => {
			const currentStory = '\n該当箇所：' + `${story.date}「${story.title}」`;

			if(!("tags" in story)){
				console.error('エラー：tagsが存在しない' + currentStory);
				return acc + 1;
			}
			const tagError = story.tags.reduce( (acc, tag) => {
				if(!(tag in TagData)) {
					console.error('エラー：不正なタグ名(' + tag + ')' + currentStory);
					return acc + 1;
				}
			}, 0);
			if(tagError){ return acc + tagError; }

			if(!("memo" in story) || story.memo === ""){ return acc;}
			publishedStory++;
			
			const TextTemp = story.text.split('\n');
			return acc + TextTemp.reduce( (acc2, val2, index2) => {
				const ErrorLocation = ' (' + story.date
				 + '「' + story.title + '」' + (index2+1) + '行目)';
				
				const TextTemp2 = val2.split('\t');
				if(!isNaN(TextTemp2[0])){
					if(TextTemp2.length !== 2){
						console.error('エラー：パラメータ数が異常' + ErrorLocation);
						return acc2 + 1;
					} else if(!isFinite(TextTemp2[0])){
						console.error('エラー：登場人物が不正な値 (' + TextTemp2[0] + ')' + ErrorLocation);
						return acc2 + 1;
					} else if(TextTemp2[0] === ''){
						console.error('エラー：登場人物が未設定' + ErrorLocation);
						return acc2 + 1;
					} else if(TextTemp2[0] > story.tags.length){
						console.error('エラー：登場人物のデータ範囲エラー' + ErrorLocation);
						return acc2 + 1;
					}
				}
				return acc2;
			}, 0);
		}, 0);
		if(isError){
			alert('' + isError + '件のエラーが見つかりました。コンソールを確認してください。');
		}
		//document.querySelector('style').textContent += 
		//`#Modal-ReaderBox {
		//	width: 726px !important;
		//}`;
		
		console.log(`メモ掲載率：${publishedStory}/${window['JSON-sifas-theater'].length} (${(publishedStory / window['JSON-sifas-theater'].length * 100).toFixed(2)}%)`);
		
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`スクスタ 毎日劇場データベース\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}