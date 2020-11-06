//Config Name
let nameTest = /^(\D\S)+$/;
let nameInput = document.getElementById('name');

nameInput.addEventListener("blur", nameVerif , true);

function nameVerif() {
    let name = document.getElementById('name').value;
    console.log(name);
    console.log(nameTest.test(name));
    if (nameTest.test(name) == true) {
        nameInput.classList.add('borderGreen');
    } else if (nameTest.test(name) == false) {
        nameInput.classList.remove('borderGreen');
        nameInput.classList.add('borderRed');
    };
}

//Config Mail
let mailTest = /\w[@]\w[.]\w/;
let mailInput = document.getElementById('mail');

mailInput.addEventListener("blur", mailVerif, true);

function mailVerif() {
    let mail = document.getElementById('mail').value;
    console.log(mail);
    console.log(mailTest.test(mail));
    if (mailTest.test(mail) == true) {
        mailInput.classList.add('borderGreen');
    } else if (mailTest.test(mail) == false) {
        mailInput.classList.remove('borderGreen');
        mailInput.classList.add('borderRed');
    };
}

//Config Age
let ageTest = /^([0-1][0-2]\d{1}$|\d{0,2})$/
let ageInput = document.getElementById('age');


ageInput.addEventListener("blur", ageVerif);

function ageVerif() {
    let age = document.getElementById('age').value;
    console.log(age);
    if (ageTest.test(ageInput.value)==true) {
        ageInput.classList.add('borderGreen');
    } else {
        ageInput.classList.remove('borderGreen');
        ageInput.classList.add('borderRed');
    };
}