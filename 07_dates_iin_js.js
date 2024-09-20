const myDate = new Date()
// console.log(myDate)
// console.log(typeof myDate)

// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// const myCreatedDate = new Date(2003,5,6)
// const myCreatedDate = new Date("2003-06-06")
const myCreatedDate = new Date("06-06-2003")
// console.log(myCreatedDate.toDateString())

const myCreatedDate2 = new Date(2003,5,6,5,3)
// console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now() // gives miliseconds after 1 jan 1970 till now 
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())// gives miliseconds 
// console.log(Math.floor(Date.now()/1000)) // now this will give seconds

console.log(myDate.getMonth()+1)
console.log(myDate.getDate())
console.log(myDate.getDay()+1)
console.log(myDate.getUTCDay())
console.log(myDate.getSeconds())

console.log(myDate.toLocaleString('default',{
    day: '2-digit',
    weekday: 'long'
}))