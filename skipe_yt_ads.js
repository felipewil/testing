// ==UserScript==
// @name         Skips YT ads
// @version      0.0.1
// @description  Skips YT ads on click
// @author       Felipe
// @match        *
// @grant        GM.registerButton
// @noframes
// ==/UserScript==

const run = () => {
  if (document.getElementsByClassName("video-ads")[0].innerHTML !=="") {
   let banner = false;

   for(var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
     document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
     banner = true;
   }

   if (banner === false) {
     document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration;
     document.getElementsByClassName("ytp-ad-skip-button")[0].click();
   }
 }  
};

GM.registerButton({
  id: 'skip-yt-ad',
  icon: {
    name: 'youtube',
    font: 'font-awesome',
    style: 'brands',
  },
  caption: 'Skps YouTube Ad',
  callback: run,
});
