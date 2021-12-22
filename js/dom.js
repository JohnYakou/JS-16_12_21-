"use strict";
/* DOM => signifie Document Object Model 
c'est une interface de programmation qui est une représentation du HTML (de la pga web) 

Grâce au DOM on peut injecter du texte, des images, des blocks entier d'HTML */

let selectBody = document.getElementsByTagName("body");
console.log(selectBody); // dans la console c'est un HTMLCollection, donc un tableau
selectBody[0].style.background = "lightBlue";

let selectBtn = document.getElementsByTagName("button");
console.log(selectBtn);
selectBtn[0].style.fontWeight = "700"; // le premier bouton [Kyoto] (fontWeight = texte en gras)
selectBtn[1].style.fontWeight = "700"; // le deuxième bouton [Tokyo]

// Pour selectionner tous les boutons je doit faire une boucle (par défaut j'utilise "for")
let tailleSelect = selectBtn.length;
console.log(tailleSelect);

for (let i = 0; i < tailleSelect; i++) {
  selectBtn[i].style.background = "orange";
}

// On peut aussi les selectionner en fonction de leur classS
let selectClassBox = document.getElementsByClassName("box");
console.log(selectClassBox);
selectClassBox[0].style.borderRadius = "15px";

// Selection par l'id
let tagh1 = document.getElementsByTagName("h1");
console.log(tagh1);

// OU

let selectH1Id = document.getElementById("selectH1");
console.log(selectH1Id);
selectH1Id.style.visibility = "visible";

// Les querieselector (c'est quant on veut selectionner un seul élément)
let gameNoticeTitre = document.querySelector("#gameNoticeTitre");
console.log(gameNoticeTitre.textContent);
gameNoticeTitre.textContent = "Coucou";
gameNoticeTitre.style.textTransform = "uppercase";

// querySelectorAll -> plusieurs éléments peuvent être sélectionnés
let firstCaracPara = document.querySelectorAll(".firstCaracPara");
console.log(firstCaracPara);
for (let j = 0; j < firstCaracPara.length; j++) {
  // Ici on code
  firstCaracPara[j].style.color = "#3333";
  firstCaracPara[j].style.fontSize = "2rem";
}
