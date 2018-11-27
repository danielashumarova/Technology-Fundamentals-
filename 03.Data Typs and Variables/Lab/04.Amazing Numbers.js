function solve(number) {

    let num = number.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = sum.toString().includes('9')
        ? `${number} Amazing? True`
        : `${number} Amazing? False`;
    console.log(result);
}

solve(1233);