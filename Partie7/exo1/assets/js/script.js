let resultDisplay = document.createElement('p');
let submitButton = document.getElementById('submitButton');

submitButton.onclick = function(evt){
    evt.preventDefault();
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let result = firstNumber * secondNumber;
    document.getElementById('result').appendChild(resultDisplay).innerHTML = result;
}
   