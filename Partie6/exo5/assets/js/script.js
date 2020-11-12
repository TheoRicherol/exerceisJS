// Constante pour ce qui ne bougera pas
const firstNumber = 2;
let secondNumber = 2;
let result = 0;
while(secondNumber < 250){
    let result = firstNumber * secondNumber;
    secondNumber = result;
    let calcResult =  document.createElement('p');
    document.body.appendChild(calcResult).innerHTML = secondNumber;
    if(secondNumber > 250){
        document.body.removeChild(calcResult);
    }
}