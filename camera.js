// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This code takes a picture and uploads it (POST) to Alchemy API to verify what it is. If a
directory is specified with the --upload-dir
flag, the picture is saved to that directory.
*********************************************/

var tessel = require('tessel');
var camera = require('camera-vc0706').use(tessel.port['B']);

var notificationLED = tessel.led[3]; // Set up an LED to notify when we're taking a picture
var i = 0;
// --------

//Load the request module
var request = require('request');
//Load fs module
var fs = require('fs');
//var source = fs.createReadStream('./picture.jpg')
var source = fs.readFileSync('../..//Users/mlieber/app/tessel/tessel-code/camera/picture.jpg')
source.pipe(request.post('http://access.alchemyapi.com/calls/image/ImageGetRankedImageKeywords?apikey=<key>&imagePostMode=raw'));


camera.on('error', function(err) {
  console.error(err);
});
