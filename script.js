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

timeBlock.innerText = 9 + i+":00";

rowContainer.appendChild(timeBlock);
rowContainer.appendChild(textBlock);
rowContainer.appendChild(textButton);

document.getElementById("TopContainer").appendChild(rowContainer);

}
