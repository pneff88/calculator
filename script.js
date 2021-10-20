const calculatorDisplay = document.getElementById('calculatorDisplay')

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');

const plus = document.getElementById('+');
const minus = document.getElementById('-');
const times = document.getElementById('*');
const divide = document.getElementById('/');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

let displayString = ' '

let numA = null;
let numB = null;

calculatorDisplay.textContent = displayString;

one.addEventListener('click', () => {
    displayString += '1'
    calculatorDisplay.textContent = displayString;
})
two.addEventListener('click', () => {
    displayString += '2'
    calculatorDisplay.textContent = displayString;
})
three.addEventListener('click', () => {
    displayString += '3'
    calculatorDisplay.textContent = displayString;
})

four.addEventListener('click', () => {
    displayString += '4'
    calculatorDisplay.textContent = displayString;
})

five.addEventListener('click', () => {
    displayString += '5'
    calculatorDisplay.textContent = displayString;
})
six.addEventListener('click', () => {
    displayString += '6'
    calculatorDisplay.textContent = displayString;
})

seven.addEventListener('click', () => {
    displayString += '7'
    calculatorDisplay.textContent = displayString;
})
eight.addEventListener('click', () => {
    displayString += '8'
    calculatorDisplay.textContent = displayString;
})

nine.addEventListener('click', () => {
    displayString += '9'
    calculatorDisplay.textContent = displayString;
})
zero.addEventListener('click', () => {
    displayString += '0'
    calculatorDisplay.textContent = displayString;
})

plus.addEventListener('click', () => {
    numA = Number(displayString);
    displayString = ' + '
    calculatorDisplay.textContent = displayString;
})
minus.addEventListener('click', () => {
    numA = Number(displayString);
    displayString = ' - '
    calculatorDisplay.textContent = displayString;
})
times.addEventListener('click', () => {
    numA = Number(displayString);
    displayString = ' * '
    calculatorDisplay.textContent = displayString;
})
divide.addEventListener('click', () => {
    numA = Number(displayString);
    displayString = ' - '
    calculatorDisplay.textContent = displayString;
})

equal.addEventListener('click', () => {
    numB = Number(displayString.slice(3));
    let sign = displayString[1];
    if (sign == "+") {
        displayString = (numA + numB).toString();
    } else if (sign == "-") {
        displayString = (numA - numB).toString();
    } else if (sign == "*") {
        displayString = (numA * numB).toString();
    } else if (sign == "/") {
        displayString = (numA / numB).toString();
    }
    calculatorDisplay.textContent = displayString;
})

clear.addEventListener('click', () => {
    numA = null;
    numB = null;
    displayString = ''
    calculatorDisplay.textContent = displayString;
})
