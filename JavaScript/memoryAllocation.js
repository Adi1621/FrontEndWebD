// Stack (Primitive), Heap (Non-Primitive)

// stack use copy of data
let myName = "Aditya Kanswal"
let anotherName = myName
anotherName = "Mohan"

console.log(myName)
console.log(anotherName)


// heap use reference
let userOne = {
    email: "user@xyz.com"
}

let userTwo = userOne
userTwo.email = "user@google.com"

console.log(userOne.email)
console.log(userTwo.email)
