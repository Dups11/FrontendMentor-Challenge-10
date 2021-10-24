// A améliorer :
// [] gérer les doubles entrées au niveau du "."
// [] gérer les entrées successives d'opérateurs de calcul et ne garder que le dernier dans le cas de saisie consécutive.
// [] Récuperer le résultat aprés appui sur "=" pour nouveau calcul consécutif

// Création des variables

const numbers = document.querySelectorAll(".number");
const functions = document.querySelectorAll(".function");
const screen = document.getElementById("screen");

let output = "";

// gestion des inputs numériques
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    output += number.value;
    document.getElementById("screen").innerHTML = output;
    // console.log(output);
  });
});

// gestion des fonctions de la calculatrice
functions.forEach((fn) => {
  fn.addEventListener("click", () => {
    if (fn.value === "DEL") {
      del();
    } else if (fn.value === "RESET") {
      reset();
    } else {
      result();
    }
  });
});

// RAZ
function reset() {
  output = "";
  screen.innerText = "";
}

// Suppression des entrées individuelles
function del() {
  output = output.replace(output.slice(-1), "");
  screen.innerText = output;
}

// Calcul et affichage du résultat
function result() {
  let result = eval(output);
  screen.innerHTML = result;
  output = "";
}
