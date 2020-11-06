let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let i;
for( i=0 ; i < days.length ; i++){
    let val = document.createElement('span');
    document.body.appendChild(val).innerHTML = days[i] + " ";
    if (i>=5) {
        val.style.fontWeight = 'bolder' 
    }
}
