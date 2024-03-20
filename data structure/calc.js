
function calculate(operation, x, y) {
    if (operation === 'add') {
        return x + y;
    } else if (operation === 'subtract') {
        return x - y;
    } else if (operation === 'multiply') {
        return x * y;
    } else if (operation === 'divide') {
        if (y !== 0) {
            return x / y;
        } else {
            return 'Error: Division by zero';
        }
    } else {
        return 'Error: Invalid operation';
    }
}

var x = parseFloat(prompt("Enter the first number:"));
var y = parseFloat(prompt("Enter the second number:"));

console.log("Addition:", calculate('add', x, y), "Subtraction:", calculate('subtract', x, y), "Multiplication:", calculate('multiply', x, y), "Division:", calculate('divide', x, y));
