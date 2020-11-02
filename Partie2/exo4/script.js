let note = prompt("Donnez-une note");

if (0 < note && note < 3) {
    alert("Nul")
} else if (4 < note && note < 6) {
    alert("Moyen")
} else if (6 <= note && note < 8) {
    alert("Assez bien")
} else if (8 <= note && note < 9) {
    alert("Bien")
} else if (note == 10) {
    alert("Excellent")
} else if (typeof note === 'string'){
    alert("Veuillez entrer un chiffre")
} else {
    alert("Ceci n'est pas une note")
}