//■データリスト
const tagData = {
	"Ayasaki"  : {"name": "綾咲穂音"   , "r":255, "g":255, "b":102, "style": "button-round"},
	"Endo"     : {"name": "遠藤璃菜"   , "r": 77, "g":147, "b":217, "style": "button-round"},
	"Miyano"   : {"name": "宮野芹"     , "r":181, "g":230, "b":162, "style": "button-round"},
	"Fujino"   : {"name": "藤野こころ" , "r":255, "g": 71, "b": 71, "style": "button-round"},
	"Sakano"   : {"name": "坂野愛羽"   , "r":255, "g":182, "b":193, "style": "button-round"},
	"Seko"     : {"name": "瀬古梨愛"   , "r":204, "g":102, "b":255, "style": "button-round"},
	"Okumura"  : {"name": "奥村優季"   , "r":192, "g":230, "b":245, "style": "button-round"},
	"Amasawa"  : {"name": "天沢朱音"   , "r":255, "g": 91, "b":157, "style": "button-round"},
	"Kotomori" : {"name": "小戸森穂花" , "r": 63, "g":191, "b":127, "style": "button-round"},
	"Suzunose" : {"name": "涼ノ瀬葵音" , "r":242, "g":242, "b":242, "style": "button-round"},
};

const filterTargets = [
	{"name": "debug", "condition": "after:2026-04-01"},
	{"name": "本編をすべて表示", "condition": "tag:s1"},
	{"name": "----"},
	{"name": "出演：綾咲穂音"   , "condition": "tag:Ayasaki"},
	{"name": "出演：遠藤璃菜"   , "condition": "tag:Endo"},
	{"name": "出演：宮野芹"     , "condition": "tag:Miyano"},
	{"name": "出演：藤野こころ" , "condition": "tag:Fujino"},
	{"name": "出演：坂野愛羽"   , "condition": "tag:Sakano"},
	{"name": "出演：瀬古梨愛"   , "condition": "tag:Seko"},
	{"name": "出演：奥村優季"   , "condition": "tag:Okumura"},
	{"name": "出演：天沢朱音"   , "condition": "tag:Amasawa"},
	{"name": "出演：小戸森穂花" , "condition": "tag:Kotomori"},
	{"name": "出演：涼ノ瀬葵音" , "condition": "tag:Suzunose"},
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