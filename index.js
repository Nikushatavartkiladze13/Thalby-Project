

let result = document.getElementById("result")

function calculate(){
    result.value = eval(result.value)
}

function display(symbols){
    result.value += symbols
}

function cleardisplay(){
    result.value = " "
}