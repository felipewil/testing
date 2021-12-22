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
  console.log('Test Script: will test GM_setValue');
  GM_setValue('test_key', 'test_value');

  console.log('Test Script: will test GM_getValue');
  console.log('Test Script: get was successful', GM_getValue('test_key') === 'test_value');

  console.log('Test Script: will test GM_deleteValue');
  GM_deleteValue('test_key');

  console.log(GM_getValue('test_key'))
  console.log('Test Script: delete was successful', GM_getValue('test_key') === undefined);
};

const test2 = () => {
  console.log('Test Script: will test resource');
  console.log('Resource URL is available', GM_getResourceURL('layercss') === 'https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css');
  console.log('Resource text is available', !!GM_getResourceText('layercss'));
};

const test3 = () => {
  console.log('Test Script: will test listeners');

  let onChangeOneCalled = 0;
  let onChangeTwoCalled = 0;

  console.log('Test Script: adding listeners one and two');

  GM_addValueChangeListener('one', (name, oldValue, newValue) => {
    onChangeOneCalled += 1;
    console.log('Listener One called, old value:', oldValue, ', new value:', newValue);
  });

  GM_addValueChangeListener('two', (name, oldValue, newValue) => {
    onChangeTwoCalled += 1;
    console.log('Listener two called, old value:', oldValue, ', new value:', newValue);
  });

  setTimeout(() => {
    GM_setValue('one', 1);
    GM_setValue('one', 2);
    GM_setValue('two', 'new value');

    console.log('Test Script: listener one called twice', onChangeOneCalled === 2);
    console.log('Test Script: listener two called once', onChangeOneCalled === 1);
    console.log('Test Script: will remove listener two');

    GM_removeValueChangeListener('two');

    GM_setValue('one', 3);
    GM_setValue('two', 'new other value');

    setTimeout(() => {
      console.log('Test Script: listener one called again', onChangeOneCalled === 3);
      console.log('Test Script: listener two not called', onChangeOneCalled === 1);
    }, 200);
  }, 200);
};

test1();
console.log('\n\n');
test2();
console.log('\n\n');
test3();
