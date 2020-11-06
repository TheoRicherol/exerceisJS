let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
let i;
for (i of languages) {
    let tableVal = document.createElement('p');
    document.body.appendChild(tableVal).innerHTML = i;
}