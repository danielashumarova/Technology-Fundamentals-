function solve(n) {

    let count = 0;
    for (var i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            count++;
        }
    }
    if (count < 2) {
        console.log('true');
    } else {
        console.log('false');

    }
}

//solve(2)