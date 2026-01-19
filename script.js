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

// Edit Mode with Admin Authentication
const editBtn = document.createElement('button');
editBtn.innerHTML = 'Edit';
editBtn.style.position = 'fixed';
editBtn.style.bottom = '30px';
editBtn.style.right = '30px';
editBtn.style.width = '60px';
editBtn.style.height = '60px';
editBtn.style.background = '#00bcd4';
editBtn.style.color = 'white';
editBtn.style.border = 'none';
editBtn.style.borderRadius = '50%';
editBtn.style.cursor = 'pointer';
editBtn.style.fontSize = '18px';
editBtn.style.zIndex = '1000';
let authPassed = false;
const loginModal = document.createElement('div');
loginModal.id = 'login-modal';
loginModal.style.position = 'fixed';
loginModal.style.top = '0';
loginModal.style.left = '0';
loginModal.style.width = '100%';
loginModal.style.height = '100%';
loginModal.style.backgroundColor = 'rgba(0,0,0,0.8)';
loginModal.style.zIndex = '2000';
loginModal.style.display = 'none';
loginModal.style.justifyContent = 'center';
loginModal.style.alignItems = 'center';
loginModal.style.flexDirection = 'column';
loginModal.innerHTML = '<div style="background:white;padding:40px;border-radius:10px;text-align:center;width:300px;"><h2>Admin Login</h2><input type="text" id="username" placeholder="Username" style="width:90%;padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:5px;"><input type="password" id="password" placeholder="Password" style="width:90%;padding:10px;margin:10px 0;border:1px solid #ddd;border-radius:5px;"><button id="loginBtn" style="width:100%;padding:10px;background:#00bcd4;color:white;border:none;border-radius:5px;cursor:pointer;margin-top:10px;">Login</button><button id="cancelBtn" style="width:100%;padding:10px;background:#ccc;color:#333;border:none;border-radius:5px;cursor:pointer;margin-top:10px;">Cancel</button></div>';
document.body.appendChild(loginModal);
editBtn.addEventListener('click', function() {
  if (!authPassed) {
    loginModal.style.display = 'flex';
  } else {
    toggleEditMode();
  }
});
document.getElementById('loginBtn').addEventListener('click', function() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'administrator' && pass === 'P@ss20191') {
    authPassed = true;
    loginModal.style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    toggleEditMode();
  } else {
    alert('Invalid credentials!');
  }
});
document.getElementById('cancelBtn').addEventListener('click', function() {
  loginModal.style.display = 'none';
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});
function toggleEditMode() {
  const isEdit = editBtn.innerHTML === 'Edit';
  editBtn.innerHTML = isEdit ? 'Done' : 'Edit';
  document.querySelectorAll('p, h3, h1, h2').forEach(el => {
    el.contentEditable = isEdit;
    if (isEdit) {
      el.style.backgroundColor = '#f0f0f0';
      el.style.border = '1px solid #00bcd4';
      el.style.padding = '5px';
    } else {
      el.style.backgroundColor = '';
      el.style.border = '';
      el.style.padding = '';
    }
  });
}
document.body.appendChild(editBtn);


// Back-to-Top Button Functionality
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  observer.observe(section);
});

// Professional Transitions for Interactive Elements
document.querySelectorAll('.skill-box, .timeline-item, .project-box, .cert-item').forEach(element => {
  element.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    if (menuIcon) {
      navbar.style.display = 'none';
    }
  });
});
