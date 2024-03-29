const express = require('express')
const app = express()
const port = 3000

app.get('/generate/:appName', (req, res) => {
	console.log("generating app: " + req.params.appName);
	generate_app(req.params.appName, () => {
		//res.send("App generated with appName: " + req.params.appName);
		const file = __dirname + "/public/output/" + req.params.appName + ".zip";
		// res.download(file);
		res.sendFile(file);
	});
	
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

app.use(express.static('public'))

function generate_app(appName, callback) {
	const exec = require("child_process").exec;
	exec(
		// "cd ../test-yo/generator-test" + " && " +
		"cd ../Marketplace-App-Generator-Generator" + " && " +
		"yo test " + appName + " --force" + " && " +
		// "powershell Compress-Archive public/" + appName + " ../../test-expressjs/public/" + appName + ".zip" // windows version
		"zip -r " + "../Marketplace-App-Generator-Server/public/output/" + appName + ".zip " + "public/" + appName // linux version
		, (error, stdout, stderr) => {
	    if (error) {
	        console.log(`error: ${error.message}`);
	        return;
	    }
	    // if (stderr) {
	    //     console.log(`stderr: ${stderr}`);
	    //     return;
	    // }
	    console.log(`stdout: ${stdout}`);
	    callback();
	});
}
