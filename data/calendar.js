//■グローバル変数
let globalYear = new Date().getFullYear();
let globalMonth = new Date().getMonth();

//■■サブルーチン
//■特定の日付を持つリストを返す
function FilterbyBirthday(m, d){
	const dateTemp = new Date(2020, m, d); //3月1日と2月29日を区別するため、閏年にしておく必要がある
	const dateTempCode = ((dateTemp.getMonth()+1).toString().padStart(2, '0')) + (dateTemp.getDate()).toString().padStart(2, '0');
	return isBirthday = window['JSON-calendar'].filter (character => {
		return (character.birth === dateTempCode)
		&& (character.type !== 'V' || document.getElementById('EnableCast').checked)
		&& (character.group !== 'llsif' || document.getElementById('EnableLLSIF').checked)
		&& (character.group !== 'musical' || document.getElementById('EnableMusical').checked)
		&& (!(['rival'] in character) || document.getElementById('EnableRivals').checked)
	});
}

//■■メイン出力
//■カレンダーと予定表の描画
function generateCalendar(y, m){
	const currentYear = new Date(y, m).getFullYear();
	const currentMonth = new Date(y, m).getMonth();
	const totalDays = new Date(currentYear, currentMonth+1, 0).getDate();

	document.getElementById("CurrentDate").innerHTML = currentYear + '年' + (currentMonth+1) + '月';
	
	//カレンダーのヘッダー
	const calendarHeader = [...Array(7)].map ( (_, col) => {
		return `<div class="calendar-grid-header">${"日月火水木金土"[col]}</div>`
	},'').join('');

	//カレンダーの本体
	const BaseDay = -(new Date(currentYear, currentMonth).getDay());
	const calendarContents = [...Array(42)].map ( (_, day) => {
		let CurrentClass = ['calendar-grid'];
		let dateTemp = new Date(currentYear, currentMonth, BaseDay + day + 1);
		
		if(dateTemp.getMonth() === currentMonth){ //現在の月を処理しているか？
			
			if(dateTemp.getFullYear() === new Date().getFullYear()
			  && dateTemp.getMonth() === new Date().getMonth()
			  && dateTemp.getDate() === new Date().getDate() ){
				CurrentClass.push('today');
			}
			
			if(FilterbyBirthday(dateTemp.getMonth(), dateTemp.getDate()).length > 0){
				CurrentClass.push('birth');
			}
			
		} else {
			CurrentClass.push('non');
		}
		return `<div class="${CurrentClass.join(' ')}">${dateTemp.getDate()}</div>`;
	
	},'').join('');

	document.getElementById("CalendarGridContainer").innerHTML = calendarHeader + calendarContents;

	//■予定表
	let column1 = "";
	let column2 = "";

	//日付ごとに情報を追加
	for(day = 0; day < totalDays; day++){
		//誕生日のキャラクターの検索
		const BirthdayCharacters = FilterbyBirthday(currentMonth, day+1).map( character => {
			return `<div class="schedule-name marker-${character.type} marker-${character.group}">${character.name}${['tips'] in character ? `<span class="name-tips">(${character.tips})</span>` : ''}</div>`
		});
		const contents = `
		<div class="schedule-wrapper">
			<div class="schedule-day">${day+1}</div>
			<div class="schedule-memo">${BirthdayCharacters.join(' ')}</div>
		</div>`;

		if(day < Math.ceil(totalDays / 2)){
			column1 += contents;
		} else {
			column2 += contents;
		}
	}
	document.getElementById("ScheduleContainer").innerHTML = `<div class="schedule-column">${column1}</div><div class="schedule-column">${column2}</div>`
}

//■初期化処理
function initialize() {
	const TimeOutputLoaded = performance.now();
	//カレンダーの描画
	generateCalendar(globalYear, globalMonth);
	
	//デバック用
	if(isDebugMode) {
		//描画時間の出力
		const TimeOutputEnd = performance.now();
		console.log(`ラブライブ！誕生日カレンダー\n初期化処理： ${TimeOutputEnd - TimeLoadingStart}ミリ秒`);
	}
}