// ==UserScript==
// @name         YT iframe
// @version      0.0.1
// @description  Loads current video in an iframe to prevent ads
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @noframes
// ==/UserScript==

const run = () => {
  const url = new URL(window.location.href);
  const video = url.searchParams.get('v');

  if (!video) { return; }
  
  document.querySelector('video')?.pause()

  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${ video }`;
  iframe.setAttribute('style','background:#000000b5;padding:50px 25px 25px 25px;width:calc(100% - 50px);height:calc(100% - 75px);position:fixed;top:0;z-index:9000000;');
  iframe.setAttribute('id','x03');

  const span = document.createElement('span');
  span.addEventListener('click', function() {
    document.getElementById("x03").remove();
    this.remove();
  });
  span.setAttribute('style','color:white;font-size:25pt;position:fixed;top:0;right:10px;z-index:9000000;');
  span.innerHTML='X';

  document.body.appendChild(iframe);
  document.body.appendChild(span);
};

GM.registerButton({
  id: 'skip-yt-ad',
  icon: {
    name: 'youtube-square',
    font: 'font-awesome',
    style: 'brands',
  },
  caption: 'Skps YouTube Ad',
  callback: run,
});
