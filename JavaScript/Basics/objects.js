//object literals

const sym = Symbol("key") //declaing symbol 

const user = {  //creating objects
    "name": "Rahul", //all keys in objects stored as String
    age: 19,
    location: "Delhi",
    email: "rahul@xyz.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"],

    [sym]: "xyz"
}

console.log(user["name"]); //accessing object
console.log(sym);

user.age = 20 //modifing content in object
// Object.freeze(user) // cannot modify value in object further

console.log(user);

user.greeting = function () {
    console.log("Hello user");
}

console.log(user.greeting());

user.greeting2 = function () {
    console.log(`Hello, ${this.name}`);
}

console.log(user.greeting2());




