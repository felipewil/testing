// ==UserScript==
// @name Sci Hub Injector
// @version 0.1
// @description Adds SciHub links to popular publishing websites to make free access to science even easier.
// @include https://pubmed.ncbi.nlm.nih.gov/*
// @include https://www.nature.com/*
// @include https://www.tandfonline.com/*
// @include https://www.sciencedirect.com/*
// @include http://www.eurekaselect.com/*
// @include https://www.science.org/*
// @include https://dom-pubs.onlinelibrary.wiley.com/doi/*
// @include https://link.springer.com/*
// @include https://www.jstor.org/*
// @include https://www.researchgate.net/*
// @include https://ieeexplore.ieee.org/*
// @include https://journals.sagepub.com/*
// @include https://www.degruyter.com/*
// @grant GM.registerButton
// @grant GM.openInTab
// ==/UserScript==

const cb = () => {
  GM.openInTab(`https://sci-hub.se/${document.location.href}`);
};

GM.registerButton('sci-hub', 'Open this page on Sci-Hub', null, cb);
