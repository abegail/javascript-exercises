const sumAll = function(firstInteger, secondInteger) {

    if (firstInteger < 0 || secondInteger < 0 || typeof(firstInteger) !== 'number' || typeof(secondInteger) !== 'number') {
        return 'ERROR';
    }

    let sum;
    let lastInteger;
    let nextInteger;

    if (firstInteger < secondInteger) {
        sum = firstInteger;
        lastInteger = secondInteger
        nextInteger = firstInteger + 1;
    } else {
        sum = secondInteger;
        lastInteger = firstInteger
        nextInteger = secondInteger + 1;
    }

    while (nextInteger <= lastInteger) {
        sum += nextInteger;
        nextInteger++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
