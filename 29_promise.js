// creating promise 

console.log("ji")
const promiseOne = new Promise((resolve, reject) => {

    //here a async task like DB calls, netowrk calls, cryptography etc

    setTimeout(() => {

        console.log("Async task Complete.")
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise Consumed")
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
        console.log("Asunc 2 done");

    }, 1000);
}).then(() => {
    console.log("Async 2 consumed/resolved")
})

console.log("harshit")

const promiseThree = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve({ name: "harshit", phone: "932213833" })
    }, 1000);
})

promiseThree.then((dataPassedInResolve) => {
    console.log(dataPassedInResolve)
})


const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ name: "harshit", password: "123" })
        }
        else {
            reject("Error: something went wrong")
        }
    }, 1000)
})

promiseFour
    .then((dataPassedInResolve) => {
        console.log(dataPassedInResolve)
        return dataPassedInResolve.name

    })
    .then((userName) => { // jab resolve hoga 
        console.log(userName)
    })
    .catch((error) => {  // jab reject hoga 
        console.log(error)
    })
    .finally(() => {// hamesa run hota hai reject ho ya resolve 
        console.log(`Finally the promise is either resolved or rejected.`)
    })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ name: "JS", password: "123" })
        }
        else {
            reject("Error: JS went wrong")
        }
    }, 1000)
})


//async await but it cannot handle errors so we have to use await 
    
async function promiseFiveIsConsumed() {
    const response = await promiseFive
    console.log(response)
}
async function promiseFiveIsConsumedTryCatch() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


promiseFiveIsConsumed()

async function getUserData(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')

    try {
        console.log( await data.json()) // await as it takes time to convert to json
    } catch (error) {
        console.log("Error: Cannot access the website")
    }
}

getUserData()

// using .then .catch

fetch('https://api.github.com/users/hnr7088')
.then((response)=>{
    // console.log(response.json()) // as this will take time we will use then chaining as next then start only after first then ends 
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{// error only when network error are coccured 
    console.log("Error: ", error)
})

console.log("end")