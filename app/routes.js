module.exports = function(app) {

	var currentTime = new Date();

	var items = {
		'1a4e094c703130a20cdb51f3a5b6409a63607254' : {
			name: 'Ternox-R1',
			ownerName: 'Roger',
			type: 'build',
			status: 'pending',
			time: currentTime.setMinutes(currentTime.getMinutes()),
			metrics: {
				status: 'pending',
				overall: 0
			},
			build: {
				status: 'pending',
				overall: 0
			},
			unit: {
				status: 'pending',
				overall: 0
			},
			functional: {
				status: 'pending',
				overall: 0
			}

		},
		'2a4e094c703130a20cdb51f3a5b6409a63607254' : {
			name: 'Ternox-R1',
			ownerName: 'Zeid',
			type: 'firewall',
			status: 'running',
			time: currentTime.setMinutes(currentTime.getMinutes() - 10),
			metrics: {
				status: 'passed',
				overall: 100,
				test: {
					status: 'passed',
					value: 65
				},
				maintainability: {
					status: 'passed',
					value: 88
				},
				security: {
					status: 'waiting',
					value: 43
				},
				workmanship: {
					status: 'waiting',
					value: 76
				}
			},
			build: {
				status: 'passed',
				overall: 100
			},
			unit: {
				status: 'running',
				overall: 40
			},
			functional: {
				status: 'running',
				overall: 0
			},
			firstMessage: 'Waiting for tests to get finished'

		},
		'3a2e054c703130a20cdb51f75a5b6409a63606311' : {
			name: '136462',
			ownerName: 'Selimovic',
			type: 'build',
			time: currentTime.setMinutes(currentTime.getMinutes() - 20),
			metrics: {
				status: 'passed',
				overall: 100,
				test: {
					status: 'passed',
					value: 65
				},
				maintainability: {
					status: 'passed',
					value: 81
				},
				security: {
					status: 'waiting',
					value: 43
				},
				workmanship: {
					status: 'waiting',
					value: 76
				}
			},
			build: {
				status: 'passed',
				overall: 100
			},
			unit: {
				status: 'passed',
				overall: 100,
				testPassed: 400,
				testFailed: 300,
				codeCovered: 65

			},
			functional: {
				status: 'passed',
				overall: 100,
				testPassed: 120,
				testFailed: 50,
				codeCovered: 45
			},
			firstMessage: 'Change Accepted',
			secondMessage: 'Auto-Merged'
		},
		'4a2e054c703130a20cdb51f75a5b6409a63606311' : {
			name: '432462',
			ownerName: 'Roger',
			type: 'firewall',
			time: currentTime.setMinutes(currentTime.getMinutes() - 25),
			metrics: {
				status: 'passed',
				overall: 100,
				test: {
					status: 'passed',
					value: 86
				},
				maintainability: {
					status: 'passed',
					value: 861
				},
				security: {
					status: 'passed',
					value: 93
				},
				workmanship: {
					status: 'waiting',
					value: 56
				}
			},
			build: {
				status: 'passed',
				overall: 100
			},
			unit: {
				status: 'failed',
				overall: 10,
				testPassed: 10,
				testFailed: 300,
				codeCovered: 15

			},
			functional: {
				status: 'passed',
				overall: 100,
				testPassed: 100,
				testFailed: 50,
				codeCovered: 45
			},
			firstMessage: 'Change Rejected',
			secondMessage: 'Unit Test failed'
		},
		'5d6e054c703130a20cdb51f75a5b6409a63606311' : {
			name: '112462',
			ownerName: 'Federer',
			type: 'build',
			time: currentTime.setMinutes(currentTime.getMinutes() - 28),
			metrics: {
				status: 'failed',
				overall: 100,
				test: {
					status: 'passed',
					value: 54
				},
				maintainability: {
					status: 'failed',
					value: 4
				},
				security: {
					status: 'waiting',
					value: 19
				},
				workmanship: {
					status: 'passed',
					value: 76
				}
			},
			build: {
				status: 'passed',
				overall: 100
			},
			unit: {
				status: 'passed',
				overall: 100,
				testPassed: 510,
				testFailed: 20,
				codeCovered: 85

			},
			functional: {
				status: 'passed',
				overall: 100,
				testPassed: 220,
				testFailed: 50,
				codeCovered: 65
			},
			firstMessage: 'Change Rejected',
			secondMessage: 'Metrics reduction'
		},
		'6d6e054c703130a20cdb51f75a5b6409a63606311' : {
			name: '132462',
			ownerName: 'Federer',
			type: 'build',
			completed: true,
			time: currentTime.setMinutes(currentTime.getMinutes() - 30),
			metrics: {
				status: 'passed',
				overall: 100,
				test: {
					status: 'passed',
					value: 54
				},
				maintainability: {
					status: 'passed',
					value: 64
				},
				security: {
					status: 'passed',
					value: 99
				},
				workmanship: {
					status: 'passed',
					value: 76
				}
			},
			build: {
				status: 'passed',
				overall: 100
			},
			unit: {
				status: 'passed',
				overall: 100,
				testPassed: 510,
				testFailed: 20,
				codeCovered: 85

			},
			functional: {
				status: 'passed',
				overall: 100,
				testPassed: 220,
				testFailed: 50,
				codeCovered: 65
			},
			secondMessage: 'Completed'
		},
		'9a2e054c703130a20cdb51f75a5b6409a63606311' : {
			name: '536462',
			ownerName: 'Selimovic',
			type: 'firewall',
			time: currentTime.setMinutes(currentTime.getMinutes() - 20),
			metrics: {
				status: 'passed',
				overall: 100,
				test: {
					status: 'passed',
					value: 65
				},
				maintainability: {
					status: 'passed',
					value: 81
				},
				security: {
					status: 'waiting',
					value: 43
				},
				workmanship: {
					status: 'waiting',
					value: 76
				}
			},
			build: {
				status: 'passed',
				overall: 100
			},
			unit: {
				status: 'passed',
				overall: 100,
				testPassed: 100,
				testFailed: 40,
				codeCovered: 65

			},
			functional: {
				status: 'passed',
				overall: 100,
				testPassed: 120,
				testFailed: 10,
				codeCovered: 45
			},
			firstMessage: 'Change Accepted',
			secondMessage: 'Auto-Merged'
		},

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