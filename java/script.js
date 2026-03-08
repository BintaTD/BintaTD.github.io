// ===== HIGHLIGHT NAV AU SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => navObserver.observe(section));


// ===== APPARITION AU SCROLL =====
const fadeEls = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => fadeObserver.observe(el));


// ===== SÉCURITÉ : forcer visible après 1s =====
setTimeout(() => {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    el.classList.add('visible');
  });
}, 1000);