'use strict';

module.exports = function() {
  try {
    // runtime.js core module
    const runtime = require('runtimejs');

    // Load commands
    require('./lib/clear.js')(runtime);
    require('./lib/echo.js')(runtime);
    require('./lib/ping.js')(runtime);
    require('./lib/power.js')(runtime);

    return;
  } catch(e) {
    return e;
  }
}

module.exports.version = "0.0.6";
