(() => {
  var carousel = new window.Flickity( '#projects-carousel', {
    wrapAround: true,
    pageDots: false,
  });
  const noop = () => 0;
  let pausedByDefault = false;
  carousel.on('ready', () => {
    const firstVideo = document.querySelector(`.project-description[data-slide="0"] video`);
    if (firstVideo.paused) {
      firstVideo.play().catch(noop);
      pausedByDefault = true;
    }
  });
  carousel.on('change', (slideId) => {
    const prevDescription = document.querySelector('.project-description.visible');
    if (prevDescription) {
      prevDescription.classList.remove('visible');
      if (pausedByDefault) prevDescription.querySelector('video').pause().catch(noop);
    }
    const newDescription = document.querySelector(`.project-description[data-slide="${slideId}"]`);
    if (newDescription) {
      newDescription.classList.add('visible');
      if (pausedByDefault) newDescription.querySelector('video').play().catch(noop);
    }
  });
})();