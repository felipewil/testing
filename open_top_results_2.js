// ==UserScript==
// @name         Open top 5
// @version      0.0.1
// @description  Open new tabs for the first 5 results in a search result page.
// @author       Felipe
// @match        *
// @resource     queries https://raw.githubusercontent.com/insightbrowser/augmentations/main/serp_query_selectors.json
// @grant        GM.openInTab
// @grant        GM.registerButton
// @grant        GM.getResourceText
// @noframes
// ==/UserScript==

(() => {
  const LINKS_SELECTOR = '.mnr-c a.cz3goc.BmP5tf';
  const LINKS_LIMIT = 5;

  const isMobile = window.navigator.userAgent.toLocaleLowerCase().includes('iphone');
  const queriesStr = GM.getResourceText('queries');
  const queries = JSON.parse(queriesStr);
  const se = Object
    .values(queries)
    .find((query) => {
      const se = query.search_engine_json;

      if (!se || !se.is_web_search) { return false; }

      return se.match_prefix && document.location.href.match(se.match_prefix);
    });

  if (!se) { return; }

  const linkQuery = se.querySelector[isMobile ? 'phone' : 'desktop'];

  if (!linkQuery) { return; }

  GM.registerButton('open-top-5', 'Open top 5 results', () => {
    Array
      .from(document.querySelectorAll(linkQuery))
      .map((e) => {
        if (e instanceof HTMLAnchorElement) {
          return e;
        }

        return e.closest('a');
      })
      .filter((l) => !!l)
      .map((l) => l.href)
      .filter((l) => !!l)
      .slice(0, LINKS_LIMIT).forEach(GM.openInTab);
  });
})();
