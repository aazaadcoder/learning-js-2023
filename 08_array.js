const numArray = [1,2,3,4,4,55,6,66,6]

const charArray =["harshit","sakshi","champa"]
const mixArray =[2,4,5 ,56,6,"hello"]

console.log(charArray[0])

numArray.push(5)
numArray.push(9)
console.log(numArray)
numArray.pop()
console.log(numArray)

numArray.unshift(8)//adds element in the start of the array but be cautious
console.log(numArray)

numArray.shift() // just like pop but for start numbers 
console.log(numArray)

console.log(numArray.includes(1))
console.log(numArray.includes(9))

console.log(numArray.indexOf(3))//gives -1 if the num in not in array

console.log(numArray.join())// converts array into joined string 
console.log(typeof numArray.join())


console.log("1: ",numArray)
console.log(numArray.slice(1,3))
console.log("2: ",numArray)
console.log(numArray.splice(1,3))// enncludes the last index but also manupulates the array 
console.log("3: ",numArray)


