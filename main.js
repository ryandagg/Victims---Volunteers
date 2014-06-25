var victimsTotal = prompt("How many victims are there?");

// create a for loop that creates a new object for total amount of victims?
// this should be fun...
var peopleList = []

var victimGenerator = function(total, volOrVic) {
	for (var vic = 1; vic <= total; vic++) {
		peopleList.push(window["vic"+String(vic)] = {
			name : prompt("What is their name?"),
			phone : prompt("What is their phone number?"),
			street : prompt("What is their street?"),
			status : volOrVic
		})
	}
}

var totalVics = +prompt("How many victims are there?")
victimGenerator(totalVics, "vic");

var totalVols = +prompt("How many volunteers are there?")
victimGenerator(totalVols, "vol");

var vicNames = ''
for (var i = 0; i < totalVics; i++) {
	if(peopleList[i].status === "vic") {
		vicNames += peopleList[i].name + ", " ;
	}
}

var volNames = ''
for (var i = totalVics; i < peopleList.length; i++) {
	if(peopleList[i].status === "vol") {
		volNames += peopleList[i].name + ", " ;
	}
}

alert("There are " + String(totalVics) + " victims, and " + String(totalVols) + 
	" volunteers. \nThe victims are " + vicNames + "\nThe volunteers are " + volNames)

// check if name matches a vic, then check for vols on same street
var checkIfVic = function() {
	var toHelp = prompt("Who needs help?")
	for(var i = 0; i < peopleList.length; i++) {
		if (peopleList[i].status === "vic" && peopleList[i].name === toHelp) {
			return [peopleList[i].street, peopleList[i].name];
		}
	}
	alert("That is not a victim!")
	return checkIfVic(); // Need to avoid infinite alert box issue
}

var inNeedMatch = function() {
	var toHelp = checkIfVic();
	var nameH = toHelp[1];
	var streetH = toHelp[0];
	for (i = 0; i < peopleList.length; i++) {
		if (peopleList[i].status === "vol" && peopleList[i].street === streetH) {
			alert(peopleList[i].name + " lives on " + streetH + " and can help " + nameH + "!")
		}
	}
	alert("No one is nearby.")
}

inNeedMatch();