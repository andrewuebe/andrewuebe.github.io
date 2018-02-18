<<<<<<< HEAD
taskInput.addEventListener("keypress", keyPressed);  // bind to taskInput, not addButton

function keyPressed(k) {
  if (k.code == 'Enter')      // only if the key is "Enter"...
    ian()               // ...add a new task (using same handler as the button)
  return false;               // no propagation or default
}



=======
>>>>>>> origin/master

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
