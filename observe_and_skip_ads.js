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
  const tryClick = (attempt) => {
    if (attempt > 5) { return; }

    const button = document.querySelectorAll('.ytp-ad-skip-button')[0];
    const video = document.querySelectorAll('.html5-main-video')[0];

    console.log('button', button, video)

    if (!button) {
      return setTimeout(() => tryClick(attempt + 1), 100);;
    }

    video.currentTime = video.duration;
    button.click();
  };

  const skip = () => {
    if (document.getElementsByClassName("video-ads")[0].innerHTML !== '') {
      let banner = false;
   
      for(var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
        document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
        banner = true;
      }
   
      if (banner === false) {
        tryClick(0);
      }
    }
  }

  const obsVideoAds = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length === 0) { return; }
      skip();
    });
  });


  const obs = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((added) => {
        //console.log('added', added, added.classList)

        const target = added.classList?.contains('video-ads') ? added : added?.querySelector?.('.video-ads');
        // console.log('is tar', target)

        if (!target) { return; }

        console.log('ads added')
        obsVideoAds.disconnect();
        obsVideoAds.observe(target, {
          childList: true,
          subtree: true,
        });

        skip();

        obs.disconnect();
      });
    });
  });

  const container = document.querySelector('.video-ads');

  if (container) {
    console.log('obs ads');
    skip();
    obsVideoAds.observe(container, {
      childList: true,
      subtree: true,
    });
  } else {
    console.log('obs body');
    obs.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

};

run();
