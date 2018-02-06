var menu = $("#myNav");
var crystal = $(".container");

function openMenu() {
	
	menu.fadeTo("slow", 1);
	crystal.fadeTo("slow", 0);
	
}

function closeNav() {
	
	menu.fadeTo("slow", 0);
	crystal.fadeTo("slow", 1);
	
} 

function ian() {
	
	crystal.innerHTML = "";
	crystal.innerHTML += "<div class='ian'></div>";
	
}