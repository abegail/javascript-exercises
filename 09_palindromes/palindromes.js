const palindromes = function (string) {
    const originalString = Array.from(string.toLowerCase().replace(/[,!?.\s]/g, ""));
    const reversedString = []
    
    for (letter in originalString) {
        reversedString.unshift(originalString[letter]);
    }

    return originalString.join('') === reversedString.join('');
};

// Do not edit below this line
module.exports = palindromes;
