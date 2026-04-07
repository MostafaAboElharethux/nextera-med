/* ============================================
   NESTERA PRO — Scroll Animations + Counters
   Usage:
     - Add class "reveal" to any element for fade-in on scroll
     - Add data-count="150" for counter animation
     - Add data-prefix="+" or data-suffix="%" for formatting
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Reveal on Scroll ---
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => revealObserver.observe(el));

  // --- Number Counter Animation ---
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1800;
        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(eased * target);
          el.textContent = prefix + current + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = prefix + target + suffix;
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObserver.observe(el));

});

/*
  Required CSS — add to your main stylesheet or <style> block:

  .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity var(--duration) var(--ease),
                transform var(--duration) var(--ease);
  }
  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
*/
