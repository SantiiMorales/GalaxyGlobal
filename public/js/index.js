window.sr = ScrollReveal();
sr.reveal('.Titulo', {
    duration: 1500,
    origin: 'bottom',
    distance:'-80px'
})
sr.reveal('.titulo-seccion', {
    duration: 1800,
    origin: 'top',
    distance:'-400px'
})
sr.reveal('.seccion-noticias', {
    duration: 1500,
    origin: 'top',
    distance:'-400px',
    delay: 1000
})
sr.reveal('.contenedor-contacto', {
    duration: 1500,
    origin: 'top',
    distance:'-80px',
    delay: 800
})
sr.reveal('.seccion-planetas', {
  duration: 1000,
  origin: 'left',
  distance:'-400px',
  delay: 1000
})
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }