const isAnimIn = !sessionStorage.getItem('noAnimate')
const taglines = [
  'is really great and smart',
  'knows pi to 6 decimal places',
  'codes like a pro',
  'has cool hair',
  'is a great speler',
  'has used a microwave',
  'smells nice (usually)',
  'has been outside',
  'looks good in clothing',
  'knows the ABC\'s backwards',
  'never lies (not counting this)',
  'gets enough sleep'
];

// handle the intro animaton
if(isAnimIn) {
  document.body.classList.add('animIn');
  sessionStorage.setItem('noAnimate', 'true');
  document.querySelector('#animIn-overlay')!.addEventListener('click', () => {
    document.body.classList.remove('animIn');
    document.body.classList.add('cancelAnimIn');
  });
  setTimeout(() => {
    document.body.classList.remove('animIn');
  }, 3000);
}

const flipper = document.querySelector('.flipper')!;
function initFlipper(start: number) {
  let i = start;
  flipper.querySelector('.front')!.textContent = taglines[i];
  setInterval(() => {
    i++;
    let tagline = taglines[i % taglines.length];
    if(flipper.classList.toggle('flip')) {
      flipper.querySelector('.back')!.textContent = tagline;
    } else {
      flipper.querySelector('.front')!.textContent = tagline;
    }
  }, 4000);
}

if(isAnimIn) {
  flipper.querySelector('.front')!.textContent = taglines[0];
  setTimeout(() => initFlipper(0), 3000);
} else {
  initFlipper( Math.floor(Math.random() * taglines.length) );
}
