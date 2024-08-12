// let name = "Conrad";

// name = name.toUpperCase();

// console.log(name);

let name = prompt("What is you name?");
let firstChar = name.slice(0, 1);
let upperCaseFirstChar = firstChar.toUpperCase();

let restOfName = name.slice(1, name.length);

restOfName = restOfName.toLowerCase();

let fullName = upperCaseFirstChar + restOfName;

alert("Hello " + fullName);