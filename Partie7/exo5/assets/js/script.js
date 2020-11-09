
// Fonction fléchée
let getStringLength = (string) => {
  let stringLength;
  if (string.length === 1) {
      stringLength = 'La chaîne contient qu\'un seul caractère';
  } else {
      stringLength = `La chaîne contient ${string.length} caractères`;
  }
  return stringLength;
};


//Fonction nommée
// function getStringLength(string){
//     let stringLength;
//     if(string.length === 1){
//       stringLength = 'La chaîne contient qu\'un seul caractère';
//     } else {
//       stringLength = `La chaîne contient ${string.length} caractères`;
//     }
//     return stringLength;
//   }
console.log(document.getElementById('string').textContent)
alert(getStringLength(document.getElementById('string').textContent));