const isMobile = !window.navigator.userAgent.toLocaleLowerCase().includes('macintosh');
const GOOGLE_CONTAINER_ID = isMobile ? '#gsr' : '#rcnt';
const SCRIPT_ID = crypto.randomUUID().slice(0, 10);
const CONTAINER_ID = `container-${ SCRIPT_ID }`;
const HEADER_ID = `header-${ SCRIPT_ID }`;
const TITLE_ID = `title-${ SCRIPT_ID }`;
const ACTIONS_ID = `actions-${ SCRIPT_ID }`;
const WRAPPER_ID = `wrapper-${ SCRIPT_ID }`;
const LOADER_ID = `loader-${ SCRIPT_ID }`;
const SHOW_ALL_BUTTON_ID = 'hw-show-all-search-domains'; // Injected from Hyperweb
const SEARCH_DOMAINS_CLASS = 'hw-search-domains';

const CUSTOMIZE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>';
const CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>';

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

  #${ HEADER_ID } {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 16px;
  }

  #${ ACTIONS_ID } {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #${ ACTIONS_ID } a {
    width: 16px;
    height: 16px;
  }

  #${ ACTIONS_ID } svg {
    width: 100%;
    height: 100%;
  }

  #${ TITLE_ID } {
    font-size: 14px;
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

const buildHeader = (title, onCustomize, onClose) => {
  const titleEl = document.createElement('span');
  titleEl.id = TITLE_ID;
  titleEl.innerText = title ? `${ title } - via Hyperweb` : 'via Hyperweb';

  const customizeEl = document.createElement('a');
  customizeEl.classList.add('hw-link');
  customizeEl.innerHTML = CUSTOMIZE_ICON;
  customizeEl.onclick = onCustomize;

  const closeEl = document.createElement('a');
  closeEl.classList.add('hw-link');
  closeEl.innerHTML = CLOSE_ICON;
  customizeEl.onclick = onClose;

  const actionsEl = document.createElement('div');
  actionsEl.id = ACTIONS_ID;
  actionsEl.appendChild(customizeEl);
  actionsEl.appendChild(closeEl);

  const headerEl = document.createElement('div');
  headerEl.id = HEADER_ID;
  headerEl.appendChild(titleEl);
  headerEl.appendChild(actionsEl);

  return headerEl;
};

const run = async ({
  title,
  domains,
  onCustomize,
  onClose,
}) => {
  const {
    query,
    linkSelector,
    containerSelector,
  } = getPageDetails();

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

  containerEl.appendChild(buildHeader(title, onCustomize, onClose));
  containerEl.appendChild(iframeWrapper);

  insertContainer(containerEl, googleContainer, linkSelector, containerSelector);
};

window.HyperwebSearchFilter = run;
