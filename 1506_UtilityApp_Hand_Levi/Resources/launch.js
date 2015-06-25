//Window



//Create window
var launchWin = Ti.UI.createWindow({
	backgroundColor: "#fffff5",
	title: "Launch"
});



//Objects




//Create a table view row with an ID to identify with event propagation
var calcRow = Ti.UI.createTableViewRow({
	title: "Merge Calculator",
	id: "merge",
	hasChild: true
});

//Create a table view row with an ID to identify with event propagation
var aboutRow = Ti.UI.createTableViewRow({
	title: "About this program",
	id: "about",
	hasChild: true
});

//Create a table view which holds the rows
var launchTable = Ti.UI.createTableView({
	backgroundColor: "fffff5",
	//Set styling of table view to grouped
	style: Ti.UI.iPhone.TableViewStyle.GROUPED,
	data: [calcRow, aboutRow]
});



//Function



//Create a function designed to work with event propagation to open the different pages depending on which is clicked
var openPage = function(dataSource){
	
	//Logic to determine which object the user has selected
	if(dataSource.id === "merge"){
		navWin.openWindow(loadCalc.calcCall);
	}else if(dataSource.id === "about"){
		navWin.openWindow(loadAbout.aboutCall);
	}
};



//Event listener



//Add event propagation to the launch view
launchTable.addEventListener("click", function(event){
	//Logic to determine if the user is clicking on one of the objects
	if(event.source.id != null){
		openPage(event.source);
	}
});





//Add table to window
launchWin.add(launchTable);





//Export window so it is globally available
exports.launchCall = launchWin;