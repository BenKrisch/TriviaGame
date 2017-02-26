var correctAnswers = 0; 
var wrongAnswers = 0; 
var notGuessed = 8; 

$(document).ready(function() { 

$("#startButton").click(function () { 
$("#startExplanation").html(""); 
$("#container").css("background-color", "white");
$("#quiz").css("visibility","visible"); 

 
console.log("I got clicked"); 

var timer = function() {
    $("#countdown").each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      } 
      if (count == 0) { 

      	$("#afterSubmit").css("visibility","visible"); 
		$("#quiz").html(""); 
		$("#timeOut").html("You're out of time!")
		console.log("Time ran out");

      }
    });
  };

  // Schedule the update to happen once every second
  setInterval(timer, 1000);

}); 
 
//This captures the answer clicks and then adds to the correct or wrong answers and then subtracts from the not guessed answers
$(function () {
$('input[name="test"]').on('click', function() {
    if ($(this).val() == 'correct') {
        correctAnswers++; 
		$("#correctAnswers").html(correctAnswers);
		notGuessed--; 
		$("#notGuessed").html(notGuessed);
    } else if ($(this).val() == 'wrong') {
        wrongAnswers++; 
		$("#wrongAnswers").html(wrongAnswers);
		notGuessed--; 
		$("#notGuessed").html(notGuessed);
    }
})
});
 

$("#doneButton").click(function () { 

$("#afterSubmit").css("visibility","visible"); 
$("#quiz").html(""); 
$("#container").css("background-color", "");
console.log("I got clicked");

}); 

});





