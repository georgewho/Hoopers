//Get our stats data
var data = require('../data.json');

/*
 * GET mystats page.
 */

exports.view = function(req, res) {
    res.render('mystats', data);
};