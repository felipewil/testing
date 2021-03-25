(function() {
  function act() {
    let v = document.querySelector('video');
    v.addEventListener('webkitpresentationmodechanged', (e)=>{
      e.stopPropagation();
      console.log('stop prop');
    }, true);
//     setTimeout(()=>{
//       v.webkitSetPresentationMode('picture-in-picture');
//       console.log('pip');
//     }, 1000);
  }
  
  function helper() {
    let vid = document.querySelector('video');
    if (vid) {
      act()
    } else {
      setTimeout(() => helper(), 1000)
    } 
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('loaded 1');
    helper();
  } else {
    document.addEventListener(
      'DOMContentLoaded',
      () => { console.log('loaded 2'); helper(); },
      false,
    );
  }
})()
