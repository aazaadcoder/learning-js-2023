const myNums = [1,2,3]

const myTotal = myNums.reduce( (accumulator, currentValue)=> {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`)
    return accumulator + currentValue
},0)

// console.log(myTotal)

const shoppingCart = [
    {
        item : "js course",
        price : 999
    },
    {
        item : "cpp course",
        price : 199
    },
    {
        item : "python course",
        price : 9999
    },
    {
        item : "data science course",
        price : 1999
    },
]

const totalCost = shoppingCart.reduce( (accumulator, currentValue)=>{
    console.log(`Cost of item ${currentValue.item} is ${currentValue.price}`)
    return accumulator + currentValue.price
},0)

console.log(`Your total bill is: ${totalCost}`)