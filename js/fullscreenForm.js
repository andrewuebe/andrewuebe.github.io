var current_fs, previous_fs;
var left, opacity, cale;

var questionNum;

$(".next").click(function(){
	current_fs = ($(this).parent()).parent();
	next_fs = ($(this).parent()).parent().next();
	
	//activate next step on progress
	$("#proressBar li").eq($("#msformfieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show();
	current_fs.hide();
}
)