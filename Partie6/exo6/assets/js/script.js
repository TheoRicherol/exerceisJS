let firstNumber = 10;
let secondNumber = 2;
let result = 0;
while(firstNumber > 1){
    let result = firstNumber / secondNumber;
    firstNumber = result;
    let calcResult =  document.createElement('p');
    document.body.appendChild(calcResult).innerHTML = firstNumber;
}