const repeatString = function(string, num) {
    let rString = '';

    for (let i = 0; i < num; i++) {
        rString += string
    }

    if (num < 0) {
        return 'ERROR';
    }

    return rString;
};


// Do not edit below this line
module.exports = repeatString;
