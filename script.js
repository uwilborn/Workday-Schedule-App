//the current day is displayed at the top of the calendar

const currentDay = document.getElementById('currentDay')
var today = moment().format("[Today is] dddd, MMMM Do YYYY");
currentDay.innerText = today


//Buttons for saving textaea information
var saveButton1 = document.getElementById("9ams");
saveButton1.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");

//Entering and Storing text area information
  var comment = document.getElementById("msg1");
  var userText1 = comment.value;

  localStorage.setItem("msg1", JSON.stringify(userText1));
 
});

var saveButton2 = document.getElementById("10ams");
saveButton2.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg2");
  var userText1 = comment.value;

  localStorage.setItem("msg2", JSON.stringify(userText1));
 
});

var saveButton3 = document.getElementById("11ams");
saveButton3.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg3");
  var userText1 = comment.value;

  localStorage.setItem("msg3", JSON.stringify(userText1));
 
});

var saveButton4 = document.getElementById("12ams");
saveButton4.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg4");
  var userText1 = comment.value;

  localStorage.setItem("msg4", JSON.stringify(userText1));
 
});

var saveButton5 = document.getElementById("13ams");
saveButton5.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg5");
  var userText1 = comment.value;

  localStorage.setItem("msg5", JSON.stringify(userText1));
 
});

var saveButton6 = document.getElementById("14ams");
saveButton6.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg6");
  var userText1 = comment.value;

  localStorage.setItem("msg6", JSON.stringify(userText1));
 
});

var saveButton7 = document.getElementById("15ams");
saveButton7.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg7");
  var userText1 = comment.value;

  localStorage.setItem("msg7", JSON.stringify(userText1));
 
});

var saveButton8 = document.getElementById("16ams");
saveButton8.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg8");
  var userText1 = comment.value;

  localStorage.setItem("msg8", JSON.stringify(userText1));
 
});

var saveButton9 = document.getElementById("17ams");
saveButton9.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg9");
  var userText1 = comment.value;

  localStorage.setItem("msg9", JSON.stringify(userText1));
 
});

var saveButton10 = document.getElementById("18ams");
saveButton10.addEventListener("click", function (event) {
  event.preventDefault();
console.log("click");
var comment = document.getElementById("msg10");
  var userText1 = comment.value;

  localStorage.setItem("msg10", JSON.stringify(userText1));
 
});



function renderMessage1() {
  var displayText = JSON.parse(localStorage.getItem("msg1"));
var textArea1 = document.getElementById('msg1')
textArea1.value = displayText
}
function renderMessage2() {
  var displayText = JSON.parse(localStorage.getItem("msg2"));
var textArea2 = document.getElementById("msg2")
textArea2.value = displayText
}
function renderMessage3() {
  var displayText = JSON.parse(localStorage.getItem("msg3"));
var textArea3 = document.getElementById("msg3")
textArea3.value = displayText
}
function renderMessage4() {
  var displayText = JSON.parse(localStorage.getItem("msg4"));
var textArea4 = document.getElementById("msg4")
textArea4.value = displayText
}
function renderMessage5() {
  var displayText = JSON.parse(localStorage.getItem("msg5"));
var textArea5 = document.getElementById("msg5")
textArea5.value = displayText
}
function renderMessage6() {
  var displayText = JSON.parse(localStorage.getItem("msg6"));
var textArea6 = document.getElementById("msg6")
textArea6.value = displayText
}
function renderMessage7() {
  var displayText = JSON.parse(localStorage.getItem("msg7"));
var textArea7 = document.getElementById("msg7")
textArea7.value = displayText
}
function renderMessage8() {
  var displayText = JSON.parse(localStorage.getItem("msg8"));
var textArea8 = document.getElementById("msg8")
textArea8.value = displayText
}
function renderMessage9() {
  var displayText = JSON.parse(localStorage.getItem("msg9"));
var textArea9 = document.getElementById("msg9")
textArea9.value = displayText
}
function renderMessage10() {
  var displayText = JSON.parse(localStorage.getItem("msg10"));
var textArea10 = document.getElementById("msg10")
textArea10.value = displayText
}

renderMessage1();
renderMessage2();
renderMessage3();
renderMessage4();
renderMessage5();
renderMessage6();
renderMessage7();
renderMessage8();
renderMessage9();
renderMessage10();

rowColor();

function rowColor() {
  let currentHour = moment().format('H');

  for (let i = 9; i <= 18; i++) {
    console.log(i);
    let block9 = document.getElementById(`${i}`);
    let blockId = parseInt(block9.getAttribute('id'));
    console.log(currentHour);
    console.log(typeof blockId);
    let textArea = block9.children[1];
    console.log(textArea);
    // Compares row id to current hour and sets color accordingly
    if (currentHour === blockId) {
      textArea.classList.add("present");
    } else if (currentHour < blockId) {
      textArea.classList.add("future");
    } else if (currentHour > blockId) {
      textArea.classList.add("past");
    } else {
      textArea.classList.add("present");
    }
  }

}
