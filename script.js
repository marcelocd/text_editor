const {remote} = require('electron');

function minimize(){
	var window = remote.getCurrentWindow();

	window.minimize();
}

function maximize(){
	var window = remote.getCurrentWindow();

	if(window.isMaximized()){
		console.log("ENTROU 1")
		window.unmaximize();
	}else{
		console.log("ENTROU 2")
		window.maximize();
	}
}

function closeBtn(){
	var window = remote.getCurrentWindow();

	window.close();
}