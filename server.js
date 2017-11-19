const express = require('express');
const app = express();
const port = 8001;
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
  
app.listen(port, function() {
  console.log('Listening on ' + port);
});
