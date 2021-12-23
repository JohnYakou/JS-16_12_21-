switch (cpt) {
  //salut
  case 1:
    innerHTML = "Salut";
    break;
  // Je suis designer web
  case 2:
    title.innerHTML = "Je suis designer web";
    break;
  // Je sais concevoir
  case 3:
    title.innerHTML = "Je sais concevoir";
    break;
  // et développer
  case 4:
    title.innerHTML = "et développer";
    break;
  // des sites web !
  case 5:
    title.innerHTML = "des sites web !";
    cpt = 0;
    break;
}

setInterval(changeTitle, 3000);
