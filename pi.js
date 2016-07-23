class Pi {
    constructor() {
        this.config = require('./config/config');
        this.pi = require((this.config.virtualizedPi) ? './lib/mock/pi' : './lib/pi');
    }

    toggle(pin, value) {
        this.pi.toggle(pin, value);
    }
    high(pin) {
        this.pi.high(pin);
    }
    low(pin) {
        this.pi.low(pin);
    }

}

let pi = new Pi();
module.exports = pi;
