// Simple smooth scrolling fallback
document.addEventListener('click', (e) => {
  const target = e.target.closest('a[href^="#"]');
  if (target) {
    e.preventDefault();
    const id = target.getAttribute('href');
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});
