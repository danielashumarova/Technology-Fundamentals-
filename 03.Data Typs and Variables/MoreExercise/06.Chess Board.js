function solve(n) {

    let count = 1;
    result = '<div class="chessboard">\n';

    for (let j = 1; j <= n; j++) {
        result += '  <div>\n';

        for (let i = 1; i <= n; i++) {
            if ((i + j) % 2 === 0) {
                result += '    <span class="black"></span>\n';
            } else {
                result += '    <span class="white"></span>\n';
            }
            count++;
        }
        result += '  </div>\n';
    }

    result += '</div>';
    console.log(result);
}

//solve(3);