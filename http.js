'use strict';

var request = require('request');

exports.get = function (event, context, callback) {
	var URI = 'https://news.google.com/news';
	
	request(URI, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			console.debug('HTTP request passed');
			context.done(null, { html : body });
		} else {
			console.debug('Error while HTTP processing.');
			context.done(null, { message : error });
		}
	});

	return;
};
