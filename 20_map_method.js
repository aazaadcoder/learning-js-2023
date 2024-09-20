const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((items) => {return items*10+1})
console.log(newNums)

//chaining map().map().filter()....

const newNumsUsingChaining = myNums
                            .map((num) => num*10)
                            .map((num) => num+1)
                            .filter((num) => num > 50 )
console.log(newNumsUsingChaining)