const LatestUpdate = "2020/07/06 「ヨハネと花陽の事件簿」まで";

const EventList = [
{
	"id" : 1,
	"name" : "秘密のパーティー！",
	"type" : "story",
	"started" : new Date("2019-10-03T15:00:00+09:00"),
	"ended"   : new Date("2019-10-15T14:59:59+09:00"),
	"participated" : ["Honoka", "Kotori", "Chika", "You", "Ayumu"]
},
{
	"id" : 2,
	"name" : "和装モデルはお任せあれ！",
	"type" : "story",
	"started" : new Date("2019-10-21T15:00:00+09:00"),
	"ended"   : new Date("2019-11-01T14:59:59+09:00"),
	"participated" : ["Nico", "Maki", "Dia", "Ruby", "Kasumi"]
},
{
	"id" : 3,
	"name" : "下町巡り珍道中",
	"type" : "story",
	"started" : new Date("2019-11-06T15:00:00+09:00"),
	"ended"   : new Date("2019-11-15T14:59:59+09:00"),
	"participated" : ["Rin", "Hanayo", "Kanan", "Mari", "Ai"]
},
{
	"id" : 4,
	"name" : "ハイキングでリフレッシュ！",
	"type" : "story",
	"started" : new Date("2019-11-21T15:00:00+09:00"),
	"ended"   : new Date("2019-11-30T14:59:59+09:00"),
	"participated" : ["Eli", "Umi", "Yoshiko", "Hanamaru", "Kanata"]
},
{
	"id" : 5,
	"name" : "素敵なところへご招待！",
	"type" : "story",
	"started" : new Date("2020-12-06T15:00:00+09:00"),
	"ended"   : new Date("2020-12-16T14:59:59+09:00"),
	"participated" : ["Nozomi", "Hanayo", "Chika", "Riko", "Emma"]
},
{
	"id" : 6,
	"name" : "スクールアイドルトレイン発車！",
	"type" : "story",
	"started" : new Date("2020-12-23T15:00:00+09:00"),
	"ended"   : new Date("2020-12-31T14:59:59+09:00"),
	"participated" : ["Honoka", "Nico", "Dia", "Mari", "Rina"]
},
{
	"id" : 7,
	"name" : "海の上の大熱戦",
	"type" : "exchange",
	"started" : new Date("2020-01-06T15:00:00+09:00"),
	"ended"   : new Date("2020-01-15T14:59:59+09:00"),
	"participated" : ["Umi", "Maki", "You", "Hanamaru", "Shizuku", "Karin"]
},
{
	"id" : 8,
	"name" : "スペシャルスイーツを召し上がれ♡",
	"type" : "story",
	"started" : new Date("2020-01-22T15:00:00+09:00"),
	"ended"   : new Date("2020-01-31T14:59:59+09:00"),
	"participated" : ["Eli", "Nozomi", "Kanan", "Ruby", "Ayumu", "Setsuna"]
},
{
	"id" : 9,
	"name" : "二人の奏でる音",
	"type" : "exchange",
	"started" : new Date("2020-02-06T15:00:00+09:00"),
	"ended"   : new Date("2020-02-14T14:59:59+09:00"),
	"participated" : ["Eli", "Maki", "Riko", "Yoshiko", "Kasumi", "Karin"]
},
{
	"id" : 10,
	"name" : "それゆけUMA捜索隊",
	"type" : "story",
	"started" : new Date("2020-02-20T15:00:00+09:00"),
	"ended"   : new Date("2020-02-28T14:59:59+09:00"),
	"participated" : ["Honoka", "Hanayo", "Kanan", "You", "Ayumu", "Ai"]
},
{
	"id" : 11,
	"name" : "いたずらオオカミを捕まえろ！",
	"type" : "exchange",
	"started" : new Date("2020-03-06T15:00:00+09:00"),
	"ended"   : new Date("2020-03-16T14:59:59+09:00"),
	"participated" : ["Umi", "Rin", "Chika", "Ruby", "Setsuna", "Emma"]
},
{
	"id" : 12,
	"name" : "マジカル・タイム！",
	"type" : "story",
	"started" : new Date("2020-03-23T15:00:00+09:00"),
	"ended"   : new Date("2020-03-31T14:59:59+09:00"),
	"participated" : ["Kotori", "Nozomi", "Riko", "Dia", "Kasumi", "Shizuku"]
},
{
	"id" : 13,
	"name" : "ベジタブル☆クッキング！",
	"type" : "exchange",
	"started" : new Date("2020-04-06T15:00:00+09:00"),
	"ended"   : new Date("2020-04-15T14:59:59+09:00"),
	"participated" : ["Eli", "Kotori", "Dia", "Yoshiko", "Emma", "Rina"]
},
{
	"id" : 14,
	"name" : "青春のアイススケート",
	"type" : "story",
	"started" : new Date("2020-04-21T15:00:00+09:00"),
	"ended"   : new Date("2020-04-30T14:59:59+09:00"),
	"participated" : ["Rin", "Maki", "You", "Mari", "Kasumi", "Setsuna"]
},
{
	"id" : 15,
	"name" : "温泉旅行ラプソディ",
	"type" : "exchange",
	"started" : new Date("2020-05-07T15:00:00+09:00"),
	"ended"   : new Date("2020-05-15T14:59:59+09:00"),
	"participated" : ["Nozomi", "Nico", "Chika", "Hanamaru", "Shizuku", "Kanata"]
},
{
	"id" : 16,
	"name" : "取り戻せ！笑顔のラーメン",
	"type" : "story",
	"started" : new Date("2020-05-21T15:00:00+09:00"),
	"ended"   : new Date("2020-05-29T14:59:59+09:00"),
	"participated" : ["Honoka", "Rin", "Kanan", "Dia", "Ayumu", "Rina"]
},
{
	"id" : 17,
	"name" : "3人のプリンセス",
	"type" : "exchange",
	"started" : new Date("2020-06-05T15:00:00+09:00"),
	"ended"   : new Date("2020-06-13T14:59:59+09:00"),
	"participated" : ["Honoka", "Maki", "Riko", "You", "Karin", "Setsuna"]
},
{
	"id" : 18,
	"name" : "君と、雨に歌えば",
	"type" : "story",
	"started" : new Date("2020-06-22T15:00:00+09:00"),
	"ended"   : new Date("2020-06-30T14:59:59+09:00"),
	"participated" : ["Nozomi", "Nico", "Kanan", "Hanamaru", "Ai", "Emma"]
},
{
	"id" : 19,
	"name" : "ヨハネと花陽の事件簿",
	"type" : "exchange",
	"started" : new Date("2020-07-06T15:00:00+09:00"),
	"ended"   : new Date("2020-07-15T14:59:59+09:00"),
	"participated" : ["Eli", "Hanayo", "Kanan", "Yoshiko", "Ayumu", "Kanata"]
},
{
	"id" : 20,
	"name" : "璃奈のビックリお化け屋敷",
	"type" : "story",
	"started" : new Date("2020-07-22T15:00:00+09:00"),
	"ended"   : new Date("2020-07-31T14:59:59+09:00"),
	"participated" : ["Kotori", "Umi", "Riko", "Ruby", "Kasumi", "Rina"]
}
];