// Simple scroll animation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Example: Highlight project cards on hover
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.transition = "0.3s";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Contact form submission handling (dummy)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // In a real site you'd send the data via AJAX or similar
    alert('Thank you for your message, ' + this.name.value + '! I will get back to you soon.');
    this.reset();
  });
}

// toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');
if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
  });
}

// reveal on scroll using IntersectionObserver
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
} else {
  // fallback: show all
  reveals.forEach(r => r.classList.add('visible'));
}

// back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}