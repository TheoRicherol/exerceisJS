let paragraph = document.getElementById('numbers');
let i;
for (i = 0; i <= 100; i++) {
    let indiv = document.createElement('span');
    paragraph.appendChild(indiv).innerHTML = i + '<br>';
    if (i % 15 == 0) {
        indiv.innerHTML = '… <br>';
    }
}