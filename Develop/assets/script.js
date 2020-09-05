// timeColor task color change function variables
var currentDate = moment().format("[Today is: ] dddd, MMMM Do YYYY");
var currentClock = moment().format("[The current time is: ] LT");
var currentHour = moment().hour();
console.log(currentHour);
var taskBlock = $("#textarea");
var selectedHour = $(".selected-hour");

// Save function variables
var taskContent = $("#textarea").data();
var savedTask = localStorage.setItem("task", JSON.stringify(taskContent));

$("#currentDay").text(currentDate);
$("#currentTime").text(currentClock);


// link display row time to a moment 

// Function to check change color of #textarea depending on time
var timeColor = function() {

    for (var i = 0; i < selectedHour.length; i++) {
        var task = $(selectedHour[i]);
        var timeBlock = $("#time-block");
        // task.data("hour") ????

    if (timeBlock < currentHour) {
        task.addClass("past");
    } 
    else if (timeBlock === currentHour) {
        task.addClass("present")
    }
    else {
        task.addClass("future")
    }

    }

};

timeColor();

// fuction to save textarea when save button is clicked
// $("#saveBtn").on("click") function() {

// }