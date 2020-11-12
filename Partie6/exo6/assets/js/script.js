let firstNumber = 10;
// Constatnte pour ce que ne bougera jamais
const secondNumber = 2;
let result = 0;
while(firstNumber > 1){
    let result = firstNumber / secondNumber;
    firstNumber = result;
    let calcResult =  document.createElement('p');
    document.body.appendChild(calcResult).innerHTML = firstNumber;
    if(firstNumber < 1){
        document.body.removeChild(calcResult)
    }
}