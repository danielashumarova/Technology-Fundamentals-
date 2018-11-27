function sort(arr) {

    arr.sort((a, b) => {
        return b - a;
    });

    console.log(arr.join('\n'));
}

sort([0, 0, 2]);