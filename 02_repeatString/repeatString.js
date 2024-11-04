const repeatString = function(string, num) {
    stringTotal = '';
    if(num < 0){
        return 'ERROR';
    }
    for(let i = 0; i < num; i++){
        stringTotal += string;
    }
    return stringTotal;
};

// Do not edit below this line
module.exports = repeatString;
