const tagData = {
	"meets"     : {"name": "With×MEETS" , "r":160, "g":112, "b": 96, "style": "button-square"},
	"live"      : {"name": "Fes×LIVE"   , "r": 80, "g":128, "b":128, "style": "button-square"},
	"cancelled" : {"name": "配信中止"    , "r":128, "g":128, "b":128, "style": "button-square"},
	"YouTube" : {"name": "YouTubeライブ", "r":224, "g":128, "b": 128, "style": "button-square"},
	"SayakaRadio" : {"name": "村野さやかのラジオ", "r":160, "g":112, "b": 96, "style": "button-square"},
	"birthday": {"name": "誕生日", "r":160, "g":112, "b": 96, "style": "button-square"},
	"karaoke" : {"name": "カラオケ配信", "r":160, "g":112, "b": 96, "style": "button-square"},
	"dance" : {"name": "ダンス配信", "r":160, "g":112, "b": 96, "style": "button-square"},
	"nante" : {"name": "なんて言う？", "r":160, "g":112, "b": 96, "style": "button-square"},
	
	"Kaho"    : {"name": "花帆"   , "r":248, "g":181, "b":  0, "style": "button-round"},
	"Sayaka"  : {"name": "さやか" , "r": 83, "g":131, "b":195, "style": "button-round"},
	"Kozue"   : {"name": "梢"     , "r":104, "g":190, "b":141, "style": "button-round"},
	"Tsuzuri" : {"name": "綴理"   , "r":186, "g": 38, "b": 54, "style": "button-round"},
	"Rurino"  : {"name": "瑠璃乃" , "r":231, "g": 96, "b":158, "style": "button-round"},
	"Megumi"  : {"name": "慈"     , "r":200, "g":194, "b":198, "style": "button-round"},
	"Ginko"   : {"name": "吟子"   , "r":162, "g":215, "b":221, "style": "button-round"},
	"Kosuzu"  : {"name": "小鈴"   , "r":250, "g":215, "b":100, "style": "button-round"},
	"Hime"    : {"name": "姫芽"   , "r":157, "g":141, "b":226, "style": "button-round"},
	"Ceras"   : {"name": "セラス" , "r":245, "g":100, "b": 85, "style": "button-round"},
	"Izumi"   : {"name": "泉"     , "r": 30, "g":190, "b":205, "style": "button-round"},

	"Izumi_Guest" : {"name": "泉"     , "r": 64, "g": 64, "b": 64, "style": "button-hexa"}, //泉 (ライバル)
	"Ceras_Guest" : {"name": "セラス" , "r": 64, "g": 64, "b": 64, "style": "button-hexa"} //セラス (ライバル)
};

