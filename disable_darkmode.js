// ==UserScript==
// @name         Disable dark mode
// @version      0.0.1
// @description  Disables dark mode
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @grant        GM.darkmode
// @noframes
// ==/UserScript==

GM.registerButton({
  id: 'disable-darkmode',
  icon: {
    name: 'circle-half-stroke',
    font: 'font-awesome',
    style: 'solid',
  },
  caption: 'Disable Dark Mode',
  callback: async () => GM.darkmode(false),
});
