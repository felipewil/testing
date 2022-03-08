// ==UserScript==
// @name         Open top 3
// @version      0.0.1
// @description  Open new tabs for the first 3 results in a search result page.
// @author       Felipe
// @match        *
// @grant        GM.openInTab
// @grant        GM.registerButton
// ==/UserScript==

const COUNTER_SELECTOR = '.hyperweb-notification-center-counter span';
const SHORTCUTS_SELECTOR = '.hyperweb-notification-center-shortcuts';
const LINKS_SELECTOR = '.mnr-c a.cz3goc.BmP5tf';
const LINKS_LIMIT = 3;

const links = Array.from(document.querySelectorAll(LINKS_SELECTOR));
const anchor = document.createElement('a');
anchor.classList.add('hw-link');
anchor.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 344c0 74.98-61.02 136-136 136H103.6c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25c5.922 17.77 22.48 29.7 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41C45.39 239.3 48.66 225.3 58.38 216.4l131.4-120.4H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19l-131.4 120.4H184C258.1 208 320 269 320 344z"/></svg>';

anchor.addEventListener('click', () => {

});

const waitForShortcuts = () => {
  const shortcutsSelector = document.querySelector(SHORTCUTS_SELECTOR);

  if (shortcutsSelector) {
    shortcutsSelector.appendChild(anchor);

    const counter = document.querySelector(COUNTER_SELECTOR);

    if (counter && counter.textContent) {
      counter.textContent = parseInt(counter.textContent) + 1;
    }
  } else {
    setTimeout(waitForShortcuts, 50);
  }
};

waitForShortcuts();

const icon = {
  name: 'address-card',
  style: 'fas',
  font: 'font-awesome',
};
GM.registerButton('open-top-3', icon, () => {
  links
    .map((l) => l.href)
    .filter((l) => !!l)
    .slice(0, LINKS_LIMIT).forEach(GM.openInTab);
});
