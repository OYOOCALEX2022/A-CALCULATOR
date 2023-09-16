let display = document.getElementById('display');
let currentInput = '';
let currentOperator ='';
let preValue = O;


function appendToDisplay(value) {
    currentInput +=value;
    display.innerText = currentInput;
}

function clearDisplay() {
currentInput = '';
currentOperator = '';
preValue = 0;
display.innerText = '0';
}

function calculateResult() {
    if (currentInput === '') return;
    const currentValue = parseFoat(currentInput);

    switch (currentOperator) {
        case '+':
             preValue +=currentValue;
             break;
        case '-':
             preValue -=currentValue;
             break;
        case '*':
            preValue *=currentValue;
             break;
        case '/':
             if (currentValue !== 0) {
                 prevalue /= currentValue;
             } else {
                alert ('Error: Division by zero');
                clearDisplay();
                return;
             }
             break;
         default:
               preValue = currentValue;
               break;
       }
    display.innerText = preValue;
    currentInput ='';
    currentOperator='';
}  

clearDisplay();
