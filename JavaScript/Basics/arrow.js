const user = {
    username: "Aditya",
    age: 21,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`); //this refers current context in scope
        console.log(this) //this refers to current object
    }
}

user.welcomeMessage()
user.username = "Rahul"
user.welcomeMessage()

console.log(this) //globally this refers to empty object in node environment
//in browser this refers to window object

const fun = () => {      //arrow function
    let a = "xyz"
    console.log(this.a)
}

fun()

const add = (num1, num2) => {
    return num1 + num2  //explicit return 
}

console.log(add(5, 4))

const add2 = (num1, num2) => (num1 + num2);  //implicit return (no need to add {} and return keyword)

console.log(add2(5, 4))

const objfun = () => ({ name: "Rahul" })

console.log(objfun());