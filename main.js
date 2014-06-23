
// var victimsTotal = prompt("How many victims are there?");

// create a for loop that creates a new object for total amount of victims?
// this should be fun...
var people_list = []

var victimGenerator = function(total, volOrVic) {
	for (var vic = 1; vic <= total; vic++) {
		people_list.push(window["vic"+String(vic)] = {
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
	if(people_list[i].status === "vic") {
		vicNames += people_list[i].name + ", " ;
	}
}

var volNames = ''
for (var i = totalVics; i < people_list.length - 1; i++) {
	if(people_list[i].status === "vol") {
		volNames += people_list[i].name + ", " ;
	}
}

alert("There are " + String(totalVics) + " victims, and " + String(totalVols) + 
	" volunteers. \nThe victims are " + vicNames + "\nThe volunteers are " + volNames)

var to_help = prompt("Who needs help?")
// check if name matches a vic, then check for vols on same street
for (var i = 0; i < totalVics; i++) {
	if(people_list[i].status === "vics" && to_help === people_list[i].name)
}