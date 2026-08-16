//■データリスト
const tagData = {
	"Kan"      : {"name": "菅叶和"     , "r":231, "g": 96, "b":158, "style": "button-round"},
	"Tsukine"  : {"name": "月音こな"   , "r":200, "g":194, "b":198, "style": "button-round"},
	"Kurusu"   : {"name": "来栖りん"   , "r":157, "g":141, "b":226, "style": "button-round"},
	"Nirei"    : {"name": "楡井希実"   , "r":248, "g":181, "b":  0, "style": "button-round"},
	"Nonaka"   : {"name": "野中ここな" , "r": 83, "g":131, "b":195, "style": "button-round"},
	"Hanamiya" : {"name": "花宮初奈"   , "r":104, "g":190, "b":141, "style": "button-round"},
	"Sasaki"   : {"name": "佐々木琴子" , "r":186, "g": 38, "b": 54, "style": "button-round"},
	"Sakurai"  : {"name": "櫻井陽菜"   , "r":162, "g":215, "b":221, "style": "button-round"},
	"Hayama"   : {"name": "葉山風花"   , "r":250, "g":215, "b":100, "style": "button-round"},
	"Miyake"   : {"name": "三宅美羽"   , "r":245, "g":100, "b": 85, "style": "button-round"},
	"Shindo"   : {"name": "進藤あまね" , "r": 30, "g":190, "b":205, "style": "button-round"},

	"Nitta"    : {"name": "新田恵海"   , "r":243, "g":133, "b":  0, "style": "button-hexa"},
	"Saito"    : {"name": "斉藤朱夏"   , "r":102, "g":192, "b":255, "style": "button-hexa"},
	"Kobayashi": {"name": "小林愛香"   , "r":193, "g":202, "b":212, "style": "button-hexa"},
	"Furihata" : {"name": "降幡愛"     , "r":255, "g":111, "b":190, "style": "button-hexa"},
	"Onishi"   : {"name": "大西亜玖璃" , "r":237, "g":125, "b":149, "style": "button-hexa"},
	"Murakami" : {"name": "村上奈津実" , "r":255, "g": 88, "b":  0, "style": "button-hexa"},
	"Hayashi"  : {"name": "林鼓子"     , "r":216, "g": 28, "b": 47, "style": "button-hexa"},
	"Uchida"   : {"name": "内田秀"     , "r":169, "g":158, "b":152, "style": "button-hexa"},
	"Okuma"    : {"name": "大熊和奏"   , "r":178, "g":255, "b":221, "style": "button-hexa"},
	"Yumi"     : {"name": "ゆみ先生"   , "r":112, "g":112, "b":112, "style": "button-hexa"},
	"SukiSukiClub" : {"name": "好き好きクラブの皆さん", "r":112, "g":112, "b":112, "style": "button-hexa"},

	"s1" : {"name": "待機室", "r":160, "g":128, "b":128, "style": "button-square"},
	"s2" : {"name": "補習室", "r":160, "g":128, "b":128, "style": "button-square"},
	"s3" : {"name": "準備室", "r":160, "g":128, "b":128, "style": "button-square"},
	"s4" : {"name": "視聴覚室", "r":160, "g":128, "b":128, "style": "button-square"},
	"s5" : {"name": "進路相談室", "r":160, "g":128, "b":128, "style": "button-square"},
	"s6" : {"name": "きまっし!!", "r":160, "g":128, "b":128, "style": "button-square"},
	"s7" : {"name": "進路相談室105", "r":160, "g":128, "b":128, "style": "button-square"},
	"s8" : {"name": "はすのそラジオ", "r":160, "g":128, "b":128, "style": "button-square"},
	"s9" : {"name": "補習室FINAL", "r":160, "g":128, "b":128, "style": "button-square"},
};

const filterTargets = [
	{"name": "debug", "condition": "after:2026-07-01 max:10"},
	{"name": "シーズン1 みらくら待機室ラジオ (全14回)", "condition": "tag:s1"},
	{"name": "シーズン2 みらくら補習室ラジオ (全31回)", "condition": "tag:s2"},
	{"name": "シーズン3 みらくら準備室ラジオ (全24回)", "condition": "tag:s3"},
	{"name": "シーズン4 みらくら視聴覚室ラジオ (全13回)", "condition": "tag:s4"},
	{"name": "シーズン5 みらくら進路相談室ラジオ (全11回)", "condition": "tag:s5"},
	{"name": "シーズン6 きまっし!!みらぱ！の部屋ラジオ (全39回)", "condition": "tag:s6"},
	{"name": "シーズン7 みらくら進路相談室ラジオ (全13回)", "condition": "tag:s7"},
	{"name": "シーズン8 期間限定！はすのそラジオ (全12回)", "condition": "tag:s8"},
	{"name": "シーズン9 みらくら補習室ラジオ THE FINAL", "condition": "tag:s9"}
];

const LLSVLayoutTemplate = (entry) => {
    const videoLength = (typeof entry['length'] === 'number' && entry['length'] >= 0 ? `<span class="length pc-only">動画：${LLS.convertSecondsToHHMMSS(entry['length'])}</span>` : '');
    const videoContent = ('tube' in entry && entry['tube'] ? `${LLSVideo.getYouTubeLink(entry['tube'], entry['title'])}${videoLength}` : '');
    const descContent = (typeof entry['desc'] === 'string' && entry['desc'] !== "" ? LLS.markup(entry['desc']) : '');
	const memoContent = (typeof entry['memo'] === 'string' && entry['memo'] !== "" ? LLS.markup(entry['memo']) : '');
	const progContent = (typeof entry['program'] == 'object' && entry['program'].length ? LLS.markup(`{{EL::配信内容（クリックで展開）::{{UL::${entry['program'].join("::")}}}}}`) : '');
    const tagsContent = entry['tags'].map(tag => {
		let isGuest = false;
		if(tag.startsWith("_")){
			isGuest = true;
			tag = tag.slice(1);
		}
		if(tag in tagData){
			return LLS.createStyledTag(tagData[tag], tag, (isGuest ? "button-hexa" : null));
		}
	}).join('');
	
	return `<article>
		<div class="article-box-date">${entry['date']}</div>
		<div class="article-box-title">${entry['title']}</div>
		<div class="article-box-tube">${videoContent}</div>
		<div class="article-box-desc">${descContent ? `<div class="desc">${descContent}</div>` : ''}${memoContent}${progContent}</div>
		<div class="article-box-tags">${tagsContent}</div>
	</article>`;
}