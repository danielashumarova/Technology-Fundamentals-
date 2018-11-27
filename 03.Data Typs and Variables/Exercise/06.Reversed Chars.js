function solve(one, two, three) {

    let str = one + two + three + '';

    let result = '';
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i] + ' ';
    }
    console.log(`${result}`);

}

//solve('a', 'b', 'c')