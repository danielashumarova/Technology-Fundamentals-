function solve(number) {

    let sum = 0;
    number = number.toString();
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    console.log(`${sum}`);
}

//solve(245678)