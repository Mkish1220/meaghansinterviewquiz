//variables to refrence dom elements (document.getelement by id 
var questions = {}
//function showQuestion() {}
//sound effect (yeah right)
[{
          question1: "What is Javascript?",
          choices: ["a book", "a city", "lending company", "programming language"],
          answer: "programming language"
        },
        {
            question2: "Name 3 primitive types?",
            choices: ["string", "number", "boolean", "lion"],
            answer: "string number boolean"
        },
        {
            question3: "what operator is used to assign a value to a declare a variable?",
            choices: ["=", ":", ";", "."],
            answer: "="
        },
        {
            question4: "inside the html file where do you place the javascript code?",
            choices: ["<head>", "<body>", "<script>", "<footer>"],
            answer: "<script>"
        },
    ];
var score = 0;

    for(var i=0; i < questions.length; i++)
    var response = window.questions(questions[i].questions)
    if(response == questions[i].) {
        score++;
        alert("correct!");
    }else{
        alert("wrong!");
    }
alert("you got " + score + "/" + questions.length)

//start the timer 
//    function startButton() {
  //      var setTimer = setInterval(function () 
    ///    startButton.addEventListener('click', this, true);

//show the question //show the question
//click start hide that screen hook
//bring up questions
//click answer
//if correct move on 
// if wrong dedeuct 10000 and move on

//collect user answer compared to correct answer   
//function userAnswer() {
  //  input = document.getElementById("answer1").value//