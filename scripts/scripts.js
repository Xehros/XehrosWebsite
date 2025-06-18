
// Animación al hacer scroll (AOS ya está inicializado desde el HTML)
console.log('Página cargada y scripts funcionando correctamente');


// Cierra el menú cuando se hace clic en una opción (modo móvil)
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    if (window.getComputedStyle(navbarToggler).display !== 'none') {
      // Si el botón del menú es visible (modo móvil), simula un clic para cerrarlo
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});