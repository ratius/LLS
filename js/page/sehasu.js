//■データリスト
const tagData = {
	"Nirei"   : {"name": "楡井"   , "r":248, "g":181, "b":  0, "style": "button-round"},
	"Nonaka"  : {"name": "野中"   , "r": 83, "g":131, "b":195, "style": "button-round"},
	"Hanamiya": {"name": "花宮"   , "r":104, "g":190, "b":141, "style": "button-round"},
	"Sasaki"  : {"name": "佐々木" , "r":186, "g": 38, "b": 54, "style": "button-round"},
	"Kan"     : {"name": "菅"     , "r":231, "g": 96, "b":158, "style": "button-round"},
	"Tsukine" : {"name": "月音"   , "r":200, "g":194, "b":198, "style": "button-round"},
	"Sakurai" : {"name": "櫻井"   , "r":162, "g":215, "b":221, "style": "button-round"},
	"Hayama"  : {"name": "葉山"   , "r":250, "g":215, "b":100, "style": "button-round"},
	"Kurusu"  : {"name": "来栖"   , "r":157, "g":141, "b":226, "style": "button-round"},
	"Miyake"  : {"name": "三宅"   , "r":245, "g":100, "b": 85, "style": "button-round"},
	"Shindo"  : {"name": "進藤"   , "r": 30, "g":190, "b":205, "style": "button-round"},
};

//■プルダウンメニューの中身
const filterTargets = [
	{"name": "103期 上半期（2023年5月 – 2023年9月）",  "condition": "after:2023-05-01 before:2023-09-30"},
	{"name": "103期 下半期（2023年10月 – 2024年3月）", "condition": "after:2023-10-01 before:2024-03-31"},
	{"name": "104期 上半期（2024年4月 – 2024年10月）", "condition": "after:2024-04-01 before:2024-10-19"},
	{"name": "104期 下半期（2024年10月 – 2025年4月）", "condition": "after:2024-10-24 before:2025-04-20"},
	{"name": "105期 上半期（2025年4月 – 2025年10月）", "condition": "after:2025-04-21 before:2025-10-08"},
	{"name": "105期 下半期（2025年10月 – 2026年3月）", "condition": "after:2025-10-09 before:2026-03-31"},
	{"name": "BGP（2026年4月 – 2026年7月）", "condition": "after:2026-04-01 before:2026-07-03"},
	{"name": "せーはすPlus（2026年7月 – ）", "condition": "after:2026-07-17 before:2027-03-31"}
];

//■「動画一覧」への出力
const LLSVLayoutTemplate = (entry) => {
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