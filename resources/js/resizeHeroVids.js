(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
