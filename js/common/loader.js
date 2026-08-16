//■■読み込み君 ver.20260816
const TimeLoadingStart = performance.now(); //読み込み時間の計測

//■読み込み処理
function loadScript(file) { //JSファイル
	//ファイルの内容を <script> タグとしてHTMLに追加
	return new Promise((resolve, reject) => {
		const script = document.createElement('script');
		script.src = file;
		script.async = false;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
}

async function loadJSON(file) { //JSONファイル
	//ファイル名（パスと拡張子除く）をキーとするグローバル変数として保存
	return fetch(file)
		.then(res => res.json())
		.then(data => {
			const globalKeyName = "JSON-" + file.split('/').pop().split('.').shift();
			window[globalKeyName] = data;
		});
}

//■デバッグモード用設定
const isDebugMode = (window.location.hostname === '127.0.0.1' || location.search.substring(1).split('&').indexOf('debug') >= 0);
const setDebugMode = () => {
	document.title = '[debug]' + document.title;
	document.querySelector('body').style.backgroundColor = '#dce';
	if (document.getElementById("TitleName") !== null) {
		document.getElementById("TitleName").innerHTML += "*";
		document.getElementById("TitleName").classList.add("title-debug");
	}
	if (document.getElementById("BackToMain") !== null) {
		document.getElementById("BackToMain").href += "?debug";
	}
}

//■読み込み実行
const files = document.currentScript.getAttribute('data-src').split(',');
Promise.all(files.map(file => file.endsWith('.js') ? loadScript(file) : loadJSON(file)))
	.then(() => {
		if (isDebugMode) { setDebugMode(); }
		initialize();
	})
	.catch(err => console.error('ファイル読み込みに失敗しました:', err));