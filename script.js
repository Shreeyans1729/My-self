// Smooth scroll
document.querySelectorAll('nav a').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  })
);

// Typing effect
const text = "A student, coder & AI dreamer";
const el = document.querySelector('.typed');
let idx=0;
function type(){ if(idx<text.length){
  el.textContent+=text[idx++]; setTimeout(type,60);
}}
type();

// Form handler
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('✅ Thank you, Shrey! Message received.');
  e.target.reset();
});
