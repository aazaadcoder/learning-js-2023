let addTaskButton = document.getElementsByClassName('addTask')[0]
let clearInputButton = document.getElementsByClassName('clearInput')[0]

let inputTask = document.getElementsByClassName('inputTask')[0]

let taskListDiv = document.getElementsByClassName('taskList')[0]

let taskSerialNumber = 0
addTask = () => {
    if (inputTask.value) {
        let newTaskDiv = document.createElement('div')


        newTaskDiv.setAttribute('class', 'individualTask')

        let newTaskPara = document.createElement('p')
        let newSerailNumber = document.createElement('span')
        newSerailNumber.innerHTML = taskSerialNumber
        taskSerialNumber = taskSerialNumber + 1
        newTaskPara.appendChild(newSerailNumber)


        newTaskDiv.appendChild(newTaskPara)
        taskListDiv.appendChild(newTaskDiv)
        newTaskPara.setAttribute('class', 'taskData')
        newTaskPara.innerText = inputTask.value

        let clearButton = document.createElement('button')
        clearButton.innerHTML = '✅'

        clearTask = () => {
            if (newTaskPara.style.textDecoration != 'line-through'){
                newTaskPara.style.textDecoration = 'line-through'
            }
            else{
                newTaskPara.style.textDecoration = 'none'

            }
        }

        clearButton.addEventListener('click', clearTask)
        taskListDiv.appendChild(clearButton)

        let markImportantButton = document.createElement('button')
        markImportantButton.innerHTML = '📌'

        markImportant = () => {
            if(newTaskDiv.style.backgroundColor != 'orange'){
                newTaskDiv.style.backgroundColor = 'orange'
            }
            else{
                newTaskDiv.style.backgroundColor = 'gray'
            }

        }
        markImportantButton.addEventListener('click', markImportant)
        taskListDiv.appendChild(markImportantButton)
    }
}

clearInput = () => {
    inputTask.value = ''
}
addTaskButton.addEventListener('click', addTask)

clearInputButton.addEventListener('click', clearInput)


