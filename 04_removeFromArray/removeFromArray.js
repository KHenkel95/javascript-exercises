const removeFromArray = function(inputArray, ...itemsToBeRemoved) {
    
    for(let i = inputArray.length - 1; i >= 0; i--){
        for(item of itemsToBeRemoved){
            if(inputArray[i] === item){
                inputArray.splice(i, 1);
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
