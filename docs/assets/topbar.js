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
  var BASE = (window.utplsqlBaseUrl || 'https://www.utplsql.org/').replace(/\/+$/, '');

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

  /* Icons from Material for MkDocs icon set, matching the org's mkdocs.yml palette config.
     Cycle order: auto → light → dark → auto
       auto  → material/lightbulb-auto-outline  (following OS preference)
       light → material/lightbulb-outline        (forced light, click for dark)
       dark  → material/lightbulb                (forced dark, click for auto) */
  var SVG_AUTO =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<path d="M9 2c3.87 0 7 3.13 7 7 0 2.38-1.19 4.47-3 5.74V17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-2.26C3.19 13.47 2 11.38 2 9c0-3.87 3.13-7 7-7M6 21v-1h6v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1M9 4C6.24 4 4 6.24 4 9c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58 0-2.76-2.24-5-5-5m10 9h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.15 5.65L18 15l1.15 3.65z"/>' +
    '</svg>';

  var SVG_LIGHT =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5"/>' +
    '</svg>';

  var SVG_DARK =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
    '<path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7M9 21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9z"/>' +
    '</svg>';

  /* Module-level references so the built bar can be re-inserted on instant
     navigation without recreating it (prevents the logo from reloading). */
  var themeBtn = null;
  var savedBar = null;

  /* ── Theme state ─────────────────────────────────────────────────────────
     'utplsql-scheme' in localStorage holds one of three values:
       'auto'    — follow the OS prefers-color-scheme  (default when unset)
       'default' — forced light mode
       'slate'   — forced dark mode
     ─────────────────────────────────────────────────────────────────────── */

  function getPreference() {
    try { return localStorage.getItem('utplsql-scheme') || 'auto'; } catch (e) {}
    return 'auto';
  }

  function osPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /* Returns the effective Material colour scheme for the current preference. */
  function effectiveScheme(pref) {
    if (pref === 'slate' || pref === 'default') return pref;
    return osPrefersDark() ? 'slate' : 'default'; /* auto */
  }

  function applyScheme(scheme) {
    document.body.setAttribute('data-md-color-scheme', scheme);
    /* Keep Material's own __palette in sync so its JS doesn't fight us. */
    try {
      var stored = JSON.parse(localStorage.getItem('__palette') || 'null');
      if (stored && stored.color) {
        stored.color.scheme = scheme;
        stored.index = scheme === 'slate' ? 1 : 0;
      } else {
        stored = { index: scheme === 'slate' ? 1 : 0, color: { scheme: scheme } };
      }
      localStorage.setItem('__palette', JSON.stringify(stored));
    } catch (e) {}
  }

  function updateThemeIcon() {
    if (!themeBtn) return;
    var pref = getPreference();
    if (pref === 'auto') {
      themeBtn.innerHTML = SVG_AUTO;
      themeBtn.setAttribute('aria-label', 'Theme: auto (following OS) — click for light');
    } else if (pref === 'default') {
      themeBtn.innerHTML = SVG_LIGHT;
      themeBtn.setAttribute('aria-label', 'Theme: light — click for dark');
    } else {
      themeBtn.innerHTML = SVG_DARK;
      themeBtn.setAttribute('aria-label', 'Theme: dark — click for auto');
    }
  }

  /* Re-applies our stored preference after Material's navigation re-init. */
  function applyStoredScheme() {
    var pref = getPreference();
    applyScheme(effectiveScheme(pref));
    updateThemeIcon();
  }

  /* Updates the active class on nav links based on the current URL. */
  function injectDrawerNav() {
    /* Only needed on mobile — desktop shows links in the topbar itself. */
    if (!window.matchMedia('(max-width: 76.1875em)').matches) return;

    /* Already injected and still in the DOM — nothing to do. */
    if (document.getElementById('utplsql-drawer-nav')) return;

    var inner = document.querySelector('.md-sidebar--primary .md-sidebar__inner');
    if (!inner) return;

    var section = document.createElement('nav');
    section.id = 'utplsql-drawer-nav';
    section.setAttribute('aria-label', 'utPLSQL.org site navigation');

    var heading = document.createElement('div');
    heading.className = 'utplsql-drawer-heading';
    heading.textContent = 'utPLSQL.org';
    section.appendChild(heading);

    NAV.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;
      section.appendChild(a);
    });

    inner.insertBefore(section, inner.firstChild);
  }

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
      injectDrawerNav();
      return;
    }

    /* Material's instant navigation removed the topbar — re-insert the same
       DOM node so the CSS background-image icon doesn't flash. */
    if (savedBar) {
      document.body.insertBefore(savedBar, document.body.firstChild);
      updateActiveLink();
      applyStoredScheme();
      injectDrawerNav();
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

    /* Theme toggle — cycles: auto → light → dark → auto */
    themeBtn = document.createElement('button');
    themeBtn.addEventListener('click', function () {
      var current = getPreference();
      var next = current === 'auto' ? 'default' : current === 'default' ? 'slate' : 'auto';
      try { localStorage.setItem('utplsql-scheme', next); } catch (e) {}
      applyScheme(effectiveScheme(next));
      updateThemeIcon();
    });

    updateThemeIcon();
    controls.appendChild(themeBtn);
    bar.appendChild(controls);

    /* Inject back-to-top button offset so it clears the topbar + header.
       topbar.css covers the org site; this covers sub-sites that only load the JS. */
    if (!document.getElementById('utplsql-topbar-style')) {
      var style = document.createElement('style');
      style.id = 'utplsql-topbar-style';
      style.textContent = '.md-top { top: 4.4rem !important; z-index: 11; }';
      document.head.appendChild(style);
    }

    savedBar = bar;
    document.body.insertBefore(bar, document.body.firstChild);
    updateActiveLink();
    injectDrawerNav();

    /* When auto mode is active, re-apply if the OS theme changes live. */
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
      if (getPreference() === 'auto') {
        applyScheme(effectiveScheme('auto'));
      }
    });
  }

  /* Apply initial scheme as early as possible to avoid flash. */
  applyScheme(effectiveScheme(getPreference()));

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  /* Material instant navigation — fires after each page swap. */
  if (typeof document$ !== 'undefined') {
    document$.subscribe(inject);
  }
  /* Fallback: browser history navigation */
  window.addEventListener('popstate', updateActiveLink);

})();
