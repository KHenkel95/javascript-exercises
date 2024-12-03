const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]/g, "").replace(/\s/g, "");
    const reverseStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reverseStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
