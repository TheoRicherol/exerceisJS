let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(day => {
    let val = document.createElement('span');
    document.body.appendChild(val).innerHTML = day + " ";
    if(day=="Samedi" || day=="Dimanche"){val.style.fontWeight = 'bolder';}
});