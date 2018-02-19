var menu = $("#myNav");
var crystal = $(".container");

function openMenu() {
	
	menu.show();
	menu.fadeTo("slow", 1);
	crystal.fadeTo("slow", 0);
	crystal.hide();
	
}

function closeNav() {
	
	menu.fadeTo("slow", 0);
	menu.hide()
	crystal.fadeTo("slow", 1);
	crystal.show()
	
} 

function ian() {
	
	console.log("got here");
	crystal.html(" ");
	crystal.html("<div class='ian'></div>");
	
}
