//タグとデータベースを橋渡しする対照表
const NameMap = {
	"Honoka":   "穂乃果",
	"Eli":      "絵里",
	"Kotori":   "ことり",
	"Umi":      "海未",
	"Rin":      "凛",
	"Maki":     "真姫",
	"Nozomi":   "希",
	"Hanayo":   "花陽",
	"Nico":     "にこ",
	"Chika":    "千歌",
	"Riko":     "梨子",
	"Kanan":    "果南",
	"Dia":      "ダイヤ",
	"You":      "曜",
	"Yoshiko":  "善子",
	"Hanamaru": "花丸",
	"Mari":     "鞠莉",
	"Ruby":     "ルビィ",
	"Ayumu":    "歩夢",
	"Kasumi":   "かすみ",
	"Shizuku":  "しずく",
	"Karin":    "果林",
	"Ai":       "愛",
	"Kanata":   "彼方",
	"Setsuna":  "せつ菜",
	"Emma":     "エマ",
	"Rina":     "璃奈",
	"Shioriko": "栞子",
	"Mia":      "ミア",
	"Lanzhu":   "嵐珠",
	"Yu":       "侑",
	"Kanon":    "かのん",
	"Keke":     "可可",
	"Chisato":  "千砂都",
	"Sumire":   "すみれ",
	"Ren":      "恋",
	"Kinako":   "きな子",
	"Mei":      "メイ",
	"Shiki":    "四季",
	"Natsumi":  "夏美",
	"Margarete":"マルガレーテ",
	"Tomari":   "冬毬"
};

//■表示するタグのデータ
const TagData = {	
	"Season":   {"name": "季節の行事", "r":100, "g":140, "b":160, "style": "button-square"},
	"Birthday": {"name": "誕生日",     "r":100, "g":140, "b":160, "style": "button-square"},
	"Event":    {"name": "イベント",   "r":100, "g":140, "b":160, "style": "button-square"}
};

//■ソート対象
const SortTarget = [
{"name": "2023年12月", "condition": "date,2023/12/01,2023/12/31"},
{"name": "2024年1月",  "condition": "date,2024/01/01,2024/01/31"},
{"name": "2024年2月",  "condition": "date,2024/02/01,2024/02/29"},
{"name": "2024年3月",  "condition": "date,2024/03/01,2024/03/31"},
{"name": "----"},
{"name": "出演：高坂 穂乃果",            "condition": "tag,Honoka"},
{"name": "出演：絢瀬 絵里",              "condition": "tag,Eli"},
{"name": "出演：南 ことり",              "condition": "tag,Kotori"},
{"name": "出演：園田 海未",              "condition": "tag,Umi"},
{"name": "出演：星空 凛",                "condition": "tag,Rin"},
{"name": "出演：西木野 真姫",            "condition": "tag,Maki"},
{"name": "出演：東條 希",                "condition": "tag,Nozomi"},
{"name": "出演：小泉 花陽",              "condition": "tag,Hanayo"},
{"name": "出演：矢澤 にこ",              "condition": "tag,Nico"},
{"name": "出演：高海 千歌",              "condition": "tag,Chika"},
{"name": "出演：桜内 梨子",              "condition": "tag,Riko"},
{"name": "出演：松浦 果南",              "condition": "tag,Kanan"},
{"name": "出演：黒澤 ダイヤ",            "condition": "tag,Dia"},
{"name": "出演：渡辺 曜",                "condition": "tag,You"},
{"name": "出演：津島 善子",              "condition": "tag,Yoshiko"},
{"name": "出演：国木田 花丸",            "condition": "tag,Hanamaru"},
{"name": "出演：小原 鞠莉",              "condition": "tag,Mari"},
{"name": "出演：黒澤 ルビィ",            "condition": "tag,Ruby"},
{"name": "出演：上原 歩夢",              "condition": "tag,Ayumu"},
{"name": "出演：中須 かすみ",            "condition": "tag,Kasumi"},
{"name": "出演：桜坂 しずく",            "condition": "tag,Shizuku"},
{"name": "出演：朝香 果林",              "condition": "tag,Karin"},
{"name": "出演：宮下 愛",                "condition": "tag,Ai"},
{"name": "出演：近江 彼方",              "condition": "tag,Kanata"},
{"name": "出演：優木 せつ菜",            "condition": "tag,Setsuna"},
{"name": "出演：エマ・ヴェルデ",         "condition": "tag,Emma"},
{"name": "出演：天王寺 璃奈",            "condition": "tag,Rina"},
{"name": "出演：三船 栞子",              "condition": "tag,Shioriko"},
{"name": "出演：ミア・テイラー",         "condition": "tag,Mia"},
{"name": "出演：鐘 嵐珠",                "condition": "tag,Lanzhu"},
{"name": "出演：高咲 侑",                "condition": "tag,Yu"},
{"name": "出演：澁谷 かのん",            "condition": "tag,Kanon"},
{"name": "出演：唐 可可",                "condition": "tag,Keke"},
{"name": "出演：嵐 千砂都",              "condition": "tag,Chisato"},
{"name": "出演：平安名 すみれ",          "condition": "tag,Sumire"},
{"name": "出演：葉月 恋",                "condition": "tag,Ren"},
{"name": "出演：桜小路 きな子",          "condition": "tag,Kinako"},
{"name": "出演：米女 メイ",              "condition": "tag,Mei"},
{"name": "出演：若菜 四季",              "condition": "tag,Shiki"},
{"name": "出演：鬼塚 夏美",              "condition": "tag,Natsumi"},
{"name": "出演：ウィーン・マルガレーテ", "condition": "tag,Margarete"},
{"name": "出演：鬼塚 冬毬",              "condition": "tag,Tomari"},
{"name": "----"},
{"name": "テーマ：季節の行事", "condition": "tag,Season"},
{"name": "テーマ：誕生日", "condition":     "tag,Birthday"},
{"name": "テーマ：イベント", "condition": "tag,Event"},
//{"name": "----"},
//{"name": "シリーズ：堕天使ヨハネ", "condition": "tag,Yohane"},
];

