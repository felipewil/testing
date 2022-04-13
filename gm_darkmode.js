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

GM.registerButton({
  id: 'theme-1',
  caption: 'Theme 1',
  callback: () => {
    GM.darkmode(true, {
      theme: {
        background: '#000',
        foreground: '#F00',
      },
    });
  },
});

GM.registerButton({
  id: 'theme-2',
  caption: 'Theme 2',
  callback: () => {
    GM.darkmode(true, {
      theme: {
        background: '#F00',
        foreground: '#000',
      },
    });
  },
});
