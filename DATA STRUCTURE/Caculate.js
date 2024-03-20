function calculate(operation, x, y) {
    switch (operation) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            return (y !== 0) ? x / y : 'Error: Division by zero';
        default:
            return 'Error: Invalid operation';
    }
}

var x = parseFloat(prompt("Enter the first number:"));
var y = parseFloat(prompt("Enter the second number:"));

console.log("Addition:", calculate('add', x, y), "Subtraction:", calculate('subtract', x, y), "Multiplication:", calculate('multiply', x, y), "Division:", calculate('divide', x, y));
