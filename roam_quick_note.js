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
  GM.registerButton('roam-quick-note', 'Quick note to Roam', null, () => {
    const q=location.href;
    const d = document.getSelection ? document.getSelection() : '';
    const p=document.title
    
    open('https://roamresearch.com?text=__'+encodeURIComponent(d)+'__ — via ['+encodeURIComponent(p)+']('+encodeURIComponent(q)+') [[Quotes]]#quick-capture','Roam','toolbar=no,width=700,height=350');
  });
})();
