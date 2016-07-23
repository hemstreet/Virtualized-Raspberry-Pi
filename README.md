Virtualized Raspberry Pi
========================
Virtualized raspberry pi for local Raspberry Pi development

***Currently only toggles pins***

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

TODO
====
* Support entire pi-gpio library w/ interface
* Strategy pattern for implementing more pi gpio libraries
* Implement UART