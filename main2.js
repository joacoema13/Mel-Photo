// Array de rutas de imágenes para el fondo del encabezado
const backgroundImages = [
    './assets/CAR_1531.jpg', './assets/CAR_1548.jpg', './assets/DSC_7962.jpg' 
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

// Establece un intervalo para cambiar la imagen cada 15 segundos
setInterval(changeBackground, 5000);
