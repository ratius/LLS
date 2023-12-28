//■デバッグモード
const isDebugMode = (location.search.substring(1).split('&').indexOf('debug') >= 0);
if(isDebugMode) {
	//デバッグモードであることを表示
	document.title = '[debug]' + document.title;
	document.bgColor = '#dce';
	document.getElementById("TitleName").innerHTML += "*";
	document.getElementById("TitleName").classList.add("title-debug");
	document.getElementById("BackToMain").href += "?debug";
}

//■タグデータ
const SchoolData = [
	{'name' : '青藍高校'   , 'color' : '#abe'},
	{'name' : '東雲学園'   , 'color' : '#fa9'},
	{'name' : '千歳橋高校' , 'color' : '#9db'},
	{'name' : '藤黄学園'   , 'color' : '#fea'},
	{'name' : '紫苑女学院' , 'color' : '#dcf'},
	{'name' : 'Y.G国際学院', 'color' : '#cea'}
];

//■■サブルーチン
//■転入生の顔アイコンを出力
function DrawFace(name){
	const target = NData.find(q => q.name === name);
	if(target === undefined){
		return `<div class="face_empty"></div>`;
	} else {
		return `<div class="face" style="background-position: right ${target.x*64-576}px bottom ${target.y*64-384}px"></div>`;
	}
}

//■■出力
//■ボタンの描画
function DrawButtons(name) {
	if(name === ""){
		document.getElementById("ButtonField").innerHTML = '';
		document.getElementById("ButtonField").classList.remove("has_button");
		return false;
	}

	const target = NData.find( q => q.name === name);
	let Output = `<span class="jump" onclick="DrawProfile('${target.name}')">Profile</span>`
	+ target.card.reduce( (text, card, index) => {
		return text + `<span class="jump" onclick="DrawCardData('${target.name}',${index})">${(index+1)}</span>`
	}, '');

	document.getElementById("ButtonField").innerHTML = Output;
	document.getElementById("ButtonField").classList.add("has_button");
	DrawProfile(name);
}

//■プロフィールの描画
function DrawProfile(name){
	const target = NData.find( q => q.name === name);
	if(target === undefined){ return false;}
	
	const Profile = `
	<h3>${target.name} プロフィール</h3>
	<div class="profile-container">
		${DrawFace(name)}
		<table class="profile-table">
			<tbody>
				<tr>
					<td style="width: 40%">学校</td>
					<td>${SchoolData[target.y].name}</td>
				</tr>
				<tr>
					<td>学年</td>
					<td>${target.grade}年</td>
				</tr>
				<tr>
					<td>誕生日</td>
					<td>${target.birth}日</td>
				</tr>
				<tr>
					<td>血液型</td>
					<td>${target.blood}型</td>
				</tr>
				<tr>
					<td>身長</td>
					<td>${target.height}cm</td>
				</tr>
				<tr style="word-break: keep-all;">
					<td>スリー<wbr>サイズ</td>
					<td>Ｂ${target.body[0]}<wbr>Ｗ${target.body[1]}<wbr>Ｈ${target.body[2]}cm</td>
				</tr>
				<tr>
					<td>趣味</td>
					<td>${target.hobby}</td>
				</tr>
			</tbody>
		</table>
	</div>`;
	
	const PartnerText = 
	('text' in target ?
		`<h4>パートナー時テキスト</h4>`
		+ target.text.map( text => `<div class="text_partner">${text}</div>`).join('')
	:
		''
	);
	document.getElementById("NViewer").innerHTML = Profile + PartnerText;
}

//■カード個別データの作成
function DrawCardData(name, num){
	const targetChar = NData.find( q => q.name === name);
	if(targetChar === undefined){ return false;}
	const targetCard = targetChar.card[num];
	
	let Output = `<h3>${targetChar.name} ${(num+1)}枚目 (部員No.${targetCard.num})</h3>`
	+ ('memo' in targetCard ? '<p style="font-size: 90%">' + targetCard.memo + '<\/p>' : '')
	
	if('text' in targetCard){
		Output += '<h4>パートナー時テキスト<\/h4>';
		for(temp3 of targetCard.text){
			Output += '<div class="text_partner">' + temp3 + '<\/div>';
		}
	}
	
	const SideStoryText = 
	('side' in targetCard ? 
		`<h4>サイドストーリー「${targetCard.sidetitle}」</h4>`
		+ targetCard.side.map( text => {
			const nameTemp = ('n' in text ? text.n : ('namealt' in targetChar ? targetChar.namealt : targetChar.name));
			const faceTemp = DrawFace('f' in text ? text.f : targetChar.name);
			return `
			<div class="text-story">
				${faceTemp}
				<div class="text">
					<b>${nameTemp}</b><br>
					${text.t}
				</div>
			</div>`;
		}).join('')
 	: '' );
 	
	const FootNote = 
	('foot' in targetCard ?
		`<p style="font-size: 90%">${targetCard.foot}</p>`
	: '');

	document.getElementById("NViewer").innerHTML = Output + SideStoryText + FootNote;
	document.getElementById("NViewer").scrollTop = 0;
}


//■■初期処理
//■JSONデータベースの読み込み
const TimeOutputStart = performance.now();

const JSONPath = 'data/llsif-n.json';
let NData = null;
fetch(JSONPath)
	.then(response => response.json())
	.then(data => {
		NData = data;
		initialize();
	}
);

const TimeOutputLoaded = performance.now();

//■初期化処理
function initialize() {
	//セレクトボックスに要素を追加
	NData.forEach( temp => {
		const option = document.createElement("option");
		option.text = temp.name;
		option.style.cssText = 'background-color: ' + SchoolData[temp.y].color;
		document.getElementById('PullDownMenu').appendChild(option);
	});
	//警告解除
	document.getElementById('NViewer').classList.remove('output-box-default');
	document.getElementById('NViewer').innerHTML = `
		<div style="padding: 10px; vertical-align: top; font-size: 130%; color: #666">
			(上のプルダウンメニューから、転入生を選択してください)
		</div>`;
	
	//デバック用
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`スクフェス 転入生データベース\n読み込み： ${TimeOutputLoaded - TimeOutputStart}ミリ秒\n初期化: ${TimeOutputEnd - TimeOutputLoaded}ミリ秒`);
	}
}