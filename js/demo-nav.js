document.addEventListener('DOMContentLoaded', function () {
  const demoNavGrid = document.getElementById('demoNavGrid');

  if (!demoNavGrid) return;

  const currentPath = window.location.pathname;
  demoNavGrid.querySelectorAll('.demo-nav__btn').forEach((b) => {
    b.classList.remove('demo-nav__btn--active');
    if (
      b.dataset.href &&
      currentPath.includes(b.dataset.href.replace('.html', ''))
    ) {
      b.classList.add('demo-nav__btn--active');
    }
  });

  demoNavGrid.addEventListener('click', function (e) {
    const btn = e.target.closest('.demo-nav__btn');
    if (!btn) return;

    demoNavGrid.querySelectorAll('.demo-nav__btn').forEach((b) => {
      b.classList.remove('demo-nav__btn--active');
    });

    btn.classList.add('demo-nav__btn--active');

    const href = btn.dataset.href;
    if (href) {
      window.location.href = href;
    }
  });
});
