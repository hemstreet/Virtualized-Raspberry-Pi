class Pi {
    constructor(options) {
        this.pi = require((options.mock) ? './lib/mock/pi' : './lib/pi');
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

module.exports = Pi;
