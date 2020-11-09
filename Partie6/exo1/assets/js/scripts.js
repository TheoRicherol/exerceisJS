let para = document.getElementById('years');
let i;
for (i = 2020; i <= 2030; i++) {
    let colorSpan = document.createElement('span');
    para.appendChild(colorSpan).innerHTML = i + '<br>';
    if (i % 4 == 0 && i % 100 != 0 || i%100 ==0 && i%400 == 0) {
        console.log(i);
        colorSpan.classList.add('redColor');
    }
}

