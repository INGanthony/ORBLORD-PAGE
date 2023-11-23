document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".fade-in-up2");

    // Agregar una pequeña demora antes de aplicar las transiciones
    setTimeout(function () {
        text.style.opacity = 1;
        text.style.transform = "translateY(0)";
    }, 5000); // Puedes ajustar el tiempo de espera

    // También puedes usar eventos como 'scroll' o 'click' para activar la animación
});
