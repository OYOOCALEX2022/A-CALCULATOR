let display = document.getElementById('display');
let currentInput = '';
let currentOperator ='';
let preValue = O;


function appendToDisplay(value) {
    currentInput +=value;
    display.innerText = currentInput;
}
