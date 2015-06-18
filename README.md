# runtime-shell
Shell commands for runtimejs

Usage:
```javascript
// Note the '()' at the end, this loads the commands.
var rshell = require('runtime-shell')();
rshell.version; // Returns version (only export for now)
```
Commands (as of v0.0.2):
  * echo
  * clear
  * poweroff
  * reboot
  * ping
