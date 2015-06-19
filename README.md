# runtime-shell

[![Join the chat at https://gitter.im/ArielAbreu/runtime-shell](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ArielAbreu/runtime-shell?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
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
