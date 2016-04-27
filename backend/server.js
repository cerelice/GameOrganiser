var restify     = require('restify'),
    bodyParser  = require('body-parser'),
    Controllers = require('./Controllers'),
    Models      = require('./Models');

var server = restify.createServer();

server
  .use( restify.fullResponse() )
  .use( restify.bodyParser() );

server.post('/login', Controllers.User.login);

server.listen('3009', (err) => {
  if (err) console.error(err);
  else console.log('Start on 3009');
});
