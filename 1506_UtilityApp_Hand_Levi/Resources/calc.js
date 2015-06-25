//Windows





//Create window for calculator
var calcWin = Ti.UI.createWindow({
	backgroundColor: "#fffff5",
	title: "Gerdau Calculator"
});

//Create a window for the output
var outputWin = Ti.UI.createWindow({
	backgroundColor: "#fffff5",
	title: "Merge Numbers"
});





//Objects





//Create a label for the output window
var outputLabel = Ti.UI.createLabel({
	top: 20,
	left: 20,
	right: 20,
	font: {fontSize: 18, fontFamily: "Times New Roman"}
});

//Create a scroll view so the user can scroll through the information on screen
var calcContainer = Ti.UI.createScrollView({
	top: 0,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fffff5",
	layout: "vertical"
});

//Create a label for the instructions at the top of the page
var instructionHeader = Ti.UI.createLabel({
	text: "This form will calculate how many bars will need to be merged from the next heat. Please fill out the form completely.",
	top: 15,
	left: 15,
	right: 15,
	font: {fontSize: 14, fontFamily: "Times New Roman"},
	color: "grey"
});

//Create a label for the bundle pieces question
var bundlePieces = Ti.UI.createLabel({
	text: "How many pieces are in each bundle?",
	top: 20,
	left: 20,
	right: 20
});

//Create input field for the bundle pieces
var bundlePiecesInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter a number",
	top: 5,
	left: bundlePieces.left,
	width: 250
});

//Create a label for the drops question field
var dropsInRun = Ti.UI.createLabel({
	text: "How many drops are in each run?",
	top: bundlePieces.top,
	left: bundlePieces.left,
	right: bundlePieces.right
});

//Create input field for the drops
var dropsRunInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter a number",
	top: 5,
	left: dropsInRun.left,
	width: 250
});

//Create a label for the bars per drop question field
var barsPerDrop = Ti.UI.createLabel({
	text: "How many bars are in each drop?",
	top: dropsInRun.top,
	left: dropsInRun.left,
	right: dropsInRun.right
});

//Create input field for the bars
var barsDropInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter a number",
	top: 5,
	left: barsPerDrop.left,
	width: 250
});

//Create a label for the drops in heat question field
var barsInHeat = Ti.UI.createLabel({
	text: "How many drops are left in the current heat?",
	top: barsPerDrop.top,
	left: barsPerDrop.left,
	right: barsPerDrop.right
});

//Create input field for the heat
var barsHeatInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter a number",
	top: 5,
	left: barsInHeat.left,
	width: 250
});

//Create a label for the 30 foot bar toggle
var thirtiesLabel = Ti.UI.createLabel({
	text: "Are you running 30 foot bar? Click for yes or no.",
	top: barsInHeat.top,
	left: barsInHeat.left,
	right: barsInHeat.right
});

//Create a switch to select for 30 foot bar
var thirtiesButton = Ti.UI.createButton({
	top: 10,
	style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
	left: thirtiesLabel.left,
	width: 50,
	height: 30,
	title: "Yes",
	borderColor: "blue"
});

//Create a label for the bundle cuts text field
var bundleCuts = Ti.UI.createLabel({
	text: "How many cuts are there per bundle?",
	top: 20,
	left: 20,
	right: 20
});

//Create the bundle cuts user input field
var bundleCutsInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: "Enter a number",
	top: 5,
	left: bundleCuts.left,
	editable: false,
	width: 250
});

//Create a label for the bundle subs button
var bundleSub = Ti.UI.createLabel({
	text: "Are there any subs? Click for yes or no.",
	top: bundleCuts.top,
	left: bundleCuts.left
});

//Create the button for the bundle sub selection
var bundleSubButton = Ti.UI.createButton({
	top: 10,
	style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
	left: bundleCuts.left,
	width: 50,
	height: 30,
	title: "No",
	borderColor: "blue"
});

//Create the button to caluclate the merge
var calculateBtn = Ti.UI.createButton({
	top: 20,
	style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
	left: bundleCuts.left,
	width: 150,
	height: 30,
	bottom: 20,
	title: "Calculate Merge",
	borderColor: "blue",
	backgroundColor: "#f5f5ff"
});

//Create a custom back button
var backButton = Ti.UI.createButton({
	title: "Back"
});
//Assign custom button to the leftNavButton position
calcWin.leftNavButton = backButton;

//Create an option dialog box to assign to the custom back button
var exitDialog = Ti.UI.createOptionDialog({
	cancel: 1,
	options: ['Yes', 'No'],
	selectedIndex: 1,
	destructive: 0,
	title: 'Exit form?'
});




//Functions




//Add a function to change the value and appearance of the thirties button when clicked
var clickThirtiesButton = function(){
	if(thirtiesButton.title === "No"){
		thirtiesButton.title = "Yes";
	}else{
		thirtiesButton.title = "No";
	}
};

//Add a function to change the value and appearance of the sub button when clicked
var clickSubButton = function(){
	if(bundleSubButton.title === "No"){
		bundleSubButton.title = "Yes";
	}else{
		bundleSubButton.title = "No";
	}
};

