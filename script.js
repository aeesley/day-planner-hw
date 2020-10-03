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

GET CURRENT DATE UP
Create a variable mapping to correct part of header and then use moments.js syntax to map today's current date in

DYNAMIC COLOR CODING
var = textarea = ("#textarea")
var = hour = ("#hour")
var = row?

* Need to map times in HTML to format that will match moments.js so we can use <, >, and = to determine which color to set the rows.

use if and else statements within a function like =

    if (id=hour matches === current hour in Moments.js)
    then assign class=present to id=textarea (GOES RED)
    
    if else (id=hour < current hour in Moments.js)
    then assign class=past to textarea (GOES GREY)

    if else (i=hour > current hour in Moments.js)
    then assign class=future to textarea (GOES GREEN)

Call function to activate

SAVE & DISPLAY TASK

user input --> localStorage (need to save both time and task input together)
localStorage --> text-area
+ preventDefault function?

*/



$(document).ready(function() {

    // GETTING CURRENT DATE IN HEADER AREA
    // defining the variable mapped to the id on HTML
    var currentDay = $("#currentDay");
    // using the moments.js syntax to define variable with the dates
    currentDay = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    // pushing the current date variable to the right location on HTML
    $("#currentDay").text(currentDay);

    // var textInput1 = $("#textinput1");
    // console.log(textInput1);

    // Setting workDay var to use throughout rest of functions
    let myCalendar = {
        "8 AM": "",
        "9 AM": "",
        "10 AM": "",
        "11 AM": "",
        "12 PM": "",
        "1 PM": "",
        "2 PM": "",
        "3 PM": "",
        "4 PM": "",
        "5 PM": "",
    };    

    // changing the string value of the times to numbers to use in function to change row color so we can use less than/greater than/equal to
    function changeHourToNumber(hourString) {
        switch(hourString) {
            case "8 AM": return 8;
            case "9 AM": return 9;
            case "10 AM": return 10;
            case "11 AM": return 11;
            case "12 PM": return 12;
            case "1 PM": return 13;
            case "2 PM": return 14;
            case "3 PM": return 15;
            case "4 PM": return 16;
            case "5 PM": return 17;
        }
    }

    //SETTING COLOR OF ROWS BASED ON TIME OF DAY
    let counter = 1
    for(const property in myCalendar) {
    let textInput = "#textinput" + counter;
    $(textInput).text(myCalendar[property]);
    let calendarTime = "#time" + counter;
    let nowTime = moment().hour();
    let timeString = $(calendarTime).text();
    let timeNumber = changeHourToNumber(timeString);

    if(timeNumber < nowTime) {
        $(textInput).addClass("past");
    } else if (timeNumber > nowTime) {
        $(textInput).addClass("future");
    } else if (timeNumber === nowTime) {
        $(textInput).addClass("present");
    }
    counter ++;

    }

    // ADD IN FUNCTIONALITY FOR SAVING USER INPUT ITEMS & SAVING
    if(!localStorage.getItem('myCalendar')) {
        updateCalendarTasks(myCalendar);
      } else {
        updateCalendarTasks(JSON.parse(localStorage.getItem('myCalendar')));
      }



    // function that uses on click event to store user input
    $("btn1").on("click", function() {
        // defining the two inputs for the text and the time of day
        var taskValue = $("textinput1").val().trim();
        var eventTime = $("#time-1pm").attr('hour');
        //calling the save task function
        saveTask(eventTime, taskValue);
    });

    function saveTask(eventTime, taskValue) {
        if(!localStorage.getItem(''));
    }
}
)

// OLD SYNTAX, WORKING THROUGH ISSUES EXAMPLES OF THROUGHT PROCESS


    // var elem;
    // adding array of potential time values
    // const timeArray = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];
    // console.log(timeArray);
    // turning the array into a variable that prints all of the options
    // var timeArray = time.toString();
    // console.log(timeArray);

    // NEED MORE VARIABLES HERE ==> Maybe about the spaces in HTML to map to?

    // setting a variable to read how moments.js formats the current time in hours
    // var currentTime = moment().format('HH:00');

    // // function to set the color of rows based on time of day
    // function setTimeColor(timeArray, currentTime) {
    //     // running through the complete length of the timeArray
    //     for (i = 0; i < timeArray.length; i++) {
    //         var scheduleTime = moment(timeArray[i], "h:mm A").format("HH:mm");
    //         // changing row to future class (green) if it hasn't hit yet
    //         if (scheduleTime > currentTime) {
    //             elem = document.getElementById('hour' + [i]);
    //             elem.attr("class", "future");
    //         // changing row to past class (grey) if it already happened
    //         } else if (scheduleTime < currentTime) {
    //             elem = document.getElementById('hour' + [i]);
    //             elem.attr("class", "past");
    //         // changing class to present class (red) if it's the current time slot happening
    //         } else if (scheduleTime === currentTime) {
    //             elem = document.getElementById('hour' + [i]);
    //             elem.attr("class", "present");
    //         }
    //     }

    // // }
    // setTimeColor();
    // console.log(currentTime);

// var task1 = localStorage.getItem("textinput1")
// textInput1.textContent 