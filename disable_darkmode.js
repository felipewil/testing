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
  caption: 'Disable Dark Mode',
  callback: async () => GM.darkmode(false),
});
