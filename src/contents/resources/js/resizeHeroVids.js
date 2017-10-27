window.resizeHeroVids = function() {
  var heroVids = document.querySelectorAll('.hero-bg video');
  for(let i = 0, vid; vid = heroVids[i]; i++) {
    if(vid.readyState != 4) {
      vid.addEventListener('loadeddata', function() {
       resizeHeroVids();
      }, {once: true});
    } else {
      let parent = vid.parentNode,
      vw = vid.videoWidth,
      vh = vid.videoHeight,
      vr = vh / vw,
      pw = parent.offsetWidth,
      ph = parent.offsetHeight,
      pr = ph / pw;
      if(!pw || !ph) {
        // noop
      } else if(pr > vr) {
        vid.style.width = 'unset';
        vid.style.height = `${ph}px`;
        vid.style.marginLeft = `${-1 * ((ph / vr) - pw)/2}px`;
      } else {
        vid.style.width = `${pw}px`;
        vid.style.height = 'unset';
        vid.style.marginLeft = 'unset';
      }
    }
  }
}
window.addEventListener('load', resizeHeroVids);
window.addEventListener('resize', resizeHeroVids);
