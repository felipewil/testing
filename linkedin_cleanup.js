(() => {
  const run = () => {
    const url = document.location;
    const config = {
      host: 'linkedin\\.com',
      phone: {
        listSelector: '#feed-container',
        itemWrapperSelector: 'li.feed-item.new-feed',
        itemSelector: '.feed-header',
      },
      pad: {
        itemWrapperSelector: '.feed-shared-update-v2',
        itemSelector: '.feed-shared-text-view',
      },
      mustHaveWords: [
        'like', 'likes', 'follow', 'follows', 'commented', 'love', 'loves', 'support', 'supports', 'celebrate', 'celebrates', 'reacted',
        'gostaram', 'gostou', 'seguem', 'segue', 'comentaram', 'comentou', 'amaram', 'amou', 'parabenizou', 'parabenizaram',
        'gostaram', 'gostou', 'seguem', 'segue', 'comentaram', 'comentou', 'amaram', 'amou', 'parabenizou', 'parabenizaram', 'apoiaram', 'apoia',
      ],
    };
  
    if (!url.href.match(config.host)) { return; }
  
    const mustHaveWords = config.mustHaveWords;
    const query = navigator.userAgent.includes('iPhone') ? config.phone : config.pad;
    const feed = document.querySelector(query.listSelector) ?? document;
  
    if (!feed) { return; }
  
    const verifyAndRemove = (element) => {
      const matches = mustHaveWords.some((word) => {
        return element.innerText.match(`.+ ${ word } [\\w\\s]+`);
      });
  
      if (matches) {
        const container = element.closest(query.itemWrapperSelector);
  
        if (!container) { return; }
        container.style.opacity = '0.3';
      }
    };
  
    const isTargetOrFindIn = (element) => {
      const isHeader = element.classList?.contains(query.itemSelector);
  
      if (isHeader) {
        verifyAndRemove(element);
      } else if (element.querySelectorAll) {
        const elements = Array.from(element.querySelectorAll(query.itemSelector));
  
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
