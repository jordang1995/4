$('document').ready(function(){
	
	var apiKey = "39p95vprh2mhs7qk";
	
	var trove_s = 0;
	var trove_n = 5;
	var searchTerms = "";
	var searchZone = "";
	$("form#trove_search").submit();

	$("form#trove_search").submit(function(){
		
		trove_s = 0;
		trove_n = 5;
		
		searchTerms = $('#search_terms').val();
		
		searchZone = $('#search_zone').val();
		
		var troveUrl = "http://api.trove.nla.gov.au/result?key=" + apiKey +
			"&encoding=json&zone=picture" + "&sortBy=dateasc" +
			"s=" + trove_s + "&n=" + trove_n + 
			"&q=" + searchTerms + "&include=articletext,pdf"+
			"&callback=?";
			
		trove_s += trove_n;
		

		console.log(troveUrl);
		
		$('.viewed_image').remove();
		
		$.getJSON(troveUrl, function(data) {
		
			$.each(data.response.zone[0].records.work, function(index, value){
				$("#image_prev").after("<img " 
				+ "src='" + value.identifier[1].value 
				+ "'class='viewed_image'></img>")
			});
		});
		
	});
	
	$("#image_next").click(function(){
	
		trove_s += trove_n;
		
		var troveUrl = "http://api.trove.nla.gov.au/result?key=" + apiKey +
			"&encoding=json&zone=picture" + "&sortBy=dateasc" +
			"&s=" + trove_s + "&n=" + trove_n + 
			"&q=" + searchTerms + "&include=articletext,pdf"+
			"&callback=?";
		
		console.log(troveUrl);
		
		$('.viewed_image').remove();
					
		$.getJSON(troveUrl, function(data) {
			$.each(data.response.zone[0].records.work, function(index, value){
				$("#image_prev").after("<img " 
				+ "src='" + value.identifier[1].value 
				+ "'class='viewed_image'></img>")
			});
		});
			
	});
	
	$("#image_prev").click(function(){
	
		trove_s -= trove_n;
		
		if( trove_s < 0 ) {
			trove_s = 0;
			return;
		}
		var troveUrl = "http://api.trove.nla.gov.au/result?key=" + apiKey +
			"&encoding=json&zone=picture" + "&sortBy=dateasc" +
			"&s=" + trove_s + "&n=" + trove_n + 
			"&q=" + searchTerms + "&include=articletext,pdf"+
			"&callback=?";
		
		console.log(troveUrl);
		
		$('.viewed_image').remove();
					
		$.getJSON(troveUrl, function(data) {
			$.each(data.response.zone[0].records.work, function(index, value){
				$("#image_prev").after("<img " 
				+ "src='" + value.identifier[1].value 
				+ "'class='viewed_image'></img>")
			});
		});
			
	});
	
	$(".viewed_image").click(function(){
		
	});

	
});