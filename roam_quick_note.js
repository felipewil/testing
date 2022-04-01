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
  const callback = () => {
    console.log('selected text 1', document.getSelection());
    console.log('selected text 2', '' + document.getSelection());

    const q=location.href;
    const d = document.getSelection ? document.getSelection() : '';
    const p=document.title
    
    console.log('https://roamresearch.com?text=__'+encodeURIComponent(d)+'__ — via ['+encodeURIComponent(p)+']('+encodeURIComponent(q)+') [[Quotes]]#quick-capture','Roam','toolbar=no,width=700,height=350')
    open('https://roamresearch.com?text=__'+encodeURIComponent(d)+'__ — via ['+encodeURIComponent(p)+']('+encodeURIComponent(q)+') [[Quotes]]#quick-capture','Roam','toolbar=no,width=700,height=350');
  };

  GM.registerButton({
    id: 'roam-quick-note',
    caption: 'Quick note to Roam',
    eventType: 'mousedown',
    callback,
  })
})();
