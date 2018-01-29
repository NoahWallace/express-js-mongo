const express = require('express'),
	initializeApp= require('./Components/application'),
	mongo = require('./Components/mongodb'),
	cors = require('cors');

let app = express(),
	router= express.Router();

let routes= require('./Routes');
/*
 * Set Default Modules
 */
app.use(cors());

/*
 * Set Routes
 */
app.use("/admin",routes.UsersRoutes())

/*
 * Set Error Handlers
 */
app.use(function(err, req, res, next) {

	res.status(500).send('Something broke!');
});

initializeApp(app);



