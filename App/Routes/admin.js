let express = require('express'),
	router = express.Router(),
	db = require("../Components/mongodb").Db;


function UsersRoutes() {
	//app.use("/users",router);
	router.get("/collections", (req, res, next) => {
		let cursor = db().listCollections();
		cursor.toArray().then((c) => {
			let collections = c.map((col) => col.name)
			res.json(collections)
		}).catch((e) => {
			next(e)
		});

	});
	return router
}

module.exports = UsersRoutes;