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