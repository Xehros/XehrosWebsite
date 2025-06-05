gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

ScrollTrigger.matchMedia({
  "(min-width: 0px)": function() {
    sections.forEach((section) => {
      gsap.fromTo(section,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          duration: 2,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 50%",
            scrub: 1
          }
        }
      );
    });
  }
});

// Interceptar los clics del menú y controlar el scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Cerrar la navbar ANTES de calcular la altura para evitar que afecte al scroll
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }

    if (targetSection) {
      // Usar un pequeño retraso para esperar a que la navbar colapsada aplique la transición (si la hay)
      setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const sectionTop = targetSection.offsetTop;

        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: 'smooth'
        });

        gsap.set(targetSection, { clearProps: "all" });
      }, 300); // ajusta el delay si Bootstrap usa transición más larga
    }
  });
});

