//■■読み込み君
//■グローバル変数
const files = document.currentScript.getAttribute('data-src').split(',');
const TimeLoadingStart = performance.now();

//■読み込み処理
function loadScript(file) { //JSファイル
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = file;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
}

function loadJSON(file) { //JSONファイル
	return fetch(file)
		.then(response => response.json())
		.then(data => {
			//ファイル名（パスと拡張子除く）をキーとするグローバル変数として保存
			const globalKeyName = "JSON-" + file.split('/').pop().split('.').shift();
			window[globalKeyName] = data;
		});
}

async function loadFiles() {
	for (const file of files) {
		if (file.endsWith('.js')) {
			await loadScript(file);
		} else if (file.endsWith('.json')) {
			await loadJSON(file);
		}
	}
	setDebugMode();
	initialize();
}
loadFiles();

//■デバッグモード設定
const isDebugMode = (location.search.substring(1).split('&').indexOf('debug') >= 0);
function setDebugMode(){
	//デバッグモードであることを表示
	document.title = '[debug]' + document.title;
	document.bgColor = '#dce';
	if(document.getElementById("TitleName") !== null){
		document.getElementById("TitleName").innerHTML += "*";
		document.getElementById("TitleName").classList.add("title-debug");
	}
	if(document.getElementById("BackToMain") !== null){
		document.getElementById("BackToMain").href += "?debug";
	}
}