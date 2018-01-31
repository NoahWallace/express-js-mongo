const MongoClient = require('mongodb').MongoClient,
	settings = require('./settings')();

let state={
	db:null,
	client:null
}

function init() {
	return new Promise((resolve, reject) => {
		if (state.client === null) {
			console.log(`Starting the ${process.env.NODE_ENV} Environment`);
			MongoClient.connect(settings.mongo.server_uri, (e, Client) => {
				if (e) {
					reject(e)
				}
				else {
					console.log("connected to mongo");
					state.client = Client;
					state.db = Client.db(settings.mongo.database);
					resolve(state)
				}
			})
		}
		else {
			resolve(state)
		}
	})
}


exports.init=init;
exports.db=()=>state.db;
exports.client=()=>state.client;
