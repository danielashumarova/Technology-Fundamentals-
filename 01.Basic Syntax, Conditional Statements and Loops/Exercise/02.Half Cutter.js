function solve(size) {
    let cut = 0;
    let lenght;
    while (size >= 1) {
        lenght = size / 2;
        cut++;
        size = lenght;
    }
    console.log(`Length is ${lenght.toFixed(2)} cm. after ${cut} cuts.`);
}

//solve(1)