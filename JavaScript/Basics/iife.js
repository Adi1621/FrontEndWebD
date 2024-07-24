//Immediately Invoked Function Expressions (IIFE)

(function fun() {
    console.log("Hello");
}
)();//IIFE Functions that invoked immediately to prevent pollution from global scope variables

((user) => {
    console.log(`HI ${user}`); //IIFE in arrow function
})("Aditya");