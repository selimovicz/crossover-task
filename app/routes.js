var Locations = require('./models/locations');

module.exports = function(app) {
	app.get('*', function(req, res) {
		res.sendfile('./public/app.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};