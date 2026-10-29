'use strict';

/*
  LIGHT / DARK MODE
  -----------------
  The sun / moon button sits next to the language flags on every tab.
  The choice is remembered in the browser. The colours are in assets/css/theme-light.css.
  (A tiny script in the <head> of index.html applies the saved choice before the page appears,
  so the page does not flash dark before turning light.)
*/

(function () {

  const STORE_KEY = 'portfolio-theme';
  const root = document.documentElement;

  const LABELS = {
    en: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
    fr: { toLight: 'Passer en mode clair', toDark: 'Passer en mode sombre' }
  };

  function current() {
    return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  }

  // tooltip and screen-reader text follow the theme and the site language
  function updateButtons() {
    const lang = root.getAttribute('lang') === 'fr' ? 'fr' : 'en';
    const text = current() === 'light' ? LABELS[lang].toDark : LABELS[lang].toLight;
    // label read by screen readers for the group of flag + theme buttons
    document.querySelectorAll('.lang-switch').forEach(function (group) {
      group.setAttribute('aria-label', lang === 'fr' ? "Langue et mode d'affichage" : 'Language and display mode');
    });
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('title', text);
      btn.setAttribute('aria-label', text);
      btn.setAttribute('aria-pressed', current() === 'light' ? 'true' : 'false');
    });
  }

  function setTheme(theme) {
    // short colour fade while switching
    root.classList.add('theme-animate');
    window.setTimeout(function () { root.classList.remove('theme-animate'); }, 350);

    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');

    try { localStorage.setItem(STORE_KEY, theme); } catch (e) { /* private mode: ignore */ }
    updateButtons();
  }

  // one listener for every copy of the button (the switch is copied to each tab)
  document.addEventListener('click', function (event) {
    const btn = event.target.closest('[data-theme-toggle]');
    if (btn) setTheme(current() === 'light' ? 'dark' : 'light');
  });

  // re-label the buttons when the visitor changes language
  new MutationObserver(updateButtons).observe(root, { attributes: true, attributeFilter: ['lang'] });

  updateButtons();

})();
