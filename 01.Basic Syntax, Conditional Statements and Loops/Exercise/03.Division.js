function solve(number) {

    let biggerDiv;
    if (number % 2 === 0) {
        biggerDiv = 2;
    }
    if (number % 3 === 0) {
        biggerDiv = 3;
    }
    if (number % 6 === 0) {
        biggerDiv = 6;
    }
    if (number % 7 === 0) {
        biggerDiv = 7;
    }
    if (number % 10 === 0) {
        biggerDiv = 10;
    }

    if (biggerDiv !== undefined) {
        console.log(`The number is divisible by ${biggerDiv}`);
    } else {
        console.log("Not divisible");
    }

}

//solve(1643);