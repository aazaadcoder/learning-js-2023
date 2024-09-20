const array1 = [1,2,3,4,5]
const array2 =[4,5,67,3,56,3]
// array1.push(array2)
// console.log(array1) //[ 1, 2, 3, 4, 5, [ 4, 5, 67, 3, 56, 3 ] ]

const array3 = array1.concat(array2) // returns a new array doest not modify the orginal array 
// console.log(array3)

// using spread ... (return the elements of the array in a spread way )

const array4 = [...array1,...array2]
// console.log(array4)

const array5 = [1,2,3,4,[4,5,5,66],[44,[3,4,45],45,56]]
const array6 = array5.flat(Infinity) //nested array ki value ko spread out kar deta hai 
// console.log(array5)
// console.log(array6)


// console.log(Array.isArray("harshit"))
// console.log(Array.isArray(array1))

// console.log(Array.from("harshit negi"))

// console.log(Array.from({name : "harshit"})) 
// will return empty array as not specified if we want to make array from keys or values 

const score1 = 10 
const score2 = 20 
const score3 = 30 

console.log(Array.of(score1,score2,score3))
//retruns arrays of the elements passed