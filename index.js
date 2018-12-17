'use strict';
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
var Feed = require('rss-to-json');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	Feed.load('https://viblo.asia/rss', function(err, rss){
		res.send(rss)
	});
});
app.listen(8080, function(){
	console.log('Port 8080: success!');
});