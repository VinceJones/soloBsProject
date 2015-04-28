var apikey = '10d0a85137d94904c75e456dcdf91468227c09ca'; // Put your API key here
var j;
var k;
var i;

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(results) {
    console.log(results);
    displayContent(results);
}

function displayContent(results) {

	for (j = 0; j < 9; j++){
		$(".content").append("<div class='col-md-3 resultContent'><img src='" + results[j].image.medium_url +"'/><p class='lead'>Name: " + results[j].name + "</p><p>Description: " + results[j].deck +"</p><button class='minify'>Minify</button></div>");
		console.log(results[j]);
	}
}


$(document).ready(function() {

	$(".content").append("Please wait....")
	search("batman");


	// Start the search here!
	
});

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
