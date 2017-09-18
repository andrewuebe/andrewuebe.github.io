// FOR 'DAY' KEY: 0 = Sunday, 1 = Monday, 2 = Tuesday ... 7 = Saturday

var masterShows = [{
  "id": 1,
  "city":"CHI",
  "day": 0,
  "name": "Funday Sunday",
  "time": "4:00 PM - 8:00 PM",
  "location": "Cuzin's",
  "address": "17704 Oak Park Ave, Tinley Park, IL 60477",
  "genres": "blues",
  "freq": "weekly",
  "website": "http://",
  "host": "Billy King",
  "signup-time": "4:00 PM",
  "equipment": ["mic", "drum kit"],
  "under21": "yes",
  "notes": ""
},{"id": 2,
  "city":"CHI",
  "day": 0,
  "name": "Soap Box Open Mic",
  "time": "10:00 PM",
  "location": "Grand River Bar & Grill",
  "address": "3032 N Lincoln Ave, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.facebook.com/grandriverchi/",
  "host": "",
  "signup-time": "9:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 3,
  "city":"CHI",
  "day": 0,
  "name": "Chicago's Rising Stars Mic",
  "time": "8:00 PM",
  "location": "Davenport's Piano Bar and Cabaret",
  "address": "1383 N Milwaukee Ave, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.facebook.com/events/1179235068851527/?acontext=%7B%22ref%22%3A%223%22%2C%22ref_newsfeed_story_type%22%3A%22regular%22%2C%22action_history%22%3A%22null%22%7D",
  "host": "",
  "signup-time": "9:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 4,
  "city":"CHI",
  "day": 0,
  "name": "Alone Star Open Mic",
  "time": "10:30 PM",
  "location": "North Bar",
  "address": "1637 W North Ave, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.facebook.com/Alonestaropenmic",
  "host": "",
  "signup-time": "10:00 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 5,
  "city":"CHI",
  "day": 0,
  "name": "Fun Simulation 2000 Open Mic!",
  "time": "9:00 PM",
  "location": "Reed's Local Tap",
  "address": "3017 W. Belmont Ave, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.facebook.com/FunSimulation2000",
  "host": "",
  "signup-time": "8:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 6,
  "city":"CHI",
  "day": 0,
  "name": "3 Dead Moose Open Mic",
  "time": "8:00 PM",
  "location": "Wills Northwoods Inn",
  "address": "3030 N. Racine Street, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://willsnorthwoodsinn.shutterfly.com/",
  "host": "",
  "signup-time": "7:00 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 7,
  "city":"CHI",
  "day": 0,
  "name": "So What Sundays Comedy Night",
  "time": "9:00 PM",
  "location": "Tillys Po Boys",
  "address": "1455 Ring Road, Calumet City, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.facebook.com/Tillys-Po-Boys-821053361262561/",
  "host": "",
  "signup-time": "8:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 8,
  "city":"CHI",
  "day": 0,
  "name": "Out Loud Open Mic",
  "time": "7:00 PM",
  "location": "Laught Out Loud Theater Chicago",
  "address": "3851 N Lincoln Ave, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.laughoutloudtheater.com/chicago/shows/3621/tickets",
  "host": "",
  "signup-time": "6:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 9,
  "city":"CHI",
  "day": 0,
  "name": "Living Room Sessions",
  "time": "6:00 PM",
  "location": "Alive One Bar",
  "address": "2683 N Halsted St, Chicago, IL",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.laughoutloudtheater.com/chicago/shows/3621/tickets",
  "host": "",
  "signup-time": "5:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": ""
},{"id": 10,
  "city":"NYC",
  "day": 1,
  "name": "The Peoples Mic",
  "time": "3:00 PM",
  "location": "Otto's Shrunken Head",
  "address": "538 E 14th St, New York, NY",
  "genres": "stand-up comedy",
  "freq": "weekly",
  "website": "https://www.laughoutloudtheater.com/chicago/shows/3621/tickets",
  "host": "",
  "signup-time": "2:30 PM",
  "equipment": ["mic"],
  "under21": "notsure",
  "notes": "pre-sign up on freemics.con or jimmypeoples.com. walkins welcome."
}
]


