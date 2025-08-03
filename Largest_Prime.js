function largestPrime(){
 let num = 12244739443;
 let factor = 2;
 let largest = 0;
 while(num > 1){
    if(num % factor == 0){
        num /= factor;
        largest = factor;
    }
    else{
        factor += 1;
    }
 }
}
console.log(`the largest prime factor is: ${largestPrime()}`);
