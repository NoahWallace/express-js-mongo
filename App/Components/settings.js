const settings={
	development:{
		mongo:{
			server_uri:'mongodb://127.0.0.1:27017,127.0.0.2:27017,127.0.0.3:27017/?replicaSet=rs0',
			database:"test"
		},
		app:{
			port:3000
		}
	},
	production:{
		mongo:{
			server_uri:'mongodb://127.0.0.1:27017,127.0.0.2:27017,127.0.0.3:27017/?replicaSet=rs0',
			database:"test"
		},
		app:{
			port:3001
		}
	}
};

module.exports= function (){
	return settings[process.env.NODE_ENV] || null;
}
