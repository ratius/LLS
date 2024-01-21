//■色データ
const CharData = [
	//■μ'ｓ
	{ id: 'Honoka', name: '高坂 穂乃果', colorname: 'オレンジ',
		official: {r:243, g:133, b:  0},
		llsif:    {r:255, g:214, b:165},
		llsif_l:  {r:255, g:247, b:237},
		llsif2:   {r:243, g:133, b:  0},
		sifac:    {r:243, g:150, b: 47},
		puchi:    {r:255, g:134, b: 37},
		sifas:    {r:255, g:163, b: 54},
		sifas_s1: {r:255, g:164, b:  0},
		nazotoki: {r:255, g:181, b: 71},
		logofinal:{r:226, g:115, b: 45}
	},

	{ id: 'Eli', name: '絢瀬 絵里', colorname: '水色',
		official: {r:122, g:238, b:255},
		llsif:    {r:196, g:237, b:250},
		llsif_l:  {r:243, g:251, b:254},
		llsif2:   {r: 46, g:191, b:212},
		sifac:    {r: 14, g:167, b:225},
		puchi:    {r: 78, g:183, b:227},
		sifas:    {r:122, g:238, b:255},
		sifas_s1: {r: 65, g:182, b:230},
		nazotoki: {r:174, g:239, b:248},
		logofinal:{r: 54, g:178, b:220}
	},

	{ id: 'Kotori', name: '南 ことり', colorname: '白',
		official: {r:206, g:191, b:191},
		llsif:    {r:231, g:218, b:218},
		llsif_l:  {r:250, g:248, b:248},
		llsif2:   {r:166, g:154, b:154},
		sifac:    {r:176, g:176, b:161},
		puchi:    {r:142, g:142, b:142},
		sifas:    {r:206, g:191, b:191},
		sifas_s1: {r:178, g:180, b:178},
		nazotoki: {r:212, g:209, b:204},
		logofinal:{r:140, g:147, b:149}
	},

	{ id: 'Umi', name: '園田 海未', colorname: '青',
		official: {r: 23, g:105, b:255},
		llsif:    {r:205, g:223, b:252},
		llsif_l:  {r:245, g:249, b:254},
		llsif2:   {r:  9, g: 77, b:202},
		sifac:    {r: 54, g:114, b:186},
		puchi:    {r: 58, g:141, b:255},
		sifas:    {r: 23, g:105, b:255},
		sifas_s1: {r:  0, g: 61, b:165},
		nazotoki: {r:171, g:191, b:243},
		logofinal:{r: 21, g: 95, b:164}
	},

	{ id: 'Rin', name: '星空 凛', colorname: '黄色',
		official: {r:255, g:248, b: 50},
		llsif:    {r:255, g:253, b:177},
		llsif_l:  {r:255, g:255, b:239},
		llsif2:   {r:219, g:212, b: 30},
		sifac:    {r:227, g:206, b: 16},
		puchi:    {r:227, g:193, b:  2},
		sifas:    {r:219, g:212, b: 30},
		sifas_s1: {r:254, g:221, b:  0},
		nazotoki: {r:255, g:237, b: 71},
		logofinal:{r:241, g:196, b: 31}
	},

	{ id: 'Maki', name: '西木野 真姫', colorname: '赤',
		official: {r:255, g: 80, b: 62},
		llsif:    {r:255, g:195, b:183},
		llsif_l:  {r:255, g:243, b:241},
		llsif2:   {r:205, g: 34, b: 16},
		sifac:    {r:233, g: 80, b: 64},
		puchi:    {r:240, g: 70, b: 70},
		sifas:    {r:255, g: 80, b: 62},
		sifas_s1: {r:238, g: 39, b: 55},
		nazotoki: {r:255, g:151, b:151},
		logofinal:{r:203, g: 53, b: 84}
	},

	{ id: 'Nozomi', name: '東條 希', colorname: 'バイオレット',
		official: {r:196, g: 85, b:246},
		llsif:    {r:228, g:214, b:242},
		llsif_l:  {r:250, g:247, b:252},
		llsif2:   {r:160, g: 43, b:212},
		sifac:    {r:103, g: 81, b:153},
		puchi:    {r:195, g:100, b:255},
		sifas:    {r:196, g: 85, b:246},
		sifas_s1: {r:132, g: 50, b:155},
		nazotoki: {r:226, g:149, b:253},
		logofinal:{r:116, g: 71, b:145}
	},

	{ id: 'Hanayo', name: '小泉 花陽', colorname: 'グリーン',
		official: {r:106, g:230, b:115},
		llsif:    {r:203, g:245, b:206},
		llsif_l:  {r:245, g:253, b:245},
		llsif2:   {r: 59, g:203, b: 69},
		sifac:    {r: 77, g:180, b: 75},
		puchi:    {r: 88, g:208, b:108},
		sifas:    {r:106, g:230, b:115},
		sifas_s1: {r:  0, g:171, b:132},
		nazotoki: {r:158, g:233, b:183},
		logofinal:{r: 84, g:171, b: 72}
	},

	{ id: 'Nico', name: '矢澤 にこ', colorname: 'ピンク',
		official: {r:255, g: 79, b:145},
		llsif:    {r:255, g:209, b:243},
		llsif_l:  {r:255, g:241, b:251},
		llsif2:   {r:211, g: 27, b: 96},
		sifac:    {r:233, g: 80, b:148},
		puchi:    {r:255, g: 79, b:133},
		sifas:    {r:255, g: 79, b:145},
		sifas_s1: {r:227, g: 28, b:121},
		nazotoki: {r:255, g:187, b:236},
		logofinal:{r:212, g: 78, b:141}
	},
	
	//■Aqours
	{ id: 'Chika', name: '高海 千歌', colorname: 'みかん色',
		official: {r:255, g:149, b: 71},
		official2:{r:255, g:121, b: 27},
		llsif:    {r:255, g:205, b:183},
		llsif_l:  {r:255, g:245, b:241},
		llsif2:   {r:236, g:116, b: 28},
		sifac:    {r:238, g:123, b: 58},
		puchi:    {r:255, g:155, b: 13},
		sifas:    {r:255, g:149, b: 71},
		sifas_s1: {r:255, g:127, b: 50},
		yohane:   {r:247, g:225, b:212},
		nazotoki: {r:255, g:181, b: 71},
		vote2nd:  {r:240, g:162, b: 11},
		vote3rd:  {r:238, g:120, b:  0},
		vote4th:  {r:239, g:120, b:  0},
		duotrio:  {r:243, g:152, b:  1},
		logomovie:{r:228, g:142, b: 48},
		logo1st:  {r:240, g:162, b: 11},
		logo2nd:  {r:240, g:162, b: 11},
		logo4th:  {r:240, g:162, b: 11},
		logo5th:  {r:242, g:143, b: 19},
		logo6th:  {r:242, g:144, b: 39},
		logounit: {r:241, g:137, b:  4}
	},

	{ id: 'Riko', name: '桜内 梨子', colorname: 'サクラピンク',
		official: {r:255, g:158, b:172},
		official2:{r:255, g:119, b:119},
		llsif:    {r:255, g:200, b:210},
		llsif_l:  {r:255, g:244, b:246},
		llsif2:   {r:233, g:114, b:132},
		sifac:    {r:242, g:150, b:191},
		puchi:    {r:248, g:138, b:149},
		sifas:    {r:255, g:158, b:172},
		sifas_s1: {r:251, g: 99, b:126},
		yohane:   {r:248, g:225, b:229},
		nazotoki: {r:255, g:225, b:247},
		vote2nd:  {r:233, g:169, b:232},
		vote3rd:  {r:220, g:118, b:171},
		vote4th:  {r:238, g:135, b:180},
		duotrio:  {r:229, g:164, b:198},
		logomovie:{r:236, g:188, b:213},
		logo1st:  {r:231, g:174, b:244},
		logo2nd:  {r:231, g:174, b:244},
		logo4th:  {r:231, g:174, b:244},
		logo5th:  {r:241, g:158, b:194},
		logo6th:  {r:245, g:181, b:197},
		logounit: {r:235, g:107, b:164}
	},

	{ id: 'Kanan', name: '松浦 果南', colorname: 'エメラルドグリーン',
		official: {r: 39, g:193, b:183},
		official2:{r:  0, g:210, b:158},
		llsif:    {r:182, g:234, b:231},
		llsif_l:  {r:240, g:251, b:250},
		llsif2:   {r: 13, g:148, b:139},
		sifac:    {r:  0, g:176, b:162},
		puchi:    {r: 15, g:219, b:155},
		sifas:    {r: 39, g:193, b:183},
		sifas_s1: {r:  0, g:199, b:177},
		yohane:   {r:228, g:244, b:243},
		nazotoki: {r:148, g:248, b:230},
		vote2nd:  {r: 19, g:232, b:174},
		vote3rd:  {r:  0, g:179, b:134},
		vote4th:  {r:  0, g:170, b:131},
		duotrio:  {r:120, g:196, b:166},
		logomovie:{r:103, g:185, b:157},
		logo1st:  {r: 83, g:211, b:141},
		logo2nd:  {r: 83, g:211, b:141},
		logo4th:  {r: 83, g:211, b:141},
		logo5th:  {r:  0, g:172, b:111},
		logo6th:  {r: 21, g:178, b:154},
		logounit: {r:  0, g:170, b:141}
	},

	{ id: 'Dia'     , name: '黒澤 ダイヤ', colorname: 'レッド',
		official: {r:219, g:  8, b: 57},
		official2:{r:244, g: 50, b: 50},
		llsif:    {r:253, g:194, b:199},
		llsif_l:  {r:255, g:243, b:244},
		llsif2:   {r:170, g:  0, b: 40},
		sifac:    {r:220, g:  9, b: 43},
		puchi:    {r:251, g: 74, b: 74},
		sifas:    {r:219, g:  7, b: 57},
		sifas_s1: {r:228, g:  0, b: 43},
		yohane:   {r:250, g:225, b:229},
		nazotoki: {r:255, g:151, b:151},
		vote2nd:  {r:242, g: 59, b: 76},
		vote3rd:  {r:231, g: 45, b: 54},
		vote4th:  {r:231, g: 45, b: 56},
		duotrio:  {r:224, g: 50, b: 51},
		logomovie:{r:216, g: 42, b: 58},
		logo1st:  {r:234, g: 71, b:117},
		logo2nd:  {r:234, g: 71, b:117},
		logo4th:  {r:234, g: 71, b:117},
		logo5th:  {r:208, g: 27, b: 89},
		logo6th:  {r:232, g: 68, b: 72},
		logounit: {r:233, g: 77, b: 69}
	},

	{ id: 'You'     , name: '渡辺 曜', colorname: 'ライトブルー',
		official: {r:102, g:192, b:255},
		official2:{r: 42, g:164, b:219},
		llsif:    {r:196, g:229, b:254},
		llsif_l:  {r:243, g:250, b:255},
		llsif2:   {r: 56, g:153, b:220},
		sifac:    {r:  0, g:167, b:210},
		puchi:    {r: 43, g:207, b:242},
		sifas:    {r:102, g:192, b:255},
		sifas_s1: {r:  0, g:181, b:226},
		yohane:   {r:218, g:246, b:253},
		nazotoki: {r:186, g:247, b:255},
		vote2nd:  {r: 73, g:185, b:249},
		vote3rd:  {r:  0, g:149, b:216},
		vote4th:  {r:  0, g:149, b:217},
		duotrio:  {r: 74, g:183, b:239},
		logomovie:{r: 38, g:157, b:209},
		logo1st:  {r: 73, g:185, b:249},
		logo2nd:  {r: 73, g:185, b:249},
		logo4th:  {r: 73, g:185, b:249},
		logo5th:  {r: 55, g:190, b:237},
		logo6th:  {r: 94, g:168, b:221},
		logounit: {r:  0, g:185, b:231}
	},

	{ id: 'Yoshiko', name: '津島 善子', colorname: 'ホワイト',
		official: {r:193, g:202, b:212},
		official2:{r:174, g:174, b:174},
		llsif:    {r:217, g:223, b:240},
		llsif_l:  {r:247, g:249, b:252},
		llsif2:   {r:151, g:160, b:172},
		sifac:    {r:179, g:177, b:177},
		puchi:    {r:142, g:142, b:142},
		sifas:    {r:193, g:202, b:212},
		sifas_s1: {r:177, g:179, b:179},
		yohane:   {r:228, g:226, b:226},
		nazotoki: {r:233, g:233, b:233},
		vote2nd:  {r:137, g:137, b:137},
		vote3rd:  {r: 76, g: 73, b: 72},
		vote4th:  {r:113, g:113, b:113},
		duotrio:  {r:137, g:148, b:154},
		logomovie:{r:227, g:235, b:243},
		logo1st:  {r:175, g:182, b:188},
		logo2nd:  {r:175, g:182, b:188},
		logo4th:  {r:175, g:182, b:188},
		logo5th:  {r:175, g:181, b:187},
		logo6th:  {r:201, g:197, b:192},
		logounit: {r:201, g:197, b:192}
	},

	{ id: 'Hanamaru', name: '国木田 花丸', colorname: 'イエロー',
		official: {r:255, g:208, b: 16},
		official2:{r:207, g:186, b: 15},
		llsif:    {r:245, g:235, b:156},
		llsif_l:  {r:253, g:251, b:235},
		llsif2:   {r:226, g:181, b:  0},
		sifac:    {r:248, g:199, b:  0},
		puchi:    {r:215, g:197, b:  1},
		sifas:    {r:255, g:208, b: 15},
		sifas_s1: {r:255, g:205, b:  0},
		yohane:   {r:253, g:243, b:202},
		nazotoki: {r:255, g:237, b: 71},
		vote2nd:  {r:230, g:214, b: 23},
		vote3rd:  {r:159, g:140, b:  0},
		vote4th:  {r:255, g:241, b:  0},
		duotrio:  {r:224, g:208, b: 35},
		logomovie:{r:229, g:188, b: 61},
		logo1st:  {r:229, g:207, b:  0},
		logo2nd:  {r:229, g:207, b:  0},
		logo4th:  {r:229, g:207, b:  0},
		logo5th:  {r:252, g:203, b:  0},
		logo6th:  {r:250, g:195, b: 36},
		logounit: {r:249, g:185, b:  0}
	},

	{ id: 'Mari', name: '小原 鞠莉', colorname: 'ヴァイオレット',
		official: {r:194, g: 82, b:198},
		official2:{r:165, g: 48, b:224},
		llsif:    {r:236, g:209, b:243},
		llsif_l:  {r:251, g:246, b:253},
		llsif2:   {r:148, g: 35, b:152},
		sifac:    {r:134, g: 57, b:145},
		puchi:    {r:195, g:100, b:255},
		sifas:    {r:194, g: 82, b:198},
		sifas_s1: {r:155, g: 38, b:182},
		yohane:   {r:234, g:218, b:236},
		nazotoki: {r:226, g:149, b:253},
		vote2nd:  {r:174, g: 88, b:235},
		vote3rd:  {r:124, g: 80, b:157},
		vote4th:  {r:124, g: 80, b:157},
		duotrio:  {r:115, g: 72, b:152},
		logomovie:{r:114, g: 71, b:143},
		logo1st:  {r:156, g:113, b:219},
		logo2nd:  {r:156, g:113, b:219},
		logo4th:  {r:156, g:113, b:219},
		logo5th:  {r:130, g: 50, b:131},
		logo6th:  {r:129, g: 79, b:156},
		logounit: {r:129, g: 79, b:156}
	},

	{ id: 'Ruby', name: '黒澤 ルビィ', colorname: 'ピンク',
		official: {r:255, g:111, b:190},
		official2:{r:238, g: 85, b:183},
		llsif:    {r:251, g:206, b:235},
		llsif_l:  {r:254, g:245, b:251},
		llsif2:   {r:234, g: 75, b:162},
		sifac:    {r:212, g: 71, b:148},
		puchi:    {r:255, g: 98, b:146},
		sifas:    {r:255, g:111, b:190},
		sifas_s1: {r:233, g: 60, b:172},
		yohane:   {r:253, g:222, b:239},
		nazotoki: {r:255, g:187, b:236},
		vote2nd:  {r:251, g:117, b:228},
		vote3rd:  {r:183, g: 63, b:145},
		vote4th:  {r:230, g: 47, b:139},
		duotrio:  {r:221, g: 50, b:146},
		logomovie:{r:224, g: 92, b:152},
		logo1st:  {r:242, g:129, b:151},
		logo2nd:  {r:242, g:129, b:151},
		logo4th:  {r:242, g:129, b:151},
		logo5th:  {r:228, g: 81, b:152},
		logo6th:  {r:230, g: 55, b:141},
		logounit: {r:230, g: 55, b:141}
	},

	//■虹ヶ咲学園スクールアイドル同好会
	{ id: 'Ayumu', name: '上原 歩夢', colorname: 'ピンク',
		official: {r:237, g:125, b:149},
		official2:{r:237, g:125, b:149},
		llsif:    {r:254, g:186, b:203},
		llsif_l:  {r:255, g:241, b:245},
		llsif2:   {r:246, g:150, b:201},
		sifas:    {r:255, g:191, b:224},
		sifas_s1: {r:237, g:125, b:149},
		monthly:  {r:237, g:197, b:206},
		nijiyon:  {r:220, g:152, b:166},
		nazotoki: {r:255, g:187, b:236},
		logo1st:  {r:244, g:180, b:201},
		logo3rd:  {r:242, g:160, b:185},
		logosf:   {r:244, g:180, b:201},
		logo4th:  {r:234, g: 96, b:158},
		logo5th:  {r:234, g: 96, b:158},
		logo6th:  {r:234, g:129, b:133},
		logounit: {r:226, g: 60, b:103}
	},
	{ id: 'Kasumi', name: '中須 かすみ', colorname: 'パステルイエロー',
		official: {r:231, g:214, b:  0},
		official2:{r:231, g:214, b:  0},
		llsif:    {r:245, g:252, b:164},
		llsif_l:  {r:253, g:254, b:237},
		llsif2:   {r:213, g:222, b:112},
		sifas:    {r:213, g:222, b:112},
		sifas_s1: {r:231, g:214, b:  0},
		monthly:  {r:232, g:224, b:137},
		nijiyon:  {r:202, g:188, b: 53},
		nazotoki: {r:246, g:248, b:174},
		logo1st:  {r:255, g:245, b:121},
		logo3rd:  {r:255, g:245, b:121},
		logosf:   {r:242, g:226, b: 60},
		logo4th:  {r:255, g:241, b:  0},
		logo5th:  {r:255, g:241, b:  0},
		logo6th:  {r:230, g:229, b:  0},
		logounit: {r:255, g:245, b:127}
	},
	{ id: 'Shizuku', name: '桜坂 しずく', colorname: 'ライトブルー',
		official: {r:  1, g:183, b:237},
		official2:{r:  1, g:183, b:237},
		llsif:    {r:178, g:223, b:238},
		llsif_l:  {r:240, g:249, b:252},
		llsif2:   {r:138, g:204, b:228},
		sifas_s1: {r: 63, g:164, b:198},
		sifas:    {r:187, g:237, b:255},
		monthly:  {r:190, g:224, b:237},
		nijiyon:  {r:143, g:197, b:220},
		nazotoki: {r:204, g:249, b:255},
		logo1st:  {r:143, g:207, b:227},
		logo3rd:  {r:168, g:219, b:239},
		logosf:   {r:143, g:207, b:227},
		logo4th:  {r: 77, g:183, b:225},
		logo5th:  {r: 77, g:183, b:225},
		logo6th:  {r: 87, g:195, b:234},
		logounit: {r:  0, g:164, b:198}
	},
	{ id: 'Karin', name: '朝香 果林', colorname: 'ロイヤルブルー',
		official: {r: 72, g: 94, b:198},
		official2:{r: 72, g: 94, b:198},
		llsif:    {r:176, g:204, b:251},
		llsif_l:  {r:239, g:245, b:254},
		llsif2:   {r: 42, g: 20, b:180},
		sifas:    {r: 74, g: 47, b:237},
		sifas_s1: {r: 73, g: 94, b:198},
		monthly:  {r:192, g:202, b:250},
		nijiyon:  {r:145, g:160, b:245},
		nazotoki: {r:150, g:205, b:236},
		logo1st:  {r:117, g:158, b:211},
		logo3rd:  {r:  0, g:113, b:190},
		logosf:   {r:117, g:158, b:211},
		logo4th:  {r: 89, g: 71, b:154},
		logo5th:  {r: 89, g: 71, b:154},
		logo6th:  {r: 23, g: 88, b:168},
		logounit: {r: 70, g: 75, b:152}
	},
	{ id: 'Ai'      , name: '宮下 愛', colorname: '超オレンジ',
		official: {r:255, g: 88, b:  0},
		official2:{r:255, g: 88, b:  0},
		llsif:    {r:255, g:213, b:151},
		llsif_l:  {r:255, g:247, b:234},
		llsif2:   {r:232, g: 89, b: 21},
		sifas:    {r:255, g:130, b: 70},
		sifas_s1: {r:255, g: 88, b:  0},
		monthly:  {r:253, g:183, b:146},
		nijiyon:  {r:251, g:134, b: 84},
		nazotoki: {r:255, g:182, b:115},
		logo1st:  {r:246, g:174, b: 93},
		logo3rd:  {r:245, g:162, b:  0},
		logosf:   {r:246, g:174, b: 93},
		logo4th:  {r:236, g:104, b: 53},
		logo5th:  {r:236, g:104, b: 53},
		logo6th:  {r:221, g: 88, b: 29},
		logounit: {r:232, g: 57, b: 40}
	},
	{ id: 'Kanata', name: '近江 彼方', colorname: 'すみれ色',
		official: {r:166, g:100, b:160},
		official2:{r:166, g:100, b:160},
		llsif:    {r:225, g:209, b:246},
		llsif_l:  {r:249, g:246, b:253},
		llsif2:   {r:156, g: 94, b:223},
		sifas:    {r:190, g:130, b:255},
		sifas_s1: {r:179, g:101, b:174},
		monthly:  {r:211, g:184, b:229},
		nijiyon:  {r:173, g:133, b:206},
		nazotoki: {r:217, g:204, b:255},
		logo1st:  {r:195, g:119, b:174},
		logo3rd:  {r:194, g:108, b:168},
		logosf:   {r:172, g:134, b:187},
		logo4th:  {r:212, g:182, b:214},
		logo5th:  {r:212, g:182, b:214},
		logo6th:  {r:202, g:157, b:198},
		logounit: {r:218, g:180, b:212}
	},
	{ id: 'Setsuna', name: '優木 せつ菜', colorname: 'スカーレット',
		official: {r:216, g: 28, b: 47},
		official2:{r:216, g: 28, b: 47},
		llsif:    {r:255, g:175, b:175},
		llsif_l:  {r:255, g:239, b:239},
		llsif2:   {r:179, g:  6, b:  6},
		sifas:    {r:246, g: 14, b: 14},
		sifas_s1: {r:216, g: 28, b: 47},
		monthly:  {r:249, g:166, b:170},
		nijiyon:  {r:243, g:108, b:113},
		nazotoki: {r:253, g:149, b:149},
		logo1st:  {r:237, g:119, b:135},
		logo3rd:  {r:233, g: 81, b:111},
		logosf:   {r:237, g:119, b:135},
		logo4th:  {r:203, g: 39, b: 47},
		logo5th:  {r:203, g: 39, b: 47},
		logo6th:  {r:209, g: 55, b: 53},
		logounit: {r:184, g: 28, b: 37}
	},
	{ id: 'Emma', name: 'エマ・<br>ヴェルデ', colorname: 'ライトグリーン',
		official: {r:132, g:195, b:110},
		official2:{r:132, g:195, b:110},
		llsif:    {r:211, g:250, b:211},
		llsif_l:  {r:246, g:254, b:246},
		llsif2:   {r:143, g:218, b:121},
		sifas:    {r:143, g:218, b:121},
		sifas_s1: {r:125, g:198, b: 43},
		sifas_s2: {r:203, g:232, b:170},
		sifas_s3: {r:224, g:241, b:204},
		monthly:  {r:200, g:237, b:190},
		nijiyon:  {r:157, g:220, b:142},
		nazotoki: {r:199, g:243, b:214},
		logo1st:  {r:181, g:215, b:136},
		logo3rd:  {r:148, g:199, b: 76},
		logosf:   {r:181, g:215, b:136},
		logo4th:  {r:196, g:219, b:112},
		logo5th:  {r:196, g:219, b:112},
		logo6th:  {r:108, g:188, b: 99},
		logounit: {r:203, g:226, b:163}
	},
	{ id: 'Rina', name: '天王寺 璃奈', colorname: 'ペーパーホワイト',
		official: {r:156, g:165, b:185},
		official2:{r:156, g:165, b:185},
		llsif:    {r:214, g:225, b:227},
		llsif_l:  {r:247, g:247, b:249},
		llsif2:   {r:158, g:154, b:192},
		sifas:    {r:208, g:206, b:225},
		sifas_s1: {r:150, g:159, b:181},
		monthly:  {r:207, g:208, b:227},
		nijiyon:  {r:168, g:170, b:202},
		nazotoki: {r:217, g:217, b:217},
		logo1st:  {r:226, g:241, b:235},
		logo3rd:  {r:236, g:236, b:247},
		logosf:   {r:219, g:220, b:239},
		logo4th:  {r:174, g:175, b:194},
		logo5th:  {r:174, g:175, b:194},
		logo6th:  {r:184, g:183, b:199},
		logounit: {r:255, g:254, b:254}
	},
	{ id: 'Shioriko', name: '三船 栞子', colorname: '翡翠色',
		official: {r: 55, g:180, b:132},
		official2:{r: 55, g:180, b:132},
		llsif:    {r:192, g:237, b:222},
		llsif_l:  {r:242, g:251, b:248},
		llsif2:   {r: 18, g:158, b:112},
		sifas:    {r: 36, g:189, b:139},
		sifas_s1: {r: 54, g:180, b:130},
		nazotoki: {r:173, g:240, b:228},
		logosf:   {r: 99, g:189, b:147},
		logo4th:  {r: 89, g:187, b:141},
		logo5th:  {r: 89, g:187, b:141},
		logo6th:  {r:  1, g:167, b:105},
		logounit: {r: 22, g:178, b:134}
	},
	{ id: 'Mia', name: 'ミア・<br>テイラー', colorname: 'プラチナシルバー',
		official: {r:169, g:158, b:152},
		official2:{r:169, g:158, b:152},
		llsif:    {r:218, g:217, b:210},
		llsif_l:  {r:248, g:247, b:246},
		llsif2:   {r:169, g:168, b:152},
		sifas:    {r:214, g:213, b:202},
		sifas_s1: {r:169, g:168, b:154},
		nazotoki: {r:233, g:231, b:226},
		logo4th:  {r:208, g:208, b:199},
		logo5th:  {r:208, g:208, b:199},
		logo6th:  {r:203, g:214, b:216},
		logounit: {r:169, g:167, b:151}
	},
	{ id: 'Lanzhu', name: '鐘 嵐珠', colorname: 'ピンクゴールド',
		official: {r:248, g:200, b:196},
		official2:{r:248, g:200, b:196},
		llsif:    {r:252, g:222, b:220},
		llsif_l:  {r:254, g:248, b:248},
		llsif2:   {r:246, g:153, b:146},
		sifas:    {r:248, g:200, b:196},
		sifas_s1: {r:246, g:153, b:146},
		nazotoki: {r:255, g:205, b:199},
		logo4th:  {r:245, g:208, b:210},
		logo5th:  {r:245, g:208, b:210},
		logo6th:  {r:241, g:205, b:207},
		logounit: {r:237, g:149, b:142}
	},
	{ id: 'Yu', name: '高咲 侑',
		official: {r: 29, g: 29, b: 29},
		official2:{r: 29, g: 29, b: 29},
		llsif2:   {r:195, g:195, b:195},
		nazotoki: {r:188, g:188, b:188},
		logo3rd:  {r: 86, g: 86, b: 84},
		logo5th:  {r: 63, g: 58, b: 57},
		logo6th:  {r: 89, g: 87, b: 88}
	},

	//■Liella!
	{ id: 'Kanon', name: '澁谷 かのん', colorname: 'マリーゴールド',
		official: {r:255, g:127, b: 39},
		official2:{r:255, g:127, b: 39},
		llsif:    {r:255, g:197, b:157},
		llsif_l:  {r:255, g:243, b:235},
		llsif2:   {r:242, g: 99, b:  0},
		nazotoki: {r:255, g:181, b: 71},
		logo1st:  {r:241, g:140, b: 67},
		logo2nd_a:{r:239, g:130, b:  0},
		logo2nd_b:{r:242, g:150, b:  0},
		logo3rd:  {r:250, g:205, b:137},
	},
	{ id: 'Keke', name: '唐 可可', colorname: 'パステルブルー',
		official: {r:160, g:255, b:249},
		official2:{r:160, g:255, b:249},
		llsif:    {r:174, g:255, b:250},
		llsif_l:  {r:239, g:255, b:254},
		llsif2:   {r: 58, g:255, b:243},
		nazotoki: {r:160, g:244, b:255},
		logo1st:  {r: 95, g:193, b:199},
		logo2nd_a:{r:142, g:210, b:244},
		logo2nd_b:{r:186, g:226, b:248},
		logo3rd:  {r:223, g:242, b:252},
	},
	{ id: 'Chisato', name: '嵐 千砂都', colorname: 'ピーチピンク',
		official: {r:255, g:110, b:144},
		official2:{r:255, g:110, b:144},
		llsif:    {r:255, g:202, b:214},
		llsif_l:  {r:255, g:244, b:247},
		llsif2:   {r:255, g: 58, b:107},
		nazotoki: {r:255, g:187, b:187},
		logo1st:  {r:235, g:107, b:164},
		logo2nd_a:{r:237, g:134, b:179},
		logo2nd_b:{r:240, g:157, b:193},
		logo3rd:  {r:248, g:207, b:224},
	},
	{ id: 'Sumire', name: '平安名 すみれ', colorname: 'メロングリーン',
		official: {r:116, g:244, b:102},
		official2:{r:116, g:244, b:102},
		llsif:    {r:195, g:255, b:188},
		llsif_l:  {r:243, g:255, b:242},
		llsif2:   {r: 38, g:228, b: 17},
		nazotoki: {r:188, g:246, b:129},
		logo1st:  {r:183, g:211, b: 27},
		logo2nd_a:{r:110, g:185, b: 68},
		logo2nd_b:{r:140, g:196, b: 86},
		logo3rd:  {r:203, g:227, b:174},
	},
	{ id: 'Ren', name: '葉月 恋', colorname: 'サファイアブルー',
		official: {r:  0, g:  0, b:160},
		official2:{r:  0, g:  0, b:160},
		llsif:    {r:192, g:203, b:255},
		llsif_l:  {r:244, g:245, b:255},
		llsif2:   {r:  0, g:  0, b:109},
		nazotoki: {r:153, g:163, b:216},
		logo1st:  {r: 85, g:147, b:207},
		logo2nd_a:{r: 29, g: 32, b:135},
		logo2nd_b:{r: 87, g: 75, b:156},
		logo3rd:  {r:117, g:124, b:187},
	},
	{ id: 'Kinako', name: '桜小路 きな子', colorname: 'メイズイエロー',
		official: {r:255, g:244, b: 66},
		official2:{r:255, g:244, b: 66},
		llsif:    {r:255, g:247, b:203},
		llsif_l:  {r:245, g:253, b:245},
		llsif2:   {r:219, g:206, b:  0},
		nazotoki: {r:235, g:222, b:105},
		logo3rd:  {r:250, g:245, b:176},
	},
	{ id: 'Mei', name: '米女 メイ', colorname: 'ルージュ',
		official: {r:255, g: 53, b: 53},
		official2:{r:255, g: 53, b: 53},
		llsif:    {r:255, g:195, b:195},
		llsif_l:  {r:255, g:243, b:243},
		llsif2:   {r:207, g:  0, b:  0},
		nazotoki: {r:255, g: 24, b: 24},
		logo3rd:  {r:242, g:156, b:169},
	},
	{ id: 'Shiki', name: '若菜 四季', colorname: 'アイスグリーンホワイト',
		official: {r:178, g:255, b:221},
		official2:{r:178, g:255, b:221},
		llsif:    {r:219, g:255, b:239},
		llsif_l:  {r:248, g:255, b:252},
		llsif2:   {r: 76, g:255, b:176},
		nazotoki: {r:218, g:255, b:230},
		logo3rd:  {r:224, g:240, b:232},
	},
	{ id: 'Natsumi', name: '鬼塚 夏美', colorname: 'オニナッツピンク',
		official: {r:255, g: 81, b:196},
		official2:{r:255, g: 81, b:196},
		llsif:    {r:255, g:203, b:237},
		llsif_l:  {r:255, g:245, b:251},
		llsif2:   {r:234, g:  0, b:155},
		nazotoki: {r:249, g: 68, b:198},
		logo3rd:  {r:233, g:174, b:206},
	},
	{ id: 'Wien', name: 'ウィーン・<br>マルガレーテ', colorname: 'エレガントパープル',
		official: {r:228, g:157, b:253},
		official2:{r:228, g:157, b:253},
		llsif2:   {r:228, g:157, b:253},
	},
	{ id: 'Tomari', name: '鬼塚 冬毬', colorname: 'スモーキーブルー',
		official: {r:118, g:221, b:223},
		official2:{r: 76, g:210, b:226},
		llsif2:   {r: 76, g:210, b:226},
	},
	
	//■蓮ノ空
	{ id: 'Kaho', name: '日野下 花帆', colorname: 'おひさま色',
		official: {r:248, g:181, b:  0},
		official2:{r:248, g:181, b:  0},
		logo1st:  {r:255, g:191, b:  0},
	},
	{ id: 'Sayaka', name: '村野 さやか', colorname: '氷青色',
		official: {r: 83, g:131, b:195},
		official2:{r: 83, g:131, b:195},
		logo1st:  {r: 16, g: 83, b:166},
	},
	{ id: 'Kozue', name: '乙宗 梢', colorname: 'マーメイドグリーン',
		official: {r:104, g:190, b:141},
		official2:{r:104, g:190, b:141},
		logo1st:  {r:105, g:205, b:130},
	},
	{ id: 'Tsuzuri', name: '夕霧 綴理', colorname: 'ボクの赤',
		official: {r:186, g: 38, b: 54},
		official2:{r:186, g: 38, b: 54},
		logo1st:  {r:231, g: 51, b: 74},
	},
	{ id: 'Rurino', name: '大沢 瑠璃乃', colorname: '瑠璃ピンク',
		official: {r:231, g: 96, b:158},
		official2:{r:231, g: 96, b:158},
		logo1st:  {r:247, g:146, b:147},
	},
	{ id: 'Megumi', name: '藤島 慈', colorname: 'エンジェルホワイト',
		official: {r:200, g:194, b:198},
		official2:{r:200, g:194, b:198},
		logo1st:  {r:255, g:255, b:255},
	},
	
	//■スクールアイドルミュージカル
	{ id: 'RurikaM', name: '椿 ルリカ', colorname: '空色',
		official: {r:115, g:184, b:226},
		official2:{r:115, g:184, b:226},
	},
	{ id: 'YuzuhaM', name: '皇 ユズハ', colorname: '月白',
		official: {r:239, g:239, b:239},
		official2:{r:239, g:239, b:239},
	},
	{ id: 'YukinoM', name: '北条 ユキノ', colorname: '橙色',
		official: {r:245, g:130, b: 32},
		official2:{r:245, g:130, b: 32},
	},
	{ id: 'HikaruM', name: '天草 ヒカル', colorname: '千歳緑',
		official: {r: 60, g:104, b: 84},
		official2:{r: 60, g:104, b: 84},
	},
	{ id: 'MaayaM', name: '三笠 マーヤ', colorname: '桃色',
		official: {r:228, g:136, b:152},
		official2:{r:228, g:136, b:152},
	},
	{ id: 'AnzuM', name: '滝沢 アンズ', colorname: '赤紅',
		official: {r:216, g: 31, b: 53},
		official2:{r:216, g: 31, b: 53},
	},
	{ id: 'MisuzuM', name: '若槻 ミスズ', colorname: '藍色',
		official: {r:  0, g: 76, b:113},
		official2:{r:  0, g: 76, b:113},
	},
	{ id: 'ToaM', name: '来栖 トア', colorname: '珊瑚色',
		official: {r:255, g:140, b:144},
		official2:{r:255, g:140, b:144},
	},
	{ id: 'RenaM', name: '鈴賀 レナ', colorname: '若草色',
		official: {r:171, g:201, b:  0},
		official2:{r:171, g:201, b:  0},
	},
	{ id: 'SayakaM', name: '晴風 サヤカ', colorname: '菜の花色',
		official: {r:255, g:238, b: 80},
		official2:{r:255, g:238, b: 80},
	},
	{ id: 'MadokaM', name: '椿 マドカ',
		official2:{r: 52, g: 88, b: 44},
	},
	{ id: 'KyokaM', name: '滝沢 キョウカ',
		official2:{r:172, g: 48, b: 64},
	}
];

