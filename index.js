
let task = document.getElementById("task")
let addButton = document.getElementById("add-button")
let enterTask = document.getElementById("enter-task")
let tasksContainer = document.getElementById("tasks-container")
let bigTask = document.getElementById("task-div")

addButton.addEventListener("click", function () {
    if (task.value != "") {
        enterTask.style.display = "none"

        let taskDiv = document.createElement("div")
        taskDiv.classList.add("task-div-2")

        let h3 = document.createElement("h3")
        h3.innerHTML = task.value

        taskDiv.style.width = "100%"
        tasksContainer.style.width = "100%"
        tasksContainer.appendChild(taskDiv)

        tasksContainer.style.display = "flex"
        tasksContainer.style.flexDirection = "column"
        tasksContainer.style.gap = "10px"

        task.value = ""

        const form = document.createElement("form")
        form.classList.add("checkbox")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("check")
        taskDiv.appendChild(checkbox)

        taskDiv.appendChild(h3)
        let x = document.createElement("span")
        x.classList.add("x")
        x.innerHTML = "&#10005"


        taskDiv.appendChild(x)
        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                h3.innerHTML = "Good Job ✅"
                h3.style.color = "green"
            } else {
                h3.innerHTML = "Not done ❌"
            }
        })


        x.addEventListener("click", function () {
            taskDiv.style.display = "none"
        })

    } else {
        enterTask.style.display = "flex"
    }





})








