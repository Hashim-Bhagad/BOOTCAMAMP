let limit = 1000000n
function longestCollatzSequence(limit){

    function getLength(limit){
        let arr = [limit];
        while(limit != 1n){
            limit = limit % 2n == 0 ? limit / 2n : (limit * 3n) + 1n;
            arr.push(limit)
        }
        return arr.length;
    }
    let max = 0;
    let first;
    for(let i = limit; i >= 1n; i--){
        if(getLength(i) > max){
            max = getLength(i);
            first = i;
        }
    }

    return first;
}

console.log("The number which generates the largest collatz sequence is: " + longestCollatzSequence(limit))