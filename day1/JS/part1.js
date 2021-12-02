const fs = require('fs');
(function countDepthIncrease() {
    let input = fs.readFileSync('input.txt','utf-8').split(/\r?\n/);
    let arr = Array.from(input);

    function compare(element,index,array){
        if (index == 0){
            return true;
        }
        if (element > array[index-1]){
            return true;
        }
    }

    console.log(arr.filter(compare).length);
})();
