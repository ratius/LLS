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
	// ローカル環境ではデバッグモードの設定を行う
	if(isDebugMode){setDebugMode();}
	initialize();
}
loadFiles();

//■デバッグモード用設定
const isDebugMode = (window.location.hostname === '127.0.0.1' || location.search.substring(1).split('&').indexOf('debug') >= 0);
const setDebugMode = () => {
	document.title = '[debug]' + document.title;
	document.querySelector('html body').style.backgroundColor = '#dce';
	if (document.getElementById("TitleName") !== null) {
		document.getElementById("TitleName").innerHTML += "*";
		document.getElementById("TitleName").classList.add("title-debug");
	}
	if (document.getElementById("BackToMain") !== null) {
		document.getElementById("BackToMain").href += "?debug";
	}
}