$(document).ready(function () {

// Declare global variables
var triviaQuestions = [
    { q: "What was the name of Mulan's dragon companion?",
      choices: ["Pascal", "Toothless", "Mushu", "Puff"],
      a: 2 },
    
    { q: "What was Ariel's term for a fork in The Little Mermaid?",
      choices: ["Whatchamacallit", "Dinglehopper", "Whosit", "Whatsit"],
      a: 1 },

    { q: "Frollo is the villian in which Disney movie?",
      choices: ["Hercules", "The Lion King", "The Sword in the Stone", "The Hunchback of Notre Dame"],
      a: 3 },

    { q: "What was the name of Jasmine's pet tiger in Aladdin?",
      choices: ["Tony", "Rajah", "Tina", "Abu"],
      a: 1 },

    { q: "Finish this lyric from The Lion King: 'Oh, I just can't wait to be ...'",
      choices: ["free", "famous", "king", "queen"],
      a: 2 },

    { q: "What is the name of Woody and Buzz's owner in Toy Story?",
      choices: ["Andy", "Bob", "Molly", "Fred"],
      a: 0 },

    { q: "In Finding Nemo, which city do Marlin and Dory travel to in order to find Nemo?",
      choices: ["San Diego", "Miami", "Sydney", "Melbourne"],
      a: 2 },
    
    { q: "What is the name of the megacorporation that manufactured the robot Wall-E?",
      choices: ["Walmart", "Buy-N-Large", "ACME Corp", "Amazon"],
      a: 1 },

    { q: "What is the name of Riley's imaginary friend in the movie Inside Out?",
      choices: ["Bing Bong", "Waldo", "Forky", "Giggles"],
      a: 0},

    { q: "What is the name of the city where Mike and Sully live in Monsters Inc?",
      choices: ["Metroville", "Scareville", "Monstropolis", "San Fransokyo"],
      a: 2 }
];

var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;
var userChoice;
var questionIndex = 0;
var timeLeft = 30;
var timerText = document.querySelector("#timer");
var timerInt;


// Write function that will show each question based on current questionIndex
function showQuestion(){
    $("#question").empty();
    $("#question").text(triviaQuestions[questionIndex].q);
}

// Write function that will show answer choices for the current question
function showChoices(){
    for(var i = 0; i < 4; i++){
        $("#answerChoices").append("<p choice =" + i + ">" + triviaQuestions[questionIndex].choices[i] + "</p>");
    }
}

// Write function for 30 second countdown for each question
function timerCountdown(){
    if(timeLeft == 0){
        clearInterval(timerInt);
        $("#question").hide();
        $("#answerChoices").hide();
        $("#displayText").html("<h3>Time's Up!</h3> <p>The Correct Answer was: " + triviaQuestions[questionIndex].choices[triviaQuestions[questionIndex].a] + "</p>");
        numUnanswered++;
        questionIndex++;
    }

    else {
        timeLeft--;
        timerText.textContent = timeLeft;
    }
}

// Hide question/answers area at start of game
$("#triviaArea").hide();

// Click listener to hide button/start game when start button is clicked
$("#startBtn").on("click", function(){
    
    timerInt = setInterval(timerCountdown, 1000);
    
    $(this).hide();
    $("#triviaArea").show();

    // Show first question and its answers
    showQuestion();
    showChoices();

    // Click listener for answer choices - store user's answer and compare to correct answer
    $("p").on("click", function(event){
        userChoice = event.target.getAttribute("choice");
        
        if(userChoice == triviaQuestions[questionIndex].a){
            $("#question").hide();
            $("#answerChoices").hide();
            $("#displayText").html("<h3>Correct!</h3>")
            clearInterval(timerInt);
            numCorrect++;
            questionIndex++;
        }

        else {
            $("#question").hide();
            $("#answerChoices").hide();
            clearInterval(timerInt);
            $("#displayText").html("<h3>Wrong!</h3> <p>The Correct Answer was: " + triviaQuestions[questionIndex].choices[triviaQuestions[questionIndex].a] + "</p>");
            numIncorrect++;
            questionIndex++;
        }
        

    });

   
});
// Write function for 5 second countdown for results page after each question
    // once this countdown finishes, next question will be displayed
// Write logic to display # correct, wrong, unanswered at end of game
// Write function to restart game when player clicks 'Start Over' button

});
