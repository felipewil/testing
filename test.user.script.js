// ==UserScript==
// @name         Test Script
// @version      0.0.1
// @description  Script to test GM methods
// @author       Felipe
// @match        *
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @resource     layercss https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_xmlHttpRequest
// @grant        GM_setClipboard
// ==/UserScript==

const test1 = () => {
  console.log('Will test GM_setValue');
  GM_setValue('test_key', 'test_value');

  console.log('Will test GM_getValue');
  console.log('Get was successful', GM_getValue('test_key') === 'test_value');

  console.log('Will test GM_deleteValue');
  GM_deleteValue('test_key');

  console.log('Delete was successful', GM_getValue('test_key') === undefined);
};

test1();
