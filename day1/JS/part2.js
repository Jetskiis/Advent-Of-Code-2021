const fs = require('fs');
(function(){
    let input = fs.readFileSync('input.txt','utf-8').split(/\r?\n/);
    const arr = Array.from(input);

    let newArr = [];

    for(let i=3; i < arr.length; i++){
        const sum = parseInt(arr[i])+ parseInt(arr[i-1]) + parseInt(arr[i-2]);
        newArr.push(sum);
    }

    function compare(element,index,array){
        if (index == 0){
            return true;
        }
        if (element > array[index-1]){
            return true;
        }
    }

    console.log(newArr.filter(compare).length);
})();