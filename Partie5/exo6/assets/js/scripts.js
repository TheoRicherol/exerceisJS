let input = document.getElementById('inputStyle');

input.addEventListener('focus' , border , true);
input.addEventListener('blur' , border , false);

function border() {
    input.classList.toggle('borderBlack');
}
