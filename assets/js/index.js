"use strict";
// handle the intro animaton
if (!sessionStorage.getItem('noAnimate')) {
    document.body.classList.add('animIn');
    sessionStorage.setItem('noAnimate', 'true');
    document.querySelector('#animIn-overlay').addEventListener('click', function () {
        document.body.classList.remove('animIn');
        document.body.classList.add('cancelAnimIn');
    });
    setTimeout(function () {
        document.body.classList.remove('animIn');
    }, 3000);
}
// clicking scoll message scrolls you down
document.querySelector('.scroll-message').addEventListener('click', function (e) {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    e.preventDefault();
    e.stopPropagation();
    return false;
});
//# sourceMappingURL=index.js.map