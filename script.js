// Intersection Observer Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // reveal only once
    }
  });
}, {
  threshold: 0.1 // reveal when 10% visible
});

revealElements.forEach(el => observer.observe(el));
