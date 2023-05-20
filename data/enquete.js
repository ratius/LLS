//■アンケートのデータ
const EnqueteList = [
{
	"id": 1,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202001/",
	"started" : new Date("2020-01-27T18:00:00+09:00"),
	"ended"   : new Date("2020-01-31T23:59:59+09:00"),
	"theme" : "エイプリルフールではだます方？だまされる方？",
	"option1" : "だます方",
	"option2" : "だまされる方",
	"winner1" : "Ai",
	"winner2" : "Ayumu"
},
{
	"id": 2,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202002/",
	"started" : new Date("2020-02-24T21:30:00+09:00"),
	"ended"   : new Date("2020-02-29T23:59:59+09:00"),
	"theme" : "天使と悪魔、似合う衣装はどっち？",
	"option1" : "天使",
	"option2" : "悪魔",
	"winner1" : "Emma",
	"winner2" : "Karin"
},
{
	"id": 3,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202003/",
	"started" : new Date("2020-03-18T21:30:00+09:00"),
	"ended"   : new Date("2020-03-23T23:59:59+09:00"),
	"theme" : "晴れ女、雨女？どっち？",
	"option1" : "晴れ女",
	"option2" : "雨女",
	"winner1" : "Setsuna",
	"winner2" : "Shizuku"
},
{
	"id": 4,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202004/",
	"started" : new Date("2020-04-10T22:00:00+09:00"),
	"ended"   : new Date("2020-04-15T23:59:59+09:00"),
	"theme" : "遊びに行くなら海と山どっち？",
	"option1" : "海",
	"option2" : "山",
	"winner1" : "Ai",
	"winner2" : "Kanata"
},
{
	"id": 5,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202005/",
	"started" : new Date("2020-05-22T21:15:00+09:00"),
	"ended"   : new Date("2020-05-29T23:59:59+09:00"),
	"theme" : "夏に遊びに行きそうなのは、お祭り？お化け屋敷？",
	"option1" : "お祭り",
	"option2" : "お化け屋敷",
	"winner1" : "Ayumu",
	"winner2" : "Kasumi"
},
{
	"id": 6,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202006/",
	"started" : new Date("2020-06-22T21:15:00+09:00"),
	"ended"   : new Date("2020-06-27T23:59:59+09:00"),
	"theme" : "夏休みの宿題、コツコツやる派？まとめてやる派？",
	"option1" : "コツコツやる派",
	"option2" : "まとめてやる派",
	"winner1" : "Shizuku",
	"winner2" : "Karin"
},
{
	"id": 7,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202007/",
	"started" : new Date("2020-07-28T21:15:00+09:00"),
	"ended"   : new Date("2020-08-02T23:59:59+09:00"),
	"theme" : "運動部に所属したら、選手？マネージャー？",
	"option1" : "選手",
	"option2" : "マネージャー",
	"winner1" : "Setsuna",
	"winner2" : "Emma"
},
{
	"id": 8,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202008/",
	"started" : new Date("2020-08-11T21:15:00+09:00"),
	"ended"   : new Date("2020-08-16T23:59:59+09:00"),
	"theme" : "ハロウィンに仮装するなら、魔女？黒猫？",
	"option1" : "魔女",
	"option2" : "黒猫",
	"winner1" : "Karin",
	"winner2" : "Rina"
},
{
	"id": 9,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202009/",
	"started" : new Date("2020-09-21T21:15:00+09:00"),
	"ended"   : new Date("2020-09-27T23:59:59+09:00"),
	"theme" : "焼肉を食べるときは、焼きたい派？焼いてもらいたい派？",
	"option1" : "焼きたい派",
	"option2" : "焼いてもらいたい派",
	"winner1" : "Ai",
	"winner2" : "Kasumi"
},
{
	"id": 10,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202010/",
	"started" : new Date("2020-10-27T21:15:00+09:00"),
	"ended"   : new Date("2020-11-02T23:59:59+09:00"),
	"theme" : "雪の日の過ごし方は、こたつでぬくぬく派？外で雪遊び派？",
	"option1" : "こたつでぬくぬく派",
	"option2" : "外で雪遊び派",
	"winner1" : "Kanata",
	"winner2" : "Setsuna"
},
{
	"id": 11,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202011/",
	"started" : new Date("2020-11-20T21:15:00+09:00"),
	"ended"   : new Date("2020-11-26T23:59:59+09:00"),
	"theme" : "バレンタインでは、チョコを渡すほう？もらうほう？",
	"option1" : "チョコを渡すほう",
	"option2" : "もらうほう",
	"winner1" : "Ayumu",
	"winner2" : "Karin"
},
{
	"id": 12,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202012/",
	"started" : new Date("2021-12-19T19:30:00+09:00"),
	"ended"   : new Date("2020-12-25T23:59:59+09:00"),
	"theme" : "おやつに食べるなら和菓子？洋菓子？",
	"option1" : "和菓子",
	"option2" : "洋菓子",
	"winner1" : "Shioriko",
	"winner2" : "Kasumi"
},
{
	"id": 13,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202101/",
	"started" : new Date("2021-01-25T21:45:00+09:00"),
	"ended"   : new Date("2021-01-31T23:59:59+09:00"),
	"theme" : "桜を見るといえば昼の桜？それとも夜桜？",
	"option1" : "昼の桜",
	"option2" : "夜桜",
	"winner1" : "Emma",
	"winner2" : "Karin"
},
{
	"id": 14,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202102/",
	"started" : new Date("2021-02-02T21:15:00+09:00"),
	"ended"   : new Date("2021-02-09T23:59:59+09:00"),
	"theme" : "イチゴといえばパフェ？ケーキ？",
	"option1" : "パフェ",
	"option2" : "ケーキ",
	"winner1" : "Kasumi",
	"winner2" : "Ayumu"
},
{
	"id": 15,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202103/",
	"started" : new Date("2021-03-26T21:15:00+09:00"),
	"ended"   : new Date("2021-03-31T23:59:59+09:00"),
	"theme" : "映画を観るなら映画館派？家派？",
	"option1" : "映画館派",
	"option2" : "家派",
	"winner1" : "Shizuku",
	"winner2" : "Kanata"
},
{
	"id": 16,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202104/",
	"started" : new Date("2021-04-02T21:15:00+09:00"),
	"ended"   : new Date("2021-04-08T23:59:59+09:00"),
	"theme" : "ビーチでするならスイカ割り派？ビーチバレー派？",
	"option1" : "スイカ割り派",
	"option2" : "ビーチバレー派",
	"winner1" : "Rina",
	"winner2" : "Ai"
},
{
	"id": 17,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202105/",
	"started" : new Date("2021-05-14T21:15:00+09:00"),
	"ended"   : new Date("2021-05-20T23:59:59+09:00"),
	"theme" : "花火といえば打ち上げ花火派？手持ち花火派？",
	"option1" : "打ち上げ花火派",
	"option2" : "手持ち花火派",
	"winner1" : "Setsuna",
	"winner2" : "Ayumu"
},
{
	"id": 18,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202106/",
	"started" : new Date("2021-06-02T22:15:00+09:00"),
	"ended"   : new Date("2021-06-08T23:59:59+09:00"),
	"theme" : "夏祭りでするなら射的派？金魚すくい派？",
	"option1" : "射的派",
	"option2" : "金魚すくい派",
	"winner1" : "Rina",
	"winner2" : "Emma"
},
{
	"id": 19,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202107/",
	"started" : new Date("2021-07-19T21:15:00+09:00"),
	"ended"   : new Date("2021-07-25T23:59:59+09:00"),
	"theme" : "秋といえば、スポーツの秋派？読書の秋派？",
	"option1" : "スポーツの秋派",
	"option2" : "読書の秋派",
	"winner1" : "Ai",
	"winner2" : "Shizuku"
},
{
	"id": 20,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202108/",
	"started" : new Date("2021-08-12T15:00:00+09:00"),
	"ended"   : new Date("2021-08-18T23:59:59+09:00"),
	"theme" : "おでかけするなら、アクティブにハイキング？ゆったりと美術館？",
	"option1" : "アクティブにハイキング",
	"option2" : "ゆったりと美術館",
	"winner1" : "Setsuna",
	"winner2" : "Shioriko",
},
{
	"id": 21,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202109/",
	"started" : new Date("2021-09-01T21:15:00+09:00"),
	"ended"   : new Date("2021-09-07T23:59:59+09:00"),
	"theme" : "もしコックか、ウェイターになるなら、それぞれぴったりなメンバーは？",
	"option1" : "コック",
	"option2" : "ウェイター",
	"winner1" : "Kanata",
	"winner2" : "Shizuku"
},
{
	"id": 22,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202110/",
	"started" : new Date("2021-10-13T22:15:00+09:00"),
	"ended"   : new Date("2021-10-19T23:59:59+09:00"),
	"theme" : "もしパイロットか、キャビンアテンダントになるなら、それぞれぴったりなメンバーは？",
	"option1" : "パイロット",
	"option2" : "キャビンアテンダント",
	"winner1" : "Setsuna",
	"winner2" : "Ayumu"
},
{
	"id": 23,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202111/",
	"started" : new Date("2021-11-04T22:15:00+09:00"),
	"ended"   : new Date("2021-11-10T23:59:59+09:00"),
	"theme" : "もし音楽の先生か美術の先生になるなら、それぞれぴったりなメンバーは？",
	"option1" : "音楽の先生",
	"option2" : "美術の先生",
	"winner1" : "Mia",
	"winner2" : "Kanata"
},
{
	"id": 24,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202112/",
	"started" : new Date("2021-12-04T22:15:00+09:00"),
	"ended"   : new Date("2021-12-10T23:59:59+09:00"),
	"theme" : "もし医者か看護師になるなら、それぞれぴったりなメンバーは？",
	"option1" : "医者",
	"option2" : "看護師",
	"winner1" : "Shioriko",
	"winner2" : "Emma"
},
{
	"id": 25,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202201/",
	"started" : new Date("2022-01-09T21:15:00+09:00"),
	"ended"   : new Date("2022-01-15T23:59:59+09:00"),
	"theme" : "もし社長か秘書になるなら、それぞれぴったりなメンバーは？",
	"option1" : "社長",
	"option2" : "秘書",
	"winner1" : "Lanzhu",
	"winner2" : "Ayumu"
},
{
	"id": 26,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202202/",
	"started" : new Date("2022-02-06T13:15:00+09:00"),
	"ended"   : new Date("2022-02-12T23:59:59+09:00"),
	"theme" : "もしギタリストかドラマーになるなら、それぞれぴったりなメンバーは？",
	"option1" : "ギタリスト",
	"option2" : "ドラマー",
	"winner1" : "Setsuna",
	"winner2" : "Ai"
},
{
	"id": 27,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202203/",
	"started" : new Date("2022-03-07T21:15:00+09:00"),
	"ended"   : new Date("2022-03-13T23:59:59+09:00"),
	"theme" : "もしパン屋さんかおにぎり屋さんになるなら、それぞれぴったりなメンバーは？",
	"option1" : "パン屋さん",
	"option2" : "おにぎり屋さん",
	"winner1" : "Kasumi",
	"winner2" : "Shioriko"
},
{
	"id": 28,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202204/",
	"started" : new Date("2022-04-05T21:15:00+09:00"),
	"ended"   : new Date("2022-04-11T23:59:59+09:00"),
	"theme" : "もしモデルかカメラマンになるなら、それぞれぴったりなメンバーは？",
	"option1" : "モデル",
	"option2" : "カメラマン",
	"winner1" : "Karin",
	"winner2" : "Rina"
},
{
	"id": 29,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202205/",
	"started" : new Date("2022-05-10T21:15:00+09:00"),
	"ended"   : new Date("2022-05-16T23:59:59+09:00"),
	"theme" : "もし美容師かネイリストになるなら、それぞれぴったりなメンバーは？",
	"option1" : "美容師",
	"option2" : "ネイリスト",
	"winner1" : "Shizuku",
	"winner2" : "Karin"
},
{
	"id": 30,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202206/",
	"started" : new Date("2022-06-22T21:15:00+09:00"),
	"ended"   : new Date("2022-06-28T23:59:59+09:00"),
	"theme" : "もし野球選手かサッカー選手になるなら、それぞれぴったりなメンバーは？",
	"option1" : "野球選手",
	"option2" : "サッカー選手",
	"winner1" : "Mia",
	"winner2" : "Ai"
},
{
	"id": 31,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202207/",
	"started" : new Date("2022-07-28T21:15:00+09:00"),
	"ended"   : new Date("2022-08-03T23:59:59+09:00"),
	"theme" : "もし動物園か水族館の飼育員になるなら、それぞれぴったりなメンバーは？",
	"option1" : "動物園",
	"option2" : "水族館",
	"winner1" : "Emma",
	"winner2" : "Shizuku"
},
{
	"id": 32,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202208/",
	"started" : new Date("2022-08-10T21:15:00+09:00"),
	"ended"   : new Date("2022-08-16T23:59:59+09:00"),
	"theme" : "もしピアニストかヴァイオリニストになるなら、それぞれぴったりなメンバーは？",
	"option1" : "ピアニスト",
	"option2" : "ヴァイオリニスト",
	"winner1" : "Mia",
	"winner2" : "Lanzhu"
},
{
	"id": 33,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202209/",
	"started" : new Date("2022-09-23T21:15:00+09:00"),
	"ended"   : new Date("2022-09-29T23:59:59+09:00"),
	"theme" : "もし寿司屋か蕎麦屋になるなら、それぞれぴったりなメンバーは？",
	"option1" : "寿司屋",
	"option2" : "蕎麦屋",
	"winner1" : "Karin",
	"winner2" : "Shioriko"
},
{
	"id": 34,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202210/",
	"started" : new Date("2022-10-26T21:15:00+09:00"),
	"ended"   : new Date("2022-11-01T23:59:59+09:00"),
	"theme" : "もしアナウンサーかお天気キャスターになるなら、それぞれぴったりなメンバーは？",
	"option1" : "アナウンサー",
	"option2" : "お天気キャスター",
	"winner1" : "Shioriko",
	"winner2" : "Emma"
},
{
	"id": 35,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202211/",
	"started" : new Date("2022-11-24T21:45:00+09:00"),
	"ended"   : new Date("2022-11-30T23:59:59+09:00"),
	"theme" : "もし作詞家か作曲家になるなら、それぞれぴったりなメンバーは？",
	"option1" : "作詞家",
	"option2" : "作曲家",
	"winner1" : "Ayumu",
	"winner2" : "Mia"
},
{
	"id": 36,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202212/",
	"started" : new Date("2022-12-22T21:15:00+09:00"),
	"ended"   : new Date("2022-12-28T23:59:59+09:00"),
	"theme" : "もしラーメン屋かカレー屋の店員になるなら、それぞれぴったりなメンバーは？",
	"option1" : "ラーメン屋",
	"option2" : "カレー屋",
	"winner1" : "Lanzhu",
	"winner2" : "Kanata"
},
{
	"id": 37,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202301/",
	"started" : new Date("2023-01-19T21:15:00+09:00"),
	"ended"   : new Date("2023-01-25T23:59:59+09:00"),
	"theme" : "もしゲームプログラマーかゲームデザイナーになるなら、それぞれぴったりなメンバーは？",
	"option1" : "ゲームプログラマー",
	"option2" : "ゲームデザイナー",
	"winner1" : "Rina",
	"winner2" : "Setsuna"
},
{
	"id": 38,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202302/",
	"started" : new Date("2023-02-19T22:00:00+09:00"),
	"ended"   : new Date("2023-02-25T23:59:59+09:00"),
	"theme" : "もし農家か漁師になるなら、それぞれぴったりなメンバーは？",
	"option1" : "農家",
	"option2" : "漁師",
	"winner1" : "Emma",
	"winner2" : "Karin"
},
{
	"id": 39,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202303/",
	"started" : new Date("2023-03-08T21:15:00+09:00"),
	"ended"   : new Date("2023-03-14T23:59:59+09:00"),
	"theme" : "もし落語家かDJになるなら、それぞれぴったりなメンバーは？",
	"option1" : "落語家",
	"option2" : "DJ",
	"winner1" : "Shioriko",
	"winner2" : "Mia"
},
{
	"id": 40,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202304/",
	"started" : new Date("2023-04-03T21:15:00+09:00"),
	"ended"   : new Date("2023-04-09T23:59:59+09:00"),
	"theme" : "もしウェディングプランナーかドレスコーディネーターになるなら、それぞれぴったりなメンバーは？",
	"option1" : "ウェディングプランナー",
	"option2" : "ドレスコーディネーター",
	"winner1" : "Ayumu",
	"winner2" : "Karin"
},
{
	"id": 41,
	"url" : "https://lovelive-as.bushimo.jp/selects/q202305/",
	"started" : new Date("2023-05-18T22:30:00+09:00"),
	"ended"   : new Date("2023-05-24T23:59:59+09:00"),
	"theme" : "もしストリーマーかインフルエンサーになるなら、それぞれぴったりなメンバーは？",
	"option1" : "ストリーマー",
	"option2" : "インフルエンサー",
	"winner1" : "",
	"winner2" : ""
},
];

