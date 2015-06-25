//Create mainm window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fffff5",
	title: "Merge Calculator"
});

//Convert main window into navigation window for iOS
var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

//Open naviagtion window
navWin.open();

//Require the file "calc.js" to be loaded on start up
var loadCalc = require("calc");
var loadLaunch = require("launch");
var loadAbout = require("about");
var loadSplash = require("splash");