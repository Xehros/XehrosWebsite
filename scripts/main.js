const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const id = section.id;

  switch (id) {
    case "inicio":
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
      break;

    case "sobremi":
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
      break;

    case "proyectos":
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
      break;

    case "contacto":
      gsap.fromTo(section,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          ease: "power2.inOut",
          duration: 4,
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 50%",
            scrub: 1
          }
        }
      );
      break;

    default:
      gsap.fromTo(section,
        { x: 0, y: 0, scale: 1 },
        {
          x: 0,
          y: 0,
          scale: 1,
          ease: "power2.inOut",
          duration: 2
        }
      );
      break;
  }
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
  });
});











