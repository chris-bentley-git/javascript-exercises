const removeFromArray = function(...args) {
    const array = args[0];
    const newArr = [];

    array.forEach(element => {
        if (!args.includes(element))
            newArr.push(element);
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
