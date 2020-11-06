let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let submitButton = document.getElementById('submitButton');

submitButton.onclick = function(evt){
    evt.preventDefault();
    let firstNumberVal = firstNumber.value;
    let secondNumberVal = secondNumber.value;
    let result = firstNumberVal * secondNumberVal;
    let resultArea = document.getElementById('result');
    let resultDisplay = document.createElement('p');
    resultArea.appendChild(resultDisplay).innerHTML = result;
    console.log(resultArea.childElementCount);
    if(resultArea.childElementCount > 0){
        resultArea.replaceChild(resultArea.childNodes[1] , resultArea.childNodes[0] )
    }
}
 