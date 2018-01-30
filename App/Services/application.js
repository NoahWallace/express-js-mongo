let mongo = require('./mongodb.js'),
	http = require('http'),
	https = require('https'),
	settings = require('./settings')(),
	server;

function initializeApp(app) {
	mongo.init().then(({client}) => {
		server = http.createServer(app).listen(settings.app.port, () => {
			console.log(`App is running on port ${settings.app.port}`)
		});
		server.on("connect", () => {
			console.log("connected")
		})
	}).catch((e) => {
		console.log(e);
		process.emit("SIGTERM")
	})
}

function closeApp() {
	let client = mongo.Client();
	if (client && client !== null) {
		mongo.Client().close()
			.then(() => {
				console.log("MongoClosed Successfully");
				process.exit()
			})
			.catch((e) => {
				console.log("Mongo did not exit properly");
				process.exit()
			})
	}
	else {
		process.exit()
	}
}

process.on("SIGINT", () => {
	console.log("SIGINT");
	closeApp();
})
process.on("SIGTERM", () => {
	console.log("SIGTERM")
	closeApp();

})
process.on("exit", () => {
	console.log("Thank you and have a sparkling afternoon")
})

module.exports = initializeApp;