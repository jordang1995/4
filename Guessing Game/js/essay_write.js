$('document').ready(function(){

	var troveKey = "39p95vprh2mhs7qk";
	var flickrKey = "a4d0bf2f4bde0595521b7bd8317ec428"; // TODO: Get another key
	var urlPatterns = ["flickr.com", "nla.gov.au", "artsearch.nga.gov.au", "recordsearch.naa.gov.au", "images.slsa.sa.gov.au"];
	var images = [];
	var imageCount = 0;
	var MAX_IMAGES = 5;
	var timer = 0;	// Variable for updating the timer

	// Generate images from trove when they
	// hit the generate button
	$('#generateCollage').click(function(){

		imageCount = 0;
		images = [];

		var topic = $('#topic').val();
		var troveUrl = "http://api.trove.nla.gov.au/result?key=" + troveKey +
						"&l-availability=y%2Ff&encoding=json&zone=picture" + 
						"&sortby=relevance&n=100&q=" + topic + "&callback=?";
		console.log(troveUrl);

		$.getJSON(troveUrl, function(data) {
			$('#collage').empty();

			$.each(data.response.zone[0].records.work, imageFilter);

			for (var i = 0; i < images.length && i < MAX_IMAGES; i++) {	

				var $img = $('<img/>').attr('src', images[i])
									  .addClass('collageImage');

				$('#collage').append($img);
			}
		});

		console.log(images);

		// Enable the submit button if it was disabled
		// note: by default disabled until generate is hit
		$('#submitCollage').attr("disabled", false);
	});	

	// Function for filtering images returned from trove
	function imageFilter(index, data) {
		url = data.identifier[0].value;

		if (url.indexOf(urlPatterns[0]) >= 0) {	// Flickr image
			imageCount++;
			//images.push(getFlickrImage(url));
			processFlickrUrl(url);
		}
		else if (url.indexOf(urlPatterns[1]) >= 0) { // nla.gov image
			imageCount++;
			images.push(url + "/representativeImage?wid=900");
			//console.log('nla.gov URL: ' + url);
		}
		else if (url.indexOf(urlPatterns[2]) >= 0) { // artsearch image
			imageCount++;
			images.push("http://artsearch.nga.gov.au/IMAGES/LRG/" + getQueryVariable("IRN", url) + ".jpg");
			console.log("ArtSearch URL: " + url);
		}
		else if (url.indexOf(urlPatterns[3]) >= 0) { // recordsearch image
			imageCount++;
			images.push(
				"http://recordsearch.naa.gov.au/NAAMedia/ShowImage.asp?T=P&S=1&B=" + getQueryVariable("Number", url)
			);
			//console.log("RecordSearch URL: " + url);
		}
		else if (url.indexOf(urlPatterns[4]) >= 0) { // slsa image
			imageCount++;
			//console.log("SLSA URL:" + url)
			images.push(url.slice(0, url.length-3) + jpg);
		}
		else {	// No reliable image found
			//	console.log("Bad Image URL: " + url);
		}
	}

    // Takes a trove flickr url and returns the img url
    function processFlickrUrl(url) {
        var flickrUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + 
        				 flickrKey + "&photo_id=";

    	var urlComps = url.split("/");
    	var photoId = urlComps[urlComps.length - 1];

    	$.getJSON(flickrUrl + photoId + "&format=json&nojsoncallback=1", function(data) {
    		if(data.stat == "ok") {
    			images.push(data.sizes.size[data.sizes.size.length - 1 ].source);
    		}
    	});
    }

	// When they submit their collage/essay settings
	// enable the use of the essay text editor
	$('#collageSettings').submit(function(){
		$(this).find('*').attr("disabled", true);
		$('#essay').find('*').attr("disabled", false);

		// start the essay timer
		setInterval(updateTimer, 1000);

		return false;
	});


	$('#textEditor').bind('input propertychange', function() {
		try {
			var wordCount = this.value.match(/\S+/g).length + ""; // convert to string
		} catch(TypeError) {
			var wordCount = "0";
		}
      	
      	wordCount = "0000".substr(wordCount.length) + wordCount;

      	$('#wordCount').text(wordCount);
	});


	function updateTimer() {
		timer++;	// Second has passed update it

		seconds = timer;

		var hours = Math.floor(seconds / 3600);
		seconds = seconds % 3600;

		var minutes = Math.floor(seconds / 60);
		seconds = seconds % 60;

		// Formatting adding zeros if needed
		hours = (hours < 10 ? "0" : "") + hours;
		minutes = (minutes < 10 ? "0" : "") + minutes;
		seconds = (seconds < 10 ? "0" : "") + seconds;

		timeFormat = hours + ":" + minutes + ":" + seconds;
		$('#timer').text(timeFormat);
	}

	// from http://css-tricks.com/snippets/javascript/get-url-variables/
    function getQueryVariable(variable, url) {
        var query = url.split("?");
        var vars = query[1].split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }
});