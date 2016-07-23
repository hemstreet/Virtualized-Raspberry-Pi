class Pi {
    toggle(pin, value) {
        this.log('Toggling ' + pin + 'to value' + value);
    }

    high(pin) {
        this.log('Toggling ' + pin + 'to high');
    }

    low(pin) {
        this.log('Toggling ' + pin + 'to low');
    }

    log(msg) {
        console.log('MOCK: ' + msg);
    }
}

module.exports = new Pi();
