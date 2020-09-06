// clicking scoll message scrolls you down
document.querySelector('.scroll-message')!.addEventListener('click', e => {
  document.querySelector('#about')!.scrollIntoView({ 
    behavior: 'smooth' 
  });
  e.preventDefault();
  e.stopPropagation();
  return false;
});