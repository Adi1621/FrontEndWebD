
let date = new Date();
console.log(date.toLocaleString());

let newDate = new Date(2024, 9, 15)
console.log(newDate.toDateString());

let obj = newDate.toLocaleString('default', {
    weekday: "long",
    timeZoneName: "long"

})
console.log(obj);