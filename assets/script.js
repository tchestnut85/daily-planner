// timeColor task color change function variables
var currentDate = moment().format("[Today is: ] dddd, MMMM Do YYYY");
var currentClock = moment().format("[The current time is: ] LT");
var currentHour = moment().hour();
var taskBlock = $(".textarea");
var selectedHour = $(".selected-hour");

// Save function variables
var taskContent = $("#textarea").data();
var inputValue = $("#textarea").value;
var hourArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

$("#currentDay").text(currentDate);
$("#currentTime").text(currentClock);

// Function to check change color of #textarea depending on time
var timeColor = function() {
    for (var i = 0; i < selectedHour.length; i++) {

        var task = $(selectedHour[i]);
        var taskHour = task.data().time;
        
        if (taskHour < currentHour) {
            task.addClass("past");
        } 
        else if (taskHour > currentHour) {
            task.addClass("future");
        }
        else {
            task.addClass("present")
        }
    }
};

// Fuction to save text typed into textarea when the save button icon is clicked
$(".saveBtn").on("click", function(event) {
    var target = event.currentTarget.previousElementSibling.id;
    var userInput = $("#" + target).val().trim();
    localStorage.setItem(target, JSON.stringify(userInput));
});

// Get text-input from localstorage and display into text areas
function onLoad() {
    for (var hour of hourArr) {
        var value = JSON.parse(localStorage.getItem("text-area-" + hour));
        $("#text-area-" + hour).val(value);
    }
};

onLoad();
timeColor();