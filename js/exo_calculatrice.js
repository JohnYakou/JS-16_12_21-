/** ------------------------ CALCULATRICE-------------------------------------
 *
 *
 * faire les fonction pour l'addition soustraction division et multiplication
 * stocké l'information dans une variable
 *
 *
 *
 * */
// 1- faire une fonction pour l'addition x + y
// 2- si on rajoute un chiffre on continue le calcul
// 3- faire une variable de stockage
// 4- optimiser la fonction addition juste x
// 5-faire les autre fonctions attention a la division par 0
// 6- on test la calculatrice dans le console.log

//la variable pour garder le resultat

"use strict";

function addition(x, y) {
  console.log(x + y);
}
addition(15, 40);

function division(x, y) {
  console.log(x - y);
}
division(80, 50);

function multiplication(x, y) {
  console.log(x * y);
}
multiplication(100, 50);

function division(x, y) {
  console.log(x / y);
}
division(100, 5);

// -------------------- CORRECTION --------------------

function addition(a, b) {
  //   let a = 15;
  //   let b = 3;
  let add = a + b;
  console.log(add);
}
// addition(argument a = 20, argument b = 5)
addition(20, 5);
addition(40, 10);
addition(10, 2);
addition(85, 25);

function soustraction() {
  let a = 15;
  let b = 3;
  let soustraction = a - b;
  console.log(soustraction);
}
soustraction(15, 3);

let result = 0; // variable pour stocker notre résultat

function additionCalc(x) {
  result += x;
  // ma fonction va me retourner le nouveau résultat
  return result;
}
additionCalc(2);
console.log(result);

additionCalc(8);
console.log(result);

function reset() {
  result = 0;
  return result;
}
reset();
console.log(result);

function additionCalc(x) {
  if (x === 0) {
    return (result = x);
  } else {
    result /= x;
    return result;
  }
}

function multiplicationCalc(x) {
  result += x;
  return result;
}

function reset() {
  result = 0;
  return result;
}

function divisionCalc(x) {
  if (x === 0) {
    return result;
  } else {
    result /= x;
    return result;
  }
}

console.log(result);
additionCalc(2);
console.log(result);
additionCalc(8);
console.log(result);
divisionCalc(2);
console.log(result);
divisionCalc(0);
console.log(result);
multiplicationCalc(2);
console.log(result);
multiplicationCalc(0);
console.log(result);
additionCalc(8);
console.log(result);
