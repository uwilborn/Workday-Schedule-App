//the current day is displayed at the top of the calendar

const currentDay = document.getElementById('currentDay')
var today = moment().format("[Today is] dddd, MMMM Do YYYY");
currentDay.innerText = today

//Time blocks
for(var i = 0; i < 9; i++) {

let rowContainer = document.createElement('div')
let timeBlock = document.createElement('div')
let textBlock = document.createElement('textarea')
let textButton = document.createElement('button')

rowContainer.className = "time-block row"
timeBlock.className = "hour col-md-1"
textBlock.className = "description col-md-10"
textButton.className = "saveBtn col-md-1"
console.log(rowContainer)
timeBlock.innerText = 9 + i + ":00";
// textBlock.addEventListener("click",inputEvent);

rowContainer.appendChild(timeBlock);
rowContainer.appendChild(textBlock);
rowContainer.appendChild(textButton);

document.getElementById("TopContainer").appendChild(rowContainer);

}

// function inputEvent(event){
//     message.textContent = ""
//     // console.log("click");
//     // console.log(event.target.innerText);
//     if(event.target.innerText === challengeQuestions[questionIndex].answers.correct){
//       questionIndex++
//       getQuestion() 
//     } else{ 
//         //console.log("Wrong Answer")
//       message.textContent = "Wrong Answer, click again. Time reduced by 3 seconds."
//       quiz.append(message)
//     secondsLeft = secondsLeft - 3;
//     }
