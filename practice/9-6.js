
// let error = true
// const promiseOne = new Promise((resolve, reject)=>{
//     if(error){
//         console.log("Error to acces DB")
//         reject()
//     }
//     else{
//         setTimeout(() => {
//             console.log("Data found in DB.")
//             resolve({name :"harshit", mail :"harshit@gmail.xyz"})
//         }, 1000);
//     }

// })

// promiseOne
// .then((dataRecived)=>{
//     console.log("Data recived from DB")
//     console.log(dataRecived);
// })
// .catch(()=>{
//     console.log("Data Not Recived from DB")
// })

// promiseOne
// .then((data)=>{
//     console.log("Data recived");
//     return data.name
// })
// .then((name)=>{
//     console.log("Name recived");
//     console.log(name)
// })
// .catch(()=>{
//     console.log("error")
// })
// .finally(()=>{
//     console.log("thank you for using our service");
// })


async function promiseOneTryCatch(){
    try{
        console.log("hello3");
        const response = await promiseOne
        console.log("hello1");
        console.log(response)
        console.log("hello2")
    }
    catch{
        console.log("error");

    }
}
promiseOneTryCatch()

async function getData(){
    
    
    try{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataJSON = await data.json()
        console.log(dataJSON);
    }

    catch(error){
        console.log(error);
        console.log("error")
    }
}

// getData()


fetch('https://api.github.com/users/hnr7088')
.then((response)=>{
    console.log("data recived");
    return response.json()
})
.then((dataJSON)=>{
    console.log("data converted to json");
    console.log(dataJSON)
})
.catch(()=>{
    console.log("error");
})
