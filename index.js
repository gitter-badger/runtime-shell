'use strict';

// For version:
const pkg = require(__dirname + '/package.json');

module.exports = function() {
  // runtime.js core module
  const runtime = require('runtimejs');

  // Load commands
  require('./lib/clear.js')(runtime);
  require('./lib/echo.js')(runtime);
  // I'll add `ping` once runtimeify loads http-node and runtime-node-net by default.
  //require('./lib/ping.js')(runtime);
  require('./lib/power.js')(runtime);
}

module.exports.prototype.version = pkg.version;
