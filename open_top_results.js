// ==UserScript==
// @name         Open top 3
// @version      0.0.1
// @description  Open new tabs for the first 3 results in a search result page.
// @author       Felipe
// @match        *
// @grant        GM.openInTab
// ==/UserScript==

const SHORTCUTS_SELECTOR = '.hyperweb-notification-center-shortcuts';
const LINKS_SELECTOR = '.mnr-c a.cz3goc.BmP5tf';

const links = Array.from(document.querySelectorAll(LINKS_SELECTOR));
const anchor = document.createElement('a');
anchor.classList.add('hw-link');
anchor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 344.6c0 74.66-60.73 135.4-135.4 135.4H104.7c-46.81 0-88.22-29.83-103-74.23c-5.594-16.77 3.469-34.89 20.23-40.48c16.83-5.625 34.91 3.469 40.48 20.23c6.078 18.23 23.08 30.48 42.3 30.48h79.95c39.36 0 71.39-32.03 71.39-71.39s-32.03-71.38-71.39-71.38H32c-9.484 0-18.47-4.203-24.56-11.48C1.359 254.5-1.172 244.9 .5156 235.6l32-177.2C35.27 43.09 48.52 32.01 64 32.01l192 .0049c17.67 0 32 14.33 32 32s-14.33 32-32 32H90.73L70.3 209.2h114.3C259.3 209.2 320 269.1 320 344.6z"/></svg>';

anchor.addEventListener('click', () => {
  links
    .map((l) => l.href)
    .filter((l) => !!l)
    .slice(0, 5).forEach(GM.openInTab);
});

const shortcutsSelector = document.querySelector(SHORTCUTS_SELECTOR);
shortcutsSelector.appendChild(anchor);