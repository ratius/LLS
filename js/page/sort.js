//■ソートに必要なもの
const SortTarget = [
	{ "name": "メインキャラクター", "group_id": ["muse", "aqours", "nijigasaki", "liella", "hasunosora", "musical", "ikizulive"] },
	{ "prefix": "┣", "name": "メインキャラクター＋ライバル", "group_id": ["muse", "aqours", "nijigasaki", "liella", "hasunosora", "musical", "ikizulive", "arise", "saintsnow", "sunnypassion"] },
	{ "prefix": "┗", "name": "メインキャスト", "group_id": ["muse-cast", "aqours-cast", "nijigasaki-cast", "liella-cast", "hasunosora-cast", "ikizulive-cast"] },
	{ "name": "μ's", "group_id": ["muse"] },
	{ "prefix": "┣", "name": "μ's＋A-RISE", "group_id": ["muse", "arise"] },
	{ "prefix": "┣", "name": "μ'sキャスト", "group_id": ["muse-cast"] },
	{ "prefix": "┗", "name": "μ'sカップリング", "group_id": ["muse-relation"] },
	{ "name": "Aqours", "group_id": ["aqours"] },
	{ "prefix": "┣", "name": "Saint Aqours Snow", "group_id": ["aqours", "saintsnow"] },
	{ "prefix": "┣", "name": "Aqoursキャスト", "group_id": ["aqours-cast"] },
	{ "prefix": "┗", "name": "Aqoursカップリング", "group_id": ["aqours-relation"] },
	{ "name": "虹ヶ咲学園スクールアイドル同好会", "group_id": ["nijigasaki"] },
	{ "prefix": "┣", "name": "虹ヶ咲キャスト", "group_id": ["nijigasaki-cast"] },
	{ "prefix": "┗", "name": "虹ヶ咲カップリング", "group_id": ["nijigasaki-relation"] },
	{ "name": "Liella!", "group_id": ["liella"] },
	{ "prefix": "┣", "name": "Liella!＋Sunny Passion", "group_id": ["liella", "sunnypassion"] },
	{ "prefix": "┣", "name": "Liella!キャスト", "group_id": ["liella-cast"] },
	{ "prefix": "┗", "name": "Liella!カップリング", "group_id": ["liella-relation"] },
	{ "name": "蓮ノ空女学院スクールアイドルクラブ", "group_id": ["hasunosora"] },
	{ "prefix": "┣", "name": "蓮ノ空キャスト", "group_id": ["hasunosora-cast"] },
	{ "prefix": "┗", "name": "蓮ノ空カップリング", "group_id": ["hasunosora-relation"] },
	{ "name": "スクールアイドルミュージカル", "group_id": ["musical"] },
	{ "name": "幻日のヨハネ", "group_id": ["yohane"] },
	{ "name": "いきづらい部！", "group_id": ["ikizulive"] },
	{ "prefix": "┣", "name": "いきづらい部！キャスト", "group_id": ["ikizulive-cast"] },
	{ "prefix": "┗", "name": "いきづらい部！カップリング", "group_id": ["ikizulive-relation"] },
	{ "name": "----"},
	{ "name": "スクフェス転入生", "group_id": ["llsif"] },
	{ "prefix": "┣", "name": "青藍高校", "group_id": ["llsif"], "color": "#69f" },
	{ "prefix": "┣", "name": "東雲学院", "group_id": ["llsif"], "color": "#e65" },
	{ "prefix": "┣", "name": "千歳橋高校", "group_id": ["llsif"], "color": "#5b7" },
	{ "prefix": "┣", "name": "藤黄学園", "group_id": ["llsif"], "color": "#fd5" },
	{ "prefix": "┣", "name": "紫苑女学院", "group_id": ["llsif"], "color": "#96c" },
	{ "prefix": "┗", "name": "Y.G国際学園", "group_id": ["llsif"], "color": "#9f3" }
];

// HTML
const buttonsId = ["PickLeft", "PickRight", "PickDraw", "ExcludeLeft", "ExcludeBoth", "ExcludeRight"];

