// Array de rutas de imágenes para el fondo del encabezado
const backgroundImages = [
    './assets/HOME/CAR_2754.jpg', './assets/HOME/CAR_7668.jpg', './assets/HOME/CAR_9565.jpg', './assets/HOME/DSC_8295.jpg', './assets/HOME/MDG_9101.jpg', './assets/HOME/CAR_0825.jpg', './assets/HOME/CAR_9471.jpg'
    // Agrega otras rutas de imágenes según sea necesario
];

// Función para cambiar la imagen de fondo
function changeBackground() {
    const header = document.getElementById('header');
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    header.style.backgroundImage = `url('${randomImage}')`;
}

// Cambia la imagen inicialmente
changeBackground();

// Establece un intervalo para cambiar la imagen cada 4 segundos
setInterval(changeBackground, 4000);
