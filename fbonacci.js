function fibonacci(){
    let sum = 0;
    let a = 0;
    let b = 1;
    let next = a + b;
    while(next <= 4000000){
        if(next % 2 == 0){
            sum += next;
        }
        a = b;
        b = next;
        next = a + b;
    }
    return sum;
}
console.log(`the sum is:${fibonacci()}`);