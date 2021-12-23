let checkbox = document.querySelector("#checkbox");
console.log(checkbox);
let input = document.querySelector("#input");
console.log(input);
let display = document.querySelector("#display");
console.log(display);

checkbox.addEventListener("click", function () {
  console.log("Je click");
  if (checkbox.checked == true) {
    console.log("La case est check");
    input.setAttribute("type", "");
    display.textContent = "Hide";
  } else {
    console.log("La case n'est pas checked");
    input.setAttribute("type", "password");
  }
});

/* document.getElementById("checkbox").addEventListener("click", function () {
  let caseCoche = "";
  if (document.getElementById("checkbox").checked == true) {
    document.getElementById("input").setAttribute("type", caseCoche);
    document.getElementById("display").innerHTML = "show";
  }else {
    //   Sinon change le type de l'input password
  }
}); */
