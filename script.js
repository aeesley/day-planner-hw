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

    if (id=hour matches === current hour in Moments.js)
    then assign class=present to id=textarea (GOES RED)
    
    if else (id=hour < current hour in Moments.js)
    then assign class=past to textarea (GOES GREY)

    if else (i=hour > current hour in Moments.js)
    then assign class=future to textarea (GOES GREEN)

}

Call setColorStatus

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

    // var textInput1 = $("#textinput1");
    // console.log(textInput1);

    //SETTING COLOR OF ROWS BASED ON TIME OF DAY
    var elem;
    // adding array of potential time values
    const timeArray = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];
    console.log(timeArray);
    // turning the array into a variable that prints all of the options
    // var timeArray = time.toString();
    // console.log(timeArray);

    // NEED MORE VARIABLES HERE ==> Maybe about the spaces in HTML to map to?

    // setting a variable to read how moments.js formats the current time in hours
    var currentTime = moment().format('HH:00');

    // function to set the color of rows based on time of day
    function setTimeColor(timeArray, currentTime) {
        // running through the complete length of the timeArray
        for (i = 0; i < timeArray.length; i++) {
            var scheduleTime = moment(timeArray[i], "h:mm A").format("HH:mm");
            // changing row to future class (green) if it hasn't hit yet
            if (scheduleTime > currentTime) {
                elem = document.getElementById('hour' + [i]);
                elem.attr("class", "future");
            // changing row to past class (grey) if it already happened
            } else if (scheduleTime < currentTime) {
                elem = document.getElementById('hour' + [i]);
                elem.attr("class", "past");
            // changing class to present class (red) if it's the current time slot happening
            } else if (scheduleTime === currentTime) {
                elem = document.getElementById('hour' + [i]);
                elem.attr("class", "present");
            }
        }

    }
    setTimeColor();
    console.log(currentTime);

    // ADD IN FUNCTIONALITY FOR SAVING USER INPUT ITEMS & SAVING

    // function that uses on click event to store user input
    $("btn1").on("click", function() {
        var event = $("textinput1").val().trim();
        var eventTime = $("#time-1pm").attr('hour');

        console.log(event);
        console.log(eventTime);
        localStorage.setItem(eventTime, event);
    });
}
)


// var task1 = localStorage.getItem("textinput1")
// textInput1.textContent 