let score = undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof(valueInNumber))
console.log(valueInNumber)

// Number converts 
// null => 0, 
// undefined=>NaN, 
// "3abc" =>NaN
// ture => 1

let isLoggedIn = -2 ; 

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 or -1 => true, 0 => false
// "" => false, "hello" => true

let number = 33

let stringNumber = String(number)
console.log(stringNumber)
console.log(typeof stringNumber)


console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)

console.log("hello" + " harshit")

console.log(1+"2")
console.log(1+2+"2")
console.log("1"+ 2 )
console.log("1"+2+2)
    
console.log(+true)
// console.log(true+)will give error

console.log(+"")
//+ acts as a convertor

let num1, num2, num3

num1 = num2 = num3 = 4

let gameCounter = 110
console.log(gameCounter++);
console.log(++gameCounter);