var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./knexfile.js')[env];
var knex = require('knex')(knexConfig);

function log(it){
	console.log(it);
}

function finish(err, result){
	if (err){
		console.log(err);
	} else{
		console.log(result);
	}
};

//this creates a new row
// knex('countries').insert([{name:'Canada'}]).then(log).catch(log);

//change the values of a column on a row
// knex('countries').where('id', '=', '8').update({id: '2'}).then(log).catch(log);
// knex('countries').select('name').then(log);

//delete a row
// knex('countries').del().where('name', 'USA').then(log);

//print the whole table
// knex.select().table('countries').then(log).catch(log);

//print just the selected elements from the table
// knex.select('name').from('countries').then(log).catch(log);

function grantAccess(user) {
	if (user[0] != undefined){
		console.log("your user exists");
	} else{
		console.log("invalid access");
	}
}

var userName = process.argv[2];
knex('users').where([username: username, password: password]).then(grantAccess);