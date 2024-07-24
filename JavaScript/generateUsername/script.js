let name = prompt("Enter full name without space");

let nameLength = name.length;

let username = "@"+name+Math.floor((Math.random()*10)+1)+nameLength;

console.log(username);
prompt("Your username is " + username + " Give Feedback");