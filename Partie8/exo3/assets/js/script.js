// Récupérer toutes les balises p, elle se mettent dans un tableau
let paragraphs = document.querySelectorAll('p');

// Ajouter un écouteur d'évenement sur le scroll du document
window.addEventListener('scroll', function () {
    // Ajouter une boucle forEach sur le tableau contenant les "p" où les "i" sont une instance du tableau
    paragraphs.forEach(i => {
    // créer une condition qui va récupérer le offsetTop : haut de l'élément par rapport au début de la fenêtre
    // le offestHeight qui équivaut à la hauteur de l'élément, le window.scrollY qui corresponds au niveau de scroll de la fenêtre
    // et le innerHeight qui corresponds à la hauteur de la fenêtre du navigateur. 
    // Donc si la distance entre le haut du document et l'élément + la hauteur de celui-ci est inferieure ou égale au niveau de scroll + la hauteur de la fenêtre alors
        if ((i.offsetTop + i.offsetHeight) <= (window.scrollY + innerHeight)) {
            // Ajouter la classe after qui mets l'opacité à 0
            i.classList.add('after');
           
            i.style.transition = "all .5s ease-in";``
//Sinon, si la distance entre le haut du document et l'élément + la hauteur de celui-ci est superieure ou égale au niveau de scroll + la hauteur de la fenêtre alors
        } else if ((i.offsetTop + i.offsetHeight) >= (window.scrollY + innerHeight)) {
            // Remettre l'élément à une opactié de 0
            i.classList.remove('after');
             // faire que la transition dure 0.5s avec un effet ease-in
            i.style.transition = "all .5s ease-out";
        }
    })
})