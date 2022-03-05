// ==UserScript==
// @name         Indexing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.familysearch.org/indexing*
// @require      https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.min.js

// ==/UserScript==

console.log('enter');
console.log(Mousetrap);

Mousetrap.bind('o b', function() {document.querySelector("#batch0 > div.batch-item-content.row-fluid > div > button").click();});
Mousetrap.bind('f b', function() {document.querySelector("#main > div.layout-container > div.main-content-column > div.widget.open-batches > header > div.pull-right > button").click();});
Mousetrap.bind('m a', function() {document.querySelector("#main > div.layout-container > div.main-content-column > div.widget.open-batches > div > div.widget-toolbar > div > div > div.pull-left.manage-button > button").click();});
Mousetrap.bind('s u', function() {document.querySelector("a[ng-click='step3.submit()']").click();});
Mousetrap.bind('3', function() {var wnd = window.open('https://www.churchofjesuschrist.org','_blank');focus();});
