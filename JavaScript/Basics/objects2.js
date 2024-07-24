//object singleton
// const user = new Object()

const user = {}

user.name = "Rahul"
user.id = 69

console.log(user);

const user2 = {
    email: "abc@xyz.com",
    name: {                          //object inside object
        firstname: "Aditya",
        lastname: "Kanswal"
    }
}

console.log(user2.name.firstname);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f"
}

// const merge = Object.assign({},obj1,obj2)  //merge two or more objects
const merge = { ...obj1, ...obj2 }
console.log(merge);

console.log(Object.keys(user)); //return all key of object in array
console.log(Object.values(user));//return all values of object in array

const { name: n, id } = user
const { firstname, lastname } = user2.name
console.log(id);  //destructuring of object another way of accessing value from object

console.log(firstname);



