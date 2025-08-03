//*********************** DAY 1 ********************************* 
console.log("Hello World.")
const cowsay = require("cowsay")
console.log(cowsay.think({
    text: "I am a mooodule",
    e : "^ ^",
    T : "U",
    r : true
}));
// ----------------------------------------------------------------
const now = new Date();
function greet(name, age){
    let message = `Hello! ${name} you are ${age} years old`
    return message;
}
let a = greet("Alice", 18); // a = "Hello! Alice"
// ------ loops ------
let counter = 0;
while(counter < 3){
    console.log(`count is: ${counter}`)
    counter++;
}
console.log("While loop is finished")

for(let i = 0; i < 3; i++){
    console.log(`For loop counter is: ${i}`);
}
console.log("for loop is finished!")
const names = ["Hashim", "Shreyas", "Shubangi", "Akshata", "Niharika"];
for (const fruit of names) {
    console.log(`fruit at ${i} is: ${fruit}`);
}

// -----conditionals------
let temp = 45;
if(temp >= 35){
    console.log("It's too hot today")
}
else if(temp >= 30){
    console.log("It's hot today.")
}
else{
    console.log("It's not to hot")
}
// ------------ problem -3



//----- problem 2
