"use strcit";

let xCondition = 2; // number
let yCondition = 3; // number
let wCondition = "2"; // string
let zCondition = 3; // number

// Test si xCondition est plus petit que yCondition
if (xCondition < yCondition) {
  console.log("xCondition est inférieur à yCondition");
}

// Test si xCondition est plus grand que yCondition
if (xCondition > yCondition) {
  console.log("xCondition est supérieur à yCondition");
} else {
  console.log("xCondition est inférieur à yCondition");
}

// Test si xCondition existe
if (zCondition) {
  console.log("Ma variable zCondition existe");
}

// Quand ma variable a comme valeur null, la condition est false
let aCondition = null;
if (aCondition) {
  console.log("Ma variable aCondition existe");
}

// Test si xCondition est différent de 3
// != -> différent de
if (xCondition != 3) {
  console.log("xCondition est différent de 3");
}

// Test d'égalité
if (xCondition == wCondition) {
  console.log("Ils sont égaux, mais pas en typage (une string et un number)");
}

// Test d'égalité strict
if (yCondition === zCondition) {
  console.log("Ils sont strictement égaux en valeur et en typage.");
}

// Test di l'une des deux conditions est vrai
// || -> OU
if (xCondition == 2 || yCondition == 2) {
  console.log("L'un des deux est vrai.");
}

// Test si les deux sont vrais
if (xCondition === 2 && wCondition == 2) {
  console.log("Les deux sont vrais");
}

// On peut écrire un if sur une seule ligne s'il n'y qu'une instruction
if (xCondition === 2 && wCondition == 2) console.log("Les deux sont vrais.");

// Une autre façon d'écrire un "if" -> les ternaires
// Si vrai ? alors instruction : sinon (else)
// ? -> if (si oui)
// : -> else (sinon)
xCondition != yCondition
  ? console.log("Ils sont différetns")
  : console.log("Ils sont identiques");

// -------------------- LE SWITCH --------------------
let fruit = "pomme";
fruit = "poire";
switch (fruit) {
  case "pomme":
    console.log("C'est une pomme.");
    break;
  case "poire":
    console.log("C'est une poire.");
    break;

  default:
    console.log("Ce n'est ni une pomme, ni une poire");
}
