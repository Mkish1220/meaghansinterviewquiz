
//grab button
var startBtn = document.querySelector('.start-btn');
var startQuiz= document.querySelector('.start-btn');
var restartBtn = document.querySelector('.restart-btn');
var Finished = document.querySelector('.finished');
var timeleft = 60;
var downloadTimer = setInterval(function(){}, 1000);
//   listener on button and call start quiz
startBtn.addEventListener('click', startQuiz)

//console log will let you know it was called
function startQuiz() {
  console.log('started')
}

// var startBtn = document.querySelector('.start-btn');

// startBtn.addEventListener('click', startQuiz)

var timeleft = 60;

// function startQuiz() {
//   console.log('started')
//    downloadTimer()
// }

//you already had this, note I made some minor changes but you did set the interval correctly :)
function downloadTimer(){ setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.querySelector(".time-sec").innerHTML = "Finished";
  } else {
    console.log(timeleft)
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}

function Finished() { 
    console.log("finished");
}
// this will call the function named someFunc()


// function someFunc(){
//    //you can put whatever JS here and then call other functions
//    anotherFunc()
//    thirdFunc()
// }

// function anotherFunc(){
//    //more JS in here
// }

// function thirdFunc(){
//  // more actions here all called from same event listener

// }

// // function downloadTimer(){ setInterval(function(){
//     if(timeleft <= 0){
//       clearInterval(downloadTimer);
//       document.querySelector(".time-sec").innerHTML = "Finished";
//     } else {
//       console.log(timeleft)
//       document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//     }
//     timeleft -= 1;
//   }, 1000);
//   }
  

