(() => {
    console.log('---> loaded');
    const BLANK = '_blank';
    const _open = window.open;
  
    const open = (url, target) => {
      console.log('---> is blank', target === BLANK);
      if (target === BLANK) {
        return;
      }
      console.log('---> args', arguments);
      return _open.call(arguments);
    };
  
    const replaceOpen = () => {
      console.log('---> replacing');
      window.open = open;
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      replaceOpen();
    } else {
      document.addEventListener(
        'DOMContentLoaded',
        () => replaceOpen(),
        false,
      );
    }
})();
