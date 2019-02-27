/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var home = require('./routes/home');
var login = require('./routes/login');
var signup = require('./routes/signup');
var savedgames = require('./routes/savedgames');
var mystats = require('./routes/mystats');
var friends = require('./routes/friends');
var account = require('./routes/account');
var favoritedgame = require('./routes/favoritedgame');
var favgames = require('./routes/favgames');
var addstats = require('./routes/addstats');

var viewgames = require('./routes/viewgames');
var addgames = require('./routes/addgames');

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

app.get('/', login.view);
app.get('/login', login.view);
app.get('/signup', signup.view);
app.get('/home', home.view);
app.get('/friends', friends.view);
app.get('/account', account.view);

app.get('/mystats', mystats.view);
app.get('/addstatspage', addstats.view);
app.get('/addstats', addstats.addStatsview);

app.get('/savedgames', savedgames.view);
//app.get('/savedgamesview', savedgames.favoritesview);

app.get('/favoritegame/:id', favoritedgame.favorited);
app.get('/favgames', favgames.favoritesview)

app.get('/viewgames', viewgames.view)

app.get('/addgames', addgames.view);
app.get('/addgamesview', addgames.addGamesview)
app.get('/viewAlt', home.viewAlt);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});