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
  const skip = () => {
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
  }

  const obs = new MutationObserver(function(mutations, observer) {
    for (let i=0; i < mutations.length; ++i) {
      console.log('mutations', mutations[i].addedNodes.length)
      if (mutations[i].addedNodes.length) {
        skip()
      }
    }
  });

  // have the observer observe foo for changes in children
  const container = document.querySelector('.video-ads');

  console.log('container', container);

  if (!container) { return; }

  skip();

  obs.observe(container, {
    childList: true
  });
};

run();
