let num1;
let operator;
let input1;
let array = [];

let screen = document.querySelector('.screen')

let number = document.querySelectorAll('#num');
number.forEach(element => {
    element.addEventListener('click', () => {

        input1 = input1 + element.textContent;
        num1 = input1.replace('undefined','')
        console.log(num1)
        screen.textContent =  + num1;
    })
});

let op = document.querySelectorAll('#op')
op.forEach(element => {
    element.addEventListener('click', () => {
        operator = element.textContent;
        screen.textContent = screen.textContent + operator;

        array.push(num1);
        array.push(operator);
        // array.push(parseInt(num1));
        input1 = undefined;
        console.log(array);
    })
});

let calc = document.querySelector('.eq');
calc.addEventListener('click', () => {
    array.push(parseInt(num1));
    screen.textContent = calculate();
    input1 = undefined;
    array = [];
});

function calculate() {
    let result = array.reduce( (initialValue, currentValue) => initialValue + currentValue)
    console.log(eval(result));
    return eval(result);
};