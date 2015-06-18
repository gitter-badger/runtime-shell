'use strict';

module.exports = function(runtime) {
  runtime.shell.setCommand('ping', function(args, cb) {
    var argarr = args.split(' ');
    argarr[1] = argarr[1] || 'http://www.google.com/';
    const dns = require('dns');
    const url = require('url');
    dns.lookup(url.parse(argarr[1]).host, function(err, address, iptype) {
      if (err) {
        runtime.tty.print('error: cannot load ' + argarr[1], 1, runtime.tty.color.WHITE, runtime.tty.color.RED);
        return cb();
      }

      const http = require('http');
      const times = parseInt(argarr[2]) || 1;
      for (var i = 0; i < times; i++) {
        http.get(argarr[1], function(res) {
          runtime.tty.print('statcode ' + res.statusCode + 'from ' + url.parse(argarr).host + ' (' + address + ')');
          if (i == times) {
            cb();
          }
        });
      }
    });
  });
};
