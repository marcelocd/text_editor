const {app, BrowserWindow} = require('electron');
var path = require('path');
let mainWindow = null;

app.on('ready',()=>{
  mainWindow = new BrowserWindow({width: 800, height: 600, frame: false});
  mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/index.html'); 
});