const LLSorter = {
	//必要なもの
	"targetTitle": "", //ソート対象を表すタイトル
	"targetData": [], //ソート対象のデータ
	"listUnsorted": [], //未ソートデータのID（先頭の配列は待避用）
	"listWIP": [], //マージ中のIDを退避
	"listExcluded": [], //除外されたIDの記録用
	"startingTargets": 0, //開始時の比較対象の数。進捗状況の表示に利用
	"remainingTargets": 0, //残っている比較対象の数
	"round": 1, //ラウンド数
	"isFinished": true, //ソートが完了したかどうか
	"result": [], //ソート完了後に結果を格納する

	//■ソート開始時の初期化
	initialize(title, targets) {
		if (!Array.isArray(targets)) { //引数が配列でなかったり
			throw new Error("Error: the argument is not an array: LLSorter.initialize");
		} else if (targets.length === 0) { //配列長が0ならエラー
			throw new Error("Error: the argument is empty: LLSorter.initialize");
		} else {
			if (this.isFinished === false && this.round > 1) { //まだソートが済んでいないなら、上書き警告を出す
				const isOverwrite = window.confirm("現在実行中のソートが完了していません。\n現在のソートの進捗を破棄して、新たにソートを行いますか？");
				if (isOverwrite === false) {
					return false;
				}
			}
			this.targetTitle = title;
			this.targetData = targets;
			this.listUnsorted = targets.map((_, index) => [index]);
			this.listWIP = [];
			this.listExcluded = [];
			this.startingTargets = targets.length;
			this.remainingTargets = targets.length;
			this.round = 1;
			this.result = [];
			this.isFinished = false;
			this.result = [];
			return false;
		}
	},

	progress() { //ソートの進捗を0～100までの数値で返す
		if (this.isFinished) {
			return 100;
		} else {
			const LU = this.listUnsorted;
			const WIP = this.listWIP;
			// 残タスク = LU要素数 - (WIP要素数 / (WIP要素数 + LU[0]要素数 + LU[1]要素数 - 1))
			// 上記は必ず1以上かつ最初の要素数以下の値となるので
			// 進捗(%) = 100 - (100 * log2(最初の要素数) / log(残タスク))
			const remainingTask = LU.length - (WIP.length / (WIP.length + LU[0].length + LU[1].length - 1));
			return Math.max(100 - (100 * Math.log2(remainingTask) / Math.log2(this.startingTargets)), 0);
		}
	},

	// ソートを1ステップ分進め、その状況を取得する
	// ソートが完了した場合true、まだ途中の場合false、正常に実行されなかった場合undefinedが返る
	sortSingleStep(action) {
		const LU = this.listUnsorted;
		const WIP = this.listWIP;
		const LX = this.listExcluded;
		if (this.isFinished) { return undefined; } //ソート済の場合何も行わない
		this.round++;
		switch (action) {
			case "PickLeft": //左を選択
				WIP.push(LU[0].shift());
				break;
			case "PickRight": //右を選択
				WIP.push(LU[1].shift());
				break;
			case "PickDraw": //引き分け
				//listExcludedの先頭に、[除外した要素のuniqueId, 引き分けになった要素のuniqueId] を加える
				LX.unshift([LU[1].shift(), LU[0][0]]);
				this.remainingTargets--;
				break;
			case "ExcludeLeft": //左を「ランク外」として除外
				LX.unshift([LU[0].shift(), null]);
				this.remainingTargets--;
				break;
			case "ExcludeRight": //右を「ランク外」として除外
				LX.unshift([LU[1].shift(), null]);
				this.remainingTargets--;
				break;
			case "ExcludeBoth": //両方を「圏外」として除外（残り要素数が2つより多い場合のみ）
				if (this.remainingTargets > 2) {
					LX.push([LU[0].shift(), null]);
					LX.push([LU[1].shift(), null]);
					this.remainingTargets -= 2;
				}
				break;
			default:
				throw new Error("Invalid operation: LLSorter.choose");
		}
		//ソートを進めた後の処理
		this._checkMargeStep();
		return this._checkFinished();
	},

	getCandidate(which) { //候補のデータを取得する。falseは左、trueは右の候補を返す
		const LU = this.listUnsorted;
		if (this.isFinished) { return undefined; } //ソートが完了している場合、undefinedを返す
		switch (which) {
			case false:
				return this.targetData[LU[0][0]];
			case true:
				return this.targetData[LU[1][0]];
			default:
				throw new Error("Invalid argument: LLSorter.getCandidate");
		}
	},

	_checkMargeStep() { //未ソートのデータのチェック
		const LU = this.listUnsorted;
		const WIP = this.listWIP;
		//未ソート列が2つ以上あり、先頭の2つに要素が1つ以上残っているならまだ比較可能
		const isComparable = (LU.length >= 2 && LU[0].length > 0 && LU[1].length > 0);
		if (!isComparable) {
			//WIP, LU[0], LU[1] のいずれかに要素があるなら、LUの末尾に空配列を加え、そこに要素を移動する
			if (WIP.length > 0 || LU[0].length > 0 || LU[1].length > 0) {
				LU.push([]);
				const tail = LU[LU.length - 1];
				while (WIP.length > 0) tail.push(WIP.shift());
				while (LU[0].length > 0) tail.push(LU[0].shift());
				while (LU[1].length > 0) tail.push(LU[1].shift());
			}
			LU.splice(0, 2); //LUの最初の2つの配列が空になったので、そのうち2つを削除して詰める
			LU.sort((a, b) => a.length - b.length); //部分列を小さいものから並べ替え
		}
	},

	_checkFinished() { //ソート完了の確認、および完了時の処理
		const LU = this.listUnsorted;
		const LX = this.listExcluded;
		// LU が1つの配列にまとめられたらソート完了の証である
		if (LU.length < 2) {
			this.isFinished = true;

			//ソート完了時に UL に残っている要素を、
			//要素をid, group_id, rank(順位)の3項目を持つオブジェクトにして出力
			let provisionalRank = 1; //仮の順位
			LU[0].forEach(entry => {
				this.result.push({
					"id": this.targetData[entry].id,
					"group_id": this.targetData[entry].group_id,
					"color": this.targetData[entry].color,
					"rank": provisionalRank++,
					"sortId": entry
				});
			});
			//除外リストに残っているものを result に追加
			LX.forEach(entry => {
				// result から引き分けた相手を探し、それと同じrankを与える
				// 見つからない場合、rankはInfitiny(圏外)
				const opponentData = this.result.find(o => o.sortId === entry[1]);
				const rank = opponentData?.rank ?? Infinity;
				this.result.push({
					"id": this.targetData[entry[0]].id,
					"group_id": this.targetData[entry[0]].group_id,
					"color": this.targetData[entry[0]].color,
					"rank": rank,
					"sortId": entry[0],
					"tied": (typeof rank === 'number' ? true : false)
				});
			});
			//不要になったsortIdの情報を削除し、ランク順に並べる
			this.result.forEach(entry => delete entry.sortId);
			this.result.sort((_a, _b) => _a.rank - _b.rank);

			// 引き分けを考慮した順位を反映する
			// Array.sort() は安定ソートであるため、
			// ・先頭の要素のrankは1であり、かつ tied: true ではない
			// ・同順位なら、tiedでないものが前に来る
			this.result.forEach((entry, index) => {
				if (entry.rank !== Infinity) {
					if (entry?.tied === true) { //引き分け
						entry.rank = this.result[index - 1].rank;
						delete entry.tied
					} else {
						entry.rank = index + 1;
					}
				}
			});
			return true;
		} else {
			return false;
		}
	}
}

