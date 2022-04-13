// ==UserScript==
// @name         Change dark mode
// @version      0.0.1
// @description  Enables/disables dark mode
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @grant        GM.darkmode
// @grant        GM.isDarkmodeEnabled
// @noframes
// ==/UserScript==

GM.registerButton({
  id: 'theme-1',
  caption: 'Theme 1',
  callback: async () => {
    console.log(GM);
    const enabled = await GM.isDarkmodeEnabled();

    GM.darkmode(!enabled);
  },
});
