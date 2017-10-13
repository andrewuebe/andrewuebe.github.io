var current_fs, previous_fs;
var left, opacity, cale;

var questionNum;

$(".next").click(function(){
	current_fs = ($(this).parent()).parent();
	next_fs = ($(this).parent()).parent().next();
	
	
	//show the next fieldset
	next_fs.show();
	current_fs.hide();
}
)

$(".previous").click(function(){
	current_fs = ($(this).parent()).parent();
	previous_fs = ($(this).parent()).parent().prev();

	
	//show the next fieldset
	previous_fs.show();
	current_fs.hide();
}
)