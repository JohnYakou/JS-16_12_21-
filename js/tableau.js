"use strict";

// Je crée un tableau de couleur
let tabColor = ["rouge", "bleu", "vert", null];
console.log(tabColor[0]);

// Connaitre la taille d'un tableau
console.log(tabColor.length);

// Entrer une nouvelle valeur dans un tableau
tabColor.push("violet");
console.log(tabColor);

// Supprimer le dernier élément du tableau
tabColor.pop();
console.log(tabColor);

// Supprimer le premier élément du tableau
tabColor.shift();
console.log(tabColor);

// Ajouter un élément au début du tableau
tabColor.unshift("orange");
console.log(tabColor);

// Trouver l'index d'un élément dans le tableau
tabColor.indexOf("bleu");
console.log(tabColor.indexOf("bleu"));

// Supprimer un élément à son index
tabColor.splice(3);
console.log(tabColor);

let tabTest = ["un", "deux", [1, 2]];
console.log(tabTest);
console.log(tabTest[0]); // retourne un
console.log(tabTest[2][0]); // retourne 1
console.log(tabTest[0] + tabTest[2][0]); // cela retourne un1 dans la console
