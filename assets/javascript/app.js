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

// Write function that will show each question based on current questionIndex
function showQuestion(){
    $("#question").text(triviaQuestions[questionIndex].q);
}

// Write function that will show answer choices for the current question
function showChoices(){
    for(var i = 0; i < 4; i++){
        $("#answerChoices").append("<p choice =" + i + ">" + triviaQuestions[questionIndex].choices[i] + "</p>");
    }
}

// Hide question/answers area at start of game
$("#triviaArea").hide();

// Click listener to hide button/start game when start button is clicked
$("#startBtn").on("click", function(){
    $(this).hide();
    $("#triviaArea").show();

    // Show first question and its answers
    showQuestion();
    showChoices();

    // Click listener for answer choices - store user's answer and compare to correct answer
    $("p").on("click", function(event){
        userChoice = event.target.getAttribute("choice");
        console.log(userChoice);
            
        if(userChoice == triviaQuestions[questionIndex].a){
            $("#question").hide();
            $("#answerChoices").hide();
            $("#displayText").text("Correct!")
        }
    
    
    });

   
});

