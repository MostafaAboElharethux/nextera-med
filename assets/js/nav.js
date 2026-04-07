/* ============================================
   NESTERA PRO — Sticky Nav + Hamburger Menu
   Works for both LTR (EN) and RTL (AR)
   Required HTML IDs:
     #main-nav, #nav-hamburger, #nav-mobile-menu
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile-menu');
  const mobileLinks = document.querySelectorAll('#nav-mobile-menu a');

  // --- Scroll: add .scrolled class to nav ---
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // --- Hamburger toggle ---
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('is-open');
      mobileMenu.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      hamburger.classList.toggle('is-active');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (nav && !nav.contains(e.target)) {
        mobileMenu.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // --- Active link highlight on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#main-nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }

});