//■ソート開始ボタンの処理
const startSort = () => {
	const LLSVFilter = document.getElementById("LLSV-Filter");
	const sortListTitle = LLSVFilter.options[LLSVFilter.selectedIndex].title;
	const groupId = LLSVFilter.value;
	const colorRestriction = LLSVFilter.options[LLSVFilter.selectedIndex].colorRestriction;
	if (!groupId) { return; } //valueが無い場合は終了

	//ソート対象を見つける
	const conditions = groupId.split(',');
	const targets = [];
	window["JSON-sort"].forEach(group => {
		if (conditions.some(c => group?.["group_id"] === c)) { //グループに入っている
			if(colorRestriction){
				group["characters"].forEach(character => {
					if(character.color === colorRestriction){
						targets.push(character);
					}
				});
			} else {
				targets.push(group.characters);
			}
		}
	});
	//常に同じマッチアップにならないように、シャッフルしたものを渡す
	const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());
	LLSorter.initialize(sortListTitle, shuffle(targets.flat()));
	updateSorter();
};

//■ UIの情報を更新する
const updateSorter = () => {
	// 終わっていなければ、各ボタンを押せるようにする
	const Buttons = buttonsId.map(id => document.getElementById(`SortPanel-Button-${id}`));

	//どちらにしろやること（ヘッダー周り）
	const progressValue = LLSorter.progress();
	document.getElementById("SortPanel-Round").innerHTML = `ラウンド：${LLSorter.round}`;
	document.getElementById("SortPanel-Targets").innerHTML = `要素数：${LLSorter.remainingTargets}`;
	document.getElementById("SortPanel-Progress").innerHTML = `${progressValue.toFixed(1)}% ソート完了`;
	document.getElementById("SortPanel-ProgressBar-Inner").style = `width:${progressValue}%`;

	if (!LLSorter.isFinished) {
		Buttons.forEach(button => button.classList.remove("sortPanel-button-disabled"));

		//左ボタン：CSS
		const LeftCandidate = LLSorter.getCandidate(false);
		const LeftData = LLSIdol.getCharacterDataFromGroups(LeftCandidate.id, LeftCandidate.group_id);
		const LeftColor = getColorObject(LeftCandidate?.color, LeftCandidate);
		const LeftBGColor = LeftColor["bg"];
		const LeftBorderColor = LeftColor["border"];
		Buttons[0].style.setProperty('--bg-color', LeftBGColor);
		Buttons[0].style.setProperty('border-color', LeftBorderColor);
		document.getElementById("SortPanel-Name-Left").innerHTML =
			LeftData?.["name"] ?? LeftCandidate?.["name"] ?? "Name未設定";
		document.getElementById("SortPanel-Caption-Left").innerHTML =
			LeftCandidate?.["caption"] ?? "";

		//右ボタン
		const RightCandidate = LLSorter.getCandidate(true);
		const RightData = LLSIdol.getCharacterDataFromGroups(RightCandidate.id, RightCandidate.group_id);
		const RightColor = getColorObject(RightCandidate?.color, RightCandidate);
		const RightBGColor = RightColor["bg"];
		const RightBorderColor = RightColor["border"];

		Buttons[1].style.setProperty('--bg-color', RightBGColor);
		Buttons[1].style.setProperty('border-color', RightBorderColor);

		document.getElementById("SortPanel-Name-Right").innerHTML =
			RightData?.["name"] ?? RightCandidate?.["name"] ?? "Name未設定";
		document.getElementById("SortPanel-Caption-Right").innerHTML =
			RightCandidate?.["caption"] ?? "";

		if (LLSorter.remainingTargets <= 2) {
			document.getElementById("SortPanel-Button-ExcludeBoth").classList.add("sortPanel-button-disabled");
		}
	} else {
		//ボタンを無効化して結果を出力
		Buttons.forEach(button => button.classList.add("sortPanel-button-disabled"));
		wrtieResult();
	}
};

