const score = 400 
console.log(score)

const num = new Number(100)
console.log(num)

console.log(num.toString())
console.log(num.toString().length)

console.log(num.toFixed(2))

const otherNum = 1123.6423

console.log(otherNum.toPrecision(1))
console.log(otherNum.toPrecision(4))
console.log(otherNum.toPrecision(6))

const ammount = 2313213312;
console.log(ammount.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//**************************************maths******************* */

console.log(Math.PI.toFixed(100))

console.log(Math.abs(-4))

console.log(Math.round(14.63424))

console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.sqrt(3))
console.log(Math.pow(2,3))
console.log(Math.round(Math.random()*100))
console.log(Math.min(3,4,4,5,56,6,7,7,8,8,6,5,3,3))
console.log(Math.max(3,4,4,5,56,6,7,7,8,8,6,5,3,3))


const min = 30 
const max = 50 

console.log(Math.floor((Math.random()*(max-min))+1)+min)