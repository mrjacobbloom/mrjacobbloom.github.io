(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
