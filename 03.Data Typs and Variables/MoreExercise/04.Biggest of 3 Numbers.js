function solve(a, b, c) {

    let biggest;
    if (a < b && c < b) {
        biggest = Number(b);

    } else if (b < c && a < c) {
        biggest = Number(c);
    } else {
        biggest = Number(a);
    }
    console.log(`${biggest}`);
}

//solve(43, 43.2, 43.1)