const filterTargets = [
	{"name": "debug", "condition": "after:2025-12-24 max:10"},
	{"name": "debug-未視聴", "condition": "after:2024-07-28 max:10"},
	{"name": "debug-配信場所なし", "condition": "after:2025-05-28 tag:meets extag:cancelled extag:room-club extag:room-lesson extag:room-Kaho extag:room-Sayaka extag:room-Kozue extag:room-Tsuzuri extag:room-Rurino extag:room-Megumi extag:room-Ginko extag:room-Kosuzu extag:room-Hime extag:room-Ceras extag:room-Izumi"},
	{"name": "103期 上半期（2023年4月 - 2023年9月）",  "condition": "after:2023-04-01 before:2023-09-30"},
	{"name": "103期 下半期（2023年10月 - 2024年3月）", "condition": "after:2023-10-01 before:2024-03-31"},
	{"name": "104期 上半期（2024年4月 - 2024年9月）",  "condition": "after:2024-04-01 before:2024-09-30"},
	{"name": "104期 下半期（2024年10月 - 2025年3月）", "condition": "after:2024-10-01 before:2025-03-31"},
	{"name": "105期 上半期（2025年4月 - 2025年9月）",  "condition": "after:2025-04-01 before:2025-09-30"},
	{"name": "105期 下半期（2025年10月 - 2026年3月）", "condition": "after:2025-10-01 before:2026-03-31"},
	{"name": "With×STATION（2026年4月）", "condition": "after:2026-04-01"},
	{"name": "----"},
	{"name": "タグ：Fes×LIVE", "condition": "tag:live"},
	{"name": "タグ：YouTubeライブ", "condition": "tag:YouTube"},
	{"name": "タグ：村野さやかのラジオ", "condition": "tag:SayakaRadio"},
	{"name": "タグ：カラオケ配信", "condition": "tag:karaoke"},
	{"name": "タグ：ダンス配信", "condition": "tag:dance"},
	{"name": "タグ：この後なんて言う？", "condition": "tag:nante"},
	{"name": "タグ：誕生日", "condition": "tag:birthday"},
	{"name": "----"},
	{"name": "配信場所：花帆の部屋",   "condition": "tag:room-Kaho"},
	{"name": "配信場所：さやかの部屋", "condition": "tag:room-Sayaka"},
	{"name": "配信場所：梢の部屋",     "condition": "tag:room-Kozue"},
	{"name": "配信場所：綴理の部屋",   "condition": "tag:room-Tsuzuri"},
	{"name": "配信場所：瑠璃乃の部屋", "condition": "tag:room-Rurino"},
	{"name": "配信場所：慈の部屋",     "condition": "tag:room-Megumi"},
	{"name": "配信場所：吟子の部屋",   "condition": "tag:room-Ginko"},
	{"name": "配信場所：小鈴の部屋",   "condition": "tag:room-Kosuzu"},
	{"name": "配信場所：姫芽の部屋",   "condition": "tag:room-Hime"}
];

const LLSVLayoutTemplate = (entry) => {
    const isCancelled = (entry['tags'].includes('cancelled') ? 'cancelled' : '');

    const videoLength = (typeof entry['length'] === 'number' ?
        `<span class="length pc-only">本編：${LLS.convertSecondsToHHMMSS(entry['length'])}</span>`
        :
        (Array.isArray(entry['length']) ?
            (entry['length'].length >= 0 ?
                `<span class="length pc-only">本編：${LLS.convertSecondsToHHMMSS(entry['length'][0])}</span>`
                : '')
            + (entry['length'].length > 1 ?
                `<span class="length pc-only">AFTER：${LLS.convertSecondsToHHMMSS(entry['length'][1])}</span>`
                : '')
            : '')
    );
    const videoContent = ('tube' in entry && entry['tube'] ? `${LLSVideo.getYouTubeLink(entry['tube'], entry['title'])}${videoLength}` : '');
    const descContent = (typeof entry['desc'] === 'string' && entry['desc'] !== "" ? `<div class="desc">${LLS.markup(entry['desc'])}</div>` : '');
	const memoContent = (typeof entry['memo'] === 'string' && entry['memo'] !== "" ? LLS.markup(entry['memo']) : '');
	
    const setlistContent = (typeof entry['setlist'] === 'object' && entry['setlist'].length ?
        `<details class="setlist">
		<summary class="setlist-summary">${'setlistAlt' in entry ? entry['setlistAlt'] : "セットリスト"} (クリックで展開)</summary>
		<ol class="setlist-ol">
			${entry['setlist'].map(program =>
            `<li>${(program.startsWith("MC") ? `<i class="setlist-mc">${program}</i>` : program)}</li>`).join('')}
		</ol>
	</details>`
        : '');

	const tagsContent = entry['tags'].map(tag => (tag in tagData ? LLS.createStyledTag(tagData[tag], tag) : '')).join('');
	
	return `<article class="${isCancelled}">
		<div class="article-box-date">${entry['date']}</div>
		<div class="article-box-title ${isCancelled}">${entry['title']}</div>
		<div class="article-box-desc">${descContent + memoContent + setlistContent}</div>
		<div class="article-box-tags">${tagsContent}</div>
		${videoContent !== "" ? `<div class="article-box-tube ${isCancelled}">${videoContent}</div>` : ''}
	</article>`;
}