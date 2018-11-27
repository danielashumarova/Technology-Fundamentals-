function solve(arr) {

    let username = arr[0];
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        let password = arr[i];
        let str = "";
        for (let j = password.length - 1; j >= 0; j--) {
            str += password[j];
        }
        count++;
        if (username === str) {
            console.log(`User ${username} logged in.`);
        } else if (username !== str && count === 4) {
            console.log(`User ${username} blocked!`);
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
}

solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);

