const arr = [2, 3, 5, 5, 6] //declaring an array

const arr2 = new Array(2, 4, 5, 6, 7, 8)

arr.push(1)
arr2.push(4)//add element in last

arr2.pop()//remove element from last

arr.unshift(-1)//add element in start
arr.shift()//remive that element

console.log(arr.includes(4)) //check if array contains 4 
console.log(arr)
console.log(arr2)

const toString = arr.join()   //convert array into string
console.log(toString);


const array = new Array(1, 2, 3, 4, 5)
const newArray = array.slice(0, 3) //copy value of array from 0 to 2 index and do not modify orignal array

console.log(array);
console.log(newArray);

const array2 = new Array(1, 2, 3, 4, 5, 7, 8, 9)
const newArray2 = array2.splice(2, 5) //copy value from 2nd index to 5 more elements and also remove those element from orignal array

console.log(array2);
console.log(newArray2);



