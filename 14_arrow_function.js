const user ={
    username : "Harshit",
    price : 999,

    welcomeMessageToUser : function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }

}
// this => it accesses according to current context 

// user.welcomeMessageToUser()

user.username ="Sakshi "
// user.welcomeMessageToUser()

// console.log(this) 
// will return a empty object as there is not context in the global (node)

// but in browser the global object is window object 

function chai(){
    userName = "harshit"
    console.log(this)
}

// chai()

const chai2 = ()=>{
    userName = "harshit"
    console.log(this) 
    // in arrow function this returns empty object 

}

// chai2()


const sum = (num1, num2)=>{
    return num1+num2 //explicit return 
}

console.log(sum(3,4))

//implicit return 
const multiply = (num1, num2)=> num1*num2
const multiply2 = (num1, num2)=> (num1*num2) // same as above 

console.log(multiply(3,4))

// it is cumpolsory to to wrap a object in paranthese to retutn it 

const returnObject = ()=> {
    return {useName :"harshit"}}

returnObject()