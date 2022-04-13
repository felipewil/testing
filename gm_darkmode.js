// ==UserScript==
// @name         Change dark mode
// @version      0.0.1
// @description  Enables/disables dark mode
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @grant        GM.darkmode
// @noframes
// ==/UserScript==

let enabled = false;

GM.registerButton({
  id: 'theme-1',
  caption: 'Theme 1',
  callback: () => {
    enabled = !enabled;

    GM.darkmode(enabled);
  },
});
