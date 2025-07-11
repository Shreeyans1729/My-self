document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Reveal sections on scroll
  const reveal = () => {
    document.querySelectorAll('.fade-in').forEach(sec => {
      if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();

  // Form handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('status').textContent = 'Thanks—message sent!';
    form.reset();
  });
});
