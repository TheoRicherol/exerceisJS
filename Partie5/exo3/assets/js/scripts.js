let mailTest = /\w+@+\w+.\w/;
let mailInput = document.getElementById('mail');

mailInput.addEventListener("blur", mailVerif);

function mailVerif() {
    let mail = document.getElementById('mail').value;
    console.log(mail);
    if (mailTest.test(mail) == true) {
        mailInput.classList.add('borderGreen');
    } else if (mailTest.test(mail) == false) {
        mailInput.classList.remove('borderGreen')
        mailInput.classList.add('borderRed');
    };
}
