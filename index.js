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