const number = new Number(100)
//functions in Number
console.log(number.toString())
console.log(number.toFixed(2))

const number2 = 123.8444
console.log(number2.toPrecision(3)) // return the value in String 

const number3 = 100000
console.log(number3.toLocaleString('en-In'))



/*********************************Math*******************************/

const number4 = 2.3
console.log(Math.round(number4));

console.log(Math.floor((Math.random() * 10) + 1));

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //dice