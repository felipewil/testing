(() => {
  const run = () => {
    const url = document.location;
    const config = {
      host: 'linkedin\\.com',
      listSelector: '#feed-container',
      itemWrapperSelector: 'li.feed-item.new-feed',
      itemSelector: '.feed-header',
      mustHaveWords: [
        'like', 'likes', 'follow', 'follows', 'commented', 'love', 'loves', 'support', 'supports', 'celebrate', 'celebrates', 'reacted',
        'gostaram', 'gostou', 'seguem', 'segue', 'comentaram', 'comentou', 'amaram', 'amou', 'parabenizou', 'parabenizaram',
        'gostaram', 'gostou', 'seguem', 'segue', 'comentaram', 'comentou', 'amaram', 'amou', 'parabenizou', 'parabenizaram', 'apoiaram', 'apoia',
      ],
    };
  
    if (!url.href.match(config.host)) { return; }
  
    const mustHaveWords = config.mustHaveWords;
    const feed = document.querySelector(config.listSelector);
  
    if (!feed) { return; }
  
    const verifyAndRemove = (element) => {
      console.log('will verify', element.innerText)
  
      const matches = mustHaveWords.some((word) => {
        return element.innerText.match(`.+ ${ word } [\\w\\s]+`);
      });
  
      if (matches) {
        console.log('will remove', element.innerText)
  
        const container = element.closest(config.itemWrapperSelector);
  
        if (!container) { return; }
        //container?.parentElement?.removeChild(container);
        container.style.opacity = '0.3';
      }
    };
  
    const isTargetOrFindIn = (element) => {
      const isHeader = element.classList.contains(config.itemSelector);
  
      if (isHeader) {
        verifyAndRemove(element);
      } else {
        const elements = Array.from(element.querySelectorAll(config.itemSelector));
  
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
  };

  run();
})();
