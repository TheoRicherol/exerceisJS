//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {
  var days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  return days;
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function (array) {
  var days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  return days[2];
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (array) {
  var days = ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
  return days[3];
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (array) {
  array.splice( 1, 1, "php");
  return array ;
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (array) {
  array.push('ruby' , 'python');
  return array;
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (array) {
  array.splice(0,0 ,'html' , 'css');
  return array;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (array) {
  array.shift();
  return array;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (array) {
  array.pop();
  return array;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function () {
  let person = [];
  person['name'] = 'Jean';
  person['age'] = 45;
  person['city'] = 'Paris';
  return person;
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (array) {
  let person = [];
  person['name'] = 'Jean';
  person['age'] = 45;
  person['city'] = 'Paris';
  return person['name'];
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (array) {
  let person = [];
  let name = person['name'] = 'Jean';
  let age = person['age'] = 45;
  let city = person['city'] = 'Paris';
  return "Bonjour, je suis " + name +  ". J\'ai " + age + " ans et j\'habite "+ city + ".";
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  let array = string.split([',']);
  return array;
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  let sortedArray = array.sort();
  return sortedArray;
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  let string = array.toLocaleString();
  return string;
}
