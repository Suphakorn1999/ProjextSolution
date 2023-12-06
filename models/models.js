class Calculator {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calculate(operation) {
        if (operation == 'add') {
            return this.x + this.y;
        } else if (operation == 'sub') {
            return this.x - this.y;
        } else if (operation == 'mul') {
            return this.x * this.y;
        } else if (operation == 'div') {
            return this.x / this.y;
        } else {
            return 'Invalid operation';
        }
    }
}

module.exports = Calculator;