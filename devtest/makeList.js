$(document).ready(function(){
	
	$.getJSON('https://development-test-570d5.firebaseio.com/donors.json?auth=uyc5ZEFNaDTZojb8kQPmgafNipXvO76XPGZBePsf', function(donorData) {
		
		console.log(donorData);
		for(var i = 0; i < donorData.length; i++){
			$("#donorTable").append(
				"<tr>" +
				"<td>" + donorData[i].name + "</td>" +
				"<td>" + donorData[i].school + "</td>" +
				"<td>" + donorData[i].year + "</td>" +
				"<td>" + donorData[i].amount + "</td>" +
				"</tr>"
			)
			
		}
		
	
		
	});

	$("th").click(function(){
		
		$(this).prev().find("#sortArrow").removeClass("up").removeClass("down")
		$(this).prev().prev().find("#sortArrow").removeClass("up").removeClass("down")
		$(this).prev().prev().prev().find("#sortArrow").removeClass("up").removeClass("down")
		
		$(this).next().find("#sortArrow").removeClass("up").removeClass("down")
		$(this).next().next().find("#sortArrow").removeClass("up").removeClass("down")
		$(this).next().next().next().find("#sortArrow").removeClass("up").removeClass("down")
		
		$("th").removeClass("active")
		$(this).addClass("active");
		sortTable($("#donorTable"), $(this));
	});


})


function sortTable(table, th){
	var rows = $(table).find("tr:gt(0)").toArray().sort(compare($(th).index()));
	
	if ($(th).hasClass("ascending")) {
		console.log("ascending")
		$(th).find("#sortArrow").removeClass("down").addClass("up");
		$(th).removeClass("ascending").addClass("descending");
		rows = rows.reverse();
	}
	else {
		console.log("not ascending")
		$(th).find("#sortArrow").removeClass("up").addClass("down");
		$(th).removeClass("descending").addClass("ascending");
	}
	
		
	for (var i = 0; i < rows.length; i++){
		$(table).append(rows[i]);
	}
	
}

function compare(ind){
	return function(a, b) {
		var valA = $(a).children("td").eq(ind).html();
		var valB = $(b).children("td").eq(ind).html(); 
		
		
		if (valA.indexOf('$') > -1)
		{
			valA = valA.substring(1, valA.length).replace(/\,/g,'');
			valB = valB.substring(1, valB.length).replace(/\,/g,'');
			valA = parseInt(valA);
			valB = parseInt(valB);
			return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
		}
		else {
			return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
		}

	}
}