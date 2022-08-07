const removeFromArray = function() {
    const args = Array.from(arguments);
    const array = args[0];
    let itemToRemove;

    for (j = 1; j < args.length; j++) {
        itemToRemove = args[j];
        for (i = 0; i < array.length; i++) {
            if (array[i] === itemToRemove) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;