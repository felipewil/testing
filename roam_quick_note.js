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
  let d = '';
  document.onselectionchange = () => {
    d = document.getSelection().toString();
  };

  const callback = () => {
    const q = location.href;
    const p = document.title;

    console.log('--> d', d);
    
    open('https://roamresearch.com?text=__'+encodeURIComponent(d)+'__ — via ['+encodeURIComponent(p)+']('+encodeURIComponent(q)+') [[Quotes]]#quick-capture','Roam','toolbar=no,width=700,height=350');
  };

  GM.registerButton({
    id: 'roam-quick-note',
    caption: 'Quick note to Roam',
    eventType: 'onMouseDown',
    callback,
  })
})();
