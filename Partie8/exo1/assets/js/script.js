let button = document.getElementById('scrollTop')

button.onclick = function(e){
    e.preventDefault();;
    window.scrollTo({
        top : 0, 
        behavior : "smooth"
    });
}