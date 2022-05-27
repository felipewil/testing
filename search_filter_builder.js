const isMobile = !window.navigator.userAgent.toLocaleLowerCase().includes('macintosh');
const GOOGLE_CONTAINER_ID = isMobile ? '#gsr' : '#rcnt';
const SCRIPT_ID = crypto.randomUUID().slice(0, 10);
const CONTAINER_ID = `container-${ SCRIPT_ID }`;
const TITLE_ID = `title-${ SCRIPT_ID }`;
const WRAPPER_ID = `wrapper-${ SCRIPT_ID }`;
const LOADER_ID = `loader-${ SCRIPT_ID }`;
const SHOW_ALL_BUTTON_ID = 'hw-show-all-search-domains'; // Injected from Hyperweb
const SEARCH_DOMAINS_CLASS = 'hw-search-domains';

const containerStyle = `
  #${ CONTAINER_ID } {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 6px;
    width: 100%;
  }

  @media (min-width: 738px) #${ CONTAINER_ID } {
    border-radius: 12px;
  }

  #${ CONTAINER_ID } #${ LOADER_ID } {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #999;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: ${ CONTAINER_ID }-spin 1s linear infinite;
    position: absolute;
    left: calc(50% - 12px);
    top: calc(50% - 12px);
  }

  #${ WRAPPER_ID } {
    flex: 1;
    position: relative;
    height: ${ isMobile ? '270px' : '190px' };
    min-height: ${ isMobile ? '270px' : '190px' };
    width: 100%;
    border: 0;
  }

  #${ CONTAINER_ID } iframe {
    height: 100%;
    width: 100%;
    border: 0;
  }

  #${ TITLE_ID } {
    margin: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    font-family: Google Sans,Roboto-Medium,HelveticaNeue-Medium,Helvetica Neue,sans-serif-medium,Arial,sans-serif;
  }

  #center_col {
    margin-top: 6px;
  }

  @keyframes ${ CONTAINER_ID }-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
const iframeStyle = `
  html, body, #gsr, #main, #cnt, #center_col {
    height: 100%
  }

  body {
    overflow: hidden;
  }

  #center_col {
    ${ isMobile ? '' : 'margin-left: 0px;' };
  }

  #gsr {
    background-color: transparent !important;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  #cnt {
    margin-top: 0px !important;
    padding-top: 0px !important;
  }

  div[data-async-context] {
    display: flex;
    overflow-x: scroll;
    height: 100%;
  }

  .mnr-c.xpd.O9g5cc.uUPGi, .g { /* Result card */
    height: ${ isMobile ? '250px' : '150px' } !important;
    padding: ${ isMobile ? '0px' : '10px' } !important;
    margin: 10px !important;
    box-shadow: 0 0 0 1px #dadce0;
    border-radius: 8px;
    overflow-y: scroll;
  }

  body[data-dt="1"] .mnr-c.xpd.O9g5cc.uUPGi, body[data-dt="1"] .g {
    box-shadow: 0 0 0 1px #3c4043;
  }

  .mnr-c.xpd.O9g5cc.uUPGi .mnr-c.xpd.O9g5cc.uUPGi {
    height: unset !important;
    padding: unset !important;
    margin: unset !important;
    box-shadow: unset;
    border-radius: unset;
    overflow-y: unset;
  }

  .mnr-c.g .mnr-c.xpd.O9g5cc.uUPGi {
    display: block;
  }

  .mnr-c:not(:empty) {
    box-shadow: unset;
  }

  .mnr-c.xpd.O9g5cc.uUPGi .U3THc {
    overflow-y: scroll;
  }

  #botstuff {
    display: flex;
  }

  #botstuff > div {
    display: flex;
  }

  #botstuff .w7LJsc {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .GNJvt.ipz2Oe {
    white-space: nowrap;
    margin: 0px 8px;
  }

  div[jsname="BRTknd"] {
    display: flex;
  }

  div[jsname="GDPwke"] {
    display: flex;
  }

  #center_col {
    display: flex;
    overflow-x: scroll;
  }

  #rso > div:only-child {
    align-self: center;
    justify-self: center;
    width: 100vw;
  }

  .kQdGHd {
    display: none;
  }

  .AuVD.wHYlTd.Ww4FFb, .Fh5muf, .kp-wholepage.ss6qqb.mnr-c.UBoxCb.kp-wholepage-osrp.EyBRub {
    display: none !important;
  }

  div[data-hveid="CEIQAA"] {
    display: none !important;
  }

  .kyRr2b, .E8dXEb { /* You can also search */
    display: none !important;
  }

  .FAVrq.VDgVie.it9gVe.gdwOPe.mB14jb.eofmDb { /* Fast access to Google */
    display: none !important;
  }

  .MUxGbd.lyLwlc .XxrEYe { /* Need help */
    display: none !important;
  }

  .EyBRub { /* Images suggestion */
    display: none !important;
  }

  .BHZ70b.nEiVz { /* Question area */
    display: none !important;
  }

  .zUJ8Rc { /* You question will be shared */
    display: none !important;
  }

  #top_nav, #searchform, #taw, #bottomads, #botstuff #bres, #fbar {
    display: none !important;
  }

  /* iPad */

  form[role="search"] { /* Top search form, visible when changing pages */
    display: none !important;
  }

  #center_col {
    width: unset !important;
  }

  .g { /* result card */
    width: 500px !important;
  }

  .ULSxyf { /* People also ask */
    display: none !important;
  }

  .v7W49e {
    margin-top: 0px !important;
  }

  .appbar, .dodTBe {
    display: none !important;
  }

  .hlcw0c {
    margin-bottom: 0px !important;
  }
