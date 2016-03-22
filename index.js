"use strict";

const app = require('app');
const BrowserWindow = require('browser-window');

let win = null;

app.on('ready', () => {
  win = new BrowserWindow({
    autoHideMenuBar: true,
    height: 700,
    width: 700
  });

  win.loadUrl(`file:///${__dirname}/client/index.html`);

  win.on('closed', () => {
    win = null;
  });
});
