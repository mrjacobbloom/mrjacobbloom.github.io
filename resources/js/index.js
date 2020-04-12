(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// handle the intro animaton
if(sessionStorage.getItem('noAnimate')) {
  document.body.classList.remove('animIn');
} else {
  sessionStorage.setItem('noAnimate', true);
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
