const clockDisplay = document.getElementsByClassName('clockDisplay')[0]
console.log(clockDisplay)

function displayTime(){
    

}

setInterval(()=>{
    const date = new Date()

    clockDisplay.innerHTML = date.toLocaleTimeString()
},1000)