// Array de rutas de imágenes para el fondo del encabezado
const backgroundImages = [
    './assets/HOME/CAR_1494.jpg', './assets/HOME/CAR_2754.jpg', './assets/HOME/CAR_7810.jpg', './assets/HOME/CAR_9565.jpg', './assets/HOME/DSC_8295.jpg', './assets/HOME/MDG_0605.jpg', './assets/HOME/MDG_1483.jpg', './assets/HOME/MDG_9101.jpg'  
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

// Establece un intervalo para cambiar la imagen cada 3 segundos
setInterval(changeBackground, 3000);
