//■■「リンクラ スクールアイドルコネクトまとめ」用
//■データリスト
const tagData = {
	"meets"     : {"name": "With×MEETS" , "r":160, "g":112, "b": 96, "style": "button-square button-meets"},
	"live"      : {"name": "Fes×LIVE"   , "r": 80, "g":128, "b":128, "style": "button-square button-live"},
	"cancelled" : {"name": "配信中止"    , "r":128, "g":128, "b":128, "style": "button-hexa button-cancelled"},
	"YouTube" : {"name": "YouTubeライブ", "r":224, "g":128, "b": 128, "style": "button-square button-YouTube"},
	"SayakaRadio" : {"name": "村野さやかのラジオ", "r":160, "g":112, "b": 96, "style": "button-square button-SayakaRadio"},
	"birthday": {"name": "誕生日", "r":160, "g":112, "b": 96, "style": "button-square button-birthday"},
	
	"Kaho"    : {"name": "花帆"   , "r":248, "g":181, "b":  0, "style": "button-round button-Kaho"},
	"Sayaka"  : {"name": "さやか" , "r": 83, "g":131, "b":195, "style": "button-round button-Sayaka"},
	"Kozue"   : {"name": "梢"     , "r":104, "g":190, "b":141, "style": "button-round button-Kozue"},
	"Tsuzuri" : {"name": "綴理"   , "r":186, "g": 38, "b": 54, "style": "button-round button-Tsuzuri"},
	"Rurino"  : {"name": "瑠璃乃" , "r":231, "g": 96, "b":158, "style": "button-round button-Rurino"},
	"Megumi"  : {"name": "慈"     , "r":200, "g":194, "b":198, "style": "button-round button-Megumi"},
	"Ginko"   : {"name": "吟子"   , "r":162, "g":215, "b":221, "style": "button-round button-Ginko"},
	"Kosuzu"  : {"name": "小鈴"   , "r":250, "g":215, "b":100, "style": "button-round button-Kosuzu"},
	"Hime"    : {"name": "姫芽"   , "r":157, "g":141, "b":226, "style": "button-round button-Hime"},
};

const filterTargets = [
	{"name": "103期 上半期（2023年4月 - 2023年9月）",  "condition": "after:2023-04-01 before:2023-09-30"},
	{"name": "103期 下半期（2023年10月 - 2024年3月）", "condition": "after:2023-10-01 before:2024-03-31"},
	{"name": "104期 上半期（2024年4月 - 2024年9月）",  "condition": "after:2024-04-01 before:2024-09-30"},
	{"name": "104期 下半期（2024年10月 - 2025年3月）", "condition": "after:2024-10-01 before:2025-03-31"},
//	{"name": "105期 上半期（2025年4月 - 2025年9月）",  "condition": "after:2025-04-01 before:2025-09-30"},
//	{"name": "105期 下半期（2025年10月 - 2026年3月）", "condition": "after:2025-10-01 before:2026-03-31"},
	{"name": "----"},
	{"name": "タグ：Fes×LIVE", "condition": "tag:live"},
	{"name": "タグ：YouTubeライブ", "condition": "tag:YouTube"},
	{"name": "タグ：村野さやかのラジオ", "condition": "tag:SayakaRadio"},
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