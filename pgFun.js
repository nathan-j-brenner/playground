var pg = require('pg');
var settings = "postgres://localhost/test"; // "postgres://username:password@localhost/database";
var id = process.argv[2];

if (process.argv.length <= 2) { return console.error('please provide an id to look up'); }

var client = new pg.Client(settings);
client.connect(function(err) {
  if(err)
    return console.error('could not connect to postgres', err);

  client.query('select * from people where name = $1::text', [id], function(err, result) { //async call
    if(err)
      return console.error('error running query', err);

  	console.log('Search results:');
    console.log('%j', result.rows[0]);

    client.end();
  });
});

//process.argv chops off first two things in node, array of whateverwords you type here
// $1::int $1 is the first thing that is in the following array, :: make sure it's formatted as a argument, not a string
//postgres doesn't care about directories

//no promises, this uses callbacks

//this talks to sql from javascript