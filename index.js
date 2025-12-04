// Functions for operations
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Variables
let a;
let b;
let operator;

// Function operator
function operate(a, b, operator){
    if (operator === '-'){
        return subtract(a, b);
    }
    if (operator === '+'){
        return add(a, b);
    }
    if (operator === '*'){
        return multiply(a, b);
    }
    if (operator === '/'){
        return divide(a, b);
    }
}

const calculator = document.querySelector('.calculator');
let display = document.querySelector('.display');

// Function display digit
function displayDigit(){
    let number;
    calculator.addEventListener('click', (e) => {
        number = e.target.textContent;
        display.textContent = number;
        return number;
    })
    
}

displayDigit();

// let container = document.querySelector('.container');
// container.style.maxWidth = '700px';
// container.style.display = 'flex';
// container.style.flexWrap = 'wrap';

// // Create a grid for the calculator 
// for (let i = 0; i < 16; i++){
//     const calculator = document.createElement('div');
//     // Properties
//     calculator.style.display = 'flex';
//     calculator.style.flex = '1 1 25%';
//     calculator.style.height = '50px';
//     calculator.style.outline = '1px solid black';


//     container.appendChild(calculator);
    
// }