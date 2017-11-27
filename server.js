const config = require('./config.js');
const express = require('express');
const app = express();
var spawn = require('child_process').spawn;
var children = [];

process.on('exit', function() {
  children.forEach(function(child) {
    child.kill();
  });
});

children.push(spawn('./cpuUtilizationUpdater.sh'));
children.push(spawn('./diskUtilizationUpdater.sh'));

require('./routes.js')(app);
  
app.listen(config.port, function() {
  console.log('Listening on ' + config.port);
});
