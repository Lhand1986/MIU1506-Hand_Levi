//Create main window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "#333333",
	title: "About Me"
});

//Create a navigation window protocol

var navWin = Ti.UI.iOS.createNavigationWindow({
	//Assign the mainWin window to the nav window
	window: mainWin
});

//Open the nav window
navWin.open();

//Open subsequent .js file

var loadFile = require("aboutMe");
var loadFile = require("data");
