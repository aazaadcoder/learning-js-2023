const temprature = -30

if(temprature > 0){
    if(temprature < 40){
        console.log(`Temprature is less then 40 `);
    }
    else{
        console.log(`Temprature is greater then 40 `);
    
    }
}
else{
    console.log(`Negative value of temprature not allowed`);
}

const balance = 1000

if(balance <= 1000) console.log(`Low Balance.`); // implicit scope(single line only allowed)


if(balance <500){
    console.log(`Balance < 500`);
}
else if(balance< 750){
    console.log(`Balance < 750`);

}
else if(balance <1000){
    console.log(`Balance < 1000`);

}
else{
    console.log(`Balance < 1200`);

}

const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = true 
const loggedInFromEmail = false 

if(userLoggedIn && debitCard){
    console.log(`Allowed to buy courses.`)
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`Login Successful.`)
}

const month = 3 

switch (month) {
    case 1:
        console.log(`Januray`)
        break;
    case 2:
        console.log(`Feb`)
        break;
    case 3:
        console.log(`March`)
        break;
    case 4:
        console.log(`April`)
        break;
    case 5:
        console.log(`May`)
        break;

    default:
        console.log(`no match `)
}

const month1 = "march" 

switch (month1) {
    case "jan":
        console.log(`Januray`)
        break;
    case "feb":
        console.log(`Feb`)
        break;
    case "march":
        console.log(`March`)
        break;
    case "april":
        console.log(`April`)
        break;
    case "may":
        console.log(`May`)
        break;

    default:
        console.log(`no match `)
}


// /------------------truthy and falsy values 

const userEmail = "harshit@gmail.com" // truthy 
const userEmail1 = "" // falsy 
const userEmail2 = [] // truthy 

if(userEmail){
    console.log(`Got user email.`)
}
else{
    console.log('user email not found')
}

// falsy values 
// 0 , -0 ,false, BigInt 0n , null, undefined, NaN, ""
// rest all are truthy values like "0","false"," ", [], {}, function(){}

if(userEmail2.length){
    console.log(`Got user email2.`)
}
else{
    console.log('user email2 not found')
}
//here checking empty array or not 

//cheking empty boject or not 

const emptyObject = {
    // name: "harshit"
}

if(Object.keys(emptyObject).length){
    console.log(`Object is not empty.`)
}
else{
    console.log(`Object is empty.`)

}

console.log(false== 0 ) //true 
console.log(false===0 ) // false
console.log(false== '' ) //true
console.log(false==='' ) // false

// nullish coalescing operator ??

value1 = 5 ?? 10 
const serverResponse = undefined
value2 = serverResponse ?? null ?? 10 ?? 9 // will take the first available value 
.

console.log(value1)
console.log(value2)

// ternary operator 
// consdition ? if true  : if false 

const status = false

status ? console.log("1") : console.log("2")

const iceTeaPrice = 40

iceTeaPrice > 50 ? console.log("We will not buy.") : console.log("we will buy the coffee.")
