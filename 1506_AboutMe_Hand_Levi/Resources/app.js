//Create main window
var mainWin = Ti.UI.createWindow({
	//Set the background color for the window
	backgroundColor: "#7b7277",
});

//Open the main window
mainWin.open();

//Load subsequent .js files
var loadFile = require("aboutMe");
var loadFile = require("data");
