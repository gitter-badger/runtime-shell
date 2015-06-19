'use strict';

module.exports = function() {
  // runtime.js core module
  const runtime = require('runtimejs');

  // Load commands
  require('./lib/clear.js')(runtime);
  require('./lib/echo.js')(runtime);
  require('./lib/ping.js')(runtime);
  require('./lib/power.js')(runtime);
}

module.exports.prototype.version = "0.0.5";
