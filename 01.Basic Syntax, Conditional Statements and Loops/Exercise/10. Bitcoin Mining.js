function solve(arrOfString) {

    arrOfString = arrOfString.map(Number);
    let bitcoin = 11949.16;
    let gold = 67.51;
    let sum = 0;
    let boughtBitcoint = 0;
    let firstBitcoin = 0;
    let leftSum = 0;
    for (let i = 0; i < arrOfString.length; i++) {
        if ((i + 1) % 3 !== 0) {
            sum += arrOfString[i] * gold;
        }
        else {
            sum += arrOfString[i] * 0.7 * gold;
        }
        if (sum >= bitcoin && boughtBitcoint === 0) {
            firstBitcoin = i + 1;
        }
        if (sum >= bitcoin) {
            boughtBitcoint += Math.floor(sum / bitcoin);
            leftSum = sum % bitcoin;
            sum = leftSum;
        }
    }
    let result = sum.toFixed(2);

    console.log(`Bought bitcoins: ${boughtBitcoint}`);
    if (firstBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${result} lv.`);

}

//solve(['100', '200', '300'])
//solve(['50','100'])
//solve(['3124.15',
//'504.212' ,
//'2511.124'])