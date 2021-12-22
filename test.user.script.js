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
// @grant        GM_openInTab
// @noframes
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
  console.log('Test Script: Resource URL is available', GM_getResourceURL('layercss') === 'https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css');
  console.log('Test Script: Resource text is available', !!GM_getResourceText('layercss'));
};

const test3 = () => {
  console.log('Test Script: will test listeners');

  let onChangeOneCalled = 0;
  let onChangeTwoCalled = 0;

  console.log('Test Script: adding listeners one and two');

  GM_addValueChangeListener('one', (name, oldValue, newValue) => {
    onChangeOneCalled += 1;
    console.log('Test Script: Listener One called, old value:', oldValue, ', new value:', newValue);
  });

  GM_addValueChangeListener('two', (name, oldValue, newValue) => {
    onChangeTwoCalled += 1;
    console.log('Test Script: Listener Two called, old value:', oldValue, ', new value:', newValue);
  });

  GM_setValue('one', 1);
  GM_setValue('one', 2);
  GM_setValue('two', 'new value');

  setTimeout(() => {
    console.log('Test Script: listener one called twice', onChangeOneCalled === 2);
    console.log('Test Script: listener two called once', onChangeTwoCalled === 1);
    console.log('Test Script: will remove listener two');

    GM_removeValueChangeListener('two');

    GM_setValue('one', 3);
    GM_setValue('two', 'new other value');

    setTimeout(() => {
      console.log('Test Script: listener one called again', onChangeOneCalled === 3);
      console.log('Test Script: listener two not called', onChangeTwoCalled === 1);
    }, 500);
  }, 500);
};

const test4 = () => {
  console.log('Test Script: will test open in tab');

  GM_openInTab('https:/www.google.com/search?q=one', true)
  GM_openInTab('https:/www.google.com/search?q=two')
};

const test5 = async () => {
  console.log('Test Script: will set clipboard to "test" native');

  navigator.clipboard.writeText('test');

  console.log('Test Script: current text is "test"', (await navigator.clipboard.readText()) === 'test');
  console.log('Test Script: will set clipboard to "new test" with GM');

  GM_setClipboard('new test');

  console.log('Test Script: current text is "new test"', (await navigator.clipboard.readText()) === 'new test');
};

test1();
console.log('\n\n');
test2();
console.log('\n\n');
test3();
console.log('\n\n');
// test4();
console.log('\n\n');
test5();
