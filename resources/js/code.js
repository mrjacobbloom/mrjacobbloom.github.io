(() => {
  // I don't care if the video fails to start playing, so we're swallowing those errors.
  const noop = () => void 0;

  /** @type {HTMLVideoElement | null} */ let prevVideo = null;

  const onCarouselReady = () => {
    /** @type {HTMLVideoElement} */ const firstVideo = document.querySelector(`.carousel-cell.is-selected video`);
    firstVideo.play().catch(noop);
    prevVideo = firstVideo;
  };

  const onCarouselChange = (slideId) => {
    const prevDescription = document.querySelector('.project-description.visible');
    if (prevDescription) {
      prevDescription.classList.remove('visible');
    }
    if (prevVideo) {
      prevVideo.pause();
    }
    const newDescription = document.querySelector(`.project-description[data-slide="${slideId}"]`);
    if (newDescription) {
      newDescription.classList.add('visible');
    }
    /** @type {HTMLVideoElement} */ const newVideo = document.querySelector(`.carousel-cell.is-selected video`);
    newVideo.play().catch(noop);
    prevVideo = newVideo;
  };

  new window.Flickity( '#projects-carousel', {
    on: {
      change: onCarouselChange,
      ready: onCarouselReady,
    },
    pageDots: false,
    wrapAround: true,
  });
})();