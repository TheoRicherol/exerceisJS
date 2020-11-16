let cocktailType = document.getElementById('cocktailType'),
    more = document.getElementById('more'),
    less = document.getElementById('less'),
    persNbr = document.getElementById('persValue'),
    resultDisplay = document.getElementById('result'),
    persValue = 1,
    submit = document.getElementById('submit'),
    multiply = (a, b) => a * b;


more.onclick = function () {
    persValue++;
    persNbr.innerHTML = persValue;
}

less.onclick = function () {
    persValue--;
    console.log(persValue);
    persNbr.innerHTML = persValue;
}


submit.onclick = function () {
    let myUl = document.createElement('ul');
    resultDisplay.appendChild(myUl);
    let ingredientsM = [multiply(persValue, 2) + " cl de rhum", multiply(persValue, 1) + "cl de sucre de canne", multiply(persValue, 6) + "Feuilles de menthe", multiply(persValue, 0.25) + "citron"];
    let i;
    for (i = 0; i < ingredientsM.length; i++) {
        resultDisplay.classList.add('classTesting');
        let li = document.createElement('li');
        myUl.appendChild(li).innerHTML = ingredientsM[i];
        if (resultDisplay.childElementCount > 0) {
            console.log(resultDisplay.childElementCount);
            resultDisplay.replaceChild(myUl[0], myUl[1]);
        }
    }
}