//■ID→日本語名への変換
const NameFromID = {
	"Ayumu"   : "上原 歩夢",
	"Kasumi"  : "中須 かすみ",
	"Shizuku" : "桜坂 しずく",
	"Karin"   : "朝香 果林",
	"Ai"      : "宮下 愛",
	"Kanata"  : "近江 彼方",
	"Setsuna" : "優木 せつ菜",
	"Emma"    : "エマ・ヴェルデ",
	"Rina"    : "天王寺 璃奈",
	"Shioriko": "三船 栞子",
	"Mia"     : "ミア・テイラー",
	"Lanzhu"  : "鐘 嵐珠",
};
	
//■Date型を「YYYY/MM/DD (hh:mm)」という文字列に変換
function GetStringFromDate(date,hm){
	temp1 = new Date(date);
	
	if(temp1.getFullYear() == 1970){ //取得失敗などの理由で1970年になった場合、空文字列を返す
		console.log("Error: " + temp + "may not be a date");
		return "";
	}
	temp2 = temp1.getFullYear()
	+ "/" + ("00" + (temp1.getMonth()+1)).slice(-2)
	+ "/" + ("00" + (temp1.getDate())).slice(-2);
	if(hm){
		temp2 += " " + ("00" + (temp1.getHours())).slice(-2)
		+ ":" + ("00" + (temp1.getMinutes())).slice(-2);
	}
	return temp2;
}

