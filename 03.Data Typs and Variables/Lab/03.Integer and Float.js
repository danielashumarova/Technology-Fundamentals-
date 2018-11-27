function sum(one, two, tree) {

    let sumAll = Number(one) + Number(two) + Number(tree);
    if (sumAll%1===0) {
        console.log(`${sumAll} - Integer`);
    } else {
        console.log(`${sumAll} - Float`);
    }
}

sum(9, 100, 1.1);
//sum(100,200,303)