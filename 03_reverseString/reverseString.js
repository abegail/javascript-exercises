const reverseString = function(string) {
    const originalString = string.split('');
    const reversedString = [];

    for (i = originalString.length; i > 0; i--) {
        reversedString.push(originalString[i - 1]);
    }
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
