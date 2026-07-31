const CharactersWithSpecificColor = []; //専用色が定義されているキャラクターのID

//呼称表のテーブルを作成
function CreateTable(column, defaultBGColor) {
    //ヘッダー
    const header = `<tr><th style="background-color:#cde" class="calltable-TL">→呼ばれる側<br>↓呼ぶ側</th>${column.map(id => {
        const targetCharacter = window['JSON-sifas-call'].find(entry => entry.id === id);
        const thProperties =
            CharactersWithSpecificColor.includes(id)
                ? `class="calltable-TR bg_index_${id}"`
                : `class="calltable-TR" style="background-color: ${defaultBGColor}"`;

        return `<th ${thProperties}"><span class="shadowname">${targetCharacter.name}</span></th>`;
    }).join('')
        }</tr>`;

    //メイン行
    const main = window['JSON-sifas-call'].map(callingCharacter => {
        if (!callingCharacter.hasOwnProperty('howCalls')) { return ''; }
        const isCallingTargets = column.reduce((bool, calledCharacterID) => {
            if (bool === true) { return true; }
            if (callingCharacter['howCalls'].hasOwnProperty(calledCharacterID)) {
                return true;
            }
        }, false);
        if (isCallingTargets) {
            const hasSpecificColor = CharactersWithSpecificColor.includes(callingCharacter.id);
            const thProperties = hasSpecificColor
                ? ` class="calltable-BL bg_index_${callingCharacter.id}"`
                : ` class="calltable-BL" style="background-color: ${defaultBGColor}"`
                ;

            return `<tr><th${thProperties}><span class="shadowname">${callingCharacter.name}</span></th>${column.map(calledCharacterID => {
                const isCallingSelf = (callingCharacter.id === calledCharacterID);
                const tdProperties = hasSpecificColor
                    ? ` class="calltable-BR bg_calling_${isCallingSelf ? 'self' : 'other'}_${callingCharacter.id}"`
                    : ` class="calltable-BR" style="background-color: ${getColorFromColorCode(defaultBGColor, (isCallingSelf ? 0.6 : 3.5))}"`
                    ;
                const howCallsIt = callingCharacter["howCalls"].hasOwnProperty(calledCharacterID) ? callingCharacter["howCalls"][calledCharacterID] : "";
                return `<td${tdProperties}>${howCallsIt}</td>`
            }).join('')
                }</tr>`
        } else {
            return '';
        }
    }).join('');

    return `<table class="call" style="width: ${(column.length + 1) * 100}px"><thead>${header}</thead><tbody>${main}</tbody></table>`;
}


function initialize() {
    //メインキャラクターの色データをCSSに追加
    const MainCharacterList = LLSIdolManager.filterCharacterList('has:color_sifas');
    document.querySelector('style').textContent += MainCharacterList.map(character => {
        CharactersWithSpecificColor.push(character.id);
        return `
		.bg_index_${character.id} {
			background-color: #${character['color_sifas']};
		}
		.bg_calling_self_${character.id} {
			background-color: ${getColorFromColorCode(character['color_sifas'], 0.6, 0.1)};
		}
		.bg_calling_other_${character.id} {
			background-color: ${getColorFromColorCode(character['color_sifas'], 3.5)};
		}`
    }).join('');

    //表の描画
    document.getElementById('OutputAreaMuse').innerHTML =
        CreateTable(LLSIdolManager.filterCharacterList('is:group_id:muse').map(e => e.id), "#A0788C");

    document.getElementById('OutputAreaAqours').innerHTML =
        CreateTable(LLSIdolManager.filterCharacterList('is:group_id:aqours').map(e => e.id), "#788CA0");

    document.getElementById('OutputAreaNiji').innerHTML =
        CreateTable(LLSIdolManager.filterCharacterList('is:group_id:niji', 'isnot:id:Yu').map(e => e.id).concat("Player"), "#A0A08C");

    document.getElementById('OutputAreaMisc1').innerHTML =
        CreateTable(["Yukiho", "Arisa", "Cocoa", "Cocoro", "Cotaro", "Mito", "Shima", "Leah", "Sarah"], "#A0A0A0");

    document.getElementById('OutputAreaMisc2').innerHTML =
        CreateTable(["Haruka", "Kaoruko", "Misato", "Mai", "Uzuki", "Satsuki", "Tsumugi", "Basketball", "Acting", "Asagi", "Hanpen"], "#A0A0A0");

    //デバックモード時の処理
    if (isDebugMode) {
        //描画時間の出力
        const TimeOutputEnd = performance.now();
        console.log(`スクスタ 呼称表\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
    }
}