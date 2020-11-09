let duplicate = document.getElementById('duplicate');

duplicate.addEventListener('click' , duplicateInputs)

function duplicateInputs() {
    let name = document.getElementById("form").cloneNode(true);
    document.getElementById('form1').append(name);
}