// Sidebar toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeSidebar = document.querySelector('.close-sidebar');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
  });
}

if (closeSidebar) {
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
}

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});

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
// Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  let valid = true;
  if (name === '') {
    valid = false;
    alert('Please enter your name.');
  }
  if (email === '' || !validateEmail(email)) {
    valid = false;
    alert('Please enter a valid email address.');
  }
  if (message === '') {
    valid = false;
    alert('Please enter your message.');
  }
  if (valid) {
    alert('Thank you for contacting us, ' + name + '!');
    this.reset();
  }
});
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}   