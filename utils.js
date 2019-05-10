const { spawn } = require("child_process");

function run(extension) {
  const directory = "../ore-id/web/src";
  // const directory = "../ore-id/web"
  // const directory = "../ore-id";

  const searchPath = directory + "/**/*" + "." + extension;

  const ls = spawn("node_modules/prettier/bin-prettier.js", [
    "--config",
    "./config.js",
    "--write",
    searchPath
  ]);

  ls.stdout.on("data", data => {
    console.log(`${data}`);
  });

  ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
  });

  ls.on("close", code => {
    console.log(`Finished files with extension: ${extension}`);
  });
}

module.exports = { run };
