//■配信まとめ
const LiveList = [
{
	'date': new Date('2023-04-13'),
	'title': '『103期 新入生入部記念ライブ』のお知らせ！',
	'tube': '0HMWTWiEqag',
	'tag': ['Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': 'Fes×LIVEの告知と、その予行演習。この配信は、アプリ内ではなくYouTubeでのみ行われた。'
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
	'desc': '終盤に、「フォーチュンムービー」「ツキマカセ」のサビ部分がアカペラで披露された。'
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
	'desc': ''
},
{
	'date': new Date('2023-05-25'),
	'title': 'スリーズブーケ、Fesに向かってがんばるよ',
	'tube': 'L_ADHe_4hXs',
	'tag': ['meets', 'Kaho'],
	'desc': '月末のFes×LIVEに向けて、花帆が一人で歌の練習に奮闘。<br>当初は梢も出演する予定であったが、キャストの花宮初奈氏の体調不良により、予定を変更して花帆の単独配信になった{{出演者変更のお知らせ:1661560526919581696}}。'
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
	'desc': ''
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
	'desc': '当初は花帆・梢が出演する予定であったが、キャストの楡井希実氏の体調不良により配信中止となった{{配信中止のお知らせ:1672416533853896714}}。'
},
{
	'date': new Date('2023-06-26'),
	'title': '撫子祭直前配信',
	'tube': 'kn-MgGPvI-c',
	'tag': ['meets', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': '月末のFes×LIVE（撫子祭）への期待や、意気込みを改めて語る。<br>当初は花帆も出演する予定であったが、キャストの楡井希実氏の体調不良により、予定を変更して3人での配信になった{{出演者変更のお知らせ:1673136658315890688}}。'
},
{
	'date': new Date('2023-06-29'),
	'title': '103期6月度Fes×LIVE@撫子祭',
	'tube': '',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'setlist': ['DEEPNESS', 'MC', 'Holiday∞Holiday', '水彩世界', 'Tragic Drops', 'AWOKE', 'MC', 'Dream Believers(4人Ver.)', 'MC'],
	'desc': 'アプリ内でカメラワークを選択できるようになった最初のFes×LIVE。'
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
	'desc': ''
},
{
	'date': new Date('2023-07-13'),
	'title': '７月度 部活動報告',
	'tube': 't3mnkusRoWU',
	'tag': ['meets', 'Kozue'],
	'desc': ''
},
{
	'date': new Date('2023-07-15'),
	'title': '蓮ノ空の配信に出たい人がいるらしい…!?',
	'tube': 'SwqT5S5VbFQ',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'desc': 'スペシャルゲストとして、瑠璃乃がスクールアイドルコネクトに初登場！'
},
{
	'date': new Date('2023-07-17'),
	'title': 'ボクも雑談してみたい。',
	'tube': 'xYWicho_RH0',
	'tag': ['meets', 'Tsuzuri'],
	'desc': ''
},
{
	'date': new Date('2023-07-22'),
	'title': 'スクールアイドルクラブからご報告',
	'tube': '8VE4QhDwT0w',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri'],
	'desc': 'この回ではWith×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-07-24'),
	'title': '蓮ノ空１年生の会！',
	'tube': 'T2mjEvzjnMQ',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Rurino'],
	'desc': ''
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
	'desc': ''
},
{
	'date': new Date('2023-07-31'),
	'title': '103期7月度Fes×LIVE',
	'tube': 'kg1uEGDXUNg',
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'setlist': ['Reflection in the Mirror', 'Sparkly Spot', 'MC', '眩耀夜行', 'Mirage Voyage', 'MC', '永遠のEuphoria(4人Ver.)'],
	'desc': '今月のFes×LIVEのテーマは「七夕」。蓮ノ空女学院の校舎の前に設営された屋外ステージで披露された。<br>大沢瑠璃乃がFes×LIVE初参戦！<br>今回からFes×LIVE AFTERの配信も始まった。'
},
{
	'date': new Date('2023-08-02'),
	'title': '7月度Fes×LIVE配信',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は5人が出演する予定であったが、複数のキャスト（誰であったかは非公表）の体調不良により配信中止となった{{配信中止のお知らせ:1686542487006167040}}。'
},
{
	'date': new Date('2023-08-05'),
	'title': '未定',
	'tag': ['meets', 'cancelled'],
	'desc': '当初はさやか・綴理が出演する予定であったが、複数のキャスト（誰であったかは非公表）の体調不良により配信中止となった{{配信中止のお知らせ:1687292552893063168}}。'
},
{
	'date': new Date('2023-08-07'),
	'title': '未定',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は花帆の個人配信が行われる予定であったが、キャストの体調不良により配信中止となった{{配信中止のお知らせ:1688098478877212672}}。代わりに、WithStarを獲得するための「プレゼントBOX」という配信枠が提供された。'
},
{
	'date': new Date('2023-08-10'),
	'title': '未定',
	'tag': ['meets', 'cancelled'],
	'desc': '当初は5人が出演する予定であったが、キャストの体調不良により配信中止となった{{配信中止のお知らせ:1689200972390932480}}。代わりに、WithStarを獲得するための「プレゼントBOX」という配信枠が提供された。'
},
{
	'date': new Date('2023-08-12'),
	'title': '合宿ラジオ',
	'tube': '4PW3o5haQyw',
	'tag': ['meets', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino'],
	'desc': '当初は瑠璃乃の個人配信が行われる予定であったが{{当初の予定表:1688852174024138752}}、8月上旬に配信中止が相次いだことにより内容が変更された。この回は音声のみの配信で3Dモデルは未登場。また、With×MEETS AFTERは行われなかった。'
},
{
	'date': new Date('2023-08-16'),
	'title': '村野さやかのラジオ 第３回',
	'tube': '1FqMha1tESI',
	'tag': ['meets', 'Sayaka', 'Tsuzuri'],
	'desc': ''
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
	'desc': ''
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
	'desc': ''
},
{
	'date': new Date('2023-08-30'),
	'title': '103期8月度Fes×LIVE',
	'tube': '',
	'setlist': ['ド！ド！ド！', 'ハクチューアラモード', 'MC', 'Mirage Voyage', '眩耀夜行', 'ココン東西', 'MC', '夏めきペイン', '永遠のEuphoria', 'MC'],
	'tag': ['live', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-08-31'),
	'title': '大沢瑠璃乃生誕祭！',
	'tube': 'dTM_bCvSfuU',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-09-02'),
	'title': 'みらくらぱーく！配信！！！！！！',
	'tube': 'BtBY6C5s8F4',
	'tag': ['meets', 'Rurino', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-09-04'),
	'title': 'スクールアイドルクラブ改革委員会',
	'tube': 'J5CFlI5Skw4',
	'tag': ['meets', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-09-07'),
	'title': '本のお話がした〜い！',
	'tube': '',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': '花帆の個人配信。'
},
{
	'date': new Date('2023-09-09'),
	'title': '村野さやかのラジオ 第４回',
	'tube': '',
	'tag': ['meets', 'Sayaka', 'Kozue',],
	'desc': 'さやかのラジオも4回目。今日ものゲストは梢先輩！'
},
{
	'date': new Date('2023-09-11'),
	'title': '蓮ノ空２年生の会',
	'tube': '',
	'tag': ['meets', 'Kozue', 'Tsuzuri', 'Megumi'],
	'desc': ''
},
{
	'date': new Date('2023-09-14'),
	'title': 'ルリの英語力をとくと見よ！',
	'tube': '',
	'tag': ['meets', 'Rurino'],
	'desc': ''
},
{
	'date': new Date('2023-09-16'),
	'title': '(未定)',
	'tube': '',
	'tag': ['meets', 'Kaho',  'Kozue',],
	'desc': ''
},
];

/*
{
	'date': new Date('2023-09-00'),
	'title': '',
	'tube': '',
	'tag': ['meets', 'Kaho', 'Sayaka', 'Kozue', 'Tsuzuri', 'Rurino', 'Megumi'],
	'desc': ''
},
*/