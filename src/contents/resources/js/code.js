(() => {
  var carousel = new window.Flickity( '#projects-carousel', {
    wrapAround: true,
    pageDots: false,
  });
  carousel.on('change', (slideId) => {
    const prevDescription = document.querySelector('.project-description.visible');
    if (prevDescription) prevDescription.classList.remove('visible');
    const newDescription = document.querySelector(`.project-description[data-slide="${slideId}"]`);
    if (newDescription) newDescription.classList.add('visible');
  });
})();