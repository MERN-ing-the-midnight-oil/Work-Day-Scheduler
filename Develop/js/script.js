// JS equivalent: var containerEl = document.getElementById("container");
var containerEl = $("#container");

//JS equivalent: var dayPlanEl = document.createElement("h1")
var dayPlanEl = $("<h1>");

// dayPlanEl.textContent =
dayPlanEl.text("'A day planned is worth two in the bush'");
// dayPlanEL.className = 'fancy';
dayPlanEl.attr("class", "fancy");

//JS equivalent would be  containerEl.appendChild(dayPlanEl);
containerEl.append(dayPlanEl);
containerEl.append("<h2> Plan your day! </h2>");

var workHours = [
	"9:00 AM",
	"10:00 AM",
	"11:00 AM",
	"12:00 PM",
	"1:00 PM",
	"2:00 PM",
	"3:00 PM",
	"4:00 PM",
	"5:00 PM",
];

for (var i = 0; i < workHours.length; i++) {
	//create a new <div> for each work hour
	var workHrEl = $("<li>");

	//and put the hour number on each one
	workHrEl.text(workHours[i]);

	//workHrEl.addClass("myclass")  //in case I want to add a class later

	containerEl.append(workHrEl);
}

console.log($("div"));
