var config = require('./config');
var dash_button = require('node-dash-button');

var dash = dash_button(config.dash.MAC_address);

dash.on('detected', function (){
  console.log('Heavy Metal!!!');
  var spawn = require('child_process').spawn
  spawn('open', ['https://www.youtube.com/watch?v=y98-ksHnjE4']);
});
