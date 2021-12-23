"use strict";

// EN HAUT -> MES VARIABLES

let questionContainer = document.querySelector(".click_event");
console.log(questionContainer);

// Pour cibler le bouton 1
let btn1 = document.querySelector("#btn-1");
console.log(btn1);

// Pour cibler le bouton 2
let btn2 = document.querySelector("#btn-2");
console.log(btn2);

// La variable réponse
let reponse = document.querySelector(".reponse");
console.log(reponse);

// Pour le mousemove
let mouseMove = document.querySelector("#mouseMove");
console.log(mouseMove);

// -----------------------------------------------------

// J'écoute l'action du user sur la boite de ma question
questionContainer.addEventListener("click", function () {
  console.log("Je click sur boite de ma question");
});

// questionContainer.addEventListener("click", () => {

// Je crée une fonction
function maFonction() {
  console.log("Ma fonction est click");
}

// Je déclenche ma fonction quand l'user click sur la boite de la question (Kyoto ou Tokyo)
questionContainer.addEventListener("click", maFonction());

btn1.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponse.style.display = "block";
  reponse.style.visibility = "visible";
  questionContainer.style.background = "red";
  reponse.textContent = "NOOOOOOOOOOOOOOOOOOOO"; // pour changer le texte
});

btn2.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.visibility = "visible";
  questionContainer.style.background = "green";
  reponse.textContent = "BONNE REPONSE"; // pour changer le texte
});

// MOUSEMOVE
// event = e
window.addEventListener("mousemove", function (event) {
  // On récupère l'event
  console.log(event);
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

// MOUSEUP & MOUSEDOWN
window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
});

// MOUSEENTER MOUSEOUT
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "#333";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "black";
});

// MOUSEOVER
reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(20deg)";
});

/* input.value = "toto"
inputId.addEventListener("input", function () {
  console.log(input.value);
  let result = parseInt(inputId.value);
  console.log(result + 2);
}); */
