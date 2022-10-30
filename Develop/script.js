//hooks to dom
var timeBlocksEl = document.querySelectorAll("textarea[data-time]");
console.log("this is the timeBlocksEl " + timeBlocksEl);

var todayIs = moment();
$("#todayIs").text(todayIs.format("MMM Do, YYYY"));

//Persisting data from local storage///////////passes the textarea value from memory to the text area value of the specified element
$("#nineTextarea").val(localStorage.getItem("nineTextarea")); //gives the item in local storage to the val of #nineTextarea //
$("#tenTextarea").val(localStorage.getItem("tenTextarea"));
$("#elevenTextarea").val(localStorage.getItem("elevenTextarea"));
$("#twelveTextarea").val(localStorage.getItem("twelveTextarea"));
$("#oneTextarea").val(localStorage.getItem("thirteenTextarea"));
$("#twoTextarea").val(localStorage.getItem("fourteenTextarea"));
$("#threeTextarea").val(localStorage.getItem("fifteenTextarea"));
$("#fourTextarea").val(localStorage.getItem("sixteenTextarea"));
$("#fiveTextarea").val(localStorage.getItem("seventeenTextarea"));

//Adding data to local storage///////
$(".saveBtn").on("click", function () {
	//event listener , listening for clicks, on any save button
	var textvalue = $(this).siblings(".textarea").val(); //textvalue gets the value of the sibling with textarea class
	var key = $(this).siblings(".textarea").attr("id"); // key gets the specific id of the textarea that is a sibling of "this" (this being the button that was clicked on)
	localStorage.setItem(key, textvalue); //local storage gets the var key and the var textvalue as the key value pair
	//put a "key" and a "value " into local storage
	// key =(Btn to textarea to textarea ID)
});

var hourNow = moment().format("HH");
console.log("the hour now is " + hourNow); //checking that hourNow works

//Displaying the current time in the jumbotron
setInterval(function () {
	var timeNow = moment().format("hh:mm:ss");
	$("#timeNow").text(timeNow);
}, 1000);

/////////////DOING THE CONDITIONAL STYLING	///////////////////////////
for (let i = 0; i < timeBlocksEl.length; i++) {
	var tData = timeBlocksEl[i].dataset.time;
	console.log(
		"this is the tData, which should come frome timeBlocksEl: " + tData
	);
	console.log("this is the hourNow: " + hourNow);
	if (tData === hourNow) {
		timeBlocksEl[i].classList.add("present");
	} else if (tData < hourNow) {
		timeBlocksEl[i].classList.add("past");
	} else if (tData > hourNow) {
		timeBlocksEl[i].classList.add("future");
	}
}

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//I think I'm going to need a test- IF a block is in the past, style past, else if style present, else future.  But how to determine if a block is in the future? Not simple. First find if it is in the present, should be easier. Maybe first

// WHEN I click into a timeblock
// THEN I can enter an event

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

//This  function displays the current time, "westCoast" in the Jumbotron
// it converts epoch time to the military hour of the day (west coast time). epoch time is set to GMT, 7 hours ahead.
// I had to figure out when to subract 7 hours, and when to add 17. You can't subtract 7 hours early in the day or you get a negative time value.
// var epochTimeNow = moment().format("X");
// var secondsRemainder = epochTimeNow % 86400; // used modulus, should be the number of seconds happening since after our last midnight
// var hoursRemainder = secondsRemainder / 3600; //shoud be the military hour, GMT
// if (hoursRemainder < 7) {
// 	var westCoast = hoursRemainder + 17; //adds 17 to GMT to get pacific time zone time the day before
// } else {
// 	var westCoast = hoursRemainder - 7; //subtracts 7 from GMT to get pacific time zone time the same day
// }
// $("#pacific").text(westCoast);
