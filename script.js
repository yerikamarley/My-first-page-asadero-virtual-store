document.addEventListener('DOMContentLoaded', function () {
    // Inicializar Slick Carousel
    $('.slider').slick({
        autoplay: true, // Cambiar automáticamente las imágenes
        autoplaySpeed: 2000, // Intervalo de cambio (en milisegundos)
        arrows: false, // Ocultar las flechas de navegación
        dots: false, // Ocultar los puntos de navegación
        infinite: true // Repetir el carrusel
    });

    // Agregar funcionalidad para botones "Anterior" y "Siguiente"
    $('.change-img-button').click(function () {
        var slider = $(this).parent().find('.slider');

        if ($(this).hasClass('prev-slide')) {
            slider.slick('slickPrev');
        } else if ($(this).hasClass('next-slide')) {
            slider.slick('slickNext');
        }
    });
});

function showContactInfo(infoId) {
    var contactInfo = document.getElementById(infoId);

    if (contactInfo.style.display === 'none') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
}
