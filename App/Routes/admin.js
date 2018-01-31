let express = require('express'),
	router = express.Router(),
	controllers=require('../Controllers')

let collections=new controllers.collections();
let {getCollectionNames,getCollections} = collections;
function UsersRoutes() {
	//app.use("/users",router);
	router.get("/collections", getCollectionNames);
	return router
}

module.exports = UsersRoutes;