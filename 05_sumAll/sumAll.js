const sumAll = function(a, b) {
    if (a > b) {
        [a, b] = [b, a];
    }

    if (a < 0 || b < 0 ) {
        return 'ERROR';
    }

    if (typeof a == 'string' || typeof b == 'string' || typeof a == 'object' || typeof b == 'object' ) {
        return 'ERROR';
    }


    let sum = 0;
    for (i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
