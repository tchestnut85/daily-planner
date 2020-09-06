// timeColor task color change function variables
var currentHour = moment().hour();
var selectedHour = $(".selected-hour");

// Clock and time display
var currentDate = moment().format("[Today is: ] dddd, MMMM Do YYYY");
$("#currentDay").text(currentDate);
var currentClock = moment().format("[The current time is: ] LT");
$("#currentTime").text(currentClock);

// Hour array
var hourArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

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
    // var target pulls ID of the previous element which is <textarea>
    var target = event.currentTarget.previousElementSibling.id;
    var userInput = $("#" + target).val().trim();
    localStorage.setItem(target, JSON.stringify(userInput));
});

// Load Saved text function - Get text-input from localstorage and display into text areas
function onLoad() {
    for (var i = 0; i < hourArr.length; i++) {
    // for (var hour of hourArr) {
        var hour = hourArr[i];
        var value = JSON.parse(localStorage.getItem("text-area-" + hour));
        $("#text-area-" + hour).val(value);
    }
};

onLoad();
timeColor();