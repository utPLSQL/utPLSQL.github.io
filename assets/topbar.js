/**
 * utPLSQL shared top navigation bar.
 * Published at https://utplsql.org/assets/topbar.js
 *
 * CSS lives in topbar.css (loaded via extra_css / template link) so it
 * survives Material's instant-navigation head replacement.
 *
 * Sub-repositories load this script via their docs/overrides/main.html template.
 * Update this file to change the shared nav across all sub-sites simultaneously.
 */
(function () {
  'use strict';

  /* Base URL comes from the MkDocs site_url injected by the template.
     Sub-sites that load this script from utplsql.org don't set the variable,
     so they fall back to the hardcoded production URL. */
  var BASE = (window.utplsqlBaseUrl || 'https://utplsql.org/').replace(/\/+$/, '');

  var NAV = [
    { label: 'Home',          url: BASE + '/' },
    { label: 'Announcements', url: BASE + '/announcements/' },
    { label: 'Documentation', url: BASE + '/documentation.html' },
    { label: 'Downloads',     url: BASE + '/downloads.html' },
    { label: 'Resources',     url: BASE + '/resources.html' },
    { label: 'About',         url: BASE + '/about.html' },
    { label: 'Contributing',  url: BASE + '/contributing.html' },
  ];

  var SVG_MENU =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>' +
    '</svg>';

  var SVG_SUN =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>' +
    '</svg>';

  var SVG_MOON =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>' +
    '</svg>';

  /* Module-level references so the built bar can be re-inserted on instant
     navigation without recreating it (prevents the logo img from reloading). */
  var themeBtn = null;
  var savedBar = null;

  function getScheme() {
    /* Prefer our own stored key — avoids Material overwriting it on navigation */
    try {
      var own = localStorage.getItem('utplsql-scheme');
      if (own) return own;
    } catch (e) {}
    return document.body.getAttribute('data-md-color-scheme') || 'default';
  }

  function updateThemeIcon() {
    if (!themeBtn) return;
    var scheme = getScheme();
    var icons = window.utplsqlPaletteIcons;
    if (icons) {
      var entry = icons.filter(function (e) { return e.scheme === scheme; })[0];
      if (entry) {
        themeBtn.innerHTML = entry.icon;
        themeBtn.setAttribute('aria-label', entry.name);
        return;
      }
    }
    themeBtn.innerHTML = scheme === 'slate' ? SVG_SUN : SVG_MOON;
    themeBtn.setAttribute('aria-label', 'Toggle light / dark mode');
  }

  /* Re-applies our stored colour scheme to <body> after Material may have
     overwritten it during instant-navigation re-initialisation. */
  function applyStoredScheme() {
    try {
      var scheme = localStorage.getItem('utplsql-scheme');
      if (scheme) {
        document.body.setAttribute('data-md-color-scheme', scheme);
        updateThemeIcon();
      }
    } catch (e) {}
  }

  /* Updates the active class on nav links based on the current URL.
     Called on first inject and on every instant-navigation page swap. */
  function updateActiveLink() {
    var bar = document.getElementById('utplsql-topbar');
    if (!bar) return;
    var current = window.location.href;
    bar.querySelectorAll('a:not(.utplsql-brand)').forEach(function (a) {
      var isActive = a.href !== BASE + '/' && current.indexOf(a.href) === 0;
      a.classList.toggle('utplsql-active', isActive);
    });
  }

  function inject() {
    /* Topbar already in DOM — just sync state. */
    if (document.getElementById('utplsql-topbar')) {
      updateActiveLink();
      applyStoredScheme();
      return;
    }

    /* Material's instant navigation removed the topbar — re-insert the same
       DOM node so the logo <img> is not recreated and doesn't flash/reload. */
    if (savedBar) {
      document.body.insertBefore(savedBar, document.body.firstChild);
      updateActiveLink();
      applyStoredScheme();
      return;
    }

    /* ── First load: build the bar ── */
    var bar = document.createElement('nav');
    bar.id = 'utplsql-topbar';
    bar.setAttribute('aria-label', 'utPLSQL.org site navigation');

    /* Hamburger — mobile only, triggers Material's sidebar drawer */
    var hamburger = document.createElement('button');
    hamburger.className = 'utplsql-hamburger';
    hamburger.setAttribute('aria-label', 'Open navigation');
    hamburger.innerHTML = SVG_MENU;
    hamburger.addEventListener('click', function () {
      var drawer = document.querySelector('label[for="__drawer"]');
      if (drawer) drawer.click();
    });
    bar.appendChild(hamburger);

    /* Brand */
    var brand = document.createElement('a');
    brand.className = 'utplsql-brand';
    brand.href = BASE + '/';

    var icon = document.createElement('span');
    icon.className = 'utplsql-brand-icon';
    icon.setAttribute('aria-hidden', 'true');
    brand.appendChild(icon);

    var brandText = document.createElement('span');
    brandText.textContent = 'utPLSQL';
    brand.appendChild(brandText);
    bar.appendChild(brand);

    /* Nav links */
    NAV.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;
      bar.appendChild(a);
    });

    /* ── Right-aligned controls ── */
    var controls = document.createElement('div');
    controls.className = 'utplsql-controls';

    /* Theme toggle — assigned to module-level themeBtn so updateThemeIcon
       can be called from the navigation callback without re-injecting. */
    themeBtn = document.createElement('button');

    themeBtn.addEventListener('click', function () {
      var next = getScheme() === 'slate' ? 'default' : 'slate';
      document.body.setAttribute('data-md-color-scheme', next);
      /* Store under our own key so we can reliably restore after navigation */
      try { localStorage.setItem('utplsql-scheme', next); } catch (e) {}
      /* Also update Material's __palette so its own JS stays in sync */
      try {
        var stored = JSON.parse(localStorage.getItem('__palette') || 'null');
        if (stored && stored.color) {
          stored.color.scheme = next;
          stored.index = next === 'slate' ? 1 : 0;
        } else {
          stored = { index: next === 'slate' ? 1 : 0, color: { scheme: next } };
        }
        localStorage.setItem('__palette', JSON.stringify(stored));
      } catch (e) {}
      updateThemeIcon();
    });

    updateThemeIcon();
    controls.appendChild(themeBtn);
    bar.appendChild(controls);

    savedBar = bar;
    document.body.insertBefore(bar, document.body.firstChild);
    updateActiveLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  /* Material instant navigation — fires after each page swap.
     inject() returns early (topbar exists) and re-applies our stored scheme
     to override anything Material changed during its re-initialisation. */
  if (typeof document$ !== 'undefined') {
    document$.subscribe(inject);
  }
  /* Fallback: browser history navigation */
  window.addEventListener('popstate', updateActiveLink);

})();
