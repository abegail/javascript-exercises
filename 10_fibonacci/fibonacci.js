const fibonacci = function(n) {
    fibo = [0, 1];
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (n < 0) {
        return "OOPS"
    } else {
        for (i = 2; i <= n; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }
    }
    return fibo[n];
};

// Do not edit below this line
module.exports = fibonacci;