`;

const QUERIES = {
  "Google Search": {
    "querySelector": {
      "phone": ".mnr-c .yuRUbf a.sXtWJb, .mnr-c a.cz3goc.BmP5tf",
      "pad": ".hlcw0c .yuRUbf > a",
      "desktop": "#center_col div:not(.kp-blk *) > .yuRUbf > a cite",
      "result_container_selector": "[data-hveid]",
      "featured": [".kp-blk.c2xzTb .yuRUbf > a"],
      "highlight": ".MBeuO"
    },
    "search_engine_json": {
      "is_web_search": true,
      "override_required_params": {
        "q": ".*",
        "ie": ".*",
        "oe": ".*",
        "hl": ".*",
        "client": ".*"
      },
      "required_params": ["q"],
      "required_prefix": "google.com/search",
      "match_prefix": "google(\\.\\w+){1,}\/search"
    }
  }
};

const handleLinks = (links) => {
  links.forEach((l) => {
    l.setAttribute('target', '_parent');
  });
};

const observeLinks = (document) => {
  const onMutation = (mutationList) => {
    mutationList.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof HTMLElement)) { return; }

        if (node.tagName === 'A') {
          handleLinks([ node ]);
        } else {
          handleLinks(node.querySelectorAll('a'));
        }
      });
    });
  };

  const config = { childList: true, subtree: true };
  const observer = new MutationObserver(onMutation);
  observer.observe(document.querySelector('#res'), config);
};

const onLoad = (document) => {
  const style = document.createElement('style');
  style.innerHTML = iframeStyle;

  document.head.appendChild(style);

  if (isMobile) {
    const base = document.createElement('base');
    base.setAttribute('target', '_parent');
    document.body.appendChild(base);
  } else {
    observeLinks(document);
    handleLinks(document.querySelectorAll('#res a'));
  }

  document.querySelector('div.E8hWLe.SVMeif.BmP5tf')?.parentElement?.remove();
  document.querySelector('[jscontroller="yz368b"]')?.parentElement?.remove();
  document.querySelector('.LsyjKf')?.parentElement?.remove();

  const toRemove = document.querySelectorAll('.g.mnr-c.F6CFcc');
  toRemove.forEach((t) => t.parentElement?.remove());
};

const getPageDetails = () => {
  const se = Object
    .values(QUERIES)
    .find((query) => {
      const se = query.search_engine_json;

      if (!se || !se.is_web_search) { return false; }

      return se.match_prefix && document.location.href.match(se.match_prefix);
    });

  if (!se) { return; }

  const queryParam = se.search_engine_json?.required_params[0];
  return {
    query: new URLSearchParams(document.location.search).get(queryParam),
    linkSelector: isMobile ? se.querySelector?.phone : se.querySelector?.pad,
    containerSelector: se.querySelector?.result_container_selector,
  };
};

// Elements that the container should be placed after, in order of precedence
const getAnchorPoints = () => {
  return isMobile ? [
    { q: '.AuVD.wHYlTd.cUnQKe.Ww4FFb', parent: false }, // People ask
    { q: '.xSoq1', parent: false }, // Top stories
  ] : [
    { q: '.AuVD.cUnQKe', parent: true }, // People ask
    { q: '.yG4QQe.TBC9ub', parent: true }, // Top stories
  ];
};

const insertContainer = (container, resultsContainer, linkSelector, containerSelector) => {
  const loadMoreButton = document.querySelector(`#${ SHOW_ALL_BUTTON_ID }`);

  if (loadMoreButton) {
    return loadMoreButton.parentElement.insertBefore(container, loadMoreButton);
  }

  const anchorPoints = getAnchorPoints(); 

  for (let ap of anchorPoints) {
    let point = document.querySelector(ap.q);

    if (point && ap.parent) {
      point = point.parentElement;
    }

    if (point) {
      return point.parentElement.insertBefore(container, point.nextSibling);
    }
  }

  let firstResult = document.querySelectorAll(linkSelector)[0];

  if (firstResult && containerSelector) {
    firstResult = firstResult.closest(`#rso > ${ containerSelector }`);
  }

  if (firstResult) {
    return firstResult.parentElement.insertBefore(container, firstResult);
  }

  resultsContainer.insertBefore(container, resultsContainer.firstChild);
};

