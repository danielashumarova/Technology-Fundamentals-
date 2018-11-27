function solve(stringParamsOne, charP, stringParamsTwo) {

    let str = stringParamsOne.replace('_', charP);

    let output = str === stringParamsTwo ? 'Matched' : 'Not Matched';

    console.log(output);

}

//solve('Str_ng', 'I', 'Strong')
//solve('Str_ng', 'i', 'String');
