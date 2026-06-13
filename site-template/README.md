# utPLSQL Sub-site Template

Copy the files from this directory into your repository to get the shared
utPLSQL.org top navigation bar automatically.

## Setup

**1. Copy the overrides directory into your repo's `docs/` folder:**

```
docs/
  overrides/
    main.html   ← copied from site-template/overrides/main.html
```

**2. Tell MkDocs to use the overrides directory — add `custom_dir` to your `mkdocs.yml`:**

```yaml
theme:
  name: material
  custom_dir: docs/overrides
  # ... rest of your theme config
```

That's it. The topbar is loaded from `https://utplsql.org/assets/topbar.js` at
runtime, so any navigation changes made in the central org repo are picked up
automatically by all sub-sites without any further changes on your end.

## How it works

- `docs/overrides/main.html` extends Material's base template and injects
  `topbar.js` into the `<head>` of every page.
- `topbar.js` is published by the [utPLSQL.github.io](https://github.com/utPLSQL/utPLSQL.github.io)
  repo and contains the full nav link list for utplsql.org.
- The script inserts a sticky bar above the MkDocs Material header and adjusts
  the header/sidebar positions automatically.

## Updating the shared nav

To add or change links in the topbar, edit
[`docs/assets/topbar.js`](https://github.com/utPLSQL/utPLSQL.github.io/blob/main/docs/assets/topbar.js)
in the **utPLSQL.github.io** repo only. All sub-sites pick up the change on
next page load — no per-repo changes needed.
