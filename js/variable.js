"use strict";
// commentaire 1

// kamelCase : on commeence en minuscule et à chaque nouveaux mots on met une majuscule

// une varible c'est un espace dans lequel on stock des choses, c'est une boite que l'on nomme
var unTexte = "Voici une texte"; // ce qui est à droite donne sa valeur de ce qui est à gauche (par rapport au "=")
console.log(unTexte);

unTexte = "Nouveau texte";
/* A chaque fois que vous changer de var, faite un console.log */
console.log(unTexte);

/* C'est une constance, on ne peut pas la modifier */
const TVA = 20 / 100; /* pour avoir des pourcentages, on divise par 100 */
console.log(TVA);

const TVA2 = 5.5 / 100;
console.log(TVA2);

// const TVA = 60/100; ne marche pas, car on ne peut pas modifier une constante

let unChiffre = 24; // on peut changer la valeur du let
console.log(unChiffre);

unChiffre = 12;
console.log(unChiffre);

let maChaineDeCaracteres = "Ho ! Le beau variant !"; // on peut utiliser les simple ou double quote (= guillemet)
// let echappement = 'Je suis l'\autre chaine de caractères'; icin on echappe le caractère avec \

// ------------------- LA CONCATENATION --------------------
let number1 = 10;
number1 = 15;
let number2 = 55;

let phraseNumber = "Le chiffre est : " + number1 + " degrés.";
console.log(phraseNumber);

console.log(phraseNumber);
let phrase3 = `Le chiffre est : ${number1} ${number2}`; // ALT GR + 7 = ``
console.log(phrase3);
