// singleton
// object.create

//object literal 

const mySym = Symbol("key1")

const jsUser = {
    name : "harshit",
    "full name" : "harshit negi ",
    [mySym] :"mykey1",
    age : 10 , 
    location : "kashipur",
    email : "harshitnegi957@gmail.com",
    isLoggedIn : false
}

// console.log(jsUser.email)
// this method cannot be used to access "full name"

// console.log(jsUser["email"])
// console.log(jsUser["full name"])

// console.log(jsUser[mySym])
// console.log(typeof jsUser[mySym])

jsUser.name = "harshit azad"

// Object.freeze(jsUser)
// now all the values of the user are locked hence cannot be changed 
jsUser.name = "harshit negi" // this will have no effect
// console.log(jsUser)


jsUser.greetings = function(){
    console.log("Hello World")
}

jsUser.greetings2 = function(){
        console.log(`Hello ${this.name}`)
}

// console.log(jsUser.greetings) 
//returns refrence of the funtion (not excuted)
// console.log(jsUser.greetings())

console.log(jsUser.greetings2())
