let submitButton = document.getElementById('submitButton');
let resultDisplay = document.createElement('p');
let multiplyThis = (a, b) => a * b;

submitButton.onclick = function (e) {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let result = multiplyThis(firstNumber,secondNumber);
    document.body.appendChild(resultDisplay).innerHTML = result;
}