let myArray = [1, 23, 4, 55, 6]
for (const i of myArray) {
    // console.log(i)
}

for (const i of "harshit") {
    // console.log(i)

}


const map = new Map()
map.set(1, "Harshit Negi ")
map.set(2, "Sakshi Negi ")
map.set(3, "Champa Negi ")
map.set(1, "Harshit Negi ") // this will not be added  as in map entries are unique 

// console.log(map)

for (const [key, value] of map) { // destructering of array 
    // console.log(`${key} => ${value}`)
}

const myObject = {
    name: "harshit",
    age: 12,
    class: "2nd year"
}

// for(const [key,value] of myObject){
//     console.log(key,value) //will give error as myObject is not iterable like this 
// }

//for in loop for objects => it only gives access to key or index of the datatype
for (const key in myObject) {
    // console.log(`${key} -> ${myObject[key]}`)
}

for (const i in "harshit") {
    // console.log(i) // will return index of the string
}

for(const i in map){
    console.log(i)// no output as maps are not iterable
}

const language =["cpp", "c", "java", "ruby","python"]

// language.forEach((item)=>{
//     console.log(item)
// })

function printMe(item){
    // console.log(item)
}

language.forEach(printMe)// here we are just giving repfrence not excutng the fucntion 

language.forEach((item, key,arr)=>{
    //  console.log(item, key, arr)

})



const programming =[
    {
        languageName : "python",
        languageExtension : "py"
    },
    {
        languageName : "C++",
        languageExtension : "cpp"
    },
    {
        languageName : "javascript",
        languageExtension : "js"
    },
    {
        languageName : "c-lang",
        languageExtension : "c"
    }
]

programming.forEach( (item) =>{
    // console.log(`${item.languageName} -> ${item.languageExtension}`)
})

const values = language.forEach((item, key,arr)=>{
    //  console.log(item, key, arr)
    return item 
})

console.log(values)// for each dosenot return any value for that we have other methods 