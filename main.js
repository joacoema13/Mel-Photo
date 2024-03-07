'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector('.navbar').style.backgroundColor = 'rgba(168, 167, 167, 0.5)';
  } else {
      document.querySelector('.navbar').style.backgroundColor = 'transparent';
  }
}


// Contenido dinámico para la sección work
const dynamicContent = [
  {
      image: "./assets/TESTIMONIOS/MDG_1207.jpg",
      title: "SESIÓN DE FOTOS EN STUDIO",
      text: '¡Mel, te pasaste! La verdad es que estoy impactada, me encantó la calidad de las fotos. Me gustaron muchísimo y me hiciste sentir muy bien durante la sesión. ¡Muchas gracias!'
  },
  {
      image: "assets/TESTIMONIOS/MDG_9098.jpg",
      title: "AGUS Y HUGO BODA",
      text: "¡Quedaron hermosas! hermoso trabajo y gracias nuevamente por la buena onda. Sos una genia estoy segura de que vas a tener éxito en todo. Estamos felices"
  },
  {
    image: "assets/TESTIMONIOS/CAR_7728.jpg",
    title: "SESIÓN FAMILIA FELIX",
    text: "El trabajo de Mel es admirable. Su paciencia, su creatividad y compromiso son notables. Quedamos muy conformes con su trabajo y la recomendamos sin dudarlo."
}
  // Agrega más objetos según sea necesario
];

let currentIndex = 0;

function updateWorkSection() {
  const workImage = document.getElementById("workImage");
  const workTitle = document.getElementById("workTitle");
  const workText = document.getElementById("workText");

  workImage.src = dynamicContent[currentIndex].image;
  workTitle.innerText = dynamicContent[currentIndex].title;
  workText.innerText = dynamicContent[currentIndex].text;

  // Incrementa el índice, vuelve a 0 si es el último elemento
  currentIndex = (currentIndex + 1) % dynamicContent.length;
}

// Actualiza cada 30 segundos (30000 milisegundos)
setInterval(updateWorkSection, 15000);

// ... (código previo)

document.getElementById("nextWork").addEventListener("click", function() {
  updateWorkSection();
});


document.getElementById("toggleNavbar").addEventListener("click", function () {
  const navbarLinks = document.querySelector(".navbar .navbar-links");
  navbarLinks.classList.toggle("show");
});

