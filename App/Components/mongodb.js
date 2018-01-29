const MongoClient = require('mongodb').MongoClient,
	settings = require('./settings')();

let client;

function init() {
	return new Promise((resolve, reject) => {
		if (client === undefined) {
			console.log(`Starting the ${process.env.NODE_ENV} Environment`);
			MongoClient.connect(settings.mongo.server_uri, (e, mClient) => {
				if (e) {
					reject(e)
				}
				else {
					console.log("connected to mongo");
					client = mClient;
					db = mClient.db(settings.mongo.database);
					resolve({client, db})
				}
			})
		}
		else {
			resolve({client, db})
		}
	})
}

function getDb(name = settings.mongo.database) {
	if (client) {
		return client.db(name)
	}
	return null;
}

function getClient() {
	if (client) {
		return client
	}
	return null;
}

module.exports = {
	init,
	Db: getDb,
	Client: getClient
}