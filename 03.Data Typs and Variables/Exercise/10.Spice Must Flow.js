function solve(startYield) {

    let day = 0;
    let sum = 0;
    let yield = startYield;

    while (yield >= 100) {
        startYield = yield -26;
        yield -= 10;
        day++;
        sum += startYield;

    }
    sum -= 26;
    if (sum < 0) sum = 0;
    console.log(`${day}`);
    console.log(`${sum}`);
}

//solve(111)