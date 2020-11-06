let element1 = document.getElementById("password");
let element2 = document.getElementById("passwordConfirm");
let submitButton = document.getElementById("submitButton");

submitButton.onclick =
    function (e) {
        e.preventDefault();
        let password = element1.value;
        let passwordConfirm = element2.value;
        if (password == passwordConfirm) {
            element1.style.borderColor = "green";
            element2.style.borderColor = "green";
        } else {
            element1.style.borderColor = "red";
            element2.style.borderColor = "red";
        }
    };