//■ リザルトの出力
const wrtieResult = () => {
	const Header = `<table class="result-table"><thead><tr><th>順位</th><th>名前</th></tr></thead><tbody>`;
	const Footer = `</tbody></table>`;
	const Rankings = LLSorter.result.map(entry => {
		const CharacterData = LLSIdol.getCharacterDataFromGroups(entry.id, entry.group_id)
			?? LLSorter.targetData.find(e => e.id === entry.id);
		const BaseColor = getColorObject(entry?.color, CharacterData);
		const BGColor = BaseColor["bggr"] ?? BaseColor["bg"];
		const rankText = (entry.rank === Infinity ? "圏外" : `${entry.rank}位`);
		const nameText = CharacterData?.["name"] ?? entry?.["name"] ?? "Name未設定";
		return `<tr style="background:${BGColor};"><td>${rankText}</td><td>${nameText}</td>`;
	}).join('');

	const SortTitle = LLSorter.targetTitle;
	const ResultForTweet = LLSorter.result.map((entry, index) => {
		const CharacterData = LLSIdol.getCharacterDataFromGroups(entry.id, entry.group_id);
		const nameText = CharacterData?.["name"] ?? entry?.name ?? entry.id
		if (index >= 7) { return ''; }
		if (entry.rank === Infinity) { return ''; }
		return `${entry.rank}位 ${nameText}\n`;
	}).join('');
	const TweetText = `${SortTitle} をソートしたよ！\n${ResultForTweet}\n#ラブライブなんでもソート`;
	const TweetURI = encodeURIComponent(TweetText).replaceAll("'", "%27");
	const TweetButton = `<button id="TweetButton" onclick="window.open().location.href='https://x.com/intent/post?url=https://ratius.github.io/LLS/sort.html&text=${TweetURI}&count=none&lang=ja'"><img src="img/x-logo-white.png" style="width:25px; height:25px">この結果をポスト</button>`;

	document.getElementById("ResultArea").innerHTML = Header + Rankings + Footer + TweetButton;
};

