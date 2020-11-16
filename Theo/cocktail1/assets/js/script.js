let more = document.getElementById('more'),
    less = document.getElementById('less'),
    personVal = document.getElementById('nbrPerson'),
    selectorCocktail = document.getElementById('cocktailselect'),
    multiple = (a, b) => a * b,
    nbrPerson = personVal.value,
    selectorCocktailVal = selectorCocktail.value,




    function addNbr() {
        nbrPerson++;
        personVal.value = nbrPerson;
        test();
    }

function removeNbr() {
    nbrPerson--;
    if (nbrPerson <= 1) {
        nbrPerson = 1;
    }
    personVal.value = nbrPerson;
    test();
}

function test() {
    let ingredientsM = ['Mojito :', multiple(nbrPerson, 100) + ' ml Rhum ', multiple(nbrPerson, 200) + ' ml sprite '];
    if (selectorCocktailVal === 'mojito') {
        ingredientsM.forEach(i => {
            p = document.createElement('p');
            if (p.className == 'newClass') {
                p.classList.add('newClass');
                document.body.appendChild(p).innerText = i;
            } else if
        })
    }
};



more.addEventListener('click', addNbr, true);
less.addEventListener('click', removeNbr, true);



// ['Gin Tonic :', multiple(nbrPerson, 100) + ' ml Gin ', multiple(nbrPerson, 200) + ' ml Tonic ']