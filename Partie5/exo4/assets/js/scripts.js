let img = document.getElementById('imgChange');

img.addEventListener('mouseenter' , enlarge , true);
img.addEventListener('mouseleave' , enlarge , false);
img.addEventListener( 'click' , changeSrc , true);


function enlarge() {
    img.classList.toggle('imgBig');

}

function changeSrc() {
    let imgSrc = img.src;
    console.log(imgSrc);
    if (imgSrc == 'file:///Users/theoricherol/Desktop/FormationDeveloppeurWeb/Exercices/2020_10/exercicesJS/Partie5/exo4/assets/img/iphone.jpeg') {
        img.setAttribute('src' , 'assets/img/ipad.jpg');
        console.log('Bonjour');
    }
    else{
        img.setAttribute('src' , 'assets/img/iphone.jpeg');
        console.log('Coucou');
    }
}