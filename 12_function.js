
function sum(num1,num2){// parameters =>parents
    let result = num1+num2 
    return result
    console.log(result); // not rechable code
}

const result = sum(3,4) // arguments 
// console.log(result)

function loginUserMessage(userName ="user"){ //default value if not argument passed 
    if(!userName){
        console.log("Enter a vaild username")
        return 
    }
    return `${userName} just logged in `
}

// console.log(loginUserMessage('harshit negi'))

// console.log(loginUserMessage())
//gives output as undefined just logged in 

//rest operator =>used to take in n number of arguments 

function calculateCartPrice(value1,value2,...price){ 
    console.log(`value1: ${value1}, value2: ${value2}`)
    return price
}

// console.log(calculateCartPrice(200,300,400,500))

const user ={
    name : "harshit",
    age : 20
}

function handleObject(objectName){
    console.log(`userName: ${objectName.name}, userAge: ${objectName.age}`)
}

handleObject(user)
handleObject({
    name: "sakshi",
    age: 15
})