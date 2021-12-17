// -------------------- EXCERCIE 01 --------------------
/* 1 - Demande au user d'écrire une couleur primaire dans un prompt (bleu, rouge, jaune)
2 - Tester la couleur entrée en chaine de caractère
3 - Afficher dans la page "Bravo la couleur [...] est une couleur primaire"
4 - La couleur choisie n'est pas une couleur primaire */

let couleur = prompt("Entrer une couleur primaire");

console.log(couleur);

if (couleur == "rouge" || couleur == "bleu" || couleur == "jaune") {
  document.write("Bravo la couleur " + couleur + " est une couleur primaire !");
} else {
  document.write("La couleur " + couleur + " n'est pas une couleur primaire !");
}
