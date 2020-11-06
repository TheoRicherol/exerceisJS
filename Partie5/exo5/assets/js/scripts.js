let ex = document.getElementById('paragraph');
let pink = document.getElementsByTagName('button')[0];
let blue = document.getElementsByTagName('button')[1];
let purple = document.getElementsByTagName('button')[2];
let bold = document.getElementsByTagName('button')[3];
let ital = document.getElementsByTagName('button')[4];

pink.addEventListener( 'click' , goPink , true)
blue.addEventListener( 'click' , goBlue , true)
purple.addEventListener( 'click' , goPurple , true)
bold.addEventListener( 'click' , goBold , true)
ital.addEventListener( 'click' , goItal , true)


function goPink() {
    if(ex.classList == 'blue' || ex.classList == 'purple'){
        ex.classList.remove('blue');
        ex.classList.remove('purple');
        ex.classList.toggle('pink');
        console.log('ok')
    }
    else{
        ex.classList.toggle('pink');
    }
}
function goBlue() {
    if(ex.classList == 'pink' || ex.classList == 'purple'){
        ex.classList.remove('pink');
        ex.classList.remove('purple');
        ex.classList.toggle('blue');
        console.log('ok')
    }
    else{
        ex.classList.toggle('blue');
    }
}
function goPurple() {
    if(ex.classList == 'blue' || ex.classList == 'pink'){
        ex.classList.remove('blue');
        ex.classList.remove('pink');
        ex.classList.toggle('purple');
        console.log('ok')
    }
    else{
        ex.classList.toggle('purple');
    }
}
function goBold() {
    ex.classList.toggle('bold');
}
function goItal() {
    ex.classList.toggle('ital');
}
