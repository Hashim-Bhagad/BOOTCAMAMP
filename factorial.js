let num = 100n;
let fact = 1n;
for(let i = 2n; i <= num; i++){
    fact *= i;
}
console.log(fact + "\n");
let sum = 0n;
while(fact != 0){
    sum += fact % 10n;
    fact /= 10n;
}
console.log("------------------------------\n")
console.log(`\nthe sum of digits of the factorial is: ${sum}`);