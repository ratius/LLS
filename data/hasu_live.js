//■配信まとめ
const LiveList = [
{
	'date': new Date('2023-04-13'),
	'title': '『103期 新入生入部記念ライブ』のお知らせ！',
	'tube': '0HMWTWiEqag',
	'tag': ['Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': 'Fes×LIVEの告知と、その予行演習。この配信は、アプリ内ではなくYouTube上でのみ行われた。'
},
{
	'date': new Date('2023-04-16'),
	'title': '103期新入生入部記念Fes×LIVE',
	'tube': 'KBnb1KbeocA',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'setlist': ['MC', '水彩世界', 'AWOKE', 'MC'],
	'desc': 'アプリの正式リリース後、最初に行われた配信。'
},
{
	'date': new Date('2023-04-17'),
	'title': '新入生紹介配信',
	'tube': 'Mh8Oe9o9Rm8',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': 'メンバー紹介動画第1弾。梢と綴理による新入生の紹介。<br>タイトルやサムネイルからは分からないが、直前のFes×LIVEの振り返りも兼ねている。'
},
{
	'date': new Date('2023-04-20'),
	'title': '梢センパイを紹介します！',
	'tube': 'B9Nn_wesEjg',
	'tag': ['meets', 'Kaho', 'Kozue'],
	'desc': 'メンバー紹介動画第2弾。花帆による梢の紹介。そして、梢の紅茶に対する熱意。'
},
{
	'date': new Date('2023-04-22'),
	'title': '綴理先輩を紹介させてください',
	'tube': 'tqtWdaWfPQo',
	'tag' : ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': 'メンバー紹介動画第3弾。さやかによる綴理の紹介。綴理とさやかの好きなものは…'
},
{
	'date': new Date('2023-04-23'),
	'title': '日野下花帆の個人配信！',
	'tube': 'XuW6zKeD5lU',
	'tag' : ['meets', 'Kaho'],
	'desc': '花帆、初めての個人配信。'
},
{
	'date': new Date('2023-04-27'),
	'title': '個人配信に挑戦します',
	'tube': 'VnwanKcS158',
	'tag': ['meets', 'Sayaka'],
	'desc': 'さやか、初めての個人配信。配信には映っていないが、隣で花帆が配信の手伝いをしている。<br>綴理語録：「枝豆」「昆布」は練習メニューのようだが、この時点では詳細不明。'
},
{
	'date': new Date('2023-04-29'),
	'title': '4月度Fes×LIVE直前配信',
	'tube': 'PIm4OcgJLIY',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': 'Fes×LIVEまであと数日。ライブに関する意気込みや、やりたいことを各々語る。'
},
{
	'date': new Date('2023-05-01'),
	'title': '103期4月度Fes×LIVE',
	'tube': 'z8xg-EmDF2w',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'setlist' : ['水彩世界', 'AWOKE', 'MC', 'スケイプゴート', '謳歌爛漫', 'MC'],
	'desc': 'ライブ会場は、卯辰山公園ふれあい広場の特設ステージ。<br>終盤に、「フォーチュンムービー」「ツキマカセ」のサビ部分がアカペラで披露された。'
},
{
	'date': new Date('2023-05-04'),
	'title': '4月度Fes×LIVEありがとう配信！',
	'tube': 'i1xvFfa7Czg',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '直前のFes×LIVEの振り返り、そしてゴールデンウィークへの思いを馳せる。<br>綴理語録：「納豆」は粘り気のある状態で、「豆腐」はそうでない状態。'
},
{
	'date': new Date('2023-05-06'),
	'title': '入学一ヶ月記念雑談！',
	'tube': 'b44GEwu3zVk',
	'tag': ['meets', 'Kaho'],
	'desc': '入学から1ヶ月の間、スクールアイドルを始めたきっかけや、花帆が体験したことを語る。'
},
{
	'date': new Date('2023-05-08'),
	'title': 'あそぼ。',
	'tube': '_IYhJjYSjp4',
	'tag': ['meets', 'Tsuzuri'],
	'desc': '綴理、初めての個人配信。綴理としりとりで遊ぼう！'
},
{
	'date': new Date('2023-05-11'),
	'title': 'もうすぐ中間試験です',
	'tube': 'tCi3Z3fTVAU',
	'tag': ['meets', 'Sayaka'],
	'desc': 'さやかなりの勉強方法や、花帆と過ごす学校生活のことを語る。さやかの得意教科は現代文とのこと。'
},
{
	'date': new Date('2023-05-13'),
	'title': 'お悩み相談室',
	'tube': '7WlBiA357uQ',
	'tag': ['meets', 'Kozue'],
	'desc': '梢、初めての個人配信。みんなから寄せられた悩みに答えていく。機械音痴っぷりも。'
},
{
	'date': new Date('2023-05-15'),
	'title': '中間テスト前にみんなに会いたい配信！',
	'tube': 'xV0pIO6ZiJk',
	'tag': ['meets', 'Kaho', 'Kozue'],
	'desc': '中間テストを目前に控える中、二人で「勉強」がテーマの雑談をしていく。二人の好きな教科も判明。<br>花帆語録：「ちくわ」は頭に入らず聞き流してしまうこと。その派生で、見逃す、筒抜けなどの意味でも使える（2023/5/21With×MEETSで用例あり）。'
},
{
	'date': new Date('2023-05-21'),
	'title': '中間テスト終了！念願のだらだら配信！',
	'tube': '0OT_W0obDFI',
	'tag': ['meets', 'Kaho', 'Tsuzuri'],
	'desc': '中間テストの重圧から解放された二人の雑談。ツッコミ役のいない空間で、あらぬ方向に話題が……！？'
},
{
	'date': new Date('2023-05-22'),
	'title': '日野下花帆生誕祭！',
	'tube': 'HLY9JvFpmyM',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '5月22日は梢ちゃんの誕生日！ みんなでお祝いしよう！'
},
{
	'date': new Date('2023-05-25'),
	'title': 'スリーズブーケ、Fesに向かってがんばるよ',
	'tube': 'L_ADHe_4hXs',
	'tag': ['meets', 'Kaho'],
	'desc': '月末のFes×LIVEに向けて、花帆が一人で歌の練習に奮闘。<br>当初は梢も出演する予定であったが、キャストの花宮初奈氏の体調不良により、予定を変更して花帆の単独配信になった{{X:出演者変更のお知らせ:1661560526919581696}}。'
},
{
	'date': new Date('2023-05-27'),
	'title': 'DOLLCHESTRA、練習します',
	'tube': 'hqVtZOMkyOo',
	'tag': ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': '月末のFes×LIVEに向けて、DOLLCHESTRAの2人が「スケイプゴート」のダンスの練習。<br>綴理語録：「昆布」は芯が通った振り付け、「わかめ」は芯が柔らかい状態。<br>「パフェ」は色々な要素をメリハリ良く詰め込む。さくらんぼの数で評価してくれる。<br>「だるま」は体の重心が動かないよう気をつける。'
},
{
	'date': new Date('2023-05-29'),
	'title': '5月度Fes×LIVE直前配信 ',
	'tube': 'l2cd1mFssF4',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '4人が、Fes×LIVEへ向けて意気込みを語る。ライブが楽しみすぎて、花帆が重要な情報をおもらし！？'
},
{
	'date': new Date('2023-05-31'),
	'title': '103期5月度Fes×LIVE',
	'tube': 'hBgy4EAVddc',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'setlist' : ['スケイプゴート', 'AWOKE', '謳歌爛漫', '水彩世界', 'MC', 'Holiday∞Holiday', 'Tragic Drops'],
	'desc': 'ライブ会場は、蓮ノ空女学院の音楽堂。'
},
{
	'date': new Date('2023-06-01'),
	'title': '5月度Fes×LIVEありがとう配信！',
	'tube': 'pIm7NNQiinc',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '先日のFes×LIVEを4人で振り返る。この回より、With×MEETS AFTERが配信されるようになった。'
},
{
	'date': new Date('2023-06-03'),
	'title': '村野さやかのラジオ',
	'tube': 'wflHX_IFknw',
	'tag': ['meets', 'Sayaka'],
	'desc': '個人配信にも慣れてきたさやか。トークの上手さを花帆に褒められたのをきっかけに、ラジオのような配信に挑戦！<br>With×MEETS AFTERで、さやか本人は「村長」、リスナーは「村人」と呼ばれることが決まった。'
},
{
	'date': new Date('2023-06-05'),
	'title': '衣替えということは・・・？',
	'tube': 'ogLFDwHmtM8',
	'tag': ['meets', 'Kaho', 'Sayaka'],
	'desc': '夏に向けて思いを馳せる二人。花帆、さやかの夏制服3Dモデルがお披露目。'
},
{
	'date': new Date('2023-06-08'),
	'title': '蓮ノ空の魅力を語りたい！',
	'tube': 'PRIlme36oQM',
	'tag': ['meets', 'Kaho'],
	'desc': '花帆の個人配信。スクールアイドルクラブの魅力を存分に語る！'
},
{
	'date': new Date('2023-06-10'),
	'title': '入学して２ヶ月経ちました',
	'tube': '2fHS1QHx4Zg',
	'tag': ['meets', 'Kaho', 'Sayaka'],
	'desc': '蓮ノ空に通い始めて早2ヶ月。花帆とさやかが、お世話になっている先輩への感謝の気持ちを語る。<br>ストーリー第5話に関連する言及あり。'
},
{
	'date': new Date('2023-06-12'),
	'title': 'ジェスチャークイズ。',
	'tube': 'Qs5ubEHMDwM',
	'tag': ['meets', 'Tsuzuri'],
	'desc': '綴理先輩とジェスチャークイズで遊ぼう！ 綴理の独特すぎる表現に、視聴者も大混乱！？<br>綴理の夏制服3Dモデルがお披露目。'
},
{
	'date': new Date('2023-06-15'),
	'title': '乙宗 梢 生誕祭',
	'tube': 'y1ngNblH8gk',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '6月15日は梢ちゃんの誕生日！ みんなでお祝いしよう！<br>梢の夏制服3Dモデルがお披露目。'
},
{
	'date': new Date('2023-06-17'),
	'title': '部活動報告',
	'tube': 'uPuadnz9WE0',
	'tag': ['meets', 'Kozue'],
	'desc': '部長としての目線で、スクールアイドル部の様子を報告する梢。<br>ストーリー第8話に関連する言及あり。',
},
{
	'date': new Date('2023-06-19'),
	'title': '村野さやかのラジオ 第2回',
	'tube': 'mqyhuQUaHmc',
	'tag': ['meets', 'Sayaka'],
	'desc': 'ラジオ配信第2回。今回からは、一般公募されたお便りを読み上げていく。直前の梢の単独配信に関する言及あり。',
},
{
	'date': new Date('2023-06-22'),
	'title': '撫子祭まであと少し！DOLLCHESTRA配信',
	'tube': 'LLEZ8-TEHYI',
	'tag': ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': 'DOLLCHESTRAの二人の、撫子祭への意気込みや、体育祭の思い出を語る。<br>綴理語録：「餅巾着」はTragic Dropsのサビ終わり、指で四角形をなぞる振り付けの部分のこと。'
},
{
	'date': new Date('2023-06-24'),
	'title': 'もうすぐ撫子祭！スリーズブーケ配信',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は花帆・梢が出演する予定であったが、キャストの楡井希実氏の体調不良により配信中止となった{{X:配信中止のお知らせ:1672416533853896714}}。'
},
{
	'date': new Date('2023-06-26'),
	'title': '撫子祭直前配信',
	'tube': 'kn-MgGPvI-c',
	'tag': ['meets', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '月末のFes×LIVE（撫子祭）への期待や、意気込みを改めて語る。<br>当初は花帆も出演する予定であったが、キャストの楡井希実氏の体調不良により、予定を変更して3人での配信になった{{X:出演者変更のお知らせ:1673136658315890688}}。'
},
{
	'date': new Date('2023-06-29'),
	'title': '103期6月度Fes×LIVE@撫子祭',
	'tube': 'Tb8g5GSraqc&t=4229s',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'setlist': ['DEEPNESS', 'MC', 'Holiday∞Holiday', '水彩世界', 'Tragic Drops', 'AWOKE', 'MC', 'Dream Believers(4人Ver.)', 'MC'],
	'desc': 'ライブ会場は、蓮ノ空女学院の音楽堂。アプリ内でカメラワークを選択できるようになった最初のFes×LIVE。<br>蓮ノ空公式チャンネルではなく、ラブライブ!シリーズ公式チャンネルから配信されている。<br>ストーリー第8話との密接なつながりがあるため、ストーリー第8話と抱き合わせで配信されている（右のリンクではライブ部分から視聴開始になるようになっている）。'
},
{
	'date': new Date('2023-07-01'),
	'title': '撫子祭ありがとう配信',
	'tube': 'CmYK6gsf2sE',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '撫子祭も無事に終了。4人の感想や、ファンに向けた感謝の気持ちを語る。'
},
{
	'date': new Date('2023-07-03'),
	'title': 'パジャマでお話しよう！',
	'tube': 'kb3hvXOMiI0',
	'tag': ['meets', 'Kaho'],
	'desc': '花帆が、ぐっすり寝る方法や、撫子祭の感想などを語る。ついでに髪留めをいじられたり…。<br>この配信ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-07-06'),
	'title': '蓮ノ空２年生の会',
	'tube': 'o5I9hVdRY7A',
	'tag': ['meets', 'Kozue', 'Tsuzuri'],
	'desc': '梢と綴理が先輩としての目線で、後輩の魅力や、後輩への感謝を存分に語る！<br>綴理語録：『そら豆』はフィギュアスケートの動き、足を高く引っ張り上げる姿勢（ビールマンポジション）。'
},
{
	'date': new Date('2023-07-08'),
	'title': 'もうすぐ１学期が終わりますね',
	'tube': 'dbakDnoSeb8',
	'tag': ['meets', 'Sayaka'],
	'desc': 'もうすぐ期末試験に夏休みと、忙しくなる頃。そんな中、さやかが一人で雑談配信。'
},
{
	'date': new Date('2023-07-13'),
	'title': '７月度 部活動報告',
	'tube': 't3mnkusRoWU',
	'tag': ['meets', 'Kozue'],
	'desc': '期末試験も無事終了。部長の梢が部活動のことについて報告。そして、機械音痴っぷりも…。'
},
{
	'date': new Date('2023-07-15'),
	'title': '蓮ノ空の配信に出たい人がいるらしい…!?',
	'tube': 'SwqT5S5VbFQ',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'desc': 'スペシャルゲストとして、仮入部中の瑠璃乃がスクールアイドルコネクトに初登場！'
},
{
	'date': new Date('2023-07-17'),
	'title': 'ボクも雑談してみたい。',
	'tube': 'xYWicho_RH0',
	'tag': ['meets', 'Tsuzuri'],
	'desc': '綴理が雑談配信に挑戦。綴理の独特すぎる空気に、視聴者も困惑！？<br>前回の瑠璃乃登場の話題にもちょこっとだけ触れているため、そちらを先に視聴することを推奨。'
},
{
	'date': new Date('2023-07-22'),
	'title': 'スクールアイドルクラブからご報告',
	'tube': '8VE4QhDwT0w',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'desc': 'スクールアイドル部に正式加入した瑠璃乃が、改めてみんなに自己紹介！<br>この配信ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-07-24'),
	'title': '蓮ノ空１年生の会！',
	'tube': 'T2mjEvzjnMQ',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Rurino'],
	'desc': 'さやかの部屋から、1年生3人が雑談配信。<br>さやかの「おやさいさんシリーズ」のトマトの名前が「トマティー」に決定。'
},
{
	'date': new Date('2023-07-27'),
	'title': '大沢瑠璃乃の個人配信だ！',
	'tube': 'H85epoTX7sg',
	'tag': ['meets', 'Rurino'],
	'desc': '大沢瑠璃乃が正式加入してから初めての配信。蓮ノ空のメンバーを家電に例えると……？'
},
{
	'date': new Date('2023-07-28'),
	'title': '７月度Fes×LIVE直前配信',
	'tube': 'gx8Kq2q1nO4',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'desc': '毎月恒例、月末のFes×LIVEの見どころや、Fes×LIVEへ向けての意気込みを語る。'
},
{
	'date': new Date('2023-07-31'),
	'title': '103期7月度Fes×LIVE',
	'tube': 'kg1uEGDXUNg',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'setlist': ['Reflection in the Mirror', 'Sparkly Spot', 'MC', '眩耀夜行', 'Mirage Voyage', 'MC', '永遠のEuphoria(4人Ver.)'],
	'desc': '今月のFes×LIVEのテーマは「七夕」。ライブ会場は、蓮ノ空女学院の校舎の前に設営された屋外ステージ。<br>大沢瑠璃乃がFes×LIVE初参戦！<br>今回からFes×LIVE AFTERの配信も始まった。'
},
{
	'date': new Date('2023-08-02'),
	'title': '7月度Fes×LIVE配信',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は5人が出演する予定であったが、複数のキャスト（誰であったかは非公表）の体調不良により配信中止となった{{X:配信中止のお知らせ:1686542487006167040}}。'
},
{
	'date': new Date('2023-08-05'),
	'title': '(未定)',
	'tag': ['meets', 'cancelled'],
	'desc': '当初はさやか・綴理が出演する予定であったが、複数のキャスト（誰であったかは非公表）の体調不良により配信中止となった{{X:配信中止のお知らせ:1687292552893063168}}。'
},
{
	'date': new Date('2023-08-07'),
	'title': '(未定)',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は花帆の個人配信が行われる予定であったが、キャストの体調不良により配信中止となった{{X:配信中止のお知らせ:1688098478877212672}}。代わりに、WithStarを獲得するための「プレゼントBOX」という配信枠が提供された。'
},
{
	'date': new Date('2023-08-10'),
	'title': '(未定)',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は5人が出演する予定であったが、キャストの体調不良により配信中止となった{{X:配信中止のお知らせ:1689200972390932480}}。代わりに、WithStarを獲得するための「プレゼントBOX」という配信枠が提供された。'
},
{
	'date': new Date('2023-08-12'),
	'title': '合宿ラジオ',
	'tube': '4PW3o5haQyw',
	'tag': ['meets', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '当初は瑠璃乃の個人配信が行われる予定であったが{{X:当初の予定表:1688852174024138752}}、8月上旬に配信中止が相次いだことにより内容が変更された。<br>梢の都合により部屋を映せないという建前で、この回は音声のみの配信で3Dモデルは未登場。<br>花帆は疲れて寝てしまったということで不参加。慈も少しだけ登場。また、With×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-08-16'),
	'title': '村野さやかのラジオ 第３回',
	'tube': '1FqMha1tESI',
	'tag': ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': '毎月恒例、村野さやかのラジオ。今回のゲストは綴理！<br>ゲストの肩書きは『旅人』に決定。'
},
{
	'date': new Date('2023-08-17'),
	'title': '朗読をしたいと思います。',
	'tube': 'k9eW7ILIJts',
	'tag': ['meets', 'Kaho', 'Kozue'],
	'desc': '梢が朗読に挑戦。読み上げる作品は、宮沢賢治の『やまなし』。<br>「クラムボンはかぷかぷとわらったよ。」'
},
{
	'date': new Date('2023-08-19'),
	'title': '誰が一番猫語を理解できるの？',
	'tube': 'qd1tC1-u3BI',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Rurino'],
	'desc': '1年生の3人が、「にゃ」だけで単語を表現する「ニャンニャンゲーム」で盛り上がる！'
},
{
	'date': new Date('2023-08-21'),
	'title': '梢センパイの意外な趣味・・・？',
	'tube': 'JfpUDRphCo4',
	'tag': ['meets', 'Kaho', 'Kozue'],
	'desc': '梢の意外な趣味とは……心理テスト！ 視聴者のみんなも答えてみよう！'
},
{
	'date': new Date('2023-08-24'),
	'title': 'ちょっと聞いてほしい話！',
	'tube': 'o0vAf_CIr9A',
	'tag': ['meets', 'Rurino'],
	'desc': '瑠璃乃の幼馴染にして憧れている存在、慈のことについて大事なお話を…。<br>ストーリー第10話の内容と密接に繋がっているため、先にストーリーを履修しておくことを推奨。この配信ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-08-28'),
	'title': '藤島 慈、スクールアイドルに復帰します！',
	'tube': '5XVatqO6cPk',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': 'ついに慈が、ゲストではなくレギュラーメンバーとしてWith×MEETSに登場！ そして8月度Fes×LIVEの予告も。'
},
{
	'date': new Date('2023-08-30'),
	'title': '103期8月度Fes×LIVE',
	'tube': 'dL3VNPMYzzQ&t=4323',
	'setlist': ['ド！ド！ド！', 'ハクチューアラモード', 'MC', 'Mirage Voyage', '眩耀夜行', 'ココン東西', 'MC', '夏めきペイン', '永遠のEuphoria'],
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': 'ライブ会場は、徳光海岸の特設ステージ。ついに慈も参戦し、出演は6人に！'
},
{
	'date': new Date('2023-08-31'),
	'title': '大沢瑠璃乃生誕祭！',
	'tube': 'dTM_bCvSfuU',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '8月31日は瑠璃乃ちゃんの誕生日！ みんなでお祝いしよう！',
},
{
	'date': new Date('2023-09-02'),
	'title': 'みらくらぱーく！配信！！！！！！',
	'tube': 'BtBY6C5s8F4',
	'tag': ['meets', 'Rurino', 'Megumi'],
	'desc': '「みらくらぱーく！」を結成した瑠璃乃と慈による初めての配信。二人のことをもっと知ろう！瑠璃乃と慈の練習着3Dモデルも初公開。<br>慈の実家では「<ruby>玻璃乃<rt>はりの</ruby>」という犬を飼っていることが判明。'
},
{
	'date': new Date('2023-09-04'),
	'title': 'スクールアイドルクラブ改革委員会。',
	'tube': 'J5CFlI5Skw4',
	'tag': ['meets', 'Megumi'],
	'desc': '慈の考える、これからのスクールアイドルクラブにほしいものを語っていく。<br>出た案は「メンバーのイメージカラーに名前を付ける」「部室をもっと賑やかにする」など。'
},
{
	'date': new Date('2023-09-07'),
	'title': '本のお話がした〜い！',
	'tube': '5u-Fe414jjM',
	'tag': ['meets', 'Kaho'],
	'desc': '花帆の個人配信。花帆が好きな本のお話で盛り上がる！ 花帆はファンタジー小説が好きな様子？<br>本配信内で、花帆の好きな作品として『ダレン・シャン』『クロニクル 千古の闇』『シティーハンター』『創竜伝』『心霊探偵 八雲』『レディー・ガンナー』の6作品が挙げられた。'
},
{
	'date': new Date('2023-09-09'),
	'title': '村野さやかのラジオ 第４回',
	'tube': 'w6rduTkw2VY',
	'tag': ['meets', 'Sayaka', 'Kozue',],
	'desc': 'さやかのラジオも4回目。今日ものゲストは梢先輩！<br><i>「私、あまり『だけれど』は使っていないつもりなのだけれど……」「あ、今使ってますよ」<\/i>'
},
{
	'date': new Date('2023-09-11'),
	'title': '蓮ノ空２年生の会',
	'tube': 'O2LOfOhevsE',
	'tag': ['meets', 'Kozue', 'Tsuzuri', 'Megumi'],
	'desc': '約2ヶ月ぶり（2023/07/06参照）となる蓮ノ空２年生の会。3人のことをもっと知ってもらおう！'
},
{
	'date': new Date('2023-09-14'),
	'title': 'ルリの英語力をとくと見よ！',
	'tube': '',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は瑠璃乃の個人配信の予定であった{{X:予定表:1701113345401872468}}が、キャストの体調不良により配信中止となった{{X:配信中止のお知らせ:1701869033921089759}}。代わりに、WithStarを獲得するための「プレゼントBOX」という配信枠が提供された。'
},
{
	'date': new Date('2023-09-16'),
	'title': '温泉旅行特別配信：スリーズブーケ',
	'tube': 'mu8Y3pydIy4',
	'tag': ['meets', 'Kaho',  'Kozue',],
	'desc': '{{L:ゆのくに天祥:https://yunokunitensyo.jp}}から配信するスリーズブーケ。先に活動記録第11話を視聴しておくことを推奨。<br>1日に2回の配信が行われたのはこの日が初めてである。<br>この配信ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-09-16'),
	'title': '温泉旅行特別配信：DOLLCHESTRA',
	'tube': '5BI3IbNxeUo',
	'tag': ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': 'ゆのくに天祥から配信するDOLLCHESTRA。先に活動記録第11話を視聴しておくことを推奨。<br>「私(さやか)が便利で、慈先輩が優しいなの、納得がいかないんですけど。」「さやは便利で優しい。」<br>この配信ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-09-18'),
	'title': 'だるまさんローリング',
	'tube': 'EGpQ1bXaO90',
	'tag': ['meets', 'Tsuzuri'],
	'desc': 'スクールアイドルコネクトのコメント機能を使って、綴理と「だるまさんがころんだ」ゲームをしよう！'
},
{
	'date': new Date('2023-09-23'),
	'title': 'たまには雑談など。',
	'tube': 'EGmEAcW9Daw',
	'tag': ['meets', 'Kozue'],
	'desc': '梢の個人配信。機械音痴な梢の設定ミスで、今日の配信はずいぶんとアップになっていて…？<br>With×MEETS AFTERは更にどアップ。'
},
{
	'date': new Date('2023-09-24'),
	'title': '勝負だよ、瑠璃乃ちゃん！',
	'tube': 'CORz7DeojmE',
	'tag': ['meets', 'Kaho', 'Rurino'],
	'desc': '花帆と瑠璃乃が「体じゃんけん」「ぐるぐる体幹対決」「英語禁止ゲーム」の三番勝負で対決！'
},
{
	'date': new Date('2023-09-27'),
	'title': '9月度Fes×LIVE直前配信',
	'tube': '0FcJiog4jBI',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '9/4の慈の個人配信で言っていた、「メンバーのイメージカラーの名前を決めたい」が実現した。そして、明日に控えるFes×LIVEの見どころや意気込みを語る。<br>メンバーカラー名は、花帆は「おひさま色」、さやかは「<ruby>氷青色<rt>ひょうじょういろ<\/rt><\/ruby>」、梢は「マーメイドグリーン」、綴理は「ボクの赤」、瑠璃乃は「瑠璃ピンク」、慈は「エンジェルホワイト」。'
},
{
	'date': new Date('2023-09-28'),
	'title': '103期9月度Fes×LIVE',
	'tube': 'KL5sO3N8H-4&t=3930s',
	'setlist': ['夏めきペイン', 'MC', 'Take It Over', '素顔のピクセル', 'アイデンティティ', 'MC', 'ド！ド！ド！', 'ツキマカセ', 'フォーチュンムービー', 'Dream Believers'],
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': 'ライブ会場は、蓮ノ空女学院の音楽堂。3ユニットが「伝統曲」を披露する。'
},
{
	'date': new Date('2023-09-30'),
	'title': '9月Fes×LIVE振り返り配信',
	'tube': 'mAc8zRdThiE',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '先日行われた103期9月度Fes×LIVEの振り返り。そして、来月度Fes×LIVEの予告も。'
},
{
	'date': new Date('2023-10-02'),
	'title': 'ふたりでセリフ読み。',
	'tube': 'PQgocIrnhtQ',
	'tag': ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': '9月18日の配信で予告されていた「セリフ朗読」。みんなから募集されたセリフを2人で読み上げる！'
},
{
	'date': new Date('2023-10-05'),
	'title': 'お話ししよ～',
	'tube': 'HcKQfm3d8HA&t=590s',
	'tag': ['meets', 'Megumi'],
	'desc': '慈ちゃんと雑談！ 主にゲームの話題。<br>この配信は、蓮ノ空女学院スクールアイドルクラブ公式YouTubeでも同時配信された。YouTube上では、アーカイブは「動画」ではなく「ライブ」タブにある。'
},
{
	'date': new Date('2023-10-07'),
	'title': 'カメラを、持ってみる。',
	'tube': 'zi_YtE0YYNw',
	'tag': ['meets', 'Tsuzuri'],
	'desc': '綴理の手持ちカメラと共に、部室を360度探検しよう！'
},
{
	'date': new Date('2023-10-09'),
	'title': '妄想の秋・・・！？',
	'tube': 'Ey6nTbThqkg',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Rurino'],
	'desc': 'スポーツの話から、部活動の話へ…。'
},
{
	'date': new Date('2023-10-12'),
	'title': '村野さやかのラジオ 第５回',
	'tube': 'EDX9t5wEs_0',
	'tag': ['meets', 'Sayaka', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-10-14'),
	'title': '今日はオフ！雑談しようぜい',
	'tube': '7Tbxtk7Svpk',
	'tag': ['meets', 'Rurino'],
	'desc': ''
},
{
	'date': new Date('2023-10-15'),
	'title': '後輩のベストショットを持ってこ〜い！',
	'tube': 'mIiEcDm9D14',
	'tag': ['meets', 'Kozue', 'Tsuzuri', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-10-25'),
	'title': 'みらくら綴理ぱーくだ！',
	'tube': 'ZIO4HLN5x-g',
	'tag': ['meets', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-10-26'),
	'title': '竜胆祭直前配信',
	'tube': '8h9__urzzRM',
	'tag': ['meets', 'Kozue', 'Tsuzuri', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-10-30'),
	'title': '103期10月度Fes×LIVE 第1部',
	'tube': '',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '今月のFes×LIVEは二部構成！ 第1部はハロウィンをテーマとしたライブ！<br>この回のFes×LIVE AFTERでは、リアルタイムでの投票機能が初めて使用された。',
	'setlist': ['Runway', 'Trick & Cute', 'MC', 'アイデンティティ', 'Take It Over', '素顔のピクセル', 'MC', 'Dream Believers']
},
{
	'date': new Date('2023-10-30'),
	'title': '103期10月度Fes×LIVE 第2部',
	'tube': 'lYFHmu_3AZc&t=511s',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '今月のFes×LIVEは二部構成！ 第2部はラブライブ地区予選のためのために披露されるオンラインライブ。<br>この配信は直前のライブグランプリの成績とは関係なく、視聴者全員にSランクチケットが与えられた。また、Fes×LIVE AFTERは開催されなかった。',
	'setlist': ['ノンフィクションヒーローショー', 'KNOT', '千変万華']
},
{
	'date': new Date('2023-11-02'),
	'title': '竜胆祭終了！みんなにご報告配信',
	'tube': '-DxHZd4Odow',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'desc': '当初は慈も出演する予定であったが、キャストの月音こな氏の体調不良により、5人での配信となった。{{X:出演者変更のお知らせ:1720016750346182981}}'
},
{
	'date': new Date('2023-11-04'),
	'title': '梢！トークしよ',
	'tube': 'id_X3hx3rjk',
	'tag': ['meets', 'Kozue', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-11-06'),
	'title': 'おたよりいっぱい読んじゃうぞ！',
	'tube': 'UPqpCJ2p1uE',
	'tag': ['meets', 'Kaho'],
	'desc': ''
},
{
	'date': new Date('2023-11-09'),
	'title': 'そういえば半年経ちましたね',
	'tube': 'aumJ-uF9B6I',
	'tag': ['meets', 'Sayaka'],
	'desc': ''
},
{
	'date': new Date('2023-11-11'),
	'title': '英語禁止ゲ〜〜〜ム！！だ！！',
	'tube': 'ONrTpcgwEoE',
	'tag': ['meets', 'Rurino', 'Megumi'],
	'desc': '瑠璃乃と慈が、英語禁止で会話を繰り広げる。勝つのはどちら？'
},
{
	'date': new Date('2023-11-13'),
	'title': '何か拾った。',
	'tube': 'cJpPeaRyWCU',
	'tag': ['meets', 'Tsuzuri', 'Rurino'],
	'desc': '綴理が拾ったのはだるま……？ 否、石川県の観光PRマスコットキャラクターの「{{L:ひゃくまんさん:https://hyakumansan.jp}}」！<br>この配信ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-11-16'),
	'title': '夕霧 綴理生誕祭',
	'tube': 'w5DbT9nxDRc',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '11月16日は綴理ちゃんの誕生日！ みんなでお祝いしよう！<br>先日のお礼か、この配信から蓮ノ空の部室に小さな「ひゃくまんさん」の置物が増えている。'
},
{
	'date': new Date('2023-11-23'),
	'title': 'かほとめぐです♡',
	'tube': 'GUjGfYWubc4',
	'tag': ['meets', 'Kaho', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-11-27'),
	'title': '11月度Fes×LIVE直前配信',
	'tube': 'QkjKcaaSfA8',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '毎月恒例となったFes×LIVE直前配信。今回は梢ではなく、慈が進行役を担当。Fes×LIVE当日の投票企画の告知も。'
},
{
	'date': new Date('2023-11-29'),
	'title': '103期11月度Fes×LIVE',
	'tube': '',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '今月のFes×LIVEは、金沢城からお届け！ 1曲目の「On your mark」の後に衣装投票が行われ、選ばれた衣装に着替えてユニット曲が披露された。',
	'setlist': ['On your mark', 'MC', 'KNOT', 'ド！ド！ド！', 'Holiday∞Holiday', 'MC', 'ツバサ・ラ・リベルテ', 'MC']
},
{
	'date': new Date('2023-12-02'),
	'title': '村野さやかのラジオ 第６回',
	'tube': '8nfk2NkIjLY',
	'tag': ['meets', 'Sayaka', 'Rurino'],
	'desc': ''
},
{
	'date': new Date('2023-12-04'),
	'title': 'もしもみんながファンタジーの世界にいたら…',
	'tube': 'XytOnKYX_64',
	'tag': ['meets', 'Kaho'],
	'desc': '当初は綴理の単独配信の予定だった{{X:当初の予定表:1729017211476472184}}が、諸般の事情により、花帆の単独配信に変更された。{{X:出演者変更のお知らせ:1730196225448632804}}'
},
{
	'date': new Date('2023-12-07'),
	'title': '梢先輩に「気品」を学ぼう！',
	'tube': '',
	'tag': ['meets', 'Kozue', 'Rurino'],
	'desc': ''
},
{
	'date': new Date('2023-12-11'),
	'title': '完全ノープラン雑談！',
	'tube': '',
	'tag': ['meets', 'Kaho'],
	'desc': ''
},
{
	'date': new Date('2023-12-13'),
	'title': 'ハロめぐちゃんねる年末スペシャル！',
	'tube': 'lr94xePQ8qA',
	'tag': ['meets', 'Megumi'],
	'desc': 'この配信は、蓮ノ空女学院スクールアイドルクラブ公式YouTubeでも同時配信された。YouTube上では、アーカイブは「動画」ではなく「ライブ」タブにある。'
},
{
	'date': new Date('2023-12-16'),
	'title': '蓮ノ空を紹介させてください',
	'tube': 'QRXO3FoWLG4',
	'tag': ['meets', 'Kozue'],
	'desc': 'この配信は、蓮ノ空女学院スクールアイドルクラブ公式YouTubeでも同時配信された。YouTube上では、アーカイブは「動画」ではなく「ライブ」タブにある。'
},
{
	'date': new Date('2023-12-20'),
	'title': '藤島 慈生誕祭！',
	'tube': '',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': ''
},
];

/*
{
	'date': new Date('2023-12-00'),
	'title': '',
	'tube': '',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': ''
},
*/