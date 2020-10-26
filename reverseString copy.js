const reverseString = function(stringInput) {
    let newString = '';
    for (i = 0; i < (stringInput.length); i++) {
        newString += stringInput.charAt(stringInput.length - 1 - i);
    }
    return newString;
}

module.exports = reverseString
