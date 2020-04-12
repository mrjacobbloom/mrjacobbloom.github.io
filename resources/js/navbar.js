(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    // 'should be hired by you',
    'has been outside',
    'does awesome music things',
    'looks good in clothing',
    // 'doesn\'t like his own posts',
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
