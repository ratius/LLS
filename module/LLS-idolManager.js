// ■■ ラブライブ！ストレージ キャラクターデータ抽出用モジュール「LLS Idol Manager」
// 動作には、キャラクターデータとなるJSONファイルの内容を事前に読み込み、グローバル配列 window["JSON-LLS-idolManager"] として保存しておく必要があります。

const LLSIdolManager = {
    //グループIDとキャラクターIDからキャラクターの情報を取得
    //これにより返るキャラクター情報は、グループの情報を含んだものとなる
    getCharacterData:  function (group, id) {
        const targetGroup = window[this.JSONPath].find((e) => e?.["group_id"] === group) ?? { "characters": [] };
        const targetCharacter = targetGroup["characters"].find((e) => e?.id === id);
        if (targetCharacter === undefined) {
            throw new Error(`Error: target not found`);
        }
        const { characters, ...groupData } = targetGroup;
        return { ...targetCharacter, ...groupData };
    },

    // グループIDとキャラクターIDを指定して顔画像を作成。imageSizeは32と64のみ対応
    // キャラクターにfaceのキーがない場合、0番の画像を出力する
    drawFace: function (group, id, imageSize = 64) {
        if ( imageSize !== 64 && imageSize !== 32){
            throw new Error ("Error: invalid image size");
        }
        const targetCharacter = this.getCharacterData(group, id);
        const imageID = targetCharacter.hasOwnProperty("face") ? parseInt(targetCharacter?.["image_offset"] ?? 0) + parseInt(targetCharacter["face"]) : 0;
        const imageOffsetX = - imageSize * (this.imageGridColumn - (imageID % 16) - 1);
        const imageOffsetY = - imageSize * (this.imageGridRow - Math.floor(imageID / 16) - 1);
        return `<div class="icon-face-${imageSize}" style="background-position: right ${imageOffsetX}px bottom ${imageOffsetY}px"${targetCharacter.name ? ` title="${targetCharacter.name}"` : ``}></div>`
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
        return this.getAllCharacterList().filter( (character) => {
            return conditions.reduce( (acc, val) => {
                if(acc === false){ return false}
                const cType = val.split(":")[0];
                const cKeyName = val.split(":")[1];
                const cKeyValue = val.split(":")[2];

                if (cType === "is" && (!character?.[cKeyName] || character[cKeyName] !== cKeyValue)){ return false;}
                else if (cType === "isnot" && (!character?.[cKeyName] && character[cKeyName] === cKeyValue)){ return false;}
                else if (cType === "has" && !character?.[cKeyName]){ return false;}
                else if (cType === "exhas" && character?.[cKeyName]){ return false;}
                return true;
            }, true);
        });
    },
    //与えられた各条件のうち1つ以上に一致するキャラクター情報のリストを返す
    //引数の形式は filterCharacterList と同様
    filterCharacterListOR: function (...conditions) {
        return this.getAllCharacterList().filter( (character) => {
            return conditions.reduce( (acc, val) => {
                if(acc === true){ return true;}
                const cType = val.split(":")[0];
                const cKeyName = val.split(":")[1];
                const cKeyValue = val.split(":")[2];

                if (cType === "is" && character?.[cKeyName] && character[cKeyName] === cKeyValue){ return true;}
                else if (cType === "isnot" && character?.[cKeyName] && character[cKeyName] !== cKeyValue){ return true;}
                else if (cType === "has" && character?.[cKeyName]){ return true;}
                else if (cType === "exhas" && !character?.[cKeyName]){ return true;}
                return false;
            }, false);
        });
    },
    JSONPath: "JSON-LLS-idolManager",
    imageGridColumn: 16,
    imageGridRow: 16
}