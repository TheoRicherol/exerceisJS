let paragraphs = document.querySelectorAll('p')

window.addEventListener('mousewheel' , function () {
    paragraphs.forEach(i => {
        if ((i.offsetTop + i.offsetHeight) <= (window.scrollY + innerHeight)) {
            i.style.opacity = '1';
        }
    })
})