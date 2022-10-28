//pass the textarea value from memory to the element I want
$("#nineTextarea").val(localStorage.getItem("nineTextarea")); // make one of these for each hour to get persisted memory
console.log($("#nineTextarea")); //note that with "val" js can go both ways, either putting IN or taking OUT

$(".saveBtn").on("click", function () {
	//event listener , listening for clicks, on any save button
	var textvalue = $(this).siblings(".textarea").val(); //textvalue gets the value of the sibling with textarea class
	var key = $(this).siblings(".textarea").attr("id"); // key gets the specific id of the textarea that is a sibling of "this" (this being the button that was clicked on)
	localStorage.setItem(key, textvalue); //local storage gets the var key and the var textvalue as the key value pair
	//put a "key" and a "value " into local storage
	// key =(Btn to textarea to textarea ID)
});

/////////////////////
//TIME STUFF
////////////////

var todayIs = moment();
$("#todayIs").text(todayIs.format("MMM Do, YYYY"));

//We are going to need the current time , but this needs to either convert to hours only or the westCoast var needs to convert to something comparable to this var

var timeNow = moment().format("hh:mm:ss"); //this needs to udate constantly somehow , not just on load
$("#timeNow").text(timeNow);

//converts epoch time to the military hour of the day (west coast time)
var epochTimeNow = moment().format("X");

var secondsRemainder = epochTimeNow % 86400; // used modulus, should be the number of seconds happening since after our last midnight

var hoursRemainder = secondsRemainder / 3600; //shoud be the military hour, GMT

var westCoast = hoursRemainder - 7; //subtracts 7 from GMT to get pacific time zone time, could improve this later

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
