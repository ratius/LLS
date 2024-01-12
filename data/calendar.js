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
	});
}

//■■メイン出力
//■カレンダーと予定表の描画
function generateCalendar(y, m){
	let currentYear = new Date(y, m).getFullYear();
	let currentMonth = new Date(y, m).getMonth();

	document.getElementById("CurrentDate").innerHTML = currentYear + '年' + (currentMonth+1) + '月';
	
	//カレンダーのヘッダー
	const calendarHeader = [...Array(7)].map ( (_, char) => {
		return `<div class="calendar-grid-header">${"日月火水木金土"[char]}</div>`
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
	const scheduleContents = [...Array(31)].map ( (_, day) => {

		let dateTemp = new Date(y, m, day + 1);
		if(dateTemp.getMonth() !== currentMonth){ //現在の月を処理しているか？
			return `<div></div>`;
		}
		
		//誕生日のキャラクターの追加
		const BirthdayCharacters = FilterbyBirthday(m, day+1).map( character => {
			return `<span class="icon-${character.type} icon-${character.group}">${character.name}</span>`
		});
		
		const contents = `
		<div class="schedule-wrapper">
			<div class="schedule-day">${day+1}</div>
			<div class="schedule-memo">${BirthdayCharacters.join(' ')}</div>
		</div>`;
		const footer = (day === 14 ? `<div class="none"></div>` : '');

		return contents + footer;
		
	},'').join('');
	document.getElementById("ScheduleContainer").innerHTML = scheduleContents;
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