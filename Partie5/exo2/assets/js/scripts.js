let password = document.getElementById('password');
let passwordConfirm = document.getElementById('passwordConfirm');
let buttonSubmit = document.getElementById('submitButton');
// element1.addEventListener('blur', testPWD , true)
// element2.addEventListener('blur', testPWD , true)

buttonSubmit.onclick = function(e) {
    e.preventDefault;
    if (password.value === passwordConfirm.value) {
        password.classList.toggle('borderGreen');
        passwordConfirm.classList.toggle('borderGreen');
    } else {
        password.classList.toggle('borderRed');
        pass.classList.toggle('borderRed');
    }
};