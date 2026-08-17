// ■■ ラブライブ！ストレージ キャラクターデータ抽出用モジュール「LLS Idol」
// 動作には、キャラクターデータとなるJSONファイルの内容を事前に読み込み、グローバル配列 window["JSON-LLS-idol"] として保存しておく必要があります。

const LLSIdol = {
    //グループIDとキャラクターIDからキャラクターの情報を取得
    //これにより返るキャラクター情報は、グループの共通情報も含んだものとなる
    //近々廃止予定
    getCharacterData: function (group, id) {
        const targetGroup = window[this.JSONPath].find((e) => e?.["group_id"] === group) ?? { "characters": [] };
        const targetCharacter = targetGroup["characters"].find((e) => e?.id === id);
        if (targetCharacter === undefined) { //見つからなかった場合、undefinedを返す
            return undefined;
        }
        const { characters, ...groupInfo } = targetGroup;
        return { ...targetCharacter, ...groupInfo };
    },

    //キャラクターIDと、1つ以上指定されたグループIDから、キャラクター1人の情報を取得
    //メインキャラクターに「さやか」と「サヤカ」がいるのでこんな関数が必要になっている
    getCharacterDataFromGroups: function (id, ...groups) {
        const targetGroups = window[this.JSONPath] //グループを抽出
            .filter((e) => groups.includes(e?.["group_id"]));
        const targetCharacterList = [];

        targetGroups.forEach( group => { //各グループの character 内オブジェクトに、親グループのキーを与えたものを、targetCharacterListに追加していく
            group?.characters.forEach(character => {
                const { characters, ...groupInfo} = group;
                targetCharacterList.push({ ...character, ...groupInfo});
            })
            return group?.characters;
        });
        return targetCharacterList.find(character => character.id === id);
    },

    // グループIDとキャラクターIDを指定して顔画像を作成。imageSizeは32と64のみ対応
    // キャラクターにfaceのキーがない場合、0番の画像を出力する
    drawFace: function (group, id, imageSize = 64) {
        if (imageSize !== 64 && imageSize !== 32) {
            throw new Error("Error: invalid image size");
        }
        const targetCharacter = this.getCharacterData(group, id);
        const imageID = parseInt(targetCharacter?.["image_offset"] ?? 0) + parseInt(targetCharacter?.["face"] ?? 0);
        const imageOffsetX = - imageSize * (this.imageGridColumn - (imageID % 16) - 1);
        const imageOffsetY = - imageSize * (this.imageGridRow - Math.floor(imageID / 16) - 1);
        return `<div class="icon-face-${imageSize}" style="background-position: right ${imageOffsetX}px bottom ${imageOffsetY}px"${targetCharacter?.name ? ` title="${targetCharacter.name}"` : ``}></div>`
    },

    //全キャラクターのリストを取得
    getAllCharacterList: function () {
        return window[this.JSONPath].flatMap(groupObj => {
            const { characters, ...groupInfo } = groupObj;
            return groupObj["characters"].map(member => ({ ...member, ...groupInfo }));
        });
    },

    //与えられた各条件に当てはまるキャラクター情報のリストを返す
    //条件の各引数は、以下の形式である場合のみ判定される
    //・"is:(キー名):(キー値)" - 対象のキーを持ち、それが特定の値である
    //・"isnot:(キー名):(キー値)" - 対象のキーを持つが、それが特定の値でない
    //・"has:(キー名)" - 対象のキーを持つ
    //・"exhas:(キー名)" - 対象のキーを持たない
    filterCharacterList: function (...conditions) {
        return this.getAllCharacterList().filter((character) => {
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
    //与えられた各条件のうち1つ以上に一致するキャラクター情報のリストを返す
    //引数の形式は filterCharacterList と同様
    filterCharacterListOR: function (...conditions) {
        return this.getAllCharacterList().filter((character) => {
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
    JSONPath: "JSON-LLS-idol",
    imageGridColumn: 16,
    imageGridRow: 16
}