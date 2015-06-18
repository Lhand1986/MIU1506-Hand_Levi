//Load global JSON data into local variable for ease of use
var games = loadJSON.gamesCall;

//Create variable to hold images folder information and point titanium at the folder
var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");

//Get the directory listing and apply it to a variable
var imageFiles = imagesFolder.getDirectoryListing();

//Creating a function to open a new window and utilize JSON data during event propagation
var getDetail = function(dataSource){
	
	//Create a window to hold information
	var gameWindow = Ti.UI.createWindow({
	//Set background color
	backgroundColor: "#e9e0d6",
	//Set title of window to take the .title property of JSON object
	title: dataSource.title
	});
	
	//Create a view to hold imageview
	var imageContainer = Ti.UI.createView({
		//Set top border
		top: 20,
		//Set height of view
		height: 210,
		//Set with of view
		width: 375
	});
	
	//Create a scroll view to hold JSON data
	var gamesContainer = Ti.UI.createScrollView({
		//Set top border to change with image container size
		top: imageContainer.top + imageContainer.height,
		//Show the vertical scroll indicator
		showVerticalScrollIndicator: true,
		//Set background color
		backgroundColor: "#e9e0d6",
		//Make layout vertical
		layout: "vertical",
		//Set bottom border
		bottom: 20
	});
	
	//Create imageview to hold image
	var image = Ti.UI.createImageView({
		//Assign image with data from JSON object
		image: "images/" + dataSource.image,
		//Set static width
		width: 375,
		//Set static height
		height: 210
	});
	
	//Create a label to hold title information
	var titleLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Game Title: " + dataSource.title,
		//Set text color
		color: "#333333",
		//Set borders
		top: 20,
		left: 20
	});
	
	//Create a label to hold genre information
	var genreLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Genre: " + dataSource.genre,
		//Set text color
		color: "#333333",
		//Set borders
		top: titleLabel.top,
		left: 20
	});
	
	//Create a label to hold genre information
	var platformLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Platform: " + dataSource.platform,
		//Set text color
		color: "#333333",
		//Set borders
		top: genreLabel.top,
		left: 20
	});
	
	//Create a label to hold players information
	var playersLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Players: " + dataSource.players,
		//Set text color
		color: "#333333",
		//Set borders
		top: platformLabel.top,
		left: 20
	});
	
	//Create a label to hold release date information
	var releaseDateLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Release Date: " + dataSource.releaseDate,
		//Set text color
		color: "#333333",
		//Set borders
		top: playersLabel.top,
		left: 20
	});
	
	//Create a label to hold synopsis information
	var synopsisLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Synopsis: " + dataSource.synopsis,
		//Set text color
		color: "#333333",
		//Set borders
		top: releaseDateLabel.top,
		left: 20
	});
	
	//Create a label to hold rating information
	var ratingLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Rating: " + dataSource.rating,
		//Set text color
		color: "#333333",
		//Set borders
		top: synopsisLabel.top,
		left: 20
	});
	
	//Create a label to hold concept information
	var conceptLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Concept: " + dataSource.concept,
		//Set text color
		color: "#333333",
		//Set borders
		top: ratingLabel.top,
		left: 20
	});
	
	//Create a label to hold graphics information
	var graphicsLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Graphics: " + dataSource.graphics,
		//Set text color
		color: "#333333",
		//Set borders
		top: conceptLabel.top,
		left: 20
	});
	
	//Create a label to hold sound information
	var soundLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Sound: " + dataSource.sound,
		//Set text color
		color: "#333333",
		//Set borders
		top: graphicsLabel.top,
		left: 20
	});
	
	//Create a label to hold playability information
	var playabilityLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Playability: " + dataSource.playability,
		//Set text color
		color: "#333333",
		//Set borders
		top: soundLabel.top,
		left: 20
	});
	
	//Create a label to hold entertainment information
	var entertainmentLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Entertainment: " + dataSource.entertainment,
		//Set text color
		color: "#333333",
		//Set borders
		top: playabilityLabel.top,
		left: 20
	});
	
	//Create a label to hold replay information
	var replayLabel = Ti.UI.createLabel({
		//Assign text from JSON object
		text: "Replay: " + dataSource.replay,
		//Set text color
		color: "#333333",
		//Set borders
		top: entertainmentLabel.top,
		left: 20
	});
	
	//Add image to image container
	imageContainer.add(image);
	
	//Add labels to gamesContainer
	gamesContainer.add(titleLabel, genreLabel, platformLabel, playersLabel, releaseDateLabel, synopsisLabel, ratingLabel, conceptLabel, graphicsLabel, soundLabel, playabilityLabel, entertainmentLabel, replayLabel);
	//Add containers to window
	gameWindow.add(imageContainer, gamesContainer);
	//Open the detailWindow in the navWindow when the function is called
	navWin.openWindow(gameWindow);
};

//Create a table view section to hold list information
var gamesTable = Ti.UI.createTableViewSection({
	//Set title
	headerTitle: "Games",
});

//Set table view
var gamesView = Ti.UI.createTableView({
	//Set styling of table view to grouped
	style: Ti.UI.iPhone.TableViewStyle.GROUPED
});

//Create for loop to add JSON information to cycle through JSON object and list items until the end of the JSON object
for(var i=0, j=games.gamesList.gameInfo.length; i<j; i++){
	//Create table view row with JSON information as properties
	var theRow = Ti.UI.createTableViewRow({
		title: games.gamesList.gameInfo[i].title,
		genre: games.gamesList.gameInfo[i].genre,
		platform: games.gamesList.gameInfo[i].platform,
		players: games.gamesList.gameInfo[i].players,
		releaseDate: games.gamesList.gameInfo[i].releaseDate,
		synopsis: games.gamesList.gameInfo[i].synopsis,
		image: games.gamesList.gameInfo[i].image,
		rating: games.gamesList.gameInfo[i].rating,
		concept: games.gamesList.gameInfo[i].concept,
		graphics: games.gamesList.gameInfo[i].graphics,
		sound: games.gamesList.gameInfo[i].sound,
		playability: games.gamesList.gameInfo[i].playability,
		entertainment: games.gamesList.gameInfo[i].entertainment,
		replay: games.gamesList.gameInfo[i].replay,
		//Set row to have a child indicator
		hasChild: true
	});
	//Add theRow to gamesTable
	gamesTable.add(theRow);
}

//Add click event listener to gamesView object
gamesView.addEventListener("click", function(event){
	//Run function getDetail with the clicked source as the input data
	getDetail(event.source);
});

//Create array variable which holds gamesTable information
var gamesSection = [gamesTable];

//Add gamesSection to gamesView
gamesView.setData(gamesSection);
//Add view to main window
mainWin.add(gamesView);
