'use strict';

module.exports = function(runtime) {
  try {
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
