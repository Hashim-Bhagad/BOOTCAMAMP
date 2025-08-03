let num = "1234567";
function getPermutations(num) {
  if (num.length == 0) {
    return [num];
  }
  let result = [];

  for (let i = 0; i < num.length; i++) {
    let currChar = num[i];
    let remainig = num.slice(0, i) + num.slice(i + 1);
    let perms = getPermutations(remainig);
    for (let perm of perms) {
        result.push(currChar + perm)
    }
  }
  return result;
}
function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
  let resNums = getPermutations(num).map(Number)
  let primes = resNums.filter(isPrime);
  let largest = primes.reduce((max, num) =>{
    return num > max ? num : max;
  });

  console.log(`largest pandigital number is: ${largest}`);
let str = "256"
let b = Number(str)
console.log(b + " " + typeof(b))
a = ["2", "5", "6"]
let c = a.map(Number)