var sum_to_n_a = function(n) {
    // your code here
    return (n * (n + 1)) / 2
};

var sum_to_n_b = function(n) {
    // your code here
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += i
    }
    return result
};

var sum_to_n_c = function(n) {
    // your code here
    if (n == 1) {
        return 1
    }
    return n + sum_to_n_c(n - 1)
};