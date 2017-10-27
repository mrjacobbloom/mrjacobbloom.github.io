(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var isAnimIn = document.body.classList.contains('animIn');
  var taglines = [
    'is really great and smart',
    'knows pi to 6 decimal places',
    'codes like a pro',
    'has cool hair',
    'is a great speler',
    'has a voice like an angel',
    'smells nice (usually)',
    'should be hired by you',
    'has been outside',
    'does awesome music things',
    'looks good in clothing',
    'doesn\'t like his own posts',
    'knows the ABC\'s backwards',
    'never lies (not counting this)'
  ];
  var flipper = document.querySelector('.flipper');
  function initFlipper(start) {
    var i = start;
    flipper.querySelector('.front').textContent = taglines[i];
    setInterval(e => {
      i++;
      let tagline = taglines[i % taglines.length];
      if(flipper.classList.toggle('flip')) {
        flipper.querySelector('.back').textContent = tagline;
      } else {
        flipper.querySelector('.front').textContent = tagline;
      }
    }, 4000);
  }
  if(isAnimIn) {
    flipper.querySelector('.front').textContent = taglines[0];
    setTimeout(() => initFlipper(0), 3000);
  } else {
    initFlipper( Math.floor(Math.random() * taglines.length) );
  }
})();

},{}]},{},[1]);
