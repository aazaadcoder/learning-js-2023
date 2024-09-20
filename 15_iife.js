// imediately invoked function expressions iife ()()
// also to remove pollutions of the global scope 

let a = 10 ;// here i dont know why this is saying to add semicolon

(function function1(){
    //named iife
    console.log(a)
    console.log("DB Connented.")
})();

((name)=>{
    //unnamed iife
    console.log(`DB connected for ${name}`)
})("Harshit Negi")
