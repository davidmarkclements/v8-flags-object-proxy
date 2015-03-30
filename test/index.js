var exec = require('child_process').exec;

//flags have to be set before requiring fixture,
//so we have to use separate processes for opposite
//scenarios

exec('node ' + __dirname + '/read-flag.js')
  .stdout.pipe(process.stdout);

exec('node ' + __dirname + '/write-flag.js')
  .stdout.pipe(process.stdout);