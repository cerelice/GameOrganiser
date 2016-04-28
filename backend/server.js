var restify     = require('restify'),
    bodyParser  = require('body-parser'),
    Controllers = require('./Controllers'),
    Models      = require('./Models');

var server = restify.createServer();

server
  .use( restify.fullResponse() )
  .use( restify.bodyParser() );

server.post('/login', Controllers.User.login);
//events routes
server.get('/events/:id', Controllers.Event.GetEvents);
server.del('/devent/:id', Controllers.Event.DeleteEvent);
server.post('/event', Controllers.Event.AddEvent);

server.listen('6000', (err) => {
  if (err) console.error(err);
  else console.log('Start on 6000');
});
