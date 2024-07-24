function myName() {
    console.log("Aditya Kanswal")
}
//myName //reference of a function
myName() //execution of a function 

function add(num1, num2) {
    if (typeof (num1) === typeof (1) && typeof (num2) === typeof (1)) {
        console.log(num1 + num2);
    }
    else {
        console.log("NaN");
    }
}

add("a", 2)

function loginMessage(username = "Sam") { //giving default value
    if (/*username === undefined*/ !username) {
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`

}

console.log(loginMessage("Rahul"))

function calCarPrize(val1, val2, ...prize) { //rest operator
    return prize
}

console.log(calCarPrize(2000000, 5000000, 1100000, 1400000));


const obj = {
    username: "Rahul",
    id: 14
}

function objfun(object) {
    console.log(`username is ${object.username} and ${object.username}'s ID is ${object.id}`)  //passing an object in function
}

objfun(obj)

objfun({
    username: "Sam", //passing an object in function
    id: 15
})

const arr = [10, 20, 54, 67, 97]

function returnSecondValue(array) {
    console.log(arr[1])                //passing an Array in function
}

returnSecondValue(arr)











