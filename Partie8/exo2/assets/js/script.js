document.querySelectorAll('a[href^="#"]').forEach(fable => {
    fable.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});