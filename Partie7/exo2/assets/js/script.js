let bold = document.getElementById('bold');
let color = document.getElementById('color');
let enlarge = document.getElementById('enlarge');
let paragraphs = document.getElementsByTagName('p');
let fS = 16;

bold.onclick = function (e) {
    e.preventDefault();
    let i;
    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle('bold');
    }
}

color.onclick = function (e) {
    e.preventDefault();
    let i;
    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].classList.toggle('color');
    }
}

enlarge.onclick = function() {
    fS++;
    console.log(fS)
let i;
for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontSize = fS + "px";
}
}