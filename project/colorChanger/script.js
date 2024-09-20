const button = document.querySelectorAll(".button")




button.forEach((buttonName) => {
        buttonName.addEventListener("click",(event)=>{
            // document.body.style.backgroundColor = buttonName.id //method1 
            document.body.style.backgroundColor = event.target.id //method2
        })
    }
)