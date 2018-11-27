function solve(arr) {

    let sum = 1;
    let result = [];
    let number;
    for (let i = 0; i < arr.length; i++) {
        number = Number(arr[i]);
        if (number >= 0 && number < 10) {
            for (let j = i + 1; j <= i + number; j++) {
                if (j < arr.length) {
                    sum *= Number(arr[j]);
                }
            }
                result.push(sum);
                sum = 1;


        }
    }
    console.log(Math.max(...result));
}

//solve(['100', '200', '2', '3', '2', '3', '2', '1', '1']);
//solve(['10', '20', '2', '30', '44', '3', '56', '20', '24']);