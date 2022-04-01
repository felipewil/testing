// ==UserScript==
// @name         Roam Quick Note
// @version      0.0.1
// @description  Quick notes selected text to Roam.
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @noframes
// ==/UserScript==

(() => {
  let selection = '';
  document.onselectionchange = () => {
    if (!document.getSelection()?.toString()) { return; }
    selection = document.getSelection().toString();
  };

  const callback = () => {
    open('https://roamresearch.com?text=' + encodeURIComponent(selection), 'Roam')?.opener?.focus();
  };

  GM.registerButton({
    id: 'roam-quick-note',
    caption: 'Quick note to Roam',
    callback,
  })
})();
