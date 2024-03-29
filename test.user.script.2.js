// ==UserScript==
// @name         Test Script
// @version      0.0.1
// @description  Script to test GM methods
// @author       Felipe
// @match        *
// @match        *://*/*
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @resource     layercss https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css
// @grant        GM.addStyle
// @grant        GM.getResourceText
// @grant        GM.getResourceUrl
// @grant        GM.addValueChangeListener
// @grant        GM.removeValueChangeListener
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM.listValues
// @grant        GM.deleteValue
// @grant        GM.xmlHttpRequest
// @grant        GM.setClipboard
// @grant        GM.openInTab
// @grant        GM.download
// @grant        GM.notification
// @grant        GM.registerMenuCommand
// @grant        GM.unregisterMenuCommand
// @noframes
// ==/UserScript==

const test1 = () => {
  console.log('Test Script: will test GM.setValue');
  GM.setValue('test_key', 'test_value');

  console.log('Test Script: will test GM.getValue');
  console.log('Test Script: get was successful', GM.getValue('test_key') === 'test_value');

  console.log('Test Script: will test GM.deleteValue');
  GM.deleteValue('test_key');

  console.log(GM.getValue('test_key'))
  console.log('Test Script: delete was successful', GM.getValue('test_key') === undefined);
};

const test2 = () => {
  console.log('Test Script: will test resource');
  console.log('Test Script: Resource URL is available', GM.getResourceUrl('layercss') === 'https://cdn.bootcdn.net/ajax/libs/layer/3.1.1/theme/default/layer.min.css');
  console.log('Test Script: Resource text is available', !!GM.getResourceText('layercss'));
};

const test3 = () => {
  console.log('Test Script: will test listeners');

  let onChangeOneCalled = 0;
  let onChangeTwoCalled = 0;

  console.log('Test Script: adding listeners one and two');

  GM.addValueChangeListener('one', (name, oldValue, newValue) => {
    onChangeOneCalled += 1;
    console.log('Test Script: Listener One called, old value:', oldValue, ', new value:', newValue);
  });

  GM.addValueChangeListener('two', (name, oldValue, newValue) => {
    onChangeTwoCalled += 1;
    console.log('Test Script: Listener Two called, old value:', oldValue, ', new value:', newValue);
  });

  GM.setValue('one', 1);
  GM.setValue('one', 2);
  GM.setValue('two', 'new value');

  setTimeout(() => {
    console.log('Test Script: listener one called twice', onChangeOneCalled === 2);
    console.log('Test Script: listener two called once', onChangeTwoCalled === 1);
    console.log('Test Script: will remove listener two');

    GM.removeValueChangeListener('two');

    GM.setValue('one', 3);
    GM.setValue('two', 'new other value');

    setTimeout(() => {
      console.log('Test Script: listener one called again', onChangeOneCalled === 3);
      console.log('Test Script: listener two not called', onChangeTwoCalled === 1);
    }, 500);
  }, 500);
};

const test4 = () => {
  console.log('Test Script: will test request')
  GM.xmlHttpRequest({
    url: "http://www.example.com",
    method: "HEAD",
    onload: function(response) {
      console.log('Test Script: onload', response.responseHeaders);
    },
    onprogress: function(response) {
      console.log('Test Script: onprogress', response);
    }
  });
};

const test5 = () => {
  console.log('Test Script: will test download');
  GM.download({
    url: "http://www.example.com",
    name: 'test_download',
  });
};

const test6 = () => {
  console.log('Test Script: will test notification');
  GM.notification({
    text: 'test-text',
    title: 'test-title',
    onclick: () => console.log('Test Script: notification clicked'),
    ondone: () => console.log('Test Script: notification dimissed'),
  });
};

const test7 = () => {
  console.log('Test Script: will test register menu command');
  GM.registerMenuCommand('Test menu 1', () => console.log('menu 1 clicked'));
  GM.registerMenuCommand('Test menu 2', () => console.log('menu 2 clicked'));
  GM.registerMenuCommand('Test menu 3', () => console.log('menu 3 clicked'));
};

const test8 = () => {
  console.log('Test Script: will test unregister menu command');
  GM.unregisterMenuCommand('Test menu 2');
};

const buildUI = () => {
  console.log('Test Script: will add copy UI');

  const wrapper = document.createElement('div');
  wrapper.style = `
    position: absolute;
    background: white;
    color: black;
    padding: 12px;
    left: 16px;
    bottom: 16px;
  `;
  
  const copy = document.createElement('div');
  const openInTab = document.createElement('div');
  const request = document.createElement('div');
  const download = document.createElement('div');
  const notification = document.createElement('div');
  const register = document.createElement('div');
  const unregister = document.createElement('div');

  copy.innerText = 'Copy';
  copy.onclick = async () => {
    console.log('Test Script: will set clipboard');

    const requestId = Array
      .from(crypto.getRandomValues(new Uint8Array(10)), (dec) => dec.toString(16).padStart(2, '0'))
      .join('');

    console.log(`Test Script: will set clipboard to ${ requestId } with GM`);

    GM.setClipboard(requestId);

    console.log(`Test Script: test if current text ${ (await navigator.clipboard.readText()) } is ${ requestId }`, (await navigator.clipboard.readText()) === requestId);
  };

  openInTab.style = 'margin-top: 8px;';
  openInTab.innerText = 'Open in tab';
  openInTab.onclick = async () => {
    console.log('Test Script: will test open in tab');

    GM.openInTab('https:/www.google.com/search?q=one', true)
    GM.openInTab('https:/www.google.com/search?q=two')
  };

  request.style = 'margin-top: 8px;';
  request.innerText = 'Request';
  request.onclick = async () => test4();

  download.style = `
    margin-top: 8px;
  `;
  download.innerText = 'Download';
  download.onclick = async () => test5();

  notification.style = 'margin-top: 8px;';
  notification.innerText = 'Notification';
  notification.onclick = async () => test6();

  register.style = 'margin-top: 8px;';
  register.innerText = 'Register';
  register.onclick = () => test7();

  unregister.style = 'margin-top: 8px;';
  unregister.innerText = 'Unregister';
  unregister.onclick = () => test8();

  wrapper.appendChild(copy);
  wrapper.appendChild(openInTab);
  wrapper.appendChild(request);
  wrapper.appendChild(download);
  wrapper.appendChild(notification);
  wrapper.appendChild(register);
  wrapper.appendChild(unregister);

  document.body.appendChild(wrapper);
  console.log('Test Script: copy UI added');
};

test1();
console.log('\n\n');
test2();
console.log('\n\n');
test3();
console.log('\n\n');

buildUI();
