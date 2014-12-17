'use strict';
var express = require('express'),
    dataJson = require('./data/services.json'),
    request = require('request'),
    _ = require('underscore'),
    async = require('async'),
    parseService,
    app = express();

parseService = function(service, callback) {
    var start,
        cache = 'status-',
        delimiter = '?',
        req,
        out = {
            name: service.name,
            status: false
        };


    if (service.url.href.indexOf('?') > -1) {
        delimiter = '&';
    };

    start = new Date().getTime();
    cache = delimiter + cache + start;

    req = {
        url: service.url.href + cache,
    };

    if (service.url.headers) {
        req.headers = service.url.headers;
    }

    request(req, function(error, response, body) {
        console.log('Url to call:', service.url.href + cache);
        console.log('Response status:', response.statusCode);

        if (response.statusCode === service.status) {
            out.status = true;
        }

        out.duration = new Date().getTime() - start;

        callback(null, out);
    });
};

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/status', function (req, res) {
    async.map(dataJson.data, parseService, function(err, services) {
        if (err) {
            res.send([]);
        } else {
            res.send(services);
        }
    });
});

var server = app.listen(3000, function () {

    var host = server.address().address,
        port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
