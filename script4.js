let limit = 1000000
function longestCollatzSequence(limit){
    start = now.getMilliseconds();
    function getLength(limit){
        let arr = [limit];
        while(limit != 1){
            limit = limit % 2 == 0 ? limit / 2 : (limit * 3) + 1;
            arr.push(limit)
        }
        return arr.length;
    }
    let max = 0;
    let first;
    for(let i = limit; i >= 1; i--){
        if(getLength(i) > max){
            max = getLength(i);
            first = i;
        }
    }
    end = now.getMilliseconds
    return first;
}


let result = longestCollatzSequence(limit)
console.log("The number which generates the largest collatz sequence is: " + longestCollatzSequence(limit))
console.log(`time taken = ${end - start}`);