function solve(n) {

    let sum = 0;
    let number = 0;
    for (let j = 1; j <= n; j++) {
        number = j;
        number = number.toString();
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${j} -> True`);
        } else {
            console.log(`${j} -> False`);

        }
        sum = 0;
    }
}
//solve(15);