const arr = ["Rahul", "Smriti", "Monika"]

arr.forEach((i, j) => {      //passing callback function
    console.log(i, j);    //forEach loop
})

function print(i) {
    console.log(i);
}

arr.forEach(print)

const myCoding = [
    {
        name: "JavaScript",
        filename: "js"
    },
    {
        name: "C++",
        filename: "cpp"
    },
    {
        name: "Python",
        filename: "py"
    },
    {
        name: "Java",
        filename: "java"
    }
]

myCoding.forEach((i, j, k) => {
    console.log(i.name);      //extracting value from object in Array   
    //forEach doesnot return anything
})


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = nums.filter((i) => i > 4)    //filter return values satisfing condition
console.log(newNums);

const books = [
    {
        title: "Book 1", genre: "Fiction", publish: 2002
    },
    {
        title: "Book 2", genre: "History", publish: 1992
    },
    {
        title: "Book 3", genre: "SciFi", publish: 1914
    },
    {
        title: "Book 4", genre: "Comic", publish: 1939
    }
]

let collection = books.filter((bk) => bk.publish < 1950)

console.log(collection);
collection = books.filter((bk) => {
    return bk.publish > 1950
})

console.log(collection);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newMyNums = myNums.map((i) => {
    return i + 10
})

console.log(newMyNums);


const total = myNums.reduce((acc, curVal) => {  //reduce method
    return acc + curVal
}, 0)

console.log(total);

const courses = [
    {
        name: "Python",
        price: 599
    },
    {
        name: "Java",
        price: 999
    },
    {
        name: "Android",
        price: 5999
    },
    {
        name: "DataScience",
        price: 19999
    }
]

let totalPrice = courses.reduce((acc, rate) => {
    return acc + rate.price
}, 0)

console.log(totalPrice);