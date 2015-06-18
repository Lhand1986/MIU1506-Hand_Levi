//Create main window
var mainWin = Ti.UI.createWindow({
	//Assign background color
	backgroundColor: "#FFF",
	//Assign title to page
	title: "Games Listing"
});

//Initialize main window as a navigation window
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

//Open Navigation window
navWin.open();

//Require JSON.js file
var loadJSON = require("JSON");
//Require logic.js file
var loadLogic = require("logic");