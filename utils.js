const { spawn } = require('child_process');

function runOnDirectory(directory, extension) {
  const searchPath = directory + '/**/*' + '.' + extension;

  const ls = spawn('node_modules/prettier/bin-prettier.js', [
    '--config',
    './config.js',
    '--write',
    searchPath
  ]);

  ls.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`Finished files with extension: ${extension}`);
  });
}

function run(extension) {
  // ####
  // #### CHANGE DIRECTORY HERE
  // ####

  runOnDirectory('../oreid-portal/web', extension);
  runOnDirectory('../oreid-service/web', extension);
}

module.exports = { run };
