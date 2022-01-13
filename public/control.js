function generateApp() {
	console.log("Generate!");
	var appName = $("#appNameInput").val();
	console.log(appName);
  	$.ajax({
	    url: "/generate/" + appName,
	    xhrFields: {
	    	responseType : 'blob'
		},
	    success: function(data) {
	      console.log("Success!");
	      var a = document.createElement('a');

	  //     	var binaryData = [];
			// binaryData.push(data);
			// var url = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
            
            var url = window.URL.createObjectURL(data);
            
            a.href = url;
            a.download = appName + '.zip';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
	    },
	    error: function(error) {
	    	console.log("Failed to generate: " + error);
	    }
	});
}