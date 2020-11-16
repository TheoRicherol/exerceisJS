let paragraphs = document.querySelectorAll('p')

window.addEventListener('mousewheel', function () {
    paragraphs.forEach(i => {
        if ((i.offsetTop + i.offsetHeight) <= (window.scrollY + innerHeight)) {
            i.classList.add('after');
            i.style.transition = "all .5s ease-in";
        } else if ((i.offsetTop + i.offsetHeight) >= (window.scrollY + innerHeight)) {
            i.classList.remove('after');
            i.style.transition = "all .5s ease-out";
        }
    })
})