gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const id = section.id;

  gsap.fromTo(section,
    { opacity: 0, scale: 0.5 },
    {
      opacity: 1,
      scale: 1,
      ease: "power2.inOut",
      duration: 5,
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "top 50%",
        scrub: 1
      }
    }
  );
});

// Interceptar los clics del menú y controlar el scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Resetear animación si la necesitas
        gsap.set(targetSection, { clearProps: "all" });
    }

    // Cerrar el menú de navegación si está abierto
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // simula el clic para cerrar el menú
    }
  });
});

