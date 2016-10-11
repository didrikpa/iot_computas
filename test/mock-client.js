var socket = require('socket.io-client')('http://localhost:3000');

var objectTemp = 0;
var ambientTemp = 0;

socket.on('connect', function() {
    console.log('Mock temperature client connected to IoTHub-Server');
    setInterval(function() {
        objectTemp++;
        ambientTemp = ambientTemp + 2;
        console.log('Sending sensor data');
        socket.emit('sensor:data', {
            id: 'sensortag-mock1',
            type: 'sensortag',
            sensor: 'irTemperature',
            data: {
                objectTemp: objectTemp,
                ambientTemp: ambientTemp
            }
        });
    }, 1000);
});