(() => {
  try {
    console.log('--> injected');
    console.log(chrome);
    console.log(chrome.runtime);
    
    chrome.runtime.sendMessage({
      type: FETCH_REQUEST_MESSAGE,
      url: 'https://raw.githubusercontent.com/felipewil/testing/main/linkedin_cleanup.js',
    }, (response) => {
      console.log('fethed', response);
    });
  } catch(e) {
    console.log('error', e);
  }
  
  const FEED_SELECTOR = '#feed-container';
  const WRAPPER_SELECTOR = '.feed-item.new-feed';
  const HEADER_SELECTOR = '.feed-header';

  const headers = [ ...document.querySelectorAll(`${ FEED_SELECTOR } ${ HEADER_SELECTOR }`)];
  const mustHaveWords = [
    'like', 'likes', 'follow', 'follows', 'commented', 'love', 'loves',
    'gostaram', 'gostou', 'seguem', 'segue', 'comentaram', 'comentou', 'amaram', 'amou', 'parabenizou', 'parabenizaram',
  ];
  const feed = document.querySelector(FEED_SELECTOR);

  const verifyAndRemove = (element) => {
    console.log('will verify', element.innerText)

    const matches = mustHaveWords.some((word) => {
      return element.innerText.match(`[\\w\\s,]+ ${ word } [\\w\\s]+$`);
    });

    if (matches) {
      console.log('will remove', element.innerText)

      const container = element.closest(WRAPPER_SELECTOR);
      //container?.parentElement?.removeChild(container);
      container.style.backgroundColor = 'red';
    }
  };

  const isTargetOrFindIn = (element) => {
    const isHeader = element.classList.contains(HEADER_SELECTOR);

    if (isHeader) {
      verifyAndRemove(element);
    } else {
      const elements = [ ...element.querySelectorAll(HEADER_SELECTOR) ];

      elements.forEach(verifyAndRemove);
    }
  }

  isTargetOrFindIn(feed);

  const observer = new MutationObserver((mutationsList) => {
    for(const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        const nodes = Array.from(mutation.addedNodes);

        for (const node of nodes) {
          isTargetOrFindIn(node);
        }
      }
    }
  });

  observer.observe(feed, { childList: true, subtree: true });
})();
