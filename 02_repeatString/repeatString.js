const repeatString = function(string, numberOfTimes) {
    let finalString = '';

    if (numberOfTimes < 0) {
        return 'ERROR';
    }

    for (i = numberOfTimes; i > 0; i--) {
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
