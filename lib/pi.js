var gpio = require('pi-gpio');


class Pi {
    constructor(config) {
        this.config = config;
    }
    toggle(pin, value) {
        gpio.open(pin, "output", function(err) {
            if(err) {
                console.log(err);
                return
            }
            gpio.write(pin, value, function() {
                gpio.close(pin);
            }.bind(this));
        }.bind(this));
    }

    high(pin) {
        gpio.open(pin, "output", function (err) {
            if (err) {
                console.log(err);
                return
            }
            gpio.write(pin, 1, function () {
                gpio.close(pin);
            }.bind(this));
        }.bind(this));
    }
    low (pin) {
        gpio.open(pin, "output", function(err) {
            if(err) {
                console.log(err);
                return
            }
            gpio.write(pin, 0, function() {
                gpio.close(pin);
            }.bind(this));
        }.bind(this));
    }
};

module.exports = Pi;