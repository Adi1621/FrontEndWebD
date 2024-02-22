//create a arrow function thats takes string as an argument an return count of vowels in the string

const countVowels = (str) => {
    let count = 0;
    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "u" || i === "o") {
            count++;
        }
    }

    return count;
}

// let ans = countVowels("aditya");

// console.log(ans);

//print spuare root of each number in an array using for each loop 

let arr = [1, 4, 6, 8, 9, 7];

let ansArray = [];

arr.forEach((j) => {
    ansArray.push(j * j);
    return ansArray;
})

console.log(ansArray);

//map method

let newArr = arr.map((i) => {
    return i;
})

//filter method

let nums = arr.filter((i) => {
    if (i % 2 === 0) {
        return i;
    }
})

// reduce method

let maxValue = arr.reduce((i, j) => {
    return i > j ? i : j;
})

//create an array with marks of students and filter out students with 90+ marks

let studentMarks = [66, 54, 98, 90, 94, 76, 99, 100];

let filterArr = studentMarks.filter((i) => {
    if (i > 90) {
        return i > 90;
    }
})