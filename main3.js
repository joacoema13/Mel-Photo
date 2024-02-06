// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener la imagen y el texto del modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Obtener los elementos de cierre del modal
var closeBtn = document.getElementsByClassName("close")[0];
var prevBtn = document.getElementsByClassName("prev")[0];
var nextBtn = document.getElementsByClassName("next")[0];

// Obtener todas las imágenes de la cartera
var portfolioImages = document.querySelectorAll("#portfolio .grid-item img");

// Variable para almacenar el índice de la imagen actual
var currentSlideIndex = 0;

// Función para abrir el modal con una imagen específica
function openModalWithImage(imageSrc, caption) {
  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = caption;
}

// Event listener para cerrar el modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Event listener para la navegación entre imágenes
prevBtn.addEventListener("click", function() {
  currentSlideIndex = (currentSlideIndex - 1 + portfolioImages.length) % portfolioImages.length;
  var image = portfolioImages[currentSlideIndex];
  openModalWithImage(image.src, image.alt);
});

nextBtn.addEventListener("click", function() {
  currentSlideIndex = (currentSlideIndex + 1) % portfolioImages.length;
  var image = portfolioImages[currentSlideIndex];
  openModalWithImage(image.src, image.alt);
});

// Agregar event listener a todas las imágenes de la cartera
portfolioImages.forEach(function(image, index) {
  image.addEventListener("click", function() {
    openModalWithImage(image.src, image.alt);
    currentSlideIndex = index;
  });
});
