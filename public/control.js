function generateApp() {
	console.log("Generate!");
	var appName = $("#appNameInput").val();
	console.log(appName);
  	$.ajax({
	    url: "/generate/" + appName,
	    success: function(result) {
	      console.log("Success!");
	      console.log(result);
	    },
	    error: function(error) {
	    	console.log("Failed to generate: " + error);
	    }
	});
}