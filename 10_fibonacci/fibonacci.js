const fibonacci = function(num) {
    //I think this needs to be refactored using reduce with an array of [1] and initial value 1. Maybe?
    let arr = [0, 1];
    if(num < 0){
        return "OOPS";
    }
    for(let i = 1; i < num; i++){
        let newNum = arr[i] + arr[i-1];
        arr.push(newNum);
    }
    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
