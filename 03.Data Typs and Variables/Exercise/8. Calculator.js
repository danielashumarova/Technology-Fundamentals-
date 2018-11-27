function solve(numberOne, operation, numberTwo) {
    let result = 0;
    switch (operation) {
        case '+':
            result = numberOne + numberTwo;
            break;
        case '-':
            result = numberOne - numberTwo;
            break;
        case '*':
            result = numberOne * numberTwo;
            break;
        case '/':
            result = numberOne / numberTwo;
            break;
        default:
            break;
    }

    console.log(`${result.toFixed(2)}`);
}

//solve(5, '+', 10);