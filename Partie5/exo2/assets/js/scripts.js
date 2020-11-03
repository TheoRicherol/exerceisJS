let element1 = document.getElementById('password');
let element2 = document.getElementById('passwordConfirm');

element1.addEventListener('blur', testPWD , true)
element2.addEventListener('blur', testPWD , true)

function testPWD() {
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    console.log(password)
    if (password === passwordConfirm) {
        element1.classList.add('borderGreen');
        element2.classList.add('borderGreen');
    } else {
        element1.classList.add('borderRed');
        element2.classList.add('borderRed');
    }
};