"use strcit";

// On déclare une fonction avec le mot function
function avanceVersLeNord() {
  // ici on met le code
  console.log("Je pars vers le Nord");
  console.log("Je fais 10km");
}

// On fait appel à la fonction
avanceVersLeNord();
avanceVersLeNord();
avanceVersLeNord();

// -----------------------------------------------------------------------

// function nom(argument){}
// On peut mettre plusieurs arguments dans nos fonctions
function avanceVersOuest(distanceDeMarche, gourde) {
  console.log("Je pars vers l'Ouest.");
  console.log("Je fait " + distanceDeMarche + " km");
  console.log("Je bois à ma gourde " + gourde);
}

avanceVersOuest(15, "du thé");
avanceVersOuest(40, "de jus de cannabis");

let contenu = "des larmes de dragon";
avanceVersOuest(25, contenu);

// fonction qui se joue toute seule
// une fonction anonyme
(function () {
  console.log("Je me joue toute seule.");
})();

// fonction anonyme fléchée
(() => {
  console.log("Je me joue aussi toute seule.");
})();

//  Les variables et les portées
function add2() {
  let g = 4;
  let a = 2;
  return g + 2;
}
console.log("Ma fonction retourne : " + add2());
// a n'existe pas à l'extérieur de ma fonction
let a = "toto";
console.log(a);
