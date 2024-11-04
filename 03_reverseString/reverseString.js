const reverseString = function(inputString) {
    let reverseString = '';
    for(let i = inputString.length - 1; i >= 0; i--){
        reverseString += inputString[i]; 
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
