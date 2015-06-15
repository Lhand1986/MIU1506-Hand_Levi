var mainWin = Ti.UI.createWindow({
	backgroundColor: "#FFF",
	title: "Hold this place!!!"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

navWin.open();

var loadLogic = require("logic");
var loadJSON = require("JSON");
