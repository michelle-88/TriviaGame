$(document).ready(function () {

// Declare global variables
var triviaQuestions = [
    { q: "What was the name of Mulan's dragon companion?",
      choices: ["Pascal", "Toothless", "Mushu", "Puff"],
      a: "Mushu",
      gif: "./assets/images/mushu.gif" },
    
    { q: "What was Ariel's term for a fork in The Little Mermaid?",
      choices: ["Whatchamacallit", "Dinglehopper", "Whosit", "Whatsit"],
      a: "Dinglehopper",
      gif: "./assets/images/fork.gif" },

    { q: "Frollo is the villian in which Disney movie?",
      choices: ["Hercules", "The Lion King", "The Sword in the Stone", "The Hunchback of Notre Dame"],
      a: "The Hunchback of Notre Dame",
      gif: "./assets/images/frollo.gif" },

    { q: "What was the name of Jasmine's pet tiger in Aladdin?",
      choices: ["Tony", "Rajah", "Tina", "Abu"],
      a: "Rajah",
      gif: "./assets/images/rajah.gif" },

    { q: "Finish this lyric from The Lion King: 'Oh, I just can't wait to be ...'",
      choices: ["free", "famous", "king", "queen"],
      a: "king",
      gif: "./assets/images/king.gif" },

    { q: "What is the name of Woody and Buzz's owner in Toy Story?",
      choices: ["Andy", "Bob", "Molly", "Fred"],
      a: "Andy",
      gif: "./assets/images/andy.gif" },

    { q: "In Finding Nemo, which city do Marlin and Dory travel to in order to find Nemo?",
      choices: ["San Diego", "Miami", "Sydney", "Melbourne"],
      a: "Sydney",
      gif: "./assets/images/sydney.gif" },
    
    { q: "What is the name of the megacorporation that manufactured the robot Wall-E?",
      choices: ["Walmart", "Buy-N-Large", "ACME Corp", "Amazon"],
      a: "Buy-N-Large",
      gif: "./assets/images/walle.gif" },

    { q: "What is the name of Riley's imaginary friend in the movie Inside Out?",
      choices: ["Bing Bong", "Waldo", "Forky", "Giggles"],
      a: "Bing Bong",
      gif: "./assets/images/bingbong.gif" },

    { q: "What is the name of the city where Mike and Sully live in Monsters Inc?",
      choices: ["Metroville", "Scareville", "Monstropolis", "San Fransokyo"],
      a: "Monstropolis",
      gif: "./assets/images/monster.gif" }
];

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var userChoice;
var questionIndex = 0;
var timeLeft = 30;
var timerText = document.querySelector("#timer");
var timerInt;
var resultGif;


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
        resultGif = $("<img>").attr("src", triviaQuestions[questionIndex].gif);
        $("#gifArea").append(resultGif);
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
      resultGif = $("<img>").attr("src", triviaQuestions[questionIndex].gif);
      $("#gifArea").append(resultGif);
      numCorrect++;
      questionIndex++;
      setTimeout(loadNextQuestion, 5000);
  }

  else {
      $("#question").empty();
      $("#answerChoices").empty();
      clearInterval(timerInt);
      $("#displayText").html("<h3>Wrong!</h3> <p>The Correct Answer was: " + triviaQuestions[questionIndex].a + "</p>");
      resultGif = $("<img>").attr("src", triviaQuestions[questionIndex].gif);
      $("#gifArea").append(resultGif);
      numIncorrect++;
      questionIndex++;
      setTimeout(loadNextQuestion, 5000);
  }
  
}

// Write function to show next question, answer choices, and reset timer
function loadNextQuestion(){
  // If program reaches end of questions array, the number correct, incorrect, unanswered will be displayed
  if(questionIndex === triviaQuestions.length){
    clearInterval(timerInt);
    $("#displayText").empty(); 
    $("#gifArea").empty(); 
    $("#displayText").append("<p>Here are your results!</p> <p>Correct Answers: " + numCorrect + "</p> <p>Incorrect Answers: " + numIncorrect + "</p> <p>Unanswered: " + numUnanswered + "</p>");
    $("#displayText").append("<button id='startOverBtn'>Start Over?</button>");
    $("#startOverBtn").on("click", reset);
  }

  // Otherwise, next question will be displayed
  else {
    $("#displayText").empty();
    $("#gifArea").empty(); 
    timeLeft = 30;
    timerText.textContent = timeLeft;
    showQuestion();
    showChoices();
    $("p").on("click", answerClick);
  }
}

// Write function to restart game when player clicks 'Start Over' button
function reset(){
  numCorrect = 0;
  numIncorrect = 0;
  numUnanswered = 0;
  questionIndex = 0;
  clearInterval(timerInt);
  loadNextQuestion();
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

});