//■■メイン出力
//■条件に合致するストーリーを抜き出してリストアップ
function DrawStoryList(conditions){
	const TimeOutputStart = performance.now();

	let storyResult = new Array();
	if(conditions === "undefined"){ //絞り込み条件が指定されていない場合、キャンセル
		return false;
	}
	conditions = conditions.split(',');
	
	if(conditions[0] === 'date'){ //日付による絞り込み
		const dateStart = new Date(conditions[1]);
		const dateEnd = new Date(conditions[2]);
		storyResult = window['JSON-llsif2-theater'].filter(temp => {
			const dateStory = new Date(temp.date);
			return dateStory.getTime() >= dateStart.getTime() && dateStory.getTime() <= dateEnd.getTime();
		});
	} else if(conditions[0] === 'tag'){ //タグによる絞り込み
		storyResult = window['JSON-llsif2-theater'].filter(temp => temp.tags.indexOf(conditions[1]) !== -1);
	} else {
		return false;
	}
	
	document.getElementById("StoryContainer").innerHTML = storyResult.map( story => {
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
			<div class="story-date">${story.date}</div>
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
		console.log(`${conditions}出力完了。\n所要時間: ${TimeOutputEnd - TimeOutputStart}ミリ秒`);
	}
}

//■指定されたIDの毎日劇場をモーダルウィンドウに描画
function MakeModal(id){
	const result = window['JSON-llsif2-theater'].find(temp => temp.id === id);
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
		
		const CharacterName = (isNaN(text[0]) ? text[0] : DrawCharName(result.tags[parseInt(text[0],10)]));
		
		return CharacterName
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
	Object.keys(NameMap).forEach((tag) => {
		const firstName = NameMap[tag];
		const character = window['JSON-characterDB'].find(entry => entry.firstName === firstName);

		const objtemp = new Object();
		objtemp.name = character.firstName;
		objtemp.r = parseInt(character['color_llsif2'].substring(0, 2), 16);
		objtemp.g = parseInt(character['color_llsif2'].substring(2, 4), 16);
		objtemp.b = parseInt(character['color_llsif2'].substring(4, 6), 16);
		objtemp.style = "button-round";

		TagData[tag] = objtemp;
	});

	//TagDataの色データをCSSに追加
	document.querySelector('style').textContent += Object.keys(TagData).map( character => {
		return `
		.button-${character} {
			background-color: ${getColor(TagData[character], 2.5)};
			border-color: ${getColor(TagData[character], 0)}
		}`;
	}).join('');

	//セレクトボックスに要素を追加
	SortTarget.forEach( temp => {
		const option = document.createElement("option");
		option.text = temp.name;
		option.value = temp.condition;
		document.getElementById("PullDownMenu").appendChild(option);
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
		//データの不具合チェック
		let idTemp = "";
		let dateTemp = "";
		const isError = window['JSON-llsif2-theater'].reduce( (acc, story) => {
			const currentStory = `(${story.date}「${story.title}」)`;
			
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
			
			if(idTemp === story.id) { 
				console.error('エラー：ID重複 (' + story.id + ')' + currentStory);
				acc++;
			}
			idTemp = story.id;
			if(dateTemp === story.date) { 
				console.error('エラー：日付重複 ' + currentStory);
				acc++;
			}
			dateTemp = story.date;
			if(!('text' in story)){ return acc;}
			if(story['title'] === ''){ return acc;}
			if(story['text'] === ''){ return acc;}
			const TextTemp = story.text.split('\n');
			return acc + TextTemp.reduce( (acc2, txt, index2) => {
				const ErrorLocation = ` (${story.date}「${story.title}」${(index2+1)}行目)`;
				
				const TextTemp2 = txt.split('\t');
				if(TextTemp2.length !== 2){
					console.error('エラー：パラメータ数が異常' + ErrorLocation);
					return ++acc2;
				}
				if(!isFinite(TextTemp2[0])){
					console.error('エラー：登場人物が不正な値' + ErrorLocation);
					return ++acc2;
				} else if(TextTemp2[0] === ''){
					console.error('エラー：登場人物が未設定' + ErrorLocation);
					return ++acc2;
				} else if(TextTemp2[0] > story.tags.length){
					console.error('エラー：登場人物のデータ範囲エラー' + ErrorLocation);
					return ++acc2;
				}
				return acc2;
			}, 0);
		}, 0);
		if(isError){
			alert('' + isError + '件のエラーが見つかりました。コンソールを確認してください。');
		}

		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`スクフェス2 毎日劇場アーカイブ\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}