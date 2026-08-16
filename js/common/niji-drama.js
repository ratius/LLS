const tagData = {
	"Ayumu"   : {"name": "歩夢"   , "r":237, "g":125, "b":149, "style": "button-round"},
	"Kasumi"  : {"name": "かすみ" , "r":231, "g":214, "b":  0, "style": "button-round"},
	"Shizuku" : {"name": "しずく" , "r":  1, "g":183, "b":237, "style": "button-round"},
	"Karin"   : {"name": "果林"   , "r": 72, "g": 94, "b":198, "style": "button-round"},
	"Ai"      : {"name": "愛"     , "r":255, "g": 88, "b":  0, "style": "button-round"},
	"Kanata"  : {"name": "彼方"   , "r":166, "g":100, "b":160, "style": "button-round"},
	"Setsuna" : {"name": "せつ菜" , "r":216, "g": 28, "b": 47, "style": "button-round"},
	"Emma"    : {"name": "エマ"   , "r":132, "g":195, "b":110, "style": "button-round"},
	"Rina"    : {"name": "璃奈"   , "r":156, "g":165, "b":185, "style": "button-round"},
	"Shioriko": {"name": "栞子"   , "r": 55, "g":180, "b":132, "style": "button-round"},
	"Mia"     : {"name": "ミア"   , "r":169, "g":158, "b":152, "style": "button-round"},
	"Lanzhu"  : {"name": "嵐珠"   , "r":248, "g":200, "b":196, "style": "button-round"},
	"Yu"      : {"name": "侑"     , "r": 29, "g": 29, "b": 29, "style": "button-round"}
};

const filterTargets = [
	{"name": "2018年", "condition": "after:2018-01-01 before:2018-12-31"},
	{"name": "2019年", "condition": "after:2019-01-01 before:2019-12-31"},
	{"name": "2020年", "condition": "after:2020-01-01 before:2020-12-31"},
	{"name": "2021年", "condition": "after:2021-01-01 before:2021-12-31"},
	{"name": "2022年", "condition": "after:2022-01-01 before:2022-12-31"},
	{"name": "2023年", "condition": "after:2023-01-01 before:2023-12-31"},
	{"name": "2025年", "condition": "after:2025-01-01 before:2025-12-31"},
	{"name": "----"},
	{"name": "出演：上原 歩夢",      "condition": "tag:Ayumu"},
	{"name": "出演：中須 かすみ",    "condition": "tag:Kasumi"},
	{"name": "出演：桜坂 しずく",    "condition": "tag:Shizuku"},
	{"name": "出演：朝香 果林",      "condition": "tag:Karin"},
	{"name": "出演：宮下 愛",        "condition": "tag:Ai"},
	{"name": "出演：近江彼方",       "condition": "tag:Kanata"},
	{"name": "出演：優木せつ菜",     "condition": "tag:Setsuna"},
	{"name": "出演：エマ・ヴェルデ", "condition": "tag:Emma"},
	{"name": "出演：天王寺璃奈",     "condition": "tag:Rina"},
	{"name": "出演：三船栞子",       "condition": "tag:Shioriko"},
	{"name": "出演：ミア・テイラー", "condition": "tag:Mia"},
	{"name": "出演：鐘 嵐珠",        "condition": "tag:Lanzhu"},
	{"name": "出演：高咲 侑",        "condition": "tag:Yu"}
];

const LLSPLayoutTemplate = (entry) => {
    const videoLength = (typeof entry['length'] === 'number' && entry['length'] >= 0 ? `<span class="length pc-only">動画：${LLS.convertSecondsToHHMMSS(entry['length'])}</span>` : '');
    const videoContent = ('tube' in entry && entry['tube'] ? `${LLSVideo.getYouTubeLink(entry['tube'], entry['title'])}${videoLength}` : '');
    const descContent = (typeof entry['desc'] === 'string' && entry['desc'] !== "" ? LLS.markup(entry['desc']) : '');
	const memoContent = (typeof entry['memo'] === 'string' && entry['memo'] !== "" ? LLS.markup(entry['memo']) : '');
    const tagsContent = entry['tags'].map(tag => (tag in tagData ? LLS.createStyledTag(tagData[tag], tag) : '')).join('');
	
	return `<article>
		<div class="article-box-date">${entry['date']}</div>
		<div class="article-box-title">${entry['title']}</div>
		<div class="article-box-tube">${videoContent}</div>
		<div class="article-box-desc">${descContent ? `<div class="desc">${descContent}</div>` : ''}${memoContent}</div>
		<div class="article-box-tags">${tagsContent}</div>
	</article>`;
}