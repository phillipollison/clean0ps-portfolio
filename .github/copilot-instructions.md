# Copilot Instructions for this Portfolio Site

- This is a static portfolio website built from `index.html`, local CSS assets in `css/`, and site logic in `js/main.js`.
- The source styling is maintained in `sass/style.scss` and `sass/bootstrap.scss`. `prepros-6.config` indicates that Sass is expected to be compiled externally into `css/style.css` and `css/bootstrap.css`.
- Do not assume a modern JS build toolchain or module loading. The site uses global jQuery and plugin files such as `js/jquery.min.js`, `js/bootstrap.min.js`, `js/owl.carousel.min.js`, `js/jquery.waypoints.min.js`, and `js/jquery.countTo.js`.
- The page navigation is driven by `data-section` attributes in `index.html`; `js/main.js` binds click handlers to `#navbar a` and animates scrolling between sections.
- Animations follow the `animate-box` + `data-animate-effect` convention. `js/main.js` also handles `js-fullheight` sizing, hero slider initialization, and mobile off-canvas menu toggling.
- `contactform.php` is the only server-side integration; it is a simple POST handler that sends mail using PHP `mail()` and redirects back to `index.php`.
- Deployment is not a typical `npm build` flow. `package.json` only defines `npm run deploy` as `gh-pages -d jackson`, so do not add or depend on a hidden Webpack/Gulp pipeline without confirming with the user.
- When editing styles, prefer `sass/style.scss` and keep bootstrap partials consistent with `sass/bootstrap.scss`; compiled CSS is currently checked in under `css/`.
- For behavior changes, update `js/main.js` locally, respecting the existing jQuery patterns and plugin initializations instead of converting to ES modules.
- If content changes require new asset references, update `index.html` and ensure the static path is correct; the site is served from the repo root as a static site.
- Avoid adding unrelated runtime dependencies. The site currently targets a straightforward static hosting model with minimal Node/npm usage.

If any part of the workflow is unclear, ask whether the user is actively using Prepros for Sass compilation or if they want a modern build pipeline added.