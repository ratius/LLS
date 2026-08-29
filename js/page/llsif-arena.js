//現在のページ
let CurrentPage = 0;

//■セレクトボックスの初期化
function InitializeSelectBox() {
	for (series of window['JSON-llsif-arena']) {
		const elm = document.createElement("option");
		if ('num' in series) {
			elm.text = `第${series.num}回 ライブ♪アリーナ　${series.title}`;
			document.getElementById("sb-t1").appendChild(elm);
		} else {
			elm.text = series.title;
			document.getElementById("sb-t2").appendChild(elm);
		}
	}
	document.addEventListener('keydown', function (event) {
		act = document.activeElement.toString();
		if (act === '[object HTMLDivElement]') {
			if (event.code == 'ArrowLeft') {
				if (CurrentPage > 0) {
					DisplayMessages(CurrentPage - 1);
				}
			}
			if (event.code == 'ArrowRight') {
				if (CurrentPage < window['JSON-llsif-arena'].length - 1) {
					DisplayMessages(CurrentPage + 1);
				}
			}
		}
	});
}

//■テキスト一覧の描画
function DisplayMessages(page) {
	//引数が無い場合、セレクトボックスの状態から引数を生成する
	if (page === undefined) { page = document.getElementById('select-box').selectedIndex; }
	const CurrentSet = window['JSON-llsif-arena'][page];

	document.getElementById("sub").innerHTML = ('sub' in CurrentSet ? CurrentSet.sub : "");

	let MessageNumber = 1;

	const Output = CurrentSet.opponents.map((opponent) => {
		//キャラクターの抽出。スクフェス、コラボ、A-RISE、Saint Snowを検索
		const CharacterData = LLSIdol.findCharacterData(opponent.id, "llsif") ?? LLSIdol.findCharacterData(opponent.id);

		//ステージ数
		const StageNumber = opponent?.['num'] ?? MessageNumber++;

		//顔画像
		const FaceContent = CharacterData?.face
		? `<div class="face-container">${LLSIdol.drawFace(CharacterData.face)}`
		: '';

		//対戦相手の名前
		const getOpponentName = () => {
			if (opponent.hasOwnProperty('namealt')) {
				return `<span class="OpponentName">${opponent.namealt}</span><br>`;
			} else if (CharacterData?.fullName) {
				return `<span class="OpponentName">${CharacterData.fullName}</span><br>`
			} else {
				return "";
			}
		}

		return `<tr>
			<th>${StageNumber}</th>
			<td>${FaceContent}</td>
			<td>${getOpponentName() + opponent.text}</td>
		</tr>`
	}).join('');

	document.getElementById("message-list").innerHTML = Output;
	document.getElementById("message-box").scrollTop = 0;
	CurrentPage = page;

	//左ボタンの設定変更
	if (page > 0) {
		document.getElementById('ButtonLeft').classList.add('button-enable');
		document.getElementById('ButtonLeft').classList.remove('button-disable');
		document.getElementById('ButtonLeft').setAttribute('onclick', `DisplayMessages(${page - 1})`);
	} else {
		document.getElementById('ButtonLeft').classList.add('button-disable');
		document.getElementById('ButtonLeft').classList.remove('button-enable');
		document.getElementById('ButtonLeft').onclick = '';
	}

	//右ボタンの設定変更
	if (page < window['JSON-llsif-arena'].length - 1) {
		document.getElementById('ButtonRight').classList.add('button-enable');
		document.getElementById('ButtonRight').classList.remove('button-disable');
		document.getElementById('ButtonRight').setAttribute('onclick', `DisplayMessages(${page + 1})`);
	} else {
		document.getElementById('ButtonRight').classList.add('button-disable');
		document.getElementById('ButtonRight').classList.remove('button-enable');
		document.getElementById('ButtonRight').onclick = '';
	}

	//セレクトボックスの位置変更
	document.getElementById("select-box").selectedIndex = page;
}

//■「キャラ別登場回数」の描画
function WriteSummary() {
	const summaryMap = new Map();
	//しずく、彼方、エマは hidden フラグが立っているのでそれを除いたスクフェス転入生を絞り込み
	const targetCharacters = LLSIdol.filterCharacterList("is:group_id:llsif", "exhas:hidden");
	targetCharacters.forEach(character => summaryMap.set(character.id, []));

	window['JSON-llsif-arena'].filter((e) => e.hasOwnProperty("num")).forEach((e) => {
		e.opponents.forEach((opponent) => {
			if (summaryMap.get(opponent.id)) {
				const k = summaryMap.get(opponent.id);
				k.push(e.num);
				summaryMap.set(opponent.id, k);
			}
		});
	});

	const Output = summaryMap.keys().toArray().map(key => {
		const CharacterData = LLSIdol.findCharacterData(key, "llsif");
		return `<tr>
		<th><div class="face-container">${LLSIdol.drawFace(CharacterData.face)}</div></th>
		<th>${CharacterData.fullName}</th>
		<td>${summaryMap.get(key).length}</td>
		<td>${summaryMap.get(key).map(num => `第${num}回`).join(', ')}</td>`
	}).join('');
	document.getElementById("Summary-Contents").innerHTML = Output;
}


//■初期化処理
function initialize() {
	InitializeSelectBox();
	DisplayMessages(0);
	WriteSummary();

	document.getElementById("select-box").addEventListener('change', function () {
		DisplayMessages()
	});

	//■デバック用
	if (isDebugMode) {
		//◆描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`ライブ♪アリーナまとめ\n初期化処理： ${(TimeOutputEnd - TimeLoadingStart).toFixed(1)}ミリ秒`);
	}
}