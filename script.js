// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const faders = document.querySelectorAll('.section, .skill, .project');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(section => {
  section.classList.add('hidden');
  appearOnScroll.observe(section);
});

// Contact Button Scroll (if using in-header button)
function toggleContactForm() {
  const contactSection = document.querySelector('#contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Simple form validation feedback (client-side)
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const name = form.querySelector('#name');
  const email = form.querySelector('#email');
  const message = form.querySelector('#message');

  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all fields before submitting.');
    e.preventDefault();
  }
});
