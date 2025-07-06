// Simple script for navigation highlight and greeting
window.addEventListener('DOMContentLoaded', () => {
  // Highlight current nav link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && window.location.pathname.endsWith(href)) {
      link.classList.add('active');
    }
  });

  // Example: Show a greeting in the console
  console.log('Welcome to the Old-Samanic Language site!');
});
