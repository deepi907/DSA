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

while (true) {
    var x = parseFloat(prompt("Enter the first number (or type 'stop' to end):"));
    if (isNaN(x)) break; // Exit the loop if the input is not a number or 'stop'

    var y = parseFloat(prompt("Enter the second number:"));

    var operation = prompt("Enter the operation (add/subtract/multiply/divide):");

    var result;
    switch (operation) {
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            result = calculate(operation, x, y);
            console.log("Result:", result);
            break;
        default:
            console.log("Error: Invalid operation");
    }
}
