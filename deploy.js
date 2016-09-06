if (process.env.NODE_ENV === 'production') {
  var childProcess = require('child_process');
  console.log('deploy page conditional pass: ', childProcess);
  childProcess.exec('webpack -p --config webpack.production.config.js',
    function (error, stdout, stderr) {
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
      if (error !== null) {
        console.log('exec error: ' + error);
      }
    });
}
