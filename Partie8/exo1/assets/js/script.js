let button = document.getElementById('scrollTop')

button.onclick = function(e){
    // window.scrollTo(0,0);
    e.preventDefault();;
    window.scrollTo({
        top : 0, 
        behavior : "smooth"
    });
}