//Create a function to check if the values entered are numbers or not before opening the new window
var calculateCheck = function(){
	//True false placeholder
	var trueFalse;
	//Created an array converting the values of the input fields into an integer
	var bundleArr = [parseInt(bundlePiecesInput.value), parseInt(dropsRunInput.value), parseInt(barsDropInput.value), parseInt(barsHeatInput.value), parseInt(bundleCutsInput.value)];
	//Set a variable to the length of the array
	var j = bundleArr.length;
	//Conditional statement checking if the button is toggled to Yes, and if it is true, then decrement the array length variable
	if(thirtiesButton.title === "Yes"){
		j--;
	};
	//Conditional statement cycling through the array to check the value of each input field
	for(i=0; i<j; i++){
		if(isNaN(bundleArr[i])){
			trueFalse = true;
		}
	}
	//If any of the input fields are not a number, then alert the user that they need to enter a number value
	if(trueFalse === true){
		alert("Please enter a number value in the text fields");
	//If all of the necessary input fields are clear, then open the output window
	}else{
		navWin.openWindow(outputWin);
	}

};

//Create the function to calculate the user input
var calculateFctn = function(){
	
	//If the thirties button is toggled to yes, this portion gets executed
	if(thirtiesButton.title === "Yes"){
		//Setting static variables for thirties
		var thirtiesBundleCuts = 3;
	    var thirtiesBedCuts = 8;
	    
	    //Mathematical portion to figure out the proper output values
	    var singleSub = bundlePiecesInput.value / thirtiesBundleCuts;
	    var singleSubRemainder = barsHeatInput.value * barsDropInput.value;
	    var singleSubMergeNumber = singleSub - singleSubRemainder;
	    var zeroSubsReg = bundlePiecesInput.value - singleSubRemainder * thirtiesBundleCuts;
	    var zeroSubsLast = singleSubMergeNumber * 2 + singleSub;
	    var oneSub = singleSubMergeNumber * 2;
	    var twoSubs = singleSub * 2 + singleSubMergeNumber;
	    
	    //Set the output label text to the values calculated by function
	    outputLabel.text = "0 subs = \n" + zeroSubsReg + " first two bundles.\n" + zeroSubsLast + " third bundle.\n" + "1 sub = \n" + oneSub + " first bundle.\n" + zeroSubsReg + " last two bundles.\n" + "2 subs = \n" + singleSubMergeNumber + " for the first bundle. \n" + zeroSubsReg + " for the second and third bundles.\n" + twoSubs + " for the fourth bundle.";
	    
	    //If the thirties button is NOT toggled to yes, this portion gets executed
		}else{
		//Setting a common variable to be used in this section
		var dropAdd = dropsRunInput.value - barsHeatInput.value;
		//If the bundle sub button is set to yes, this section gets executed
		if(bundleSubButton.title === "Yes"){
			//Mathematical portion figuring out the proper output values
			var singleSubSecond = bundlePiecesInput.value / bundleCutsInput.value;
			var singleSubRemainderSecond = barsHeatInput.value * dropsRunInput.value;
			var singleSubMergeNumberSecond = singleSubSecond - singleSubRemainderSecond;
			var zeroSubsReg = bundlePiecesInput.value - singleSubRemainderSecond * bundleCutsInput.value;
			var zeroSubsLast = singleSubMergeNumberSecond + singleSubSecond;
			
			//Assign values to the output label
			outputLabel.text = "0 subs = \n" + zeroSubsReg + " for the first bundle.\n" + zeroSubsLast + " for the second bundle.\n" + "1 sub = \n" + singleSubMergeNumberSecond + " for the first bundle.\n" + zeroSubsReg + " for the second bundle.";
		//If the bundle sub button is NOT toggled to yes, this portion gets executed
		}else{
			//Set the merge number to a specific value
			mergeNumber = (dropAdd * barsDropInput.value) * bundleCutsInput.value;
			//Assign values to the output label
			outputLabel.text = "Add " + mergeNumber + " bars for the merge";
		}
	}
	//Run the calculate check function to see if the variables are all numbers, and if so, open the output window
	calculateCheck();
};



//Event Listeners





//Add an event listener to the thirties button calling the function to change the appearance and value
thirtiesButton.addEventListener("click", function(){
	clickThirtiesButton();
	//Add an additional parameter to make the bundle cuts input field editable or not based on user selection
	if(thirtiesButton.title === "No"){
		bundleCutsInput.editable = true;
	}
	if(thirtiesButton.title === "Yes"){
		bundleCutsInput.editable = false;
	}
});

//Add an event listener to the bundle sub button allowing it to be toggled
bundleSubButton.addEventListener("click", function(){
	clickSubButton();
});

//Add an event listener to the calculate button calling the calculate function
calculateBtn.addEventListener("click", function(){
	calculateFctn();
});

//Add event listener to the custom back button calling the exit dialog box
backButton.addEventListener("click", function(){
	exitDialog.show();
});

//Add event listener to the exit dialog box
exitDialog.addEventListener("click", function(e){
	//If the user selects "Yes" then this code executes
	if(e.index === 0){
		//Set the value of all input boxes to null
		bundlePiecesInput.value = "";
		dropsRunInput.value = "";
		barsDropInput.value = "";
		barsHeatInput.value = "";
		bundleCutsInput.value = "";
		//Close the window
		calcWin.close();
	};
});




//Adding objects




//Adding all of the objects to the page
outputWin.add(outputLabel);
calcContainer.add(instructionHeader, bundlePieces, bundlePiecesInput, dropsInRun, dropsRunInput, barsPerDrop, barsDropInput, barsInHeat, barsHeatInput, thirtiesLabel, thirtiesButton, bundleCuts, bundleCutsInput, bundleSub, bundleSubButton, calculateBtn);
calcWin.add(calcContainer);




//Export



//Export the window so it can be called globally
exports.calcCall = calcWin;