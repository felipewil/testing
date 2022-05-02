// ==UserScript==
// @name         Observe and skips YT ads
// @version      0.0.1
// @description  Observe and skips YT ads
// @author       Felipe
// @match        m.youtube.com
// @match        youtube.com
// @noframes
// ==/UserScript==

const run = () => {
  const skip = () => {
    if (document.getElementsByClassName("video-ads")[0].innerHTML !=="") {
      let banner = false;
   
      for(var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
        document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
        banner = true;
        console.log('ad skiped');
      }
   
      if (banner === false) {
        document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration;
        document.getElementsByClassName("ytp-ad-skip-button")[0].click();
        console.log('ad skiped');
      }
    }
  }

  const obs = new MutationObserver(function(mutations, observer) {
    for (let i=0; i < mutations.length; ++i) {
      if (mutations[i].addedNodes.length) {
        skip()
      }
    }
  });

  // have the observer observe foo for changes in children
  const container = document.querySelector('.ytp-ad-skip-button');

  if (!container) { return; }

  skip();

  obs.observe(container, {
    childList: true
  });
};

run();
