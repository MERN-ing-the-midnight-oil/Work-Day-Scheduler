// JS equivalent: var containerEl = document.getElementById("container");
var containerEl = $("#container");

var todayIs = moment();
$("#todayIs").text(todayIs.format("MMM Do, YYYY"));

var timeNow = moment().format("hh:mm:ss"); //this needs to udate constantly , not just on load
$("#timeNow").text(timeNow);

var epochTimeNow = moment().format("X");
console.log("current epoch time in seconds " + epochTimeNow);

var secondsRemainder = epochTimeNow % 86400; //should be the number of seconds happening after the last midnight
console.log(
	"Remainder of seconds after doing modulus 86400, the number of seconds in one day" +
		secondsRemainder
);

var hoursRemainder = secondsRemainder / 3600;
console.log(
	"convert that to hours: SHOULD give the current military hour  " +
		hoursRemainder
);

//asdf.classList.add("past");
//asdt.classList.remove("present");

//// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
//var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
//$(".anytag").text(unixFormat);

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
// var workHours = [
// 	"9:00 AM",
// 	"10:00 AM",
// 	"11:00 AM",
// 	"12:00 PM",
// 	"1:00 PM",
// 	"2:00 PM",
// 	"3:00 PM",
// 	"4:00 PM",
// 	"5:00 PM",
// ];

// for (var i = 0; i < workHours.length; i++) {
// 	//create a new <div> for each work hour
// 	var workHrEl = $("<li>");

// 	//and put the hour number on each one
// 	workHrEl.text(workHours[i]);

// 	//workHrEl.addClass("myclass")  //in case I want to add a class later

// 	containerEl.append(workHrEl);
// }
