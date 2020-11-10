let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++', 'ruby', 'python'];
languages.forEach(i =>  {
    let tableVal = document.createElement('p');
    document.body.appendChild(tableVal).innerHTML = i;  
});