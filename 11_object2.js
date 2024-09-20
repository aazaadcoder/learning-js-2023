const tinderUser = new Object()

tinderUser.id = 10
tinderUser.name = "happy"
tinderUser.email = "happy@gmail.com"

const regularUser = {
    email :"harshit@gmail.com",
    name : {
        userName :{
            firstName : "harshit",
            lastName : "Negi"
        }
    }
}

// console.log(regularUser.name);
// console.log(regularUser.name.userName);
// console.log(regularUser.name.userName.firstName);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {7:"g",6:"r",5:"d"}
const obj5 = {75:"gg",65:"tr",88:"t"}

const obj3 = {obj1,obj2}
// console.log(obj3)

const obj4 = Object.assign({},obj1,obj2,obj5)// this copies all the objects key and vlaue in the in the target object that is {} here obj1,2,5 are sources 
// console.log(obj4)
// console.log(obj1)

const obj6 ={...obj1,...obj2,...obj5} /// using spread operator 
// console.log(obj6)

const users = [
    {
        id: 1,
        email : "1@email.com"
    },
    {
        id: 2,
        email : "2@email.com"
    },
    {
        id: 3,
        email : "3@email.com"
    }
]

// console.log(users[1].id)
// console.log(users[0].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) 
//returns array of the keys

// console.log(Object.entries(tinderUser)) 
//reruns array of array of ket value pairs

// console.log(tinderUser.hasOwnProperty('email'))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course ={
    courseName :"js in hindi",
    price : 999,
    courseInstructor :"hitesh sir"
}

// destrcturing an object 
const {courseInstructor} = course

const {courseInstructor : instructor} = course // key : alias or variable

console.log(courseInstructor)
console.log(instructor)