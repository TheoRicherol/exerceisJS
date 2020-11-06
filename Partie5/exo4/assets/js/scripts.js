let img = document.getElementById('imgChange');

img.addEventListener('mouseover' , enlarge , true);
img.addEventListener('mouseleave' , enlarge , false);
img.addEventListener( 'click' , changeSrc , true);


function enlarge() {
    img.classList.toggle('imgBig');
    console.log('ok')
}

function changeSrc() {
    let imgSrc = img.src;
    console.log(imgSrc);
    if (img.src.match('iphone')) {
        img.src = "assets/img/ipad.jpg";
    }
    else{
        img.src = 'assets/img/iphone.jpeg';
    }
} 