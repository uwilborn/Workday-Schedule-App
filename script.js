//the current day is displayed at the top of the calendar

const currentDay = document.getElementById('currentDay')
var today = moment().format("[Today is] dddd, MMMM Do YYYY");
currentDay.innerText = today



var saveButton1 = document.getElementById("9ams");
saveButton1.addEventListener("click", function(event) {
event.preventDefault();

var comment = document.getElementById("msg1");
var userText1 = comment.value;

localStorage.setItem("msg1", JSON.stringify(userText1));
renderMessage();

});

function renderMessage() {
  var displayText = JSON.parse(localStorage.getItem("userText1"));
  
}



let currentHour = moment().format('H');
let rowHour = document.getElementById("9");

function rowColor() {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setAttribute("class", "present");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setAttribute("class", "future");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setAttribute("class", "past");
    } else {
        setAttribute("class", "present");
    }
  }





