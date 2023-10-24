"use strict"; // treat all JS code as newer version

let name = "aditya"
let age = "18"
let isLoggedIn = false

// number => 2 to power 53
// use bigint for larger number
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

// object - JS is a object-based language. Everythning is a object in JS

//typeof - find datatypes of a variable


/**************** Datatype Conversion ******************/
let score = "33"
console.log(typeof score) //string

let scoreValue = Number(score) //converted into number
console.log(typeof scoreValue)
//"111" => 111
//"111abc" => NaN
//true => 1; false => 0

/******************* Operations ***********************/
let value = 14
let updated_value = -value

console.log(updated_value)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // Symbol never returns same value

/*Primitive Datatypes
/*String, Number, Boolean, Null, Undefined, Symbol, BigInt

Refrence (Non Primitive)
Arrays, Objects, Functions*/

const names = ["Ram", "Shaam", "Radha"]; //array

let myObj = {
    name: "Aditya", //object
    age: "18",
}

const myFunction = function () {
    console.log("hello world");  //function
}