//■「マンスリーアンケート一覧」の描画
function DrawEnqueteTable(){
	let Output = '';
	for(temp of EnqueteList){
		if(!temp.id){ continue;} //ID未指定ならスキップ
		Output += '<tr><td style="text-align:center">' + temp.id + '<\/td>\n'
		+ '<td style="font-size: small; white-space: nowrap;">開始：' + GetStringFromDate(temp.started) + '<br>'
		+ '終了：' + GetStringFromDate(temp.ended) + '<\/td>\n'
		+ '<td>' + temp.theme + '<\/td>\n'
		
		if(temp.winner1 in NameFromID){
			Output += '<td class="bg_ll_' + temp.winner1 + '" style="text-align: center;">'
			+ '<span style="font-size:small;">「' + temp.option1 + '」<\/span><br><strong>' + NameFromID[temp.winner1] + '<\/strong><\/td>\n';
		} else {
			Output += '<td><\/td>\n';
		}

		if(temp.winner2 in NameFromID){
			Output += '<td class="bg_ll_' + temp.winner2 + '" style="text-align: center;">'
			+ '<span style="font-size:small;">「' + temp.option2 + '」<\/span><br><strong>' + NameFromID[temp.winner2] + '<\/strong><\/td>\n'
			+ '<td style="text-align: center;"><a href="' + temp.url + '" target="_blank">&#x27a1;<\/a><\/td>';
		} else {
			Output += '<td><\/td>\n<td><\/td>\n';
		}
		Output += '<\/tr>\n';
	}
	document.getElementById("Enquete-result").innerHTML = Output;
}

//■「キャラ別最多得票」の描画
function DrawMostVoted(){
	let Output = '';
	for(const CharTemp in NameFromID){
		Output += '<tr><th class="bg_ll_' + CharTemp + '">' + NameFromID[CharTemp] + '<\/th><td>';
		for(const EventTemp of EnqueteList){
			if(CharTemp === EventTemp["winner1"]){
				Output += '<span class="TitleButton" title="' + EventTemp["theme"] + '">'
				+ '第' + EventTemp["id"] + '回<\/span>「'
				+ EventTemp["option1"] + '」1位<br>';
			}		
			if(CharTemp === EventTemp["winner2"]){
				Output += '<span class="TitleButton" title="' + EventTemp["theme"] + '">'
				+ '第' + EventTemp["id"] + '回<\/span>「'
				+ EventTemp["option2"] + '」1位<br>';
			}		
		}
		Output += '<\/td><\/tr>\n';
	}
	document.getElementById("MostVoted-result").innerHTML = Output;
}