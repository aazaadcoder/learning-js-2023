//trying to make pizza using callback

function makefloor() {
  return "floor";
}

function makedough(makefloor) {
  return "dough " + makefloor();
}

function makepizza(makedough) {
  return "pizza " + makedough(makefloor);
}

// console.log(makepizza(makedough));

//pratice

const P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("DB call Made.")
    resolve();
  }, 2000);
});

P1.then(() => {
  // console.log("Promise Consumed.")
});

// const P2 = new Promise((resolve, reject) => {
//   console.log("tyring to connect to db.");
//   setTimeout(() => {
//     console.log("db connected");
//     setTimeout(() => {
//       resolve({ name: "harshit", phone: "97544232" });
//       console.log("data found");
//     }, 2000);
//   }, 2000);
// });

// P2.then((dataPassedInResolve) => {
//   console.log("data recived.");
//   return dataPassedInResolve;
// })
//   .then((dataPassedInResolve) => {
//     setTimeout(() => {
//       console.log(dataPassedInResolve);
//     }, 2000);
//   })
//   .then(() => {
//     console.log("P2 consumned.");
//   });


//   console.log("hello end");

  const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
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

// promiseFiveIsConsumed()
// promiseFiveIsConsumedTryCatch()

async function getData(){
    let data;
    try{
        data = await fetch('https://jsonplaceholder.typicode.com/users');
    }catch(error){
        console.log("Unable to connect to API");
    }

    try{
        console.log(await data.json())
    }catch(error){
        console.log("unable to convert to json.")
    }
}

getData()