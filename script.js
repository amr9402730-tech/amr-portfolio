// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon) {
  menuIcon.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  });
}

// Smooth Scrolling Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active Navigation Link
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.navbar a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});

// Form Validation

// Edit Button System
const btn = document.createElement('button');
btn.innerHTML = 'Edit';
btn.style.position = 'fixed';
btn.style.bottom = '30px';
btn.style.right = '30px';
btn.style.width = '60px';
btn.style.height = '60px';
btn.style.background = '#00bcd4';
btn.style.color = 'white';
btn.style.border = 'none';
btn.style.borderRadius = '50%';
btn.style.cursor = 'pointer';
btn.style.zIndex = '1000';

let mode = false;
btn.addEventListener('click', function() {
  mode = !mode;
  btn.innerHTML = mode ? 'Done' : 'Edit';
  document.querySelectorAll('p, h3').forEach(el => {
    el.contentEditable = mode;
    if (mode) el.style.backgroundColor = '#f0f0f0';
    else el.style.backgroundColor = '';
  });
});

document.body.appendChild(btn);
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}

console.log('Portfolio loaded successfully!');
