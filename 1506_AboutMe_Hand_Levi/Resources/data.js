//Load the globally available JSON object into a separate variable within the scope of this .js file
var dataLoad = loadFile.aboutCall;

//Set a variable equal to the length of the JSON object array
var j = dataLoad.info.length;
//Decrement the variable so it can be used properly
j--;
//Initialize variable i with a value of 0
var i = 0;

//Create a view for a top border
var border = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#dbdbdb",
	//Set the height of the view to 20 pixels
	height: 20,
	//Make the top flush with the top of the screen
	top: 0
});

//Create a view for the next button
var nextButtonView = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#987A8B",
	//Assign an ID value so it can be recognized by event propagation
	id: "next",
	//Set the height
	height: 50,
	//Set the distance from the right side of the screen in pixels
	right: 20,
	//Set the distance from the bottom in pixels
	bottom: 150,
	//Set the distance from the left side of the screen as a percentage
	left: "60%"
});

//Create a view for the previous button
var prevButtonView = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#987A8B",
	//Assign an ID value so it can be recognized by event propagation
	id: "prev",
	//Set the height
	height: 50,
	//Set the distance from the left in pixels
	left: 20,
	//Set the distance from the bottom in pixels
	bottom: 150,
	//Set the distance from the right as a percentage
	right: "60%"
});

//Create a view for the question area
var questionView = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#6E6269",
	//Set the height of the view
	height: 150,
	//Set the top of the view so that if the border height is adjusted, it will maintain the same distance
	top: border.height + 15,
	//Set the distance from the left
	left: 20,
	//Set the distance from the right
	right: 20
});

//Create a view for the answer area
var answerView = Ti.UI.createView({
	//Assign a background color
	backgroundColor: "#6E6269",
	//Set the top of the view so if the border height and the questionView height is adjusted, it will maintain the same distance
	top: border.height + questionView.height + 30,
	//Set the height to be the same as the question view
	height: questionView.height,
	//Set the distance from the left
	left: 20,
	//Set the distance from the right
	right: 20
});

//Create a label for the next button text area
var nextButtonText = Ti.UI.createLabel({
	//Assign a text color
	color: "#403A3D",
	//Set the font styling
	font: {fontSize: 15, fontFamily: "Helvetica"},
	//Assign an id to the label so it can be identified for event propagation
	id: "next",
	//Align the text to the center of the object it is displayed in
	textAlign: "center",
	//Set the actual text
	text: "Next"
});

//Create a label for the next button text area
var prevButtonText = Ti.UI.createLabel({
	//Assign a text color
	color: "#403A3D",
	//Set the font styling
	font: {fontSize: 15, fontFamily: "Helvetica"},
	//Assign an id to the label so it can be identified for event propagation
	id: "prev",
	//Align the text to the center of the object it is displayed in
	textAlign: "center",
	//Set the actual text
	text: "Previous"
});

//Create a label for the question text area
var questionText = Ti.UI.createLabel({
	//Set the text color
	color: "#D3C6C6",
	//Set the font styling
	font: {fontSize: 15, fontFamily: "Helvetica"},
	//Align the text to the center of the object it is displayed in
	textAlign: "center",
	//Set placeholder text
	text: "Levi Hand\n MIU 1506\n About Me Application\n\n The questions will show up here."
});

//Create a label for the answer text area
var answerText = Ti.UI.createLabel({
	//Set the text color
	color: "#D3C6C6",
	//Set the font styling
	font: {fontSize: 15, fontFamily: "Helvetica"},
	//Align the text to the center of the object it is displayed in
	textAlign: "center",
	//Set placeholder text
	text: "The answers will show up here.\nPress the next or previous button to cycle through the questions and answers.\nPress one of the buttons to get started."
});

//Initalize a function to incorporate logic into a counter for cycling through the JSON array
var counter = function(dataSource){
	//Check to see if the source calling the function has an id property of next
	if(dataSource.id === "next"){
		//If variable i is not equal to variable j
		if(i!=j){
			//Increment variable i
			i++;
		}else{
			//Or else set variable i's value to 0
			i = 0;
		};
		//After which, set the question text and answer text to the place value of i in the info section of the JSON array
		questionText.text = dataLoad.info[i].question;
		answerText.text = dataLoad.info[i].answer;
	};
	//Or, if the source id property is previous
	if(dataSource.id === "prev"){
		//Then, if the value of i is 0
		if(i==0){
			//Set the value of i equal to the value of j
			i = j;
		}else{
			//Or else decrement i
			i--;
		};
		//After which, set the question text and answer text to the place value of i in the info section of the JSON array
		questionText.text = dataLoad.info[i].question;
		answerText.text = dataLoad.info[i].answer;
	};
};


//Add event propagation to the main window
mainWin.addEventListener("click", function(event){
	//Call the counter function on the source of the click
	counter(event.source);
});

//Add the answer text to the answer view
answerView.add(answerText);
//Add the question text to the question view
questionView.add(questionText);
//Add the next button text to the button view
nextButtonView.add(nextButtonText);
//Add the previous button text to the button view
prevButtonView.add(prevButtonText);
//Add all the elements to the main window
mainWin.add(border, nextButtonView, prevButtonView, questionView, answerView);
