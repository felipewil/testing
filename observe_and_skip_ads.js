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

  const obsVideoAds = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((added) => {
        skip()
      });
    });
  });


  const obs = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((added) => {
        console.log('added', added, added.classList)

        const target = added.classList?.contains('video-ads') ? added : added.querySelector('.video-ads');
        console.log('is tar', isTarget)

        if (!target) { return; }

        console.log('ads added')
        obsVideoAds.disconnect();
        obsVideoAds.observe(target, {
          childList: true,
          subtree: true,
        });

        skip()
      });
    });
  });

  const container = document.querySelector('.video-ads');

  console.log(document.querySelector('.video-ads'));

  if (container) { skip(); }

  console.log('observing')
  obs.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

run();
