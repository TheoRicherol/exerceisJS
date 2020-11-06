let text = document.getElementById('text');


window.onscroll = textGrow;



function textGrow() {
    let growTextCalc = window.scrollY * .01;
    if (growTextCalc <= 1) {
        growTextCalc = 1;
    }
    else if(growTextCalc >= 5) {
        growTextCalc = 5;
    }
    let fontGrow = growTextCalc + 'em';
    text.style.fontSize = fontGrow;
}