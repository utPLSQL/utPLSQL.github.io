/**
 * utPLSQL shared top navigation bar.
 * Published at https://utplsql.org/assets/topbar.js
 *
 * Sub-repositories load this script via their docs/overrides/main.html template.
 * Update this file to change the shared nav across all sub-sites simultaneously.
 */
(function () {
  'use strict';

  var HEIGHT = '2rem';

  var NAV = [
    { label: 'Home',          url: 'https://utplsql.org/' },
    { label: 'Announcements', url: 'https://utplsql.org/announcements/' },
    { label: 'Documentation', url: 'https://utplsql.org/documentation.html' },
    { label: 'Downloads',     url: 'https://utplsql.org/downloads.html' },
    { label: 'Resources',     url: 'https://utplsql.org/resources.html' },
    { label: 'About',         url: 'https://utplsql.org/about.html' },
    { label: 'Contributing',  url: 'https://utplsql.org/contributing.html' },
  ];

  function inject() {
    /* Bail out if already injected (e.g. instant-navigation re-run) */
    if (document.getElementById('utplsql-topbar')) return;

    var style = document.createElement('style');
    style.textContent =
      '#utplsql-topbar {' +
      '  background: #1565c0;' +
      '  padding: 0 1rem;' +
      '  display: flex;' +
      '  align-items: center;' +
      '  height: ' + HEIGHT + ';' +
      '  font-size: 0.7rem;' +
      '  font-family: var(--md-text-font, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);' +
      '  position: sticky;' +
      '  top: 0;' +
      '  z-index: 10;' +
      '  box-shadow: 0 1px 3px rgba(0,0,0,0.25);' +
      '  letter-spacing: 0.03em;' +
      '}' +
      '#utplsql-topbar a {' +
      '  color: rgba(255,255,255,0.72);' +
      '  text-decoration: none;' +
      '  padding: 0 0.5rem;' +
      '  line-height: ' + HEIGHT + ';' +
      '  white-space: nowrap;' +
      '  transition: color 0.15s;' +
      '}' +
      '#utplsql-topbar a:hover,' +
      '#utplsql-topbar a.utplsql-active {' +
      '  color: #fff;' +
      '}' +
      '#utplsql-topbar .utplsql-brand {' +
      '  font-weight: 700;' +
      '  color: #fff;' +
      '  padding-right: 0.75rem;' +
      '  margin-right: 0.25rem;' +
      '  border-right: 1px solid rgba(255,255,255,0.25);' +
      '}' +
      /* Push Material's sticky header below the topbar */
      '.md-header { top: ' + HEIGHT + ' !important; }' +
      /* Push Material's sticky tab bar below header + topbar */
      '.md-tabs { top: calc(' + HEIGHT + ' + var(--md-header-height, 2.4rem)) !important; }' +
      /* Push sidebars down by the same amount */
      '.md-sidebar { top: calc(' + HEIGHT + ' + var(--md-header-height, 2.4rem)) !important; }';

    document.head.appendChild(style);

    var bar = document.createElement('nav');
    bar.id = 'utplsql-topbar';
    bar.setAttribute('aria-label', 'utPLSQL.org site navigation');

    var brand = document.createElement('a');
    brand.className = 'utplsql-brand';
    brand.href = 'https://utplsql.org/';
    brand.textContent = 'utPLSQL.org';
    bar.appendChild(brand);

    var current = window.location.href;
    NAV.forEach(function (item) {
      var a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.label;
      /* Highlight the section matching the current URL (skip root to avoid always-active) */
      if (item.url !== 'https://utplsql.org/' && current.indexOf(item.url) === 0) {
        a.className = 'utplsql-active';
      }
      bar.appendChild(a);
    });

    document.body.insertBefore(bar, document.body.firstChild);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
