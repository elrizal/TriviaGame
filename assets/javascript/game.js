
window.onload = function() {
	$("#stop").on("click", timeLimit.stop);
	$("#reset").on("click", timeLimit.reset); 
	$("#start").on("click", timeLimit.start);
	$("#show-answers").hide();
	$('#show-quiz').hide();
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
	$("#show-answers").show(timeLimit.start);

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
	$("#user-score").show();

	if (timeLimit === 0) {
		stop();
	}
}


//	ANSWER SELECTS:
var userScore = 0;

$(".user-input").on("click", function() {

 if ($("#correct-answer").on("click", timeLimit.stop)) {
    	userScore += 1;
    	console.log(userScore);
  }
else {
    	userScore -= 1;
    	console.log(userScore);
  }
});
