
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var home = require('./routes/home');
var savedgames = require('./routes/savedgames');
var mystats = require('./routes/mystats');
var friends = require('./routes/friends');
var account = require('./routes/account');
var addstats = require('./routes/addstats');
var viewgames = require('./routes/viewgames')

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', home.view);
app.get('/home', home.view);
app.get('/mystats', mystats.view);
app.get('/savedgames',savedgames.view);
app.get('/friends', friends.view);
app.get('/account', account.view);
app.get('/addstats', addstats.view);
app.get('/viewgames', viewgames.view)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
