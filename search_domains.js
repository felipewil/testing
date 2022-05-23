// ==UserScript==
// @name         Also search domains on Google
// @version      0.0.1
// @author       Felipe
// @match        *
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.listValues
// @noframes
// ==/UserScript==

(() => {

  console.log('start');

  const scriptId = crypto.randomUUID().slice(0, 10);
  const containerId = `container-${ scriptId }`;
  const titleId = `title-${ scriptId }`;
  
  const containerStyle = `
    .${ containerId } {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .${ containerId } .loader {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #999;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      animation: ${ containerId }-spin 1s linear infinite;
      position: absolute;
      left: calc(50% - 12px);
      top: calc(50% - 12px);
    }

    .${ containerId } iframe {
      flex: 1;
      height: 270px;
      min-height: 270px;
      width: 100%;
      border: 0;
      padding-bottom: 20px;
      box-sizing: content-box;
    }

    .${ titleId } {
      margin: 8px 16px;
      font-size: 16px;
    }

    @keyframes ${ containerId }-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  const iframeStyle = `
    html, body {
      height: 100%
    }

    #cnt {
      margin-top: 0px !important;
    }

    div[data-async-context] {
      display: flex;
      overflow-x: scroll;
    }

    .mnr-c.xpd.O9g5cc.uUPGi {
      height: 250px !important;
      padding: 0px !important;
      margin: 10px !important;
      box-shadow: 0 0 0 1px #dadce0;
      border-radius: 8px;
      overflow-y: scroll;
    }

    body[data-dt="1"] .mnr-c.xpd.O9g5cc.uUPGi {
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

    .kQdGHd {
      display: none;
    }

    .AuVD.wHYlTd.Ww4FFb, .Fh5muf, .kp-wholepage.ss6qqb.mnr-c.UBoxCb.kp-wholepage-osrp.EyBRub, div[data-hveid="CEIQAA"] {
      display: none !important;
    }

    #top_nav, #searchform, #taw, #topstuff, #bottomads, #botstuff #bres, #fbar {
      display: none !important;
    }

    #gsr {
      background-color: transparent !important;
    }
  `

  const onLoad = (document) => {
    const style = document.createElement('style');
    style.innerHTML = iframeStyle;

    document.head.appendChild(style);

    const base = document.createElement('base');
    base.setAttribute('target', '_parent');

    document.body.appendChild(base);

    // document.querySelector('.Fh5muf')?.remove();
    // document.querySelector('#top_nav')?.remove();
    // document.querySelector('#searchform')?.remove();
    // document.querySelector('.kp-wholepage.ss6qqb.mnr-c.UBoxCb.kp-wholepage-osrp.EyBRub')?.remove();
    // document.querySelector('.AuVD.wHYlTd.Ww4FFb')?.remove();
    // document.querySelector('div[data-hveid="CEIQAA"]')?.remove();
    document.querySelector('div.E8hWLe.SVMeif.BmP5tf')?.parentElement?.remove();
    document.querySelector('[jscontroller="yz368b"]')?.parentElement?.remove();
    // document.querySelector('#botstuff #bres')?.remove();
    // document.querySelector('#fbar')?.remove();

    const toRemove = document.querySelectorAll('.g.mnr-c.F6CFcc');
    toRemove.forEach((t) => t.parentElement?.remove());

    document.querySelector('.LsyjKf')?.parentElement?.remove();
  };

  const getQuery = async () => {
    const QUERIES_URL = 'https://raw.githubusercontent.com/insightbrowser/augmentations/main/serp_query_selectors.json';

    const isMobile = window.navigator.userAgent.toLocaleLowerCase().includes('iphone');
    const request = await fetch(QUERIES_URL);
    const queries = await request.json();
    const se = Object
      .values(queries)
      .find((query) => {
        const se = query.search_engine_json;

        if (!se || !se.is_web_search) { return false; }

        return se.match_prefix && document.location.href.match(se.match_prefix);
      });

    if (!se) { return; }

    const queryParam = se.search_engine_json?.required_params[0];
    return new URLSearchParams(document.location.search).get(queryParam);
  };
  
  const run = async () => {
    console.log('run');

    const pageQuery = await getQuery();

    console.log('query', pageQuery);

    if (!pageQuery) { return; }

    const list = await GM.listValues();
    const titleStr = await GM.getValue('title');

    console.log('title', titleStr);

    const domainsStr = await GM.getValue('domains');
    const domains = JSON.parse(domainsStr);

    console.log('domains', domains);

    if (!domains || !domains.length) { return; }

    const googleContainer = document.querySelector('#gsr');
  
    if (!googleContainer) {
      setTimeout(run, 100);
      return;
    }

    const style = document.createElement('style');
    style.innerHTML = containerStyle;

    document.head.appendChild(style);
  
    const container = document.createElement('div');
    container.classList.add(containerId);

    const loader = document.createElement('div');
    loader.classList.add('loader');

    const title = document.createElement('span');
    title.classList.add(titleId);
    title.innerText = titleStr ? `${ titleStr } - via Hyperweb` : 'via Hyperweb';
    title.style.opacity = '0';

    const iframe = document.createElement('iframe');
    iframe.style.opacity = '0';

    const append =
      domains.length === 1
        ? `site:${domains[0]}`
        : `(${domains.map((x) => `site:${x}`).join(' OR ')})`;

    iframe.src = `https://www.google.com/search?q=${ pageQuery } ${ append }`;
    iframe.onload = () => {
      onLoad(iframe.contentDocument);
      title.style.opacity = '1';
      iframe.style.opacity = '1';
      loader.remove();
    };
  
    container.appendChild(loader);
    container.appendChild(title);
    container.appendChild(iframe);

    googleContainer.parentElement.insertBefore(container, googleContainer);
  };
  
  run();

})();
