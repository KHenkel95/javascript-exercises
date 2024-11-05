const sumAll = function(startNum, endNum) {
    let addedNum = 0;
    if(startNum > endNum)[startNum, endNum] = [endNum, startNum];
    if(startNum < 0 || endNum < 0) return 'ERROR';
    if(!Number.isInteger(startNum) || !Number.isInteger(endNum)) return 'ERROR';
    for(let i = startNum; i <= endNum; i++){
        addedNum += i;
    }
    return addedNum;
};

// Do not edit below this line
module.exports = sumAll;
