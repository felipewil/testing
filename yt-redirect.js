() => {
  const NO_REDIRECT_PARAM_KEY = 'hyperweb-d-r';
  let lastUrl = location.href;

  const tryRedirect = () => {
    try {
      const url = new URL(location.href);
      const host = url.hostname;
      const isTarget = [ 'm.youtube.com', 'www.youtube.com' ].some((h) => host.includes(h));
      if (isTarget && url.pathname.startsWith('/watch') && !url.searchParams.has(NO_REDIRECT_PARAM_KEY)) {
        url.searchParams.append(NO_REDIRECT_PARAM_KEY, '1');
        history.replaceState({}, '', url.href);
        window.location.href = url.href;
      }
    } catch {}
  };

  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      tryRedirect();
    }
  }).observe(document, { subtree: true, childList: true });

  tryRedirect();
}();
