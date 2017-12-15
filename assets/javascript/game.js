
//later, use (questions[0]) to get objects from the array

var userScore = 0;
var userEntry = 0;

$("#show-answers").hide();
$('#show-quiz').hide();

window.onload = function() {
	$("#stop").on("click", timeLimit.stop);
	$("#reset").on("click", timeLimit.reset); //to be used at the end of the quiz
	$("#start").on("click", timeLimit.start);


};
var intervalId;
var clockRunning = false;
setTimeout(timeUp, 1000 * 10);

var timeLimit = {
	time: 0,

	reset: function() {
		timeLimit.time = 0;
		$("#show-time").text("00:00");
	},

	start: function() {
			$("#show-quiz").show(timeLimit.start);

		if (!clockRunning) {
			intervalId = setInterval(timeLimit.count, 1000);
			clockRunning = true;
		}
	},
	stop: function() {
   	 clearInterval(intervalId);
   	 clockRunning = false;
  },
	count: function() {
		timeLimit.time++;
		var converted = timeLimit.timeConverter(timeLimit.time);
		console.log(converted);
		$("#show-time").text(converted);
	},

	timeConverter: function(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - minutes * 60;

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		if (minutes === 0) {
			minutes = "00";
		} else if (minutes < 10) {
			minutes = "0" + minutes;
		}

		return minutes + ":" + seconds;
	}
};

function timeUp() {
	timeLimit--;
	 
	console.log("done");
	$("#show-quiz").empty();
	//$(".panel panel-default").append();

	alert("Time's up!");
	$("#show-answers").show();
	if (timeLimit === 0) {
		stop();
	}
}


//	ANSWER SELECTS:
// may write: IF array quetions[0] === array answers [0]
//then correct message on click.
// if array quetions[0] === array wrongAnswers [0] then incorrect
// must have an event trigger for the user to select options, which will then
//be compared to the answer
