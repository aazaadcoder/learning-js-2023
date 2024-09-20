const form = document.querySelector('form')


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const weightInKg = parseFloat(document.querySelector('#weight').value)
    // console.log(weightInKg,typeof weightInKg)
    const heightInMeters = (parseFloat(document.querySelector('#height').value) / 100)

    if (weightInKg == "" || weightInKg < 0 || isNaN(weightInKg)) {
        alert("Enter a valid weight")
    }
    else if (heightInMeters == "" || heightInMeters < 0 || isNaN(heightInMeters)) {
        alert("Enter a valid weight")
    }
    else {
        const BMI = weightInKg / (heightInMeters ** 2)




        const BMIDisplay = document.querySelector('#bmiDisplay')
        console.log(BMI)

        // BMIDisplay.replaceWith(document.createTextNode(`BMI: ${BMI.toFixed(2)}`))
        //IMP : this above line gave error as after first click BMIDisplay got replaced hence no query with bmiDiplay Id lift so will give error in next click 
        BMIDisplay.innerHTML = `BMI: ${BMI.toFixed(2)}`


        if(BMI < 18.6){
            alert( `You are Under Weight`)
        }
        if(BMI >=18.6 && BMI <=24.9){
            alert( `You are in Normal Range`)
        }
        if(BMI >24.9){
            alert( `You are OverWeight`)
        }
   
   
   
   
   
    }

   
})


