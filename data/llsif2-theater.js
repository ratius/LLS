//■タグデータ
const TagData = {
	"Honoka":   {"name": "穂乃果",      "r":243, "g":133, "b":  0, "style": "round"},
	"Eli":      {"name": "絵里",        "r": 46, "g":191, "b":212, "style": "round"},
	"Kotori":   {"name": "ことり",      "r":166, "g":154, "b":154, "style": "round"},
	"Umi":      {"name": "海未",        "r":  9, "g": 77, "b":202, "style": "round"},
	"Rin":      {"name": "凛",          "r":219, "g":212, "b": 30, "style": "round"},
	"Maki":     {"name": "真姫",        "r":205, "g": 34, "b": 16, "style": "round"},
	"Nozomi":   {"name": "希",          "r":160, "g": 43, "b":212, "style": "round"},
	"Hanayo":   {"name": "花陽",        "r": 59, "g":203, "b": 69, "style": "round"},
	"Nico":     {"name": "にこ",        "r":211, "g": 27, "b": 96, "style": "round"},

	"Chika":    {"name": "千歌",        "r":236, "g":116, "b": 28, "style": "round"},
	"Riko":     {"name": "梨子",        "r":233, "g":114, "b":132, "style": "round"},
	"Kanan":    {"name": "果南",        "r": 13, "g":148, "b":139, "style": "round"},
	"Dia":      {"name": "ダイヤ",      "r":170, "g":  0, "b": 40, "style": "round"},
	"You":      {"name": "曜",          "r": 56, "g":153, "b":220, "style": "round"},
	"Yoshiko":  {"name": "善子",        "r":151, "g":160, "b":172, "style": "round"},
	"Hanamaru": {"name": "花丸",        "r":226, "g":181, "b":  0, "style": "round"},
	"Mari":     {"name": "鞠莉",        "r":148, "g": 35, "b":152, "style": "round"},
	"Ruby":     {"name": "ルビィ",      "r":234, "g": 75, "b":162, "style": "round"},

	"Ayumu":    {"name": "歩夢",        "r":246, "g":150, "b":201, "style": "round"},
	"Kasumi":   {"name": "かすみ",      "r":213, "g":222, "b":112, "style": "round"},
	"Shizuku":  {"name": "しずく",      "r":138, "g":204, "b":228, "style": "round"},
	"Karin":    {"name": "果林",        "r": 42, "g": 20, "b":180, "style": "round"},
	"Ai":       {"name": "愛",          "r":232, "g": 89, "b": 21, "style": "round"},
	"Kanata":   {"name": "彼方",        "r":156, "g": 94, "b":223, "style": "round"},
	"Setsuna":  {"name": "せつ菜",      "r":179, "g":  6, "b":  6, "style": "round"},
	"Emma":     {"name": "エマ",        "r":143, "g":218, "b":121, "style": "round"},
	"Rina":     {"name": "璃奈",        "r":158, "g":154, "b":192, "style": "round"},
	"Shioriko": {"name": "栞子",        "r": 18, "g":158, "b":112, "style": "round"},
	"Mia":      {"name": "ミア",        "r":169, "g":168, "b":152, "style": "round"},
	"Lanzhu":   {"name": "嵐珠",        "r":246, "g":153, "b":146, "style": "round"},
	"Yu":       {"name": "侑",          "r":195, "g":195, "b":195, "style": "round"},

	"Kanon":    {"name": "かのん",      "r":242, "g": 99, "b":  0, "style": "round"},
	"Keke":     {"name": "可可",        "r": 58, "g":255, "b":243, "style": "round"},
	"Chisato":  {"name": "千砂都",      "r":255, "g": 58, "b":107, "style": "round"},
	"Sumire":   {"name": "すみれ",      "r": 38, "g":228, "b": 17, "style": "round"},
	"Ren":      {"name": "恋",          "r":  0, "g":  0, "b":109, "style": "round"},
	"Kinako":   {"name": "きな子",      "r":219, "g":206, "b":  0, "style": "round"},
	"Mei":      {"name": "メイ",        "r":207, "g":  0, "b":  0, "style": "round"},
	"Shiki":    {"name": "四季",        "r": 76, "g":255, "b":176, "style": "round"},
	"Natsumi":  {"name": "夏美",        "r":234, "g":  0, "b":155, "style": "round"},
	"Margarete":{"name": "マルガレーテ","r":228, "g":157, "b":253, "style": "round"},
	"Tomari":   {"name": "冬毬",        "r": 76, "g":210, "b":226, "style": "round"},
	
	"Season":   {"name": "季節の行事", "r":100, "g":140, "b":160, "style": "square"},
	"Birthday": {"name": "誕生日",     "r":100, "g":140, "b":160, "style": "square"},
	"Live":     {"name": "ライブ",     "r":100, "g":140, "b":160, "style": "square"}
};

//■ソート対象
const SortTarget = [
{"name": "2023年", "condition": "date,2023/12/01,2023/12/31"},
{"name": "2024年", "condition": "date,2024/01/01,2024/03/31"},
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
{"name": "出演：ウィーン・マルガレーテ", "condition": "tag,Wien"},
{"name": "出演：鬼塚 冬毬",              "condition": "tag,Tomari"},
{"name": "----"},
{"name": "テーマ：季節の行事", "condition": "tag,Season"},
{"name": "テーマ：誕生日", "condition":     "tag,Birthday"},
//{"name": "テーマ：リアルイベント", "condition": "tag,Event"},
//{"name": "----"},
//{"name": "シリーズ：堕天使ヨハネ", "condition": "tag,Yohane"},
];

//■■メイン出力
//■条件に合致するストーリーを抜き出してリストアップ
function DrawStoryList(conditions){
	const TimeOutputStart = performance.now();
	const DecorateText = ( text => {
		return text
		// {{L:タイトル:URL}} の部分を、リンクに置換する
		.replace(/\{\{[lL]:([^:]*):([^}]*)\}\}/g, '<a href="$2" class="pc-exclusive-link" target="_blank">$1<\/a>');
	});

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
		const tagContent = story.tags.map( tag => DrawCharName(tag) ).join('');

		return `
		<article class="story">
			<div class="story-date">${story.date}</div>
			<div class="story-titleContainer">
				<div ${storyTitleAtttribute}>${story.title}</div>
				<div class="story-memo">${('memo' in story ? DecorateText(story.memo) : '')}</div>
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
	
	//タイトル
	document.getElementById("Modal-Title").innerHTML = result.title;
	
	//テキスト
	const TextLog = result.text.split('\n');
	document.getElementById("Modal-Text").innerHTML = TextLog.map( text => {
		text = text.split('\t');
		return DrawCharName(result.tags[text[0]]) + `<p>${text[1]}</p><hr>`;
	}).join("");
	
	//ポップアップを表示
	document.getElementById("Modal").classList.remove("fadeout");
	document.getElementById("Modal").style.display = "flex";
}

//■モーダルウィンドウを閉じる
function CloseModal(target){
	let ModalBG = document.getElementById('Modal');
	if(target === null){ //ターゲット指定
		if(target !== event.target.closest('#Modal-Container')){
			return false;
		}
	}
	ModalBG.classList.add("fadeout");
	setTimeout(function(){
		document.getElementById("Modal-ReaderBox").scrollTop = 0;
		ModalBG.style.display = "none";
	}, 200);
}

//■初期化処理
function initialize() {
	//TagDataの色データをCSSに追加
	document.querySelector('style').textContent += Object.keys(TagData).map( character => {
		return `
		.button_${character} {
			background-color: ${getColor(TagData[character], 2)};
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