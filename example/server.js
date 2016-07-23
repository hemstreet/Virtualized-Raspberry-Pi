var Pi = require('../pi'),
    pi = new Pi({
        mock: true
    });

pi.toggle(1, 2);
pi.high(2);
pi.low(3);