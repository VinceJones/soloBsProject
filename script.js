var apikey = '10d0a85137d94904c75e456dcdf91468227c09ca'; // Put your API key here
var j;
var k;
var i;

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
function search(query){

	$.ajax ({
	    type: 'GET',
	    dataType: 'jsonp',
	    crossDomain: true,
	    jsonp: 'json_callback',
	    url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    }
	});

}

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);
    displayContent(results);
}

function displayContent(results) {
	$(".content").empty();
	for (j = 0; j < 9; j++){
		$(".content").hide().append("<div class='col-md-3 results group" + results[j].id + "'><img class='hidden-sm hidden-xs' src='" + results[j].image.medium_url +"'/><button class='btn-success btn-sm minify'>Remove</button></div>");
		$(".group"+results[j].id).append("<div class='appendPlatform'><p class='lead'>Name: " + results[j].name + "</p><p>Description: " + results[j].deck +"</p><p>Platform: " + results[j].platforms[0].name + "</p><button class='btn-sm btn-danger removePlatform'>Remove Info</button></div>");
		$(".content").fadeIn("slow");
		$(".results").css({height: '600px'});
	}
}


$(document).ready(function() {

	$(".content").append("<h2>Please wait....</h2><br><img class='mindblow' src='mindblow.png'/>")
	search("batman");

	$(".content").on("click", ".minify", function (){
		$(this).parent().fadeOut("slow");
		//$(this).parent().toggleClass("hidden");
	});

	$(".header").append("<button class='btn-warning btn-lg returnContent'>Return Content to screen</button>");

	$(".header").on("click", ".returnContent", function(){
		$(".results").css({height: '600px'});
		$(".results").fadeIn("slow");
		$(".results").children().children().fadeIn("fast");
		});

	$(".content").on("click", ".results", function(){
		console.log("Remove Platform");
		$(this).children().children().fadeOut();
		$(this).css({height: 'auto'});
	});

	
});


