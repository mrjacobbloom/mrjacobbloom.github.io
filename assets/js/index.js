// handle the intro animaton
if(!sessionStorage.getItem('noAnimate')) {
  document.body.classList.add('animIn');
  sessionStorage.setItem('noAnimate', true);
  document.querySelector('#animIn-overlay').addEventListener('click', () => {
    document.body.classList.remove('animIn');
    document.body.classList.add('cancelAnimIn');
  });
  setTimeout(() => {
    document.body.classList.remove('animIn');
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