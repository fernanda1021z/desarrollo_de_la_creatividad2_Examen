const sections = document.querySelectorAll('.section[id]');
const navLinks = document.querySelectorAll('.nav a');
const nav = document.querySelector('.nav');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: `-${nav.offsetHeight + 10}px 0px -60% 0px` });

sections.forEach(s => observer.observe(s));
