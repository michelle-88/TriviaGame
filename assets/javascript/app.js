$(document).ready(function () {

// Declare global variables
var triviaQuestions = [
    { q: "What was the name of Mulan's dragon companion?",
      choices: ["Pascal", "Toothless", "Mushu", "Puff"],
      a: "Mushu" },
    
    { q: "What was Ariel's term for a fork in The Little Mermaid?",
      choices: ["Whatchamacallit", "Dinglehopper", "Whosit", "Whatsit"],
      a: "Dinglehopper" },

    { q: "Frollo is the villian in which Disney movie?",
      choices: ["Hercules", "The Lion King", "The Sword in the Stone", "The Hunchback of Notre Dame"],
      a: "The Hunchback of Notre Dame" },

    { q: "What was the name of Jasmine's pet tiger in Aladdin?",
      choices: ["Tony", "Rajah", "Tina", "Abu"],
      a: "Rajah" },

    { q: "Finish this lyric from The Lion King: 'Oh, I just can't wait to be ...'",
      choices: ["free", "famous", "king", "queen"],
      a: "king" },

    { q: "What is the name of Woody and Buzz's owner in Toy Story?",
      choices: ["Andy", "Bob", "Molly", "Fred"],
      a: "Andy" },

    { q: "In Finding Nemo, which city do Marlin and Dory travel to in order to find Nemo?",
      choices: ["San Diego", "Miami", "Sydney", "Melbourne"],
      a: "Sydney" },
    
    { q: "What is the name of the megacorporation that manufactured the robot Wall-E?",
      choices: ["Walmart", "Buy-N-Large", "ACME Corp", "Amazon"],
      a: "Buy-N-Large" },

    { q: "What is the name of Riley's imaginary friend in the movie Inside Out?",
      choices: ["Bing Bong", "Waldo", "Forky", "Giggles"],
      a: "Bing Bong" },

    { q: "What is the name of the city where Mike and Sully live in Monsters Inc?",
      choices: ["Metroville", "Scareville", "Monstropolis", "San Fransokyo"],
      a: "Monstropolis" }
];

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var userChoice;
var questionIndex = 0;
var timeLeft = 30;
var timerText = document.querySelector("#timer");
var timerInt;


// Write function that will show each question based on current questionIndex and start countdown
function showQuestion(){
    timerInt = setInterval(timerCountdown, 1000);
    $("#question").text(triviaQuestions[questionIndex].q);
}

// Write function that will show answer choices for the current question
function showChoices(){
    for(var i = 0; i < 4; i++){
      $("#answerChoices").append("<p>" + triviaQuestions[questionIndex].choices[i] + "</p>");
    }
}

// Write function for 30 second countdown for each question
function timerCountdown(){
    if(timeLeft == 0){
        clearInterval(timerInt);
        $("#question").empty();
        $("#answerChoices").empty();
        $("#displayText").html("<h3>Time's Up!</h3> <p>The Correct Answer was: " + triviaQuestions[questionIndex].a + "</p>");
        numUnanswered++;
        questionIndex++;
        setTimeout(loadNextQuestion, 5000);
    }

    else {
        timeLeft--;
        timerText.textContent = timeLeft;
    }
}

// Write function that will run when user clicks an answer choice. User's choice will be stored and compared to correct answer.
function answerClick(event){

  userChoice = event.target.textContent;
  
  if(userChoice == triviaQuestions[questionIndex].a){
      $("#question").empty();
      $("#answerChoices").empty();
      $("#displayText").html("<h3>Correct!</h3>")
      clearInterval(timerInt);
      numCorrect++;
      questionIndex++;
      setTimeout(loadNextQuestion, 5000);
  }

  else {
      $("#question").empty();
      $("#answerChoices").empty();
      clearInterval(timerInt);
      $("#displayText").html("<h3>Wrong!</h3> <p>The Correct Answer was: " + triviaQuestions[questionIndex].a + "</p>");
      numIncorrect++;
      questionIndex++;
      setTimeout(loadNextQuestion, 5000);
  }
  
}

// Write function to show next question, answer choices, and reset timer
function loadNextQuestion(){
  $("#displayText").empty();
  timeLeft = 30;
  timerText.textContent = timeLeft;
  showQuestion();
  showChoices();
  $("p").on("click", answerClick);
}

// Hide question/answers area at start of game
$("#triviaArea").hide();

// Click listener for start button that will hide button & start game when button is clicked
$("#startBtn").on("click", function(){
    $(this).hide();
    $("#triviaArea").show();

    // Show first question and its answers
    showQuestion();
    showChoices();

    // Click listener for answer choices
    $("p").on("click", answerClick);

  
});

// Write logic to display # correct, wrong, unanswered at end of game
// Write function to restart game when player clicks 'Start Over' button

});
