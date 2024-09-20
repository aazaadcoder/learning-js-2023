"use strict" ; // treat all js code as morden code (newer version)

// alert("hello") this will not work as we are using nodejs

// code readability should be high 

let name = "harshit"

let age = 18 

let isLoggedIn = false

let id = BigInt(3213213232133123123132);
let state;

// null => standalone value (return empty)
//undefined => variable is declared but not assigned a value 
// symbol => unique 

// object 

console.log(typeof name)
console.log(typeof null) // object 
console.log(typeof undefined)


// -------------------datatype summary------------------

// primitive => call by value(COPY)  =>USES STACK

// 7 => string, number , null, boolean, undefined, symbol, bigint

// refrence type datatype (non primitive) => USES HEAP
// array, object, functions

const Id = Symbol(123)
const anotherId = Symbol(123)

console.log(Id)
console.log(anotherId)
console.log(anotherId===Id)

const bigNumber = 3323893713873283n //bigInt 

const array = [1,2,3,4,5]

let myObj = {
    name : "harshit",
    age : 21,
}

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof array);

let userOne = {
    name : "harshit",
    age : 20 ,
}

let userTwo = userOne

userTwo.name = "saksi"

console.log(userOne.name);
console.log(userTwo.name);