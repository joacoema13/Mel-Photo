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
      image: "./assets/DSC_8190.jpg",
      title: "SESION DE FOTOS EN STUDIO",
      text: '¡Mel te pasaste! La verdad que estoy impactada, me encanto la calidad de las fotos. Me re gustaron y me hiciste sentir muy bien en la sesión. Muchas gracias!'
  },
  {
      image: "assets/DSC_8247.jpg",
      title: "AGUS Y HUGO BODA",
      text: "¡Quedaron hermosas! hermoso trabajo y gracias nuevamente por la buena onda. Sos una genia estoy segura de que vas a tener éxitos en todo. Estamos felices"
  },
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

