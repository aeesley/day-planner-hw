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

// START OF JS

    // Setting myCalendar so that these values can save as a whole string of information to localStorage to be accessed
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
// - This function makes sure that JS doesn't load until page is completely loaded
$(document).ready(function() {
    // ADD IN FUNCTIONALITY FOR SAVING USER INPUT ITEMS & SAVING
    if(!localStorage.getItem('myCalendar')) {
        updateCalendar(myCalendar);
      } else {
        updateCalendar(JSON.parse(localStorage.getItem('myCalendar')));
      }


    // GETTING CURRENT DATE IN HEADER AREA
    // defining the variable mapped to the id on HTML
    var currentDay = $("#currentDay");
    // using the moments.js syntax to define variable with the dates
    currentDay = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    // pushing the current date variable to the right location on HTML
    $("#currentDay").text(currentDay);





    //SETTING COLOR OF ROWS BASED ON TIME OF DAY
    let counter = 1
    for(const property in myCalendar) {
        //creating a variable to read the textinput area + the correlating number (this will differentiate the text area divs from one another)
    let textInput = "#textinput" + counter;
        // 
    $(textInput).text(myCalendar[property]);
        // creating a variable to read the time area + the correlating number so it will read and differentiate between the time divs on different rows
    let calendarTime = "#time" + counter;
        // creating a variable that will read the current time using the moments.js syntax
    let nowTime = moment().hour();
        // using text syntax to return text content from the calendarTime variable and apply to the timeString variable
    let timeString = $(calendarTime).text();
        // creating the timeNumber variable, which gives us the time from the HTML, but changed to an actual number instead of a string (which happens in the changeHourtoNumber function above)
    let timeNumber = changeHourToNumber(timeString);
        // applying the class "past" from our css if the time identified in each row is less than the time identifed through moment.js current time
    if(timeNumber < nowTime) {
        $(textInput).addClass("past");
        // applying the class "future" from our css if the time identified in each row is more than the time identifed through moment.js current time
    } else if (timeNumber > nowTime) {
        $(textInput).addClass("future");
        // applying the class "present" from our css if the time identified in each row is more equal to the time identifed through moment.js current time
    } else if (timeNumber === nowTime) {
        $(textInput).addClass("present");
    }
        //signifying since the counter started at 1 and it will increase for each row so that all of the information above will run through each row we have (ie. apply to all rows) || This is called an increment operator (https://stackoverflow.com/questions/42007576/what-does-mean-in-jquery-javascript)
    counter ++;

    }

    // SAVING AND DISPLAYING THE INPUT

    // function that uses on click event to store user input
    $("button").click(function() {
        // defining the two inputs for the text input and the time of day
        taskValue = $(this).siblings("textarea").val();
        hourString = $(this).siblings("div").text();
        //calling the save task function
        saveTask(hourString, taskValue);
    });

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

    // function loadData() {
    //     result = localStorage.getItem('myCalendar')
    //     // Using a ternary operator (https://www.geeksforgeeks.org/ternary-operator-question-mark-and-colon-in-javascript/)
    //     return (result ? result : myCalendar);
    // }

    function startStorage() {
        localStorage.setItem('myCalendar', JSON.stringify(myCalendar));
    };

    function saveLocalStorage(dayInput) {
        localStorage.setItem('myCalendar', JSON.stringify(dayInput));
    };

    function saveTask(hourString, val) {
        if(!localStorage.getItem('myCalendar')) {
            startStorage();
        }

        let calendarHours = JSON.parse(localStorage.getItem('myCalendar'));
        calendarHours[hourString] = val

        saveLocalStorage(calendarHours);
    }

    function updateCalendar(dayInput) {
        $("row").each(function(index) {
            let res = $(this).children("div");
            $(this).children("textinput").text(dayInput[res.text()]);
        })
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

    // function saveTask(eventTime, taskValue) {
    //     if(!localStorage.getItem(''));
    // }

        // var textInput1 = $("#textinput1");
    // console.log(textInput1);