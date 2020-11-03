let element1 = document.getElementById("password");
let element2 = document.getElementById("passwordConfirm");

element1.addEventListener('blur', testPWD , true)
element2.addEventListener('blur', testPWD , true)

function testPWD() {
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;
    if (password === passwordConfirm) {
        element1.style.borderColor = "green";
       element2.style.borderColor = "green";
    } else {
        element1.style.borderColor = "red";
       element2.style.borderColor = "red";
    }
}