const LabelName = {
	official: '公式サイト<br>(総合)',
	official2:'公式サイト<br>(グループ別)',
	llsif: 'スクフェス<br>（基本背景：濃）',
	llsif_l:'スクフェス<br>（基本背景：薄）',
	llsif2: 'スクフェス2<br>（公式web）',
	puchi: 'ぷちぐる<br>（キャラ名）',
	sifas: 'スクスタ<br>（ゲーム内）',
	sifas_s1: 'スクスタ<br>（公式web）',
	sifac: 'アケフェス<br>（キャラ名）',
	yohane: '幻日のヨハネ<br>（公式web）',
	monthly: 'マンスリー<br>ランキング',
	nijiyon: 'にじよん<br>（キャラ名）',
	nazotoki: '謎解き<br>フェスティバル',
	vote2nd: '2ndシングル<br>センター投票',
	vote3rd: '3rdシングル<br>センター投票',
	vote4th: '4thシングル<br>センター投票',
	duotrio: 'デュオトリオ<br>組み合わせ投票',
	logomovie: '劇場版<br>ロゴ',
	logo1st: '1stライブ<br>ロゴ',
	logo2nd: '2ndライブ<br>ロゴ',
	logo2nd_a: '2ndライブ<br>ロゴ(濃)',
	logo2nd_b: '2ndライブ<br>ロゴ(薄)',
	logo3rd: '3rdライブ<br>ロゴ',
	logosf:  '校内S.F.<br>ロゴ',
	logo4th: '4thライブ<br>ロゴ',
	logo5th: '5thライブ<br>ロゴ',
	logo6th: '6thライブ<br>ロゴ',
	logofinal: 'Finalライブ<br>ロゴ',
	logounit: 'UNIT LIVE<br>ロゴ'
};