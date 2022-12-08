// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var currentDay = dayjs().format("dddd D MMMM");
 document.getElementById("currentDay").textContent = currentDay;
 
 var currentTime = parseInt(dayjs().format("HH"));
 console.log(currentTime)

 var timeBlocks = document.querySelectorAll(".time-block");
 
 
 for (var i = 0; i < timeBlocks.length; i++) {
   var timeblocksTime = (timeBlocks[i].querySelector(".hour").textContent);
 
 
  if (parseInt(timeblocksTime) === parseInt(currentTime)) {
 
   timeBlocks[i].classList.remove("past");
   timeBlocks[i].classList.remove("future");
   timeBlocks[i].classList.add("present");
 
 }  
 
  if (parseInt(timeblocksTime) < parseInt(currentTime)) {
 
   timeBlocks[i].classList.add("past");
   timeBlocks[i].classList.remove("future");
   timeBlocks[i].classList.remove("present");
 }
   if (parseInt(timeblocksTime) > parseInt(currentTime)) {
 
     timeBlocks[i].classList.remove("past");
     timeBlocks[i].classList.add("future");
     timeBlocks[i].classList.remove("present");
   
   }
 }

 var buttonList = document.querySelectorAll(".btn")
 
 for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", function() {
  console.log("hello")
    })
 }


 
 