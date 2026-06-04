const btn = document.getElementById('hamburgerBtn');
const panel = document.getElementById('mobileNavPanel');

btn.addEventListener('click', () => {
  const isOpen = panel.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', isOpen);
});
