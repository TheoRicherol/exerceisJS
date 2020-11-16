var fables = document.querySelectorAll('a');

fables.forEach(fable => {
    fable.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(fable.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

