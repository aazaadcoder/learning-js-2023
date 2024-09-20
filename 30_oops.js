const user = { // ye hai ek object literal
    name : "harshit",
    id : 23,
    loginCount : 10,
    signedIn :true,

    getUserData : function(){ // ye hai ek method / prototype
        console.log("Data recived from database");
        // console.log(`username: ${name}`) // ye kaam nahi karega bhai as not defined in the execution context of this function 
        console.log(`username: ${this.name}`)
        console.log(this)
    }
}

console.log(user.signedIn)
console.log(user.getUserData())
// console.log(user)

console.log(this);


// new contructor helps us create multiple instances from a single object: 
// const date = new Date()

const user1 = function (userName, loginCount, isloggedIn){
    this.userName = userName
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greetings= function(){
        console.log(`Hello ${this.userName}`)
    }

    return this // even if agar mai this return na karu implicitly automatically ho jayega okay 
}

const userOne = new user1('harshit',10,false)
// console.log(this.userName)
const userTwo = new user1('sakshi',11,true)
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor); // ye return karega iske orginal function ko 

// jab bhi tu new keyword use karega na 
//1. ek naya empty object create hoga ek naya instance 
//2. function ka ek contructor function create hota hai 
// 3.then object mai arguents pass ho jate hai 
// 4. and last mai mil jata hai hume


// study instance of 