// ==UserScript==
// @name         Open in FileBrowser
// @version      0.0.1
// @description  Opens the current page URL in FileBrowser
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @grant        GM.darkmode
// @noframes
// ==/UserScript==

GM.registerButton({
  id: 'open-in-file-browser',
  icon: {
    name: 'sun',
    font: 'font-awesome',
    style: 'solid',
  },
  caption: 'Open in FileBrowser',
  callback: () => {
    navigator.clipboard.writeText(document.location.href);
  },
});
