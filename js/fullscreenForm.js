var current_fs, previous_fs, current_button;
var left, opacity, cale;

var questionNum;

$(".next").click(function(){
	current_fs = ($(this).parent()).parent();
	next_fs = ($(this).parent()).parent().next();
	
	current_button = $(this);
	
	if(current_button.hasClass("lastButton")){
		showOverview(current_fs);
	}
	else{
		//show the next fieldset
		
		current_fs.fadeTo(400, 0);
		current_fs.hide();
		next_fs.show();
		next_fs.css("opacity", "0");
		next_fs.fadeTo(400, 1);
	}

}
)

$(".previous").click(function(){
	current_fs = ($(this).parent()).parent();
	previous_fs = ($(this).parent()).parent().prev();

	
	//show the next fieldset
	current_fs.fadeTo(400, 0);
	current_fs.hide();
	previous_fs.show();
	previous_fs.css("opacity", "0");
	previous_fs.fadeTo(400, 1);
}
)

function showOverview(current) {
	current_fs.fadeTo(400, 0);
	current_fs.hide();
	$(".addShowContainer").addClass("formOverview");
	
	$("body").css("background-color", "#2c2c2c");
	
	var $fieldset = $(".addShowContainer").find('fieldset');
	console.log("yay");
	
	var buttons = $fieldset.find('#progressButtons');
	
	buttons.hide();
	
	$fieldset.show();
	$fieldset.fadeTo(400, 1);

}