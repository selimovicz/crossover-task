module.exports = function(app) {

	var items = {
		'e9f2dd2a-533c-40c0-9143-e37646e3a735' : {
		},
		'45dg112-533c-vd23-9143-sd122143adsas' : {
			name: ''
		}
	};

	// get all items
	app.get('/items', function(req, res) {
		res.json(items);
	});

	// get single item
	app.get('/item/:id', function(req, res) {
		res.json(items[req.params.id]);
	});


	app.get('*', function(req, res) {
		res.sendfile('./public/app.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

};