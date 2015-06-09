var dataLoad = loadFile.aboutCall;

var j = dataLoad.info.length;
j--;
var i = 0;

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 20,
	top: 0
});

var nextButtonView = Ti.UI.createView({
	backgroundColor: "#14ad80",
	id: "next",
	height: 50,
	right: 20,
	bottom: 100,
	left: "60%"
});

var prevButtonView = Ti.UI.createView({
	backgroundColor: "#14ad80",
	id: "prev",
	height: 50,
	left: 20,
	bottom: 100,
	right: "60%"
});

var questionView = Ti.UI.createView({
	backgroundColor: "#f3f3f3",
	height: 150,
	top: border.height + 15,
	left: 20,
	right: 20
});

var answerView = Ti.UI.createView({
	backgroundColor: "#f3f3f3",
	top: border.height + questionView.height + 30,
	height: questionView.height,
	left: 20,
	right: 20
});

var nextButtonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 15, fontFamily: "Helvetica"},
	id: "next",
	textAlign: "center",
	text: "Next"
});

var prevButtonText = Ti.UI.createLabel({
	color: "#fff",
	font: {fontSize: 15, fontFamily: "Helvetica"},
	id: "prev",
	textAlign: "center",
	text: "Previous"
});

var questionText = Ti.UI.createLabel({
	color: "#000",
	font: {fontSize: 15, fontFamily: "Helvetica"},
	textAlign: "center",
	text: "Levi Hand\n MIU 1506\n About Me Application\n\n The questions will show up here."
});

var answerText = Ti.UI.createLabel({
	color: "#000",
	font: {fontSize: 15, fontFamily: "Helvetica"},
	textAlign: "center",
	text: "The answers will show up here.\nPress the next or previous button to cycle through the questions and answers.\nPress one of the buttons to get started."
});

var counter = function(dataSource){
	if(dataSource.id === "next"){
		if(i!=j){
			i++;
		}else{
			i = 0;
		};
		questionText.text = dataLoad.info[i].question;
		answerText.text = dataLoad.info[i].answer;
	};
	if(dataSource.id === "prev"){
		if(i==0){
			i = j;
		}else{
			i--;
		};
		questionText.text = dataLoad.info[i].question;
		answerText.text = dataLoad.info[i].answer;
	};
};



mainWin.addEventListener("click", function(event){
	counter(event.source);
	console.log(i);
});


answerView.add(answerText);
questionView.add(questionText);
nextButtonView.add(nextButtonText);
prevButtonView.add(prevButtonText);
mainWin.add(border, nextButtonView, prevButtonView, questionView, answerView);