//ボタンおよび出力用のカラーコードを取得する関数
const getColorObject = (colors, target) => {
	const tempColorCodes = [];

	// colorsで指定されたものを取得して、tempColorsに加える
	const colorCodePattern = new RegExp(/^(#?[\da-f]{3}|#?[\da-f]{6})$/i);
	if (typeof colors === 'string') { colors = colors.split(','); }
	colors?.forEach(color => {
		if (colorCodePattern.test(color)) { //生のカラーコード
			tempColorCodes.push(color);
		}
	});
	// targetの情報をLLS-idol側で探す
	const CharacterData = LLSIdol.getCharacterDataFromGroups(target?.id, target?.group_id);
	if (CharacterData?.color) { tempColorCodes.push(CharacterData.color); }

	switch (tempColorCodes.length) {
		case 0: //無い場合、デフォルトの色を用いる
			const DEFAULT_COLOR = '#eee';
			return {
				"bg": LLS.getColorFromColorCode(DEFAULT_COLOR, 2),
				"border": LLS.getColorFromColorCode(DEFAULT_COLOR, 0.3, 1.2)
			};
		case 1:
			return {
				"bg": LLS.getColorFromColorCode(tempColorCodes[0], 1.5),
				"border": LLS.getColorFromColorCode(tempColorCodes[0], 0.3, 1.2)
			};
		default: //2色以上の場合、合成して出力する
			return {
				"bg": `linear-gradient(to right, ${
					tempColorCodes.map((c, index) => {
						const color = LLS.getColorFromColorCode(c, 2);
						const start = (100 * index / tempColorCodes.length).toFixed(2);
						const end = (100 * (index + 1) / tempColorCodes.length).toFixed(2);
						return `${color} ${start}% ${end}%`
					}).join()
				})`,
				"bggr": `linear-gradient(to right, ${tempColorCodes.map(c => LLS.getColorFromColorCode(c, 2)).join(',')})`,
				"border": "#777",
			}
			break;
	}
};

//■読み込み後の処理
function initialize() {
	// window['JSON-sort'] の補完処理
	// ・キャラクターのidが省略されている場合、nameと同じとする
	// ・各キャラクターにそれぞれgroup_idを付与
	// ・色指定の"inherit:(id):(group_id)" を置換する
	const inheritPattern = new RegExp(/^inherit:[^\:]+:[^\:]+$/i);
	window['JSON-sort'].forEach(group => {
		group?.["characters"].forEach(character => {
			if(!character?.id){ character.id = character?.name; }
			character["group_id"] = group["group_id"];
			if (typeof character["color"] === 'string') { character["color"] = character["color"].split(','); }
			if (Array.isArray(character?.color)) {
				character["color"] = character["color"].map(c => {
					if (inheritPattern.test(c)) {
						const inheritTemplate = c.split(':');
						const CharacterData = LLSIdol.getCharacterDataFromGroups(inheritTemplate[1], inheritTemplate[2]);
						return CharacterData?.color;
					} else {
						return c;
					}
				}).join(',');
			}
		});
	});
	Object.freeze(window['JSON-sort']); //念のためfreeze

	//セレクトボックスに要素を追加
	SortTarget.forEach(target => {
		const sortTargetNumber = window["JSON-sort"].reduce((total, group) => {
			if(!target["group_id"]?.includes(group["group_id"])){
				return total;
			} else if(target?.color){
				return total
			+ group["characters"].filter(character => target.color === character.color).length;
			} else {
				return total + group["characters"].length;
			}
		}, 0);
		const option = document.createElement("option");
		option.text = `${target.prefix ?? ""} ${target.name} ${sortTargetNumber ? ` (${sortTargetNumber})` : ""}`;
		option.title = target.name;
		option.value = target.group_id ?? "";
		option.colorRestriction = target.color ?? "";
		document.getElementById("LLSV-Filter").appendChild(option);
	});

	//onClickイベントを追加
	document.getElementById("SortPanel-Button-Start").addEventListener('click', startSort);
	buttonsId.forEach(id => {
		document.getElementById(`SortPanel-Button-${id}`).name = id;
		document.getElementById(`SortPanel-Button-${id}`).addEventListener('click', function () {
			const isProgressed = LLSorter.sortSingleStep(this.name);
			if (isProgressed !== undefined) { updateSorter(); }
		});
	});

	//警告解除
	document.getElementById('ResultArea').classList.remove('output-box-default');
	document.getElementById('ResultArea').innerHTML = `
		<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">
			(ソートが完了すると、ここに結果が表示されます)
		</div>`;

	//デバックモード時の処理
	if (isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`ラブライブ！なんでもソート\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}