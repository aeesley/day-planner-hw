/* README INSTRUCTIONS
Simple Calendar application
User can save events for each hour of the day
Features dynamically updated HTML and CSS powered by jQuery
Need to use Moment.js library to work with date and time

REQUIREMENTS
- Current date displays at the top of the calendar
- Time blocks appear for standard business hours
- Time blocks are color coded depending on the actual time of day
    (Past, Present, Future)
- Can click on time block and add an event
- When page is refreshed, edited time block should still appear */

/* PSEUDO CODE

DYNAMIC COLOR CODING
var = textarea = ("#textarea")
var = hour = ("#hour")
var = row?

function setColorStatus {

    if (hour matches = current hour)
    then assign class=present to textarea (GOES RED)
    
    if (hour < current hour)
    then assign class=past to textarea (GOES GREY)

    else
    then assign class=future to textarea (GOES GREEN)

}

SAVE & DISPLAY TASK

user input --> localStorage
localStorage --> text-area
+ preventDefault function?

*/

$(document).ready(function() {

    // Getting current data & time to show up in header area
    // defining the variable mapped to the id on HTML
    var currentDay = $("#currentDay");
    // using the moments.js syntax to define variable with the dates
    currentDay = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    // pushing the current date variable to the right location on HTML
    $("#currentDay").text(currentDay);

    var textInput1 = $("#textinput1");
    console.log(textInput1);



});


// var task1 = localStorage.getItem("textinput1")
// textInput1.textContent =