let paragraphs = document.querySelectorAll('p')

window.addEventListener('mousewheel', function () {
    paragraphs.forEach(i => {
        if ((i.offsetTop + i.offsetHeight) <= (window.scrollY + innerHeight)) {
            i.classList.add('after');
        }
    })
})