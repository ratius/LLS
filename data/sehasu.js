//■■「蓮ノ空 せーはす動画まとめ」用
//■データリスト
const tagData = {
	"Nirei"   : {"name": "楡井"   , "r":248, "g":181, "b":  0, "style": "button-round button-Nirei"},
	"Nonaka"  : {"name": "野中"   , "r": 83, "g":131, "b":195, "style": "button-round button-Nonaka"},
	"Hanamiya": {"name": "花宮"   , "r":104, "g":190, "b":141, "style": "button-round button-Hanamiya"},
	"Sasaki"  : {"name": "佐々木" , "r":186, "g": 38, "b": 54, "style": "button-round button-Sasaki"},
	"Kan"     : {"name": "菅"     , "r":231, "g": 96, "b":158, "style": "button-round button-Kan"},
	"Tsukine" : {"name": "月音"   , "r":200, "g":194, "b":198, "style": "button-round button-Tsukine"},
	"Sakurai" : {"name": "櫻井"   , "r":162, "g":215, "b":221, "style": "button-round button-Sakurai"},
	"Hayama"  : {"name": "葉山"   , "r":250, "g":215, "b":100, "style": "button-round button-Hayama"},
	"Kurusu"  : {"name": "来栖"   , "r":157, "g":141, "b":226, "style": "button-round button-Kurusu"}
};

const filterTargets = [
	{"name": "103期 上半期（2023年5月 - 2023年9月）",  "condition": "after:2023-05-01 before:2023-09-30"},
	{"name": "103期 下半期（2023年10月 - 2024年3月）", "condition": "after:2023-10-01 before:2024-03-31"},
	{"name": "104期 上半期（2024年4月 - 2024年10月）",  "condition": "after:2024-04-01 before:2024-10-19"},
	{"name": "104期 下半期（2024年10月 - 2025年3月）", "condition": "after:2024-10-24 before:2025-03-31"},
//	{"name": "105期 上半期（2025年4月 - 2025年9月）",  "condition": "after:2025-04-01 before:2025-09-30"},
//	{"name": "105期 下半期（2025年10月 - 2026年3月）", "condition": "after:2025-10-01 before:2026-03-31"},
];

//■初期化処理
function initialize () {
	initializeVideoList('JSON-sehasu');
}