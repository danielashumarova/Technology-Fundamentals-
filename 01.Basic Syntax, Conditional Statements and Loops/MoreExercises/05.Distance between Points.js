function solve(x1, y1, x2, y2) {

    let a = x1 - x2;
    let b = y2 - y1;
    let distance = Math.sqrt(a * a + b * b);
    console.log(`${distance}`);

}

solve(2, 4, 5, 0);