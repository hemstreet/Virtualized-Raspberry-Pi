Virtualized Raspberry Pi
========================
Virtualized raspberry pi for local Raspberry Pi development

***Currently only toggles pins***

`config/config.json` contains a property called virtualizedPi, set this t

```
var Pi = require('../pi'),
    pi = new Pi({
        mock: true
    });
```

Current supported methods are 
* ```toggle(pin, value)```
* ```high(pin)```
* ```low(pin)```

`pi.toggle(1,2)`
TODO
====
* Support entire pi-gpio library w/ interface
* Strategy pattern for implementing more pi gpio libraries
* Implement UART