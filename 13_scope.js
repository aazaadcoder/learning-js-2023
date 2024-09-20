
var c = 110 
let d = 13 // global scope

if(true){
    let a = 10 
    const b = 20 
    var c = 100
    let d = 11 // block scope 
    // console.log("inner d:", d);
}

// console.log(c)
// var doest not uderstand scope 

// console.log(a)//will give erorr
// console.log(b) //will give erorr

// console.log("outer d:", d); 

//only child scope can acces variable of parent fuction 
function function1(){
    let userName = 'harshit'

    function function2(){
        let websiteName ='negi.com'
        console.log(userName)
        console.log(websiteName)
    }
    // console.log(websiteName)

    function2()
}

// function1()

// when can we access a function 

console.log(addOne(9)) //will not give error
function addOne(number){
    return number+1
}


// console.log(addTwo(10)); // will give error 
const addTwo = function(number){
    return number+2
}