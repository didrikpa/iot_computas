var SensorTag = require('sensortag');

var util = require('util');

var async = require('async');

var USE_READ = true;

SensorTag.discover(function (sensorTag) {
    console.log("Discovered " + sensorTag);
});




