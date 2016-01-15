'use strict';

// アプリケーションをコントロールするモジュール
var app = require('app');
// console.log('app: ', app);
// console.log('getName: ', app.getName());
// console.log('isReady: ', app.isReady());
// console.log('__dirname: ', __dirname);

// ウィンドウを作成するモジュール
var BrowserWindow = require('browser-window');

// メインウィンドウはGCされないようにグローバル宣言
var mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

// Electronの初期化完了後に実行
app.on('ready', function() {
	// メイン画面表示。ウィンドウの幅、高さを指定できる
	mainWindow = new BrowserWindow({
		width: 900, height: 600
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// ウィンドウが閉じられたらアプリも終了
	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});