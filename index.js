"use strict";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', () => {
  let win = null;

  win = new BrowserWindow({
    autoHideMenuBar: true,
    height: 700,
    width: 700
  });

  win.loadURL(`file:///${__dirname}/client/dev/index.html`);

  win.on('closed', () => {
    win = null;
  });
});
