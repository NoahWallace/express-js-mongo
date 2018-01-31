'use strict';
let mongo = require("../Services/mongodb");

class Collections{
	constructor(){}
	listCollections() {
		return mongo.db().listCollections().toArray();
	}
	getCollectionNames =(req,res,next) => {
		this.listCollections().then((c) => {
			let collections = c.map((col) => col.name)
			res.json(collections)
		}).catch((e) => {
			next(e)
		});
	}
	getCollections =() =>{
		this.listCollections.then((c) => {
			res.json(collections)
		}).catch((e) => {
			next(e)
		})
	}
	getCollection  = (name) =>{
	 	return mongo.db().collection(name);
	}
}

module.exports=Collections;