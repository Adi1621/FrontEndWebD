const names = ["Sahil","Rahul","Sam"]
const names2 = ["Julie","Sia","Lara"]

// const allNames = names.concat(names2) //merge 2 arrays

const allNames = [...names,...names2] //spread operator to merge 2 or more arrays
console.log(allNames);

const Array1 = [1,2,3,[4,5,6],[3,4,5,[4,5]]]
const newArray1 = Array1.flat(Infinity)
console.log(newArray1);

console.log(Array.isArray("Hello")); //checking if the input is array
console.log(Array.from("Hello")); //convert input into array

let score1 = 100
let score2 = 300
let score3 = 200
console.log(Array.of(score1,score2,score3)); //convert multiple inputs into array