const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navigation');
const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); toggle.querySelector('span').textContent = '＋'; };
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  toggle.querySelector('span').textContent = open ? '−' : '＋';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
const track = document.querySelector('#review-track');
const prev = document.querySelector('#review-prev');
const next = document.querySelector('#review-next');
function updateControls() { prev.disabled = track.scrollLeft < 2; next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2; }
function scrollReviews(direction) { track.scrollBy({ left: direction * (track.querySelector('.review').getBoundingClientRect().width + 20), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
prev.addEventListener('click', () => scrollReviews(-1));
next.addEventListener('click', () => scrollReviews(1));
track.addEventListener('scroll', updateControls, {passive: true});
window.addEventListener('resize', updateControls);
updateControls();
document.querySelector('#year').textContent = new Date().getFullYear();
