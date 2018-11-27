function solve(n) {

    let letter = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {

                letterOne = String.fromCharCode(97 + i, 97 + j, 97 + k);
                console.log(`${letterOne}`);
            }
        }
    }
}

//solve(3);