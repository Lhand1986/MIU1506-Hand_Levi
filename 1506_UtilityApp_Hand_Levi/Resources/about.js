//Window


//Create a window
var aboutWin = Ti.UI.createWindow({
	backgroundColor: "#fffff5",
	title: "About"
});




//Objects



//Initializing JSON object
var aboutJSON = {
	"categories": [{
		"program": "This program is designed to calculate the number of bars needing to be merged between heats at the Gerdau rebar mill in Rancho Cucamonga, CA.",
		"author": "The author of this program is named Levi Hand and is a student at Full Sail University in the process of obtaining his Bachelor's of Science in Mobile Development.",
		"company": "Gerdau Longsteel North America is helping to shape the world as a leader in the steel industry in production, service and quality and as one of the largest concrete reinforcing steel fabricators in North America. We manufacture a diverse and balanced mix of recycled steel products for use in a variety of industries including construction, cellular and electrical transmission, automotive, mining and equipment manufacturing. \n\n\nGerdau Longsteel North America operates electric steel minimills strategically located in Baldwin, FL, Cartersville, GA, Gallatin KY, Selkirk, Manitoba, Charlotte, NC, Sayreville, NJ, Cambridge, Ontario, Whitby, Ontario, Jackson, TN, Knoxville, TN, St. Paul, MN, Wilton, IA, Calvert City, KY, Beaumont, TX, Joliet, IL and Sand Springs, OK to service your steel needs.\n\n\nOur product mix includes concrete reinforcing steel, equal and unequal leg angles, channels, smooth rounds, flats, square bars, coiled wire rod, handrails, Forged Grinding Balls, and wide flange beams.\n\n\nWhen you call Gerdau Longsteel North America, you will be greeted by one of our experienced professional inside-sales team members who are ready to assist you. Or if you prefer, with our E-Z-Link system, you can get instant information on-line with an account number and a password.\n\n\nWith a click of your mouse, we invite you to visit our mills, see the products we produce, and meet the Gerdau Longsteel North America team that is dedicated to giving you unsurpassed customer service. We hope you enjoy your visit with Gerdau Longsteel North America, we look forward to servicing your steel needs."
	}]
};

//Create a scroll view with a vertical layout that scrolls to the top of the page when you click the status bar
var aboutView = Ti.UI.createScrollView({
	top: 0,
	bottom: 20,
	layout: "vertical",
	scrollsToTop: true,
	showVerticalScrollIndicator: true
});

//Create a label to hold JSON information
var programLabel = Ti.UI.createLabel({
	top: 20,
	left: 20,
	right: 20,
	font: {fontSize: 18, fontFamily: "Times New Roman"},
	text: "Program: \n" + aboutJSON.categories[0].program
});

//Create a label to hold JSON information
var authorLabel = Ti.UI.createLabel({
	top: programLabel.top,
	left: 20,
	right: 20,
	font: {fontSize: 18, fontFamily: "Times New Roman"},
	text: "Author: \n" + aboutJSON.categories[0].author
});

//Create a label to hold JSON information
var companyLabel = Ti.UI.createLabel({
	top: authorLabel.top,
	left: 20,
	right: 20,
	font: {fontSize: 18, fontFamily: "Times New Roman"},
	text: "Company: \n" + aboutJSON.categories[0].company
});



//Add objects



//Adding objects to window
aboutView.add(programLabel, authorLabel, companyLabel);
aboutWin.add(aboutView);



//Export


//Export window so it is globally available
exports.aboutCall = aboutWin;