const run = async ({
  title,
  domains,
  callback,
}) => {
  const {
    query,
    linkSelector,
    containerSelector,
  } = getPageDetails();

  console.log(query,
    linkSelector,
    containerSelector);

  if (!query) { return; }

  if (!domains || !domains.length) { return; }

  const googleContainer = document.querySelector(GOOGLE_CONTAINER_ID);

  if (!googleContainer) {
    setTimeout(run, 100);
    return;
  }

  let firstResult = document.querySelectorAll(linkSelector)[0];

  if (firstResult && containerSelector) {
    firstResult = firstResult.closest(containerSelector);
  }

  const style = document.createElement('style');
  style.innerHTML = containerStyle;

  document.head.appendChild(style);

  const containerEl = document.createElement('div');
  containerEl.id = CONTAINER_ID;
  containerEl.classList.add(SEARCH_DOMAINS_CLASS);
  containerEl.style.background = window.getComputedStyle(document.body).backgroundColor;

  const loaderEl = document.createElement('div');
  loaderEl.id = LOADER_ID;
  loaderEl.style.opacity = '1';

  const titleEl = document.createElement('span');
  titleEl.id = TITLE_ID;
  titleEl.innerText = title ? `${ title } - via Hyperweb` : 'via Hyperweb';

  const iframeWrapper = document.createElement('div');
  iframeWrapper.id = WRAPPER_ID;

  const iframeEl = document.createElement('iframe');
  iframeEl.style.opacity = '0';

  const append =
    domains.length === 1
      ? `site:${domains[0]}`
      : `(${domains.map((x) => `site:${x}`).join(' OR ')})`;

  const host = window.location.host;
  iframeEl.src = `https://${ host }/search?q=${ query } ${ append }`;
  iframeEl.onload = () => {
    onLoad(iframeEl.contentDocument);
    iframeEl.style.opacity = '1';
    loaderEl.style.opacity = '0';

    iframeEl.contentWindow.onunload = () => {
      iframeEl.style.opacity = '0';
      loaderEl.style.opacity = '1';
    }
  };
  
  iframeWrapper.appendChild(loaderEl);
  iframeWrapper.appendChild(iframeEl);
  
  containerEl.appendChild(titleEl);
  containerEl.appendChild(iframeWrapper);

  // sibling.parentElement.insertBefore(container, sibling);
  console.log('insert', title, new Date());
  insertContainer(containerEl, googleContainer, linkSelector, containerSelector);
  callback?.();
};

window.HyperwebSearchFilter = run;
console.log(window);
console.log(window.HyperwebSearchFilter);
console.log('end');
