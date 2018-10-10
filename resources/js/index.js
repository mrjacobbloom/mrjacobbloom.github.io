(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// handle the intro animaton
if(location.hash.includes('noAnimate')) {
  document.body.classList.remove('animIn');
} else {
  console.log('aa')
  console.log(document.querySelector('#animIn-overlay'))
  document.querySelector('#animIn-overlay').addEventListener('click', () => {
    console.log('bb')
    document.body.classList.remove('animIn');
    document.body.classList.add('cancelAnimIn');
    resizeHeroVids();
  });
  setTimeout(() => {
    document.body.classList.remove('animIn');
    resizeHeroVids();
  }, 3000);
}

// clicking scoll message scrolls you down
document.querySelector('.scroll-message').addEventListener('click', e => {
  document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth' 
  });
  e.preventDefault();
  e.stopPropagation();
  return false;
});
},{}]},{},[1]);
