# runtime-shell
Shell commands for runtimejs

Usage:
```javascript
// You must have loaded 'runtimejs' already, that's the argument passed to it.
var rshell = require('runtime-shell')(runtime);
rshell.version; // Returns version (only export for now)
```
Commands (as of v0.0.2):
  * echo
  * clear
  * poweroff
  * reboot
  * ping
