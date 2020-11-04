let text = document.getElementById('text');


window.onscroll = textGrow;



function textGrow() {
    let growTextCalc = window.scrollY * .5;

    if (growTextCalc <= 20) {
        growTextCalc = 20;
    }
    else if(growTextCalc >= 300) {
        growTextCalc = 300;
    }
    console.log(growTextCalc);
    let fontGrow = growTextCalc + '%';
    console.log(fontGrow);

    text.style.fontSize = fontGrow;
}