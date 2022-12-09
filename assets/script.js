

var currentDay = dayjs().format("dddd,  MMMM D, YYYY");
var currentTime = parseInt(dayjs().format("HH"));
var timeBlocks = document.querySelectorAll(".time-block");
var buttonList = document.querySelectorAll(".btn");
var description = document.querySelectorAll(".description");

document.getElementById("currentDay").textContent = currentDay;
 
for (var i = 0; i < timeBlocks.length; i++) {
   var timeblocksTime = (timeBlocks[i].querySelector(".hour").textContent);
 
 
  if (parseInt(timeblocksTime) === currentTime) {
 
   timeBlocks[i].classList.remove("past");
   timeBlocks[i].classList.remove("future");
   timeBlocks[i].classList.add("present");
 
 }  else if (parseInt(timeblocksTime) < parseInt(currentTime)) {
 
   timeBlocks[i].classList.add("past");
   timeBlocks[i].classList.remove("future");
   timeBlocks[i].classList.remove("present");
 
  } else if (parseInt(timeblocksTime) > parseInt(currentTime)) {
 
     timeBlocks[i].classList.remove("past");
     timeBlocks[i].classList.add("future");
     timeBlocks[i].classList.remove("present");
   
   }
 }

 for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function() {
    var toDo = description.textContent;
    localStorage.setItem("toDe", toDo)
    })
 }


 