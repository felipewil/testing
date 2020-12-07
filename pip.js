(function() {
  function act() {
    let v = document.querySelector('video');
    v.addEventListener('webkitpresentationmodechanged', (e)=>e.stopPropagation(), true);
    setTimeout(()=>v.webkitSetPresentationMode('picture-in-picture'), 3000);
    completion()
  }
  
  function helper() {
    let vid = document.querySelector('video');
    if (vid) {
      act()
    } else {
      setTimeout(() => helper(), 1000)
    }
    
  }
})()
