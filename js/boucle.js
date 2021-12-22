"use strict";

// -------------------- BOUCLEE WHILE (= TANT QUE) --------------------
// Je crée un compteur
let count = 5;
// le début du compteru
let i = 0;

while (i < 6) {
  document.write("<br> le compte de la bloucle while est de " + i + " /5</br>");
  i++;
}

// S'écrit aussi de cette manière
while (i <= count) {
  document.write("<br> le compte de la bloucle while est de " + i + " /5</br>");
  i++;
}

// --------------------------------------------------------------------------

// do while -> elle fait au monis un tour de boucle
let j = 0;

do {
  j = j + 1;
  document.write("<br> Le compte de la bloucle est de " + j + " /5</br>");
} while (j <= 1);

// -------------------------------------------------------------------------
let tabPersonnage = ["mage", "voleur", "rodeur", "guerrier"];
console.log(tabPersonnage);

// On donne la taille du tableau
let tailleTabPerso = tabPersonnage.length;
console.log(tailleTabPerso);

for (let k = 0; k < tailleTabPerso; k++) {
  document.write("<br>Le " + tabPersonnage[k] + " attaque");
  if (k === 3) {
    document.write("<br> attaque multiple");
  }
}

// ------------------------- FOR IN --------------------
// Pour utiliser les paramètres des objets
let obj = { a: 1, b: 2, c: 1 };

for (let propriete in obj) {
  document.write(`<br> La key :${propriete} -> valeur: ${obj[propriete]}`);
}
