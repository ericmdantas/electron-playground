'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win = null;

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  win = new BrowserWindow({width: 1200, height: 800, autoHideMenuBar: true, icon: 'node.ico'});

  win.loadURL('file://' + __dirname + '/index.html');

  win.on('closed', () => {
    win = null;
  });

  setInterval(() => {
    win.reload();
  }, 10000);
});
