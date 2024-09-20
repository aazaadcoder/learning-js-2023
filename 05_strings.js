// using backticks and stirng interpolation 

let name = "harshit"

console.log(`Hello ${name}`)

//string using object string

let gameName = new String('Harshit-Negi')// each position as key value pair

console.log(gameName)
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('h'))

console.log(gameName.substring(0,5))//last index not inculded
console.log(gameName.slice(-8,4))

const newString = "    harshit.    "
console.log(newString)
console.log(newString.trim())

const url = "https://harshit.com//harshit%20Negi"
console.log(url.replace("%20","-"))


console.log(url.includes('harshit.com'))

console.log(gameName.split('-')) //(seprator, limit)


//HW : go through all string methods once 
