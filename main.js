// Vars
var navbar = document.querySelector(".navbar")
var hamb = document.querySelector(".hamb")

//Definizione funzione toggle
function toggleHamb(){
  navbar.classList.toggle("showNav")
  hamb.classList.toggle("hideNav")
}

//Invocazione funzione all'evento click
hamb.addEventListener("click", toggleHamb)


//Vars menu link
var menuLinks = document.querySelectorAll(".menuLink")

//Eseguo ciclo assegnando ad ogni variabile la funzione all'evento click
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamb) 
  }
)

