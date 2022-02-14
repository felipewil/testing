() => {
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

  let lastUrl = location.href;

  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      tryRedirect();
    }
  }).observe(document, { subtree: true, childList: true });

  tryRedirect();
}();
