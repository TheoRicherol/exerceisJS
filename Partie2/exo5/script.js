let day = prompt("Choisissez une valeur entre 1 et 7")

switch (parseInt(day)) {
    case 1:
        alert("Lundi")
        break;
    case 2:
        alert("Mardi")
        break;
    case 3:
        alert("Mercredi")
        break;
    case 4:
        alert("Jeudi")
        break;
    case 5:
        alert("Vendredi")
        break;
    case 6:
        alert("Samedi")
        break;
    case 7:
        alert("Dimanche")
        break;
    default:
        alert("Ceci n'est pas un jour")
        break;
}