// ==UserScript==
// @name        Social sites stories counter
// @description Count number of stories seem in social sites
// @match     https://*.facebook.com/*
// @exclude   https://developers.facebook.com/*
// @match     https://www.instagram.com/
// @match     https://www.reddit.com/*
// @match     https://twitter.com/home?
// @match     https://mobile.twitter.com/home?
// @version   1.0.0
// ==/UserScript==

// @grant     GM.getValue
// @grant     GM.setValue

const WRAPPER_SELECTOR = 'hw-story-counter';
const OBSERVED_ATTRIBUTE = 'hw-story-observed';
const COUNTED_ATTRIBUTE = 'hw-story-counted';
const THRESHOLD = 0.5;
const QUERIES = [
  {
    host: [ '(.*\\.)?facebook\\.com\/(home.php)?$' ],
    root: '#root',
    phone: 'article._55wo._5rgr._5gh8',
  },
  {
    host: [ 'twitter\\.com\/(home)?$' ],
    root: '.css-1dbjc4n',
    phone: 'div.css-1dbjc4n.r-1igl3o0.r-qklmqi.r-1adg3ll.r-1ny4l3l',
  },
  {
    host: [ 'instagram\\.com\/$'],
    phone: 'article._8Rm4L.M9sTE._1gNme.h0YNM.SgTZ1',
  }
];

const addCounter = () => {
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
  .hw-story-counter {
    --notification-fg-color: #333;
    --notification-bg-color: rgb(246,246,246, 0.95);
  }

    @media (prefers-color-scheme: dark) {
      .hw-story-counter {
        --notification-fg-color: #ccc;
        --notification-bg-color: #202124;
      }
    }

    .hw-story-counter {
      display: flex;
      position: fixed;
      left: 20px;
      bottom: 36px;
      background: var(--notification-bg-color);
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      z-index: 2147483647;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.5));
      filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.5));
    }

    .hw-story-counter span {
      font-size: 16px;
      color: var(--notification-fg-color);
      margin: 8px 10px;
    }
  `;

  const wrapper = document.createElement('div');
  wrapper.classList.add(WRAPPER_SELECTOR);

  const counter = document.createElement('span');
  counter.innerText = 'Stories: 0';

  wrapper.appendChild(counter);
  document.head.appendChild(styleSheet);
  document.body.appendChild(wrapper);

  return counter;
};

const updateCounter = (counter, count) => {
  GM.setValue('STORY_COUNT_KEY', count);
  counter.innerText = `Stories: ${ count }`;
};

const run = async () => {
  const query = QUERIES.find((q) => {
    const url = location.hostname + location.pathname;
    return q.host.find((host) => url.match(host));
  });

  if (!query) { return; }

  const observeIntersection = (target) => {
    const onIntersect = (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const element = entry.target;

          if (element.getAttribute(COUNTED_ATTRIBUTE) === '1') {
            observer.disconnect();
            return;
          }

          count += 1;

          element.setAttribute(COUNTED_ATTRIBUTE, '1');

          updateCounter(counter, count);

          observer.disconnect();
        }
      }
    };

    const options = {
      threshold: THRESHOLD,
    };

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(target);
  };

  const handleElement = (element) => {
    if (!element.getAttribute || element.getAttribute(OBSERVED_ATTRIBUTE) === '1') { return; }

    const isTarget = element.matches(selector)

    if (isTarget) {
      element.setAttribute(OBSERVED_ATTRIBUTE, '1')
      observeIntersection(element);
    } else {
      const elements = Array.from(element.querySelectorAll(selector));

      elements.forEach(handleElement);
    }
  }

  const observeMutation = () => {
    const observer = new MutationObserver((mutationsList) => {
      for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const nodes = Array.from(mutation.addedNodes);

          for (const node of nodes) {
            handleElement(node);
          }
        }
      }
    });

    const root = query.root ? document.querySelector(query.root) : document;
    observer.observe(root, { childList: true, subtree: true });
  };

  console.log('will get count', GM);
  console.log('will get count', GM.getValue);
  let count = await GM.getValue('STORY_COUNT_KEY');
  console.log('did get count', count);
  const counter = addCounter();
  const selector = navigator.userAgent.includes('iPhone') ? query.phone : '';
  const targets = document.querySelectorAll(selector);

  targets.forEach(handleElement);

  observeMutation();
};
console.log('will run');
run();
