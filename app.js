// GENERAL
let appLink=document.querySelectorAll('.app-link')
let buttonsApp=document.querySelector('#buttons-app')
let inputApp=document.querySelector('#input-app')

appLink[0].addEventListener('click', function () {
    buttonsApp.style.display='block'
    inputApp.style.display='none'
})

appLink[1].addEventListener('click', function () {
    buttonsApp.style.display='none'
    inputApp.style.display='block'
})

let cancelBtn=document.querySelectorAll('.cancel-btn')
cancelBtn[0].addEventListener('click', function () {
    buttonsApp.style.display='none'
})
cancelBtn[1].addEventListener('click', function () {
    inputApp.style.display='none'
})

// BUTTONS APP
let expressionDisplay=document.querySelector('.expression-display-div')
let resultDisplay=document.querySelector('.result-display-div')
// let keys=document.querySelectorAll('.keys')
let equals=document.querySelector('.equals')
let del=document.querySelector('.del-btn')
let clear=document.querySelector('.clear-btn')
let exp=''

function display (input) {
    // let span=document.createElement('span')
    // span.textContent=input
    // resultDisplay.appendChild(span)
    resultDisplay.innerHTML=input
}

function expression (input) {
    exp=exp+input
    display(exp)
}

equals.addEventListener('click', function () {
    display("=")
    resultDisplay.innerHTML=""
    display(eval(exp))
    expressionDisplay.innerHTML=`${exp}`+'='
})

del.addEventListener('click', function () {
    exp=exp.substring(0,exp.length-1)
    // resultDisplay.innerHTML=""
    expressionDisplay.innerHTML=""
    display(exp)
})

clear.addEventListener('click', function () {
    exp=''
    expressionDisplay.innerHTML=""
    resultDisplay.innerText="enter input"
})

// INPUT APP
let keyboardInput=document.querySelector('.keyboard-input')
let resultBtn=document.querySelector('.result-btn')
let resultDiv=document.querySelector('.result-div')

keyboardInput.addEventListener('input', function (e) {
    // resultDiv.innerHTML=""
    eqn=e.target.value
    resultDiv.innerHTML=`=${eval(eqn)}`
})