var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function change_myselect(sel) {
		
	var html = "";
	
	var userWantsThisCity = sel;
	
	var showToUser = masterShows.filter(function(show){
	  return show.city == userWantsThisCity
	});
	
	var fieldNameElement = document.getElementById("currentCity");
	
	if (userWantsThisCity == "choose a city:") {
			document.getElementById("topGradient").style.background = "linear-gradient(to bottom right, #5FC2FF, #4A61D1)";
			fieldNameElement.textContent = capitalizeFirstLetter(userWantsThisCity);
	}
	else{
		document.getElementById("topGradient").style.background = "url('/images/" + sel + ".png')";
		document.getElementById("topGradient").style.backgroundSize = "cover";
		
		if (userWantsThisCity == "CHI") {
			fieldNameElement.textContent = "Chicago";
		}
		else{
			fieldNameElement.textContent = "New York City";
		}
	}
	
	for (var i = 0; i < showToUser.length; i++){
		
		html += "<tr>";
		html += "<td>" + weekday[showToUser[i].day] + "</td>";
		html += "<td><a href='#' onclick='displayShowDetails(this.name)' name='" + showToUser[i].id + "'>" + showToUser[i].name + "</a></td>";
		html += "<td>" + showToUser[i].time + "</td>";
		html += "<td><a href='https://maps.google.com/?q=" + showToUser[i].address + "'>" + showToUser[i].address + "</a></td>";
		html += "</tr>"
		
	}
	
	document.getElementById("myTable").innerHTML = "<table cellspacing-left='0'> <tr><th>Day</th><th>Name</th><th>Time</th><th>Address</th></tr>" + html;

}


document.getElementById("myForm").addEventListener("change", function(event){
	event.preventDefault()
	myFunction(event)
})

document.getElementById("myForm").addEventListener("keyup", function(event){
	event.preventDefault()
	myFunction(event)
})

function myFunction(e) {
	console.log(e)
	var checkedDays = document.getElementById("myForm").elements
	var validDays = []
	for (var i = 0; i < checkedDays.length; i++){
		if (checkedDays[i].checked){
			validDays.push(checkedDays[i].value)
		}
	}
	
	var input, filter, table, tr, td, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[1];
	td2 = tr[i].getElementsByTagName("td")[0];
	if (td) {
	  if (td.innerHTML.toUpperCase().indexOf(filter) > -1 && validDays.includes(td2.innerHTML)) {
	    tr[i].style.display = "";
	  } else {
	    tr[i].style.display = "none";
	  }
	}       
	}

		
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayShowDetails(idNum){
	event.preventDefault(idNum)
	window.location = '#';
	
	var showThisShow = masterShows.filter(function(show){
	  return show.id == idNum
	});
	
	
	var searchArea = document.getElementById("searchCentral");
	var showDetailArea = document.getElementById("showDetails");
	
	searchArea.style.display = "none";
	searchArea.style.opacity = "0";
	
	
	document.getElementById("showName").innerHTML = showThisShow[0].name;
	
	document.getElementById("showDay").innerHTML = "<div class='dayValue>Day</div>" + weekday[showThisShow[0].day] + "</div>";
	document.getElementById("showTime").innerHTML = "<div class='dayValue'>Time</div>" + showThisShow[0].time + "</div>";
	document.getElementById("showFreq").innerHTML = "<div class='dayValue'>Frequency</div>" + capitalizeFirstLetter(showThisShow[0].freq) + "</div>";
	document.getElementById("showGenre").innerHTML = "<div class='dayValue'>Genre</div>" + capitalizeFirstLetter(showThisShow[0].genres) + "</div>";
	document.getElementById("showLocation").innerHTML = "<div class='dayValue'>At</div>" + showThisShow[0].location + "</div>";
	document.getElementById("showAddress").innerHTML = "<div class='dayValue'>Address</div>" + showThisShow[0].address + "</div>";
	
	
	showDetailArea.style.display = "block";
	showDetailArea.style.opacity = "1";
	showDetailArea.style.height = "100%";
	
	
}

document.getElementById("theform").addEventListener("submit", function(event){
	event.preventDefault()
	addNewShow(event)
})


function addNewShow(){
	
	var theForm = document.getElementById("theform");
	var theMessage = document.getElementById("formComplete");
	
	
	theForm.style.display = "none";
	theMessage.style.display = "table-cell";
}


