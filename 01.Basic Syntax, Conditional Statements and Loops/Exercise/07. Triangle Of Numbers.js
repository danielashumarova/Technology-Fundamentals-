function solve(number) {

    for (let i = 0; i < number; i++) {
        let str = "";

        for (let j = 0; j < i + 1; j++) {
            let n = i + 1;
            str += n + " ";
        }
        console.log(`${str}`);
    }
}

//solve(3)