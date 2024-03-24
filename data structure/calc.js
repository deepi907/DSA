function calculate(operation, x, y) {
    if (operation === 'add') {
        return x + y;
    } else if (operation === 'subtract') {
        return x - y;
    } else if (operation === 'multiply') {
        return x * y;
    } else if (operation === 'divide') {
        return (y !== 0) ? x / y : 'Error: Division by zero';
    } else {
        return 'Error: Invalid operation';
    }
}

while (true) {
    var x = parseFloat(prompt("Enter the first number:"));
    var y = parseFloat(prompt("Enter the second number:"));

    var operation = prompt("What operation do you want to perform? (add/subtract/multiply/divide)");

    console.log("Result:", calculate(operation, x, y));

    var continueInput = prompt("Do you want to continue? (yes/no):");
    if (continueInput.toLowerCase() !== 'yes') {
        break;
    }
}

