// JSON Objects
const MyObject = {
    name: "alice",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "coding"],
    address: { // an object adress that belongs to myObject
        city : "new york",
        zipcode: "10001"
    }
}
console.log(`Name: ${MyObject.name}`); // prints the name
console.log(`age: ${MyObject.age}`)
console.log(`Adress: ${MyObject.address.zipcode}`);
console.log(`hobbie: ${MyObject.hobbies[0]}`)
// Arrays:
let arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = i + 1;
}
console.log(arr)
let arr1 = arr.map((val) =>{ // map function iterates through the array and does operation and stores it in a new array
    return val * 3
});
console.log(arr1);
let arr2 = arr1.filter((val) =>{ // ffilters out the elements that satisy the condition
    return val % 5 == 0;
});
console.log(arr2)
let arr3 = arr2.reduce((res, val) =>{ // resuces the array to a single
    return res + val;
});
console.log(arr3)

// AN array of objects
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "charlie", age: 25}
];
let avg = users.reduce((average, val) =>{
    return average +  val.age
}, 0);
avg = avg / users.length;
console.log(`average is: ${avg}`);

let num = BigInt(2) ** BigInt(1000);
let numStr = num.toString().split('')
let sum = numStr.reduce((sum, val) =>{
    return sum + Number(val);
}, 0);
console.log(sum);