// Year auto-update
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    navToggle.textContent = '☰';
  });
});


// Smooth reveal on scroll
const reveals = document.querySelectorAll('.reveal, .reveal-zoom');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
    }
  });
}, { threshold: 0.15 });
reveals.forEach(r => io.observe(r));

// Hover parallax for profile image
const profile = document.querySelector('.profile-large');
if (profile) {
  profile.addEventListener('mousemove', (e) => {
    const rect = profile.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    profile.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${y * -8}deg) scale(1.02)`;
  });
  profile.addEventListener('mouseleave', () => profile.style.transform = '');
}

// Hero CTA animation
const cta = document.querySelector('.hero-cta .primary');
if (cta) {
  setInterval(() => {
    cta.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-6px)' },
      { transform: 'translateY(0)' }
    ], { duration: 2200, iterations: 1, easing: 'cubic-bezier(.2,.9,.2,1)' });
  }, 4000);
}

// Contact form simulation
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    sendBtn.textContent = 'Sending...';
    sendBtn.disabled = true;
    setTimeout(() => {
      sendBtn.textContent = 'Sent ✓';
      sendBtn.classList.add('ghost');
      sendBtn.disabled = false;
    }, 1200);
  });
}

// Keyboard shortcut for quick scroll
document.addEventListener('keydown', (e) => {
  if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
    document.getElementById('cta-portfolio').scrollIntoView({ behavior: 'smooth' });
  }
});
