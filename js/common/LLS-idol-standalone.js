// ■■ ラブライブ！ストレージ キャラクターデータ抽出用モジュール「LLS Idol」
// データベースと一体化したスタンドアロン版

const LLSIdol = {
    //■getCharacterData (id, [group_id])
    //キャラクター1人分の情報を、オブジェクトとして取得する
    //条件に合うものが複数ある場合、エントリーが最も先にあるキャラクターの情報を返す
    findCharacterData(id, group_id) {
        const targetCharacter = this.data.find((character) => {
            return id === character.id
                && (group_id ? (group_id === character.group_id) : true);
        });
        if (targetCharacter === undefined) { //見つからなかった場合、undefinedを返す
            return undefined;
        }
        return { ...targetCharacter };
    },

    //■drawFace (image_id, [image_size])
    // 番号を指定して顔画像を作成。image_sizeは32と64のみ対応。デフォルトは64。
    drawFace(image_id, image_size, alt) {
        image_id ??= 0;
        image_size ??= 64;
        if (image_size !== 64 && image_size !== 32) {
            throw new Error("Error: invalid image size");
        }
        const imageOffsetX = - image_size * (this._imageGridColumn - (image_id % this._imageGridColumn) - 1);
        const imageOffsetY = - image_size * (this._imageGridRow - Math.floor(image_id / this._imageGridColumn) - 1);
        return `<div class="icon-face-${image_size}" style="background-position: right ${imageOffsetX}px bottom ${imageOffsetY}px"${alt ? ` title="${alt}"` : ``}></div>`
    },

    //■drawFaceFromObject (character, [image_size])
    // キャラクターデータのオブジェクトを取得しているならこちらから
    drawFaceFromObject(character, image_size) {
        return this.drawFace(character?.face, image_size, character?.fullName);
    },

    //■filterCharacterList (condition[0], condition[1], ...)
    //与えられた各条件に当てはまるキャラクター情報のリストを返す
    //条件の各引数は、以下の形式である場合のみ判定される
    //・"is:(キー名):(キー値)" - 対象のキーを持ち、それが特定の値である
    //・"isnot:(キー名):(キー値)" - 対象のキーを持つが、それが特定の値でない
    //・"has:(キー名)" - 対象のキーを持つ
    //・"exhas:(キー名)" - 対象のキーを持たない
    filterCharacterList: function (...conditions) {
        return this.data.filter((character) => {
            return conditions.every(condition => {
                const cType = condition.split(":")[0];
                const cKeyName = condition.split(":")[1];
                const cKeyValue = condition.split(":")[2];

                if (cType === "is" && (!character?.[cKeyName] || character[cKeyName] !== cKeyValue)) { return false; }
                else if (cType === "isnot" && character?.[cKeyName] && character[cKeyName] === cKeyValue) { return false; }
                else if (cType === "has" && !character?.[cKeyName]) { return false; }
                else if (cType === "exhas" && character?.[cKeyName]) { return false; }
                return true;
            });
        });
    },

    //■filterCharacterListOR (condition[0], condition[1], ...)
    //与えられた各条件のうち1つ以上に一致するキャラクター情報のリストを返す
    //引数の形式は filterCharacterList と同様
    filterCharacterListOR: function (...conditions) {
        return this.data.filter((character) => {
            return conditions.some(condition => {
                const cType = condition.split(":")[0];
                const cKeyName = condition.split(":")[1];
                const cKeyValue = condition.split(":")[2];

                if (cType === "is" && character?.[cKeyName] && character[cKeyName] === cKeyValue) { return true; }
                else if (cType === "isnot" && character?.[cKeyName] && character[cKeyName] !== cKeyValue) { return true; }
                else if (cType === "has" && character?.[cKeyName]) { return true; }
                else if (cType === "exhas" && !character?.[cKeyName]) { return true; }
                return false;
            });
        });
    },

    _imageGridColumn: 16,
    _imageGridRow: 16,
    data: [
        // μ's
        {
            "id": "Honoka",
            "group_id": "muse",
            "fullName": "高坂穂乃果",
            "firstName": "穂乃果",
            "birthday": "0803",
            "color": { "r": 243, "g": 133, "b": 0 },
            "color_sifas": { "r": 255, "g": 163, "b": 54 },
            "color_llsif2": { "r": 243, "g": 133, "b": 0 },
            "face": 1,
            "icon": 17
        },
        {
            "id": "Eli",
            "group_id": "muse",
            "fullName": "絢瀬絵里",
            "firstName": "絵里",
            "group_id": "muse",
            "birthday": "1021",
            "color": { "r": 122, "g": 238, "b": 255 },
            "color_sifas": { "r": 122, "g": 238, "b": 255 },
            "color_llsif2": { "r": 46, "g": 191, "b": 212 },
            "face": 2,
            "icon": 18
        },
        {
            "id": "Kotori",
            "group_id": "muse",
            "fullName": "南ことり",
            "firstName": "ことり",
            "birthday": "0912",
            "color": { "r": 206, "g": 191, "b": 191 },
            "color_sifas": { "r": 206, "g": 191, "b": 191 },
            "color_llsif2": { "r": 166, "g": 154, "b": 154 },
            "face": 3,
            "icon": 19
        },
        {
            "id": "Umi",
            "group_id": "muse",
            "fullName": "園田海未",
            "firstName": "海未",
            "birthday": "0315",
            "color": { "r": 23, "g": 105, "b": 255 },
            "color_sifas": { "r": 23, "g": 105, "b": 255 },
            "color_llsif2": { "r": 9, "g": 77, "b": 202 },
            "face": 4,
            "icon": 20
        },
        {
            "id": "Rin",
            "group_id": "muse",
            "fullName": "星空凛",
            "firstName": "凛",
            "birthday": "1101",
            "color": { "r": 255, "g": 248, "b": 50 },
            "color_sifas": { "r": 219, "g": 212, "b": 30 },
            "color_llsif2": { "r": 219, "g": 212, "b": 30 },
            "face": 5,
            "icon": 21
        },
        {
            "id": "Maki",
            "group_id": "muse",
            "fullName": "西木野真姫",
            "firstName": "真姫",
            "birthday": "0419",
            "color": { "r": 255, "g": 80, "b": 62 },
            "color_sifas": { "r": 255, "g": 80, "b": 62 },
            "color_llsif2": { "r": 205, "g": 34, "b": 16 },
            "face": 6,
            "icon": 22
        },
        {
            "id": "Nozomi",
            "group_id": "muse",
            "fullName": "東條希",
            "firstName": "希",
            "birthday": "0609",
            "color": { "r": 196, "g": 85, "b": 246 },
            "color_sifas": { "r": 196, "g": 85, "b": 246 },
            "color_llsif2": { "r": 160, "g": 43, "b": 212 },
            "face": 7,
            "icon": 23
        },
        {
            "id": "Hanayo",
            "group_id": "muse",
            "fullName": "小泉花陽",
            "firstName": "花陽",
            "birthday": "0117",
            "color": { "r": 106, "g": 230, "b": 115 },
            "color_sifas": { "r": 106, "g": 230, "b": 115 },
            "color_llsif2": { "r": 59, "g": 203, "b": 69 },
            "face": 8,
            "icon": 24
        },
        {
            "id": "Nico",
            "group_id": "muse",
            "fullName": "矢澤にこ",
            "firstName": "にこ",
            "birthday": "0722",
            "color": { "r": 255, "g": 79, "b": 145 },
            "color_sifas": { "r": 255, "g": 79, "b": 145 },
            "color_llsif2": { "r": 211, "g": 27, "b": 96 },
            "face": 9,
            "icon": 25
        },
        // Aqours
        {
            "id": "Chika",
            "group_id": "aqours",
            "fullName": "高海千歌",
            "firstName": "千歌",
            "birthday": "0801",
            "color": { "r": 255, "g": 149, "b": 71 },
            "color_sifas": { "r": 255, "g": 149, "b": 71 },
            "color_llsif2": { "r": 236, "g": 116, "b": 28 },
            "face": 33,
            "icon": 49
        },
        {
            "id": "Riko",
            "group_id": "aqours",
            "fullName": "桜内梨子",
            "firstName": "梨子",
            "birthday": "0919",
            "color": { "r": 255, "g": 158, "b": 172 },
            "color_sifas": { "r": 255, "g": 158, "b": 172 },
            "color_llsif2": { "r": 233, "g": 114, "b": 132 },
            "face": 34,
            "icon": 50
        },
        {
            "id": "Kanan",
            "group_id": "aqours",
            "fullName": "松浦果南",
            "firstName": "果南",
            "birthday": "0210",
            "color": { "r": 39, "g": 193, "b": 183 },
            "color_sifas": { "r": 39, "g": 193, "b": 183 },
            "color_llsif2": { "r": 13, "g": 148, "b": 139 },
            "face": 35,
            "icon": 51
        },
        {
            "id": "Dia",
            "group_id": "aqours",
            "fullName": "黒澤ダイヤ",
            "firstName": "ダイヤ",
            "birthday": "0101",
            "color": { "r": 219, "g": 8, "b": 57 },
            "color_sifas": { "r": 219, "g": 7, "b": 57 },
            "color_llsif2": { "r": 170, "g": 0, "b": 40 },
            "face": 36,
            "icon": 52
        },
        {
            "id": "You",
            "group_id": "aqours",
            "fullName": "渡辺曜",
            "firstName": "曜",
            "birthday": "0417",
            "color": { "r": 102, "g": 192, "b": 255 },
            "color_sifas": { "r": 102, "g": 192, "b": 255 },
            "color_llsif2": { "r": 56, "g": 153, "b": 220 },
            "face": 37,
            "icon": 53
        },
        {
            "id": "Yoshiko",
            "group_id": "aqours",
            "fullName": "津島善子",
            "firstName": "善子",
            "birthday": "0713",
            "color": { "r": 193, "g": 202, "b": 212 },
            "color_sifas": { "r": 193, "g": 202, "b": 212 },
            "color_llsif2": { "r": 151, "g": 160, "b": 172 },
            "face": 38,
            "icon": 54
        },
        {
            "id": "Hanamaru",
            "group_id": "aqours",
            "fullName": "国木田花丸",
            "firstName": "花丸",
            "birthday": "0304",
            "color": { "r": 255, "g": 208, "b": 16 },
            "color_sifas": { "r": 255, "g": 208, "b": 15 },
            "color_llsif2": { "r": 226, "g": 181, "b": 0 },
            "face": 39,
            "icon": 55
        },
        {
            "id": "Mari",
            "group_id": "aqours",
            "fullName": "小原鞠莉",
            "firstName": "鞠莉",
            "birthday": "0613",
            "color": { "r": 194, "g": 82, "b": 198 },
            "color_sifas": { "r": 194, "g": 82, "b": 198 },
            "color_llsif2": { "r": 148, "g": 35, "b": 152 },
            "face": 40,
            "icon": 56
        },
        {
            "id": "Ruby",
            "group_id": "aqours",
            "fullName": "黒澤ルビィ",
            "firstName": "ルビィ",
            "birthday": "0921",
            "color": { "r": 255, "g": 111, "b": 190 },
            "color_sifas": { "r": 255, "g": 111, "b": 190 },
            "color_llsif2": { "r": 234, "g": 75, "b": 162 },
            "face": 41,
            "icon": 57
        },
        // 虹ヶ咲
        {
            "id": "Ayumu",
            "group_id": "nijigasaki",
            "fullName": "上原歩夢",
            "firstName": "歩夢",
            "birthday": "0301",
            "color": { "r": 237, "g": 125, "b": 149 },
            "color_sifas": { "r": 255, "g": 191, "b": 224 },
            "color_llsif2": { "r": 246, "g": 150, "b": 201 },
            "face": 65,
            "icon": 81
        },
        {
            "id": "Kasumi",
            "group_id": "nijigasaki",
            "fullName": "中須かすみ",
            "firstName": "かすみ",
            "birthday": "0123",
            "color": { "r": 231, "g": 214, "b": 0 },
            "color_sifas": { "r": 213, "g": 222, "b": 112 },
            "color_llsif2": { "r": 213, "g": 222, "b": 112 },
            "face": 66,
            "icon": 82
        },
        {
            "id": "Shizuku",
            "group_id": "nijigasaki",
            "fullName": "桜坂しずく",
            "firstName": "しずく",
            "birthday": "0403",
            "color": { "r": 1, "g": 183, "b": 237 },
            "color_sifas": { "r": 187, "g": 237, "b": 255 },
            "color_llsif2": { "r": 138, "g": 204, "b": 228 },
            "face": 67,
            "icon": 83
        },
        {
            "id": "Karin",
            "group_id": "nijigasaki",
            "fullName": "朝香果林",
            "firstName": "果林",
            "birthday": "0629",
            "color": { "r": 72, "g": 94, "b": 198 },
            "color_sifas": { "r": 74, "g": 47, "b": 237 },
            "color_llsif2": { "r": 42, "g": 20, "b": 180 },
            "face": 68,
            "icon": 84
        },
        {
            "id": "Ai",
            "group_id": "nijigasaki",
            "fullName": "宮下愛",
            "firstName": "愛",
            "birthday": "0530",
            "color": { "r": 255, "g": 88, "b": 0 },
            "color_sifas": { "r": 255, "g": 130, "b": 70 },
            "color_llsif2": { "r": 232, "g": 89, "b": 21 },
            "face": 69,
            "icon": 85
        },
        {
            "id": "Kanata",
            "group_id": "nijigasaki",
            "fullName": "近江彼方",
            "firstName": "彼方",
            "birthday": "1216",
            "color": { "r": 166, "g": 100, "b": 160 },
            "color_sifas": { "r": 190, "g": 130, "b": 255 },
            "color_llsif2": { "r": 156, "g": 94, "b": 223 },
            "face": 70,
            "icon": 86
        },
        {
            "id": "Setsuna",
            "group_id": "nijigasaki",
            "fullName": "優木せつ菜",
            "firstName": "せつ菜",
            "birthday": "0808",
            "color": { "r": 216, "g": 28, "b": 47 },
            "color_sifas": { "r": 246, "g": 14, "b": 14 },
            "color_llsif2": { "r": 179, "g": 6, "b": 6 },
            "face": 71,
            "icon": 87
        },
        {
            "id": "Emma",
            "group_id": "nijigasaki",
            "fullName": "エマ・ヴェルデ",
            "firstName": "エマ",
            "birthday": "0205",
            "color": { "r": 132, "g": 195, "b": 110 },
            "color_sifas": { "r": 143, "g": 218, "b": 121 },
            "color_llsif2": { "r": 143, "g": 218, "b": 121 },
            "face": 72,
            "icon": 88
        },
        {
            "id": "Rina",
            "group_id": "nijigasaki",
            "fullName": "天王寺璃奈",
            "firstName": "璃奈",
            "birthday": "1113",
            "color": { "r": 156, "g": 165, "b": 185 },
            "color_sifas": { "r": 208, "g": 206, "b": 225 },
            "color_llsif2": { "r": 158, "g": 154, "b": 192 },
            "face": 73,
            "icon": 89
        },
        {
            "id": "Shioriko",
            "group_id": "nijigasaki",
            "fullName": "三船栞子",
            "firstName": "栞子",
            "birthday": "1005",
            "color": { "r": 55, "g": 180, "b": 132 },
            "color_sifas": { "r": 36, "g": 189, "b": 139 },
            "color_llsif2": { "r": 18, "g": 158, "b": 112 },
            "face": 74,
            "icon": 90
        },
        {
            "id": "Mia",
            "group_id": "nijigasaki",
            "fullName": "ミア・テイラー",
            "firstName": "ミア",
            "birthday": "1206",
            "color": { "r": 169, "g": 158, "b": 152 },
            "color_sifas": { "r": 214, "g": 213, "b": 202 },
            "color_llsif2": { "r": 169, "g": 168, "b": 152 },
            "face": 75,
            "icon": 91
        },
        {
            "id": "Lanzhu",
            "group_id": "nijigasaki",
            "fullName": "鐘嵐珠",
            "firstName": "嵐珠",
            "birthday": "0215",
            "color": { "r": 248, "g": 200, "b": 196 },
            "color_sifas": { "r": 248, "g": 200, "b": 196 },
            "color_llsif2": { "r": 246, "g": 153, "b": 146 },
            "face": 76,
            "icon": 92
        },
        {
            "id": "Yu",
            "group_id": "nijigasaki",
            "fullName": "高咲侑",
            "firstName": "侑",
            "color": { "r": 29, "g": 29, "b": 29 },
            "color_llsif2": { "r": 195, "g": 195, "b": 195 },
            "face": 77,
            "icon": 93
        },
        // Liella!
        {
            "id": "Kanon",
            "group_id": "liella",
            "fullName": "澁谷かのん",
            "firstName": "かのん",
            "birthday": "0501",
            "color": { "r": 255, "g": 127, "b": 39 },
            "color_llsif2": { "r": 242, "g": 99, "b": 0 },
            "face": 161,
            "icon": 177
        },
        {
            "id": "Keke",
            "group_id": "liella",
            "fullName": "唐可可",
            "firstName": "可可",
            "birthday": "0717",
            "color": { "r": 160, "g": 255, "b": 249 },
            "color_llsif2": { "r": 58, "g": 255, "b": 243 },
            "face": 162,
            "icon": 178
        },
        {
            "id": "Chisato",
            "group_id": "liella",
            "fullName": "嵐千砂都",
            "firstName": "千砂都",
            "birthday": "0225",
            "color": { "r": 255, "g": 110, "b": 144 },
            "color_llsif2": { "r": 255, "g": 58, "b": 107 },
            "face": 163,
            "icon": 179
        },
        {
            "id": "Sumire",
            "group_id": "liella",
            "fullName": "平安名すみれ",
            "firstName": "すみれ",
            "birthday": "0928",
            "color": { "r": 116, "g": 244, "b": 102 },
            "color_llsif2": { "r": 38, "g": 228, "b": 17 },
            "face": 164,
            "icon": 180
        },
        {
            "id": "Ren",
            "group_id": "liella",
            "fullName": "葉月恋",
            "firstName": "恋",
            "birthday": "1124",
            "color": { "r": 0, "g": 0, "b": 160 },
            "color_llsif2": { "r": 0, "g": 0, "b": 109 },
            "face": 165,
            "icon": 181
        },
        {
            "id": "Kinako",
            "group_id": "liella",
            "fullName": "桜小路きな子",
            "firstName": "きな子",
            "birthday": "0410",
            "color": { "r": 255, "g": 244, "b": 66 },
            "color_llsif2": { "r": 219, "g": 206, "b": 0 },
            "face": 166,
            "icon": 182
        },
        {
            "id": "Mei",
            "group_id": "liella",
            "fullName": "米女メイ",
            "firstName": "メイ",
            "birthday": "1029",
            "color": { "r": 255, "g": 53, "b": 53 },
            "color_llsif2": { "r": 207, "g": 0, "b": 0 },
            "face": 167,
            "icon": 183
        },
        {
            "id": "Shiki",
            "group_id": "liella",
            "fullName": "若菜四季",
            "firstName": "四季",
            "birthday": "0617",
            "color": { "r": 178, "g": 255, "b": 221 },
            "color_llsif2": { "r": 76, "g": 255, "b": 176 },
            "face": 168,
            "icon": 184
        },
        {
            "id": "Natsumi",
            "group_id": "liella",
            "fullName": "鬼塚夏美",
            "firstName": "夏美",
            "birthday": "0807",
            "color": { "r": 255, "g": 81, "b": 196 },
            "color_llsif2": { "r": 234, "g": 0, "b": 155 },
            "face": 169,
            "icon": 185
        },
        {
            "id": "Margarete",
            "group_id": "liella",
            "fullName": "ウィーン・マルガレーテ",
            "firstName": "マルガレーテ",
            "birthday": "0120",
            "color": { "r": 228, "g": 157, "b": 253 },
            "color_llsif2": { "r": 228, "g": 157, "b": 253 },
            "face": 170,
            "icon": 186
        },
        {
            "id": "Tomari",
            "group_id": "liella",
            "fullName": "鬼塚冬毬",
            "firstName": "冬毬",
            "birthday": "1228",
            "color": { "r": 118, "g": 221, "b": 223 },
            "color_llsif2": { "r": 76, "g": 210, "b": 226 },
            "face": 171,
            "icon": 187
        },
        // 蓮ノ空

        {
            "id": "Kaho",
            "group_id": "hasunosora",
            "fullName": "日野下花帆",
            "firstName": "花帆",
            "birthday": "0522",
            "color": { "r": 248, "g": 181, "b": 0 },
            "face": 193,
            "icon": 209
        },
        {
            "id": "Sayaka",
            "group_id": "hasunosora",
            "fullName": "村野さやか",
            "firstName": "さやか",
            "birthday": "0113",
            "color": { "r": 83, "g": 131, "b": 195 },
            "face": 194,
            "icon": 210
        },
        {
            "id": "Kozue",
            "group_id": "hasunosora",
            "fullName": "乙宗梢",
            "firstName": "梢",
            "birthday": "0615",
            "color": { "r": 104, "g": 190, "b": 141 },
            "face": 195,
            "icon": 211
        },
        {
            "id": "Tsuzuri",
            "group_id": "hasunosora",
            "fullName": "夕霧綴理",
            "firstName": "綴理",
            "birthday": "1117",
            "color": { "r": 186, "g": 38, "b": 54 },
            "face": 196,
            "icon": 212
        },
        {
            "id": "Rurino",
            "group_id": "hasunosora",
            "fullName": "大沢瑠璃乃",
            "firstName": "瑠璃乃",
            "birthday": "0831",
            "color": { "r": 231, "g": 96, "b": 158 },
            "face": 197,
            "icon": 213
        },
        {
            "id": "Megumi",
            "group_id": "hasunosora",
            "fullName": "藤島慈",
            "firstName": "慈",
            "birthday": "1220",
            "color": { "r": 200, "g": 194, "b": 198 },
            "face": 198,
            "icon": 214
        },
        {
            "id": "Ginko",
            "group_id": "hasunosora",
            "fullName": "百生吟子",
            "firstName": "吟子",
            "birthday": "1020",
            "color": { "r": 162, "g": 215, "b": 221 },
            "face": 199,
            "icon": 215
        },
        {
            "id": "Kosuzu",
            "group_id": "hasunosora",
            "fullName": "徒町小鈴",
            "firstName": "小鈴",
            "birthday": "0228",
            "color": { "r": 250, "g": 215, "b": 100 },
            "face": 200,
            "icon": 216
        },
        {
            "id": "Hime",
            "group_id": "hasunosora",
            "fullName": "安養寺姫芽",
            "firstName": "姫芽",
            "birthday": "0924",
            "color": { "r": 157, "g": 141, "b": 226 },
            "face": 201,
            "icon": 217
        },
        {
            "id": "Ceras",
            "group_id": "hasunosora",
            "fullName": "セラス 柳田 リリエンフェルト",
            "firstName": "セラス",
            "birthday": "0626",
            "color": { "r": 245, "g": 100, "b": 85 },
            "face": 202,
            "icon": 218
        },
        {
            "id": "Izumi",
            "group_id": "hasunosora",
            "fullName": "桂城泉",
            "firstName": "泉",
            "birthday": "1201",
            "color": { "r": 30, "g": 190, "b": 205 },
            "face": 203,
            "icon": 219
        },
        {
            "id": "Maika",
            "group_id": "hasunosora",
            "fullName": "錦上マイカ",
            "firstName": "マイカ",
            "face": 204,
            "icon": 220
        },
        {
            "id": "Aoi",
            "group_id": "hasunosora",
            "fullName": "令沢葵",
            "firstName": "葵",
            "face": 205,
            "icon": 221
        },
        {
            "id": "Mion",
            "group_id": "hasunosora",
            "fullName": "箕輪みおん",
            "firstName": "みおん",
            "face": 206,
            "icon": 222
        },
        {
            "id": "Sachi",
            "group_id": "hasunosora",
            "fullName": "大賀美沙知",
            "firstName": "沙知",
            "face": 207,
            "icon": 223
        },
        // ミュージカル
        {
            "id": "Rurika",
            "group_id": "musical",
            "fullName": "椿ルリカ",
            "firstName": "ルリカ",
            "color": { "r": 115, "g": 184, "b": 226 }
        },
        {
            "id": "Yuzuha",
            "group_id": "musical",
            "fullName": "皇ユズハ",
            "firstName": "ユズハ",
            "color": { "r": 239, "g": 239, "b": 239 }
        },
        {
            "id": "Yukino",
            "group_id": "musical",
            "fullName": "北条ユキノ",
            "firstName": "ユキノ",
            "color": { "r": 245, "g": 130, "b": 32 }
        },
        {
            "id": "Hikaru",
            "group_id": "musical",
            "fullName": "天草ヒカル",
            "firstName": "ヒカル",
            "color": { "r": 60, "g": 104, "b": 84 }
        },
        {
            "id": "Maya",
            "group_id": "musical",
            "fullName": "三笠マーヤ",
            "firstName": "マーヤ",
            "color": { "r": 228, "g": 136, "b": 152 }
        },
        {
            "id": "Anzu",
            "group_id": "musical",
            "fullName": "滝沢アンズ",
            "firstName": "アンズ",
            "color": { "r": 216, "g": 31, "b": 53 }
        },
        {
            "id": "Misuzu",
            "group_id": "musical",
            "fullName": "若槻ミスズ",
            "firstName": "ミスズ",
            "color": { "r": 0, "g": 76, "b": 113 }
        },
        {
            "id": "Toa",
            "group_id": "musical",
            "fullName": "来栖トア",
            "firstName": "トア",
            "color": { "r": 255, "g": 140, "b": 144 }
        },
        {
            "id": "Rena",
            "group_id": "musical",
            "fullName": "鈴賀レナ",
            "firstName": "レナ",
            "color": { "r": 171, "g": 201, "b": 0 }
        },
        {
            "id": "Sayaka",
            "group_id": "musical",
            "fullName": "晴風サヤカ",
            "firstName": "サヤカ",
            "color": { "r": 255, "g": 238, "b": 80 }
        },
        // 幻日のヨハネ
        {
            "id": "Yohane",
            "fullName": "ヨハネ",
            "firstName": "ヨハネ",
            "color": { "r": 228, "g": 226, "b": 226 }
        },
        {
            "id": "Hanamaru",
            "fullName": "ハナマル",
            "firstName": "ハナマル",
            "color": { "r": 253, "g": 243, "b": 202 }
        },
        {
            "id": "Dia",
            "fullName": "ダイヤ",
            "firstName": "ダイヤ",
            "color": { "r": 250, "g": 225, "b": 229 }
        },
        {
            "id": "Ruby",
            "fullName": "ルビィ",
            "firstName": "ルビィ",
            "color": { "r": 253, "g": 222, "b": 239 }
        },
        {
            "id": "Chika",
            "fullName": "チカ",
            "firstName": "チカ",
            "color": { "r": 247, "g": 225, "b": 212 }
        },
        {
            "id": "Kanan",
            "fullName": "カナン",
            "firstName": "カナン",
            "color": { "r": 228, "g": 244, "b": 243 }
        },
        {
            "id": "You",
            "fullName": "ヨウ",
            "firstName": "ヨウ",
            "color": { "r": 218, "g": 246, "b": 253 }
        },
        {
            "id": "Riko",
            "fullName": "リコ",
            "firstName": "リコ",
            "color": { "r": 248, "g": 225, "b": 229 }
        },
        {
            "id": "Mari",
            "fullName": "マリ",
            "firstName": "マリ",
            "color": { "r": 234, "g": 218, "b": 236 }
        },
        {
            "id": "Lailaps",
            "fullName": "ライラプス",
            "firstName": "ライラプス",
            "color": { "r": 198, "g": 198, "b": 196 }
        },
        // いきづらい部！
        {
            "id": "Polka",
            "group_id": "ikizulive",
            "fullName": "高橋ポルカ",
            "firstName": "ポルカ",
            "birthday": "0818",
            "color": { "r": 255, "g": 255, "b": 102 },
            "face": 225,
            "icon": 241
        },
        {
            "id": "Mai",
            "group_id": "ikizulive",
            "fullName": "麻布麻衣",
            "firstName": "麻衣",
            "birthday": "0213",
            "color": { "r": 77, "g": 147, "b": 217 },
            "face": 226,
            "icon": 242
        },
        {
            "id": "Akira",
            "group_id": "ikizulive",
            "fullName": "五桐玲",
            "firstName": "玲",
            "birthday": "0709",
            "color": { "r": 181, "g": 230, "b": 162 },
            "face": 227,
            "icon": 243
        },
        {
            "id": "Hanabi",
            "group_id": "ikizulive",
            "fullName": "駒形花火",
            "firstName": "花火",
            "birthday": "0611",
            "color": { "r": 255, "g": 71, "b": 71 },
            "face": 228,
            "icon": 244
        },
        {
            "id": "Miracle",
            "group_id": "ikizulive",
            "fullName": "金澤奇跡",
            "firstName": "奇跡",
            "birthday": "0302",
            "color": { "r": 255, "g": 182, "b": 193 },
            "face": 229,
            "icon": 245
        },
        {
            "id": "Noriko",
            "group_id": "ikizulive",
            "fullName": "調布のりこ",
            "firstName": "のりこ",
            "birthday": "0404",
            "color": { "r": 204, "g": 102, "b": 255 },
            "face": 230,
            "icon": 246
        },
        {
            "id": "Yukuri",
            "group_id": "ikizulive",
            "fullName": "春宮ゆくり",
            "firstName": "ゆくり",
            "birthday": "0922",
            "color": { "r": 192, "g": 230, "b": 245 },
            "face": 231,
            "icon": 247
        },
        {
            "id": "Aurora",
            "group_id": "ikizulive",
            "fullName": "此花輝夜",
            "firstName": "輝夜",
            "birthday": "0103",
            "color": { "r": 255, "g": 91, "b": 157 },
            "face": 232,
            "icon": 248
        },
        {
            "id": "Midori",
            "group_id": "ikizulive",
            "fullName": "山田真緑",
            "firstName": "真緑",
            "birthday": "0507",
            "color": { "r": 63, "g": 191, "b": 127 },
            "face": 233,
            "icon": 249
        },
        {
            "id": "Shion",
            "group_id": "ikizulive",
            "fullName": "佐々木翔音",
            "firstName": "翔音",
            "birthday": "1111",
            "color": { "r": 242, "g": 242, "b": 242 },
            "face": 234,
            "icon": 250
        },
        // ライバル
        {
            "id": "Tsubasa",
            "group_id": "arise",
            "fullName": "綺羅ツバサ",
            "firstName": "ツバサ",
            "face": 10
        },
        {
            "id": "Erena",
            "group_id": "arise",
            "fullName": "統堂英玲奈",
            "firstName": "英玲奈",
            "face": 11
        },
        {
            "id": "Anju",
            "group_id": "arise",
            "fullName": "優木あんじゅ",
            "firstName": "あんじゅ",
            "face": 12
        },
        {
            "id": "Leah",
            "fullName": "鹿角理亞",
            "firstName": "理亞",
            "birthday": "1212",
            "face": 42,
            "icon": 58
        },
        {
            "id": "Sarah",
            "fullName": "鹿角聖良",
            "firstName": "聖良",
            "birthday": "0504",
            "face": 43,
            "icon": 59
        },
        {
            "id": "Mao",
            "group_id": "sunnypassion",
            "fullName": "柊摩央",
            "firstName": "摩央",
            "birthday": "1202",
            "face": 172,
            "icon": 188
        },
        {
            "id": "Yuuna",
            "group_id": "sunnypassion",
            "fullName": "聖澤悠奈",
            "firstName": "悠奈",
            "birthday": "0811",
            "face": 173,
            "icon": 189
        },
        // スクフェス
        {
            "id": "Shizuku",
            "group_id": "llsif",
            "fullName": "桜坂しずく",
            "firstName": "しずく",
            "birthday": "0403",
            "face": 97,
            "hidden": true
        },
        {
            "id": "Marika",
            "group_id": "llsif",
            "fullName": "一之瀬マリカ",
            "firstName": "マリカ",
            "birthday": "0420",
            "face": 98
        },
        {
            "id": "Minami",
            "group_id": "llsif",
            "fullName": "永山みなみ",
            "firstName": "みなみ",
            "birthday": "0830",
            "face": 99
        },
        {
            "id": "Aya",
            "group_id": "llsif",
            "fullName": "杉崎亜矢",
            "firstName": "亜矢",
            "birthday": "0930",
            "face": 100
        },
        {
            "id": "Ayumi",
            "group_id": "llsif",
            "fullName": "鳥居歩美",
            "firstName": "歩美",
            "birthday": "0308",
            "face": 101
        },
        {
            "id": "Seira",
            "group_id": "llsif",
            "fullName": "九条聖来",
            "firstName": "聖来",
            "birthday": "1115",
            "face": 102
        },
        {
            "id": "Sachiko",
            "group_id": "llsif",
            "fullName": "田中さち子",
            "firstName": "さち子",
            "birthday": "0903",
            "face": 103
        },
        {
            "id": "Akiru",
            "group_id": "llsif",
            "fullName": "篠宮あきる",
            "firstName": "あきる",
            "birthday": "0720",
            "face": 104
        },
        {
            "id": "Yumi",
            "group_id": "llsif",
            "fullName": "藤城悠弓",
            "firstName": "悠弓",
            "birthday": "0515",
            "face": 105
        },
        {
            "id": "Coco",
            "group_id": "llsif",
            "fullName": "宮下ココ",
            "firstName": "ココ",
            "birthday": "0602",
            "face": 106
        },
        {
            "id": "Sana",
            "group_id": "llsif",
            "fullName": "結城紗菜",
            "firstName": "紗菜",
            "birthday": "0820",
            "face": 107
        },
        {
            "id": "Christina",
            "group_id": "llsif",
            "fullName": "クリスティーナ",
            "firstName": "クリスティーナ",
            "birthday": "0121",
            "face": 108
        },
        {
            "id": "Yuri",
            "group_id": "llsif",
            "fullName": "御堂優理",
            "firstName": "優理",
            "birthday": "1224",
            "face": 109
        },
        {
            "id": "Rika",
            "group_id": "llsif",
            "fullName": "神谷理華",
            "firstName": "理華",
            "birthday": "0107",
            "face": 110
        },
        {
            "id": "Kanata",
            "group_id": "llsif",
            "fullName": "近江彼方",
            "firstName": "彼方",
            "birthday": "1216",
            "face": 111,
            "hidden": true
        },
        {
            "id": "Haruka",
            "group_id": "llsif",
            "fullName": "近江遥",
            "firstName": "遥",
            "birthday": "1111",
            "face": 113
        },
        {
            "id": "Kasane",
            "group_id": "llsif",
            "fullName": "支倉かさね",
            "firstName": "かさね",
            "birthday": "1212",
            "face": 114
        },
        {
            "id": "Mizuki",
            "group_id": "llsif",
            "fullName": "吉川瑞希",
            "firstName": "瑞希",
            "birthday": "1020",
            "face": 115
        },
        {
            "id": "Yu",
            "group_id": "llsif",
            "fullName": "逢沢遊宇",
            "firstName": "遊宇",
            "birthday": "0707",
            "face": 116
        },
        {
            "id": "Fumie",
            "group_id": "llsif",
            "fullName": "西村文絵",
            "firstName": "文絵",
            "birthday": "0920",
            "face": 117
        },
        {
            "id": "Akemi",
            "group_id": "llsif",
            "fullName": "菊池朱美",
            "firstName": "朱美",
            "birthday": "1030",
            "face": 118
        },
        {
            "id": "Iruka",
            "group_id": "llsif",
            "fullName": "須田いるか",
            "firstName": "いるか",
            "birthday": "0218",
            "face": 119
        },
        {
            "id": "Reine",
            "group_id": "llsif",
            "fullName": "佐伯麗音",
            "firstName": "麗音",
            "birthday": "0616",
            "face": 120
        },
        {
            "id": "Nanaka",
            "group_id": "llsif",
            "fullName": "森嶋ななか",
            "firstName": "ななか",
            "birthday": "0307",
            "face": 121
        },
        {
            "id": "Saki",
            "group_id": "llsif",
            "fullName": "下園咲",
            "firstName": "咲",
            "birthday": "0505",
            "face": 122
        },
        {
            "id": "Ru",
            "group_id": "llsif",
            "fullName": "多々良るう",
            "firstName": "るう",
            "birthday": "0325",
            "face": 123
        },
        {
            "id": "Nagi",
            "group_id": "llsif",
            "fullName": "白木凪",
            "firstName": "凪",
            "birthday": "0209",
            "face": 124
        },
        {
            "id": "Shun",
            "group_id": "llsif",
            "fullName": "黒崎隼",
            "firstName": "隼",
            "birthday": "0615",
            "face": 125
        },
        {
            "id": "Fumi",
            "group_id": "llsif",
            "fullName": "設楽ふみ",
            "firstName": "ふみ",
            "birthday": "0320",
            "face": 126
        },
        {
            "id": "Tsurugi",
            "group_id": "llsif",
            "fullName": "門田剣",
            "firstName": "剣",
            "birthday": "0710",
            "face": 127
        },
        {
            "id": "Yuuka",
            "group_id": "llsif",
            "fullName": "桐原優香",
            "firstName": "優香",
            "birthday": "0402",
            "face": 129
        },
        {
            "id": "Fuu",
            "group_id": "llsif",
            "fullName": "斉木風",
            "firstName": "風",
            "birthday": "0812",
            "face": 130
        },
        {
            "id": "Misaki",
            "group_id": "llsif",
            "fullName": "紫藤美咲",
            "firstName": "美咲",
            "birthday": "0407",
            "face": 131
        },
        {
            "id": "Himeno",
            "group_id": "llsif",
            "fullName": "綾小路姫乃",
            "firstName": "姫乃",
            "birthday": "0417",
            "face": 132
        },
        {
            "id": "Koyuki",
            "group_id": "llsif",
            "fullName": "白瀬小雪",
            "firstName": "小雪",
            "birthday": "0223",
            "face": 133
        },
        {
            "id": "Ryo",
            "group_id": "llsif",
            "fullName": "相川涼",
            "firstName": "涼",
            "birthday": "0506",
            "face": 134
        },
        {
            "id": "Mikoto",
            "group_id": "llsif",
            "fullName": "福原命",
            "firstName": "命",
            "birthday": "1105",
            "face": 135
        },
        {
            "id": "Chiduko",
            "group_id": "llsif",
            "fullName": "坂巻千鶴子",
            "firstName": "千鶴子",
            "birthday": "0714",
            "face": 136
        },
        {
            "id": "Hitomi",
            "group_id": "llsif",
            "fullName": "志賀仁美",
            "firstName": "仁美",
            "birthday": "0606",
            "face": 137
        },
        {
            "id": "Akira",
            "group_id": "llsif",
            "fullName": "鬼崎アキラ",
            "firstName": "アキラ",
            "birthday": "0810",
            "face": 138
        },
        {
            "id": "Yuka",
            "group_id": "llsif",
            "fullName": "月島結架",
            "firstName": "結架",
            "birthday": "0721",
            "face": 139
        },
        {
            "id": "Sayuri",
            "group_id": "llsif",
            "fullName": "兵藤さゆり",
            "firstName": "さゆり",
            "birthday": "0422",
            "face": 140
        },
        {
            "id": "Sakura",
            "group_id": "llsif",
            "fullName": "黒羽咲良",
            "firstName": "咲良",
            "birthday": "0404",
            "face": 141
        },
        {
            "id": "Sakuya",
            "group_id": "llsif",
            "fullName": "黒羽咲夜",
            "firstName": "咲夜",
            "birthday": "0909",
            "face": 142
        },
        {
            "id": "Mutsuki",
            "group_id": "llsif",
            "fullName": "高天原睦月",
            "firstName": "睦月",
            "birthday": "0125",
            "face": 143
        },
        {
            "id": "Ranpha",
            "group_id": "llsif",
            "fullName": "蘭花",
            "firstName": "蘭花",
            "birthday": "0208",
            "face": 145
        },
        {
            "id": "Rakshata",
            "group_id": "llsif",
            "fullName": "ラクシャータ",
            "firstName": "ラクシャータ",
            "birthday": "0618",
            "face": 146
        },
        {
            "id": "Rebecca",
            "group_id": "llsif",
            "fullName": "レベッカ",
            "firstName": "レベッカ",
            "birthday": "1114",
            "face": 147
        },
        {
            "id": "Isabella",
            "group_id": "llsif",
            "fullName": "イザベラ",
            "firstName": "イザベラ",
            "birthday": "1116",
            "face": 148
        },
        {
            "id": "Emma",
            "group_id": "llsif",
            "fullName": "エマ・ヴェルデ",
            "firstName": "エマ",
            "birthday": "0205",
            "face": 149,
            "hidden": true
        },
        {
            "id": "Jennifer",
            "group_id": "llsif",
            "fullName": "ジェニファー",
            "firstName": "ジェニファー",
            "birthday": "0512",
            "face": 150
        },
        {
            "id": "Maria",
            "group_id": "llsif",
            "fullName": "マリア",
            "firstName": "マリア",
            "birthday": "0806",
            "face": 151
        },
        {
            "id": "Leo",
            "group_id": "llsif",
            "fullName": "レオ",
            "firstName": "レオ",
            "birthday": "0816",
            "face": 152
        },
        {
            "id": "Yukari",
            "group_id": "llsif",
            "fullName": "早乙女紫",
            "firstName": "紫",
            "birthday": "0303",
            "face": 153
        },
        // スクフェスコラボ用
        {
            "id": "P3",
            "fullName": "ペルソナ3",
            "face": 156,
            "hidden": true
        },
        {
            "id": "P4",
            "fullName": "ペルソナ4",
            "face": 157,
            "hidden": true
        },
        {
            "id": "P5",
            "fullName": "ペルソナ5",
            "face": 158,
            "hidden": true
        },
        {
            "id": "geass",
            "fullName": "コードギアス",
            "face": 159,
            "hidden": true
        }
    ]
}