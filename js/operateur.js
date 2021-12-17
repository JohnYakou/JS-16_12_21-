"use strict";

// AFFECTATION APRES ADDITION
let a = 10;
let b = 5;
let addition = b + a;
console.log(addition);

a = a + b; // a = 15
console.log(a);

a += b;
console.log(a);

// AFFECTATION APRES SOUSTRACTION
a -= b;
console.log("a est égal à : " + a);

// AFFECTATION APRES MULTIPLICATION
let multiplication = a * b; // 15 * 5 = 75
console.log(multiplication);

a *= b; // 15 * 5 = 75
console.log(a);

// AFFECTATION APRES DIVISION
let division = a / b; // 75 / 5 = 15
console.log(division);

// AFFECTATION DU RESTE (MODULO)
let c = 3;
let d = 10;
let e = 9;

let reste = d % c; // 10 % 3 -> 1
console.log(reste);

let reste2 = e % c; // 9 % 3 -> 0
console.log(reste2);

// AFFECTATION APRES PUISSANCE
let puissance = d ** c; // 10 puissance 3
console.log(puissance);

// INCREMENTATION
let total = 10;
total++; // 10 + 1 = 11
console.log(total);

// DECREMENTATION
total--; // 11 - 1 = 10
console.log(total);
