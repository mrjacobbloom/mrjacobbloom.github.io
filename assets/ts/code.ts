// I don't care if the video fails to start playing, so we're swallowing those errors.
const noop = () => void 0;

let prevVideo: HTMLVideoElement | null = null;

const onCarouselReady = () => {
  const firstVideo = document.querySelector(`.carousel-cell.is-selected video`) as HTMLVideoElement;
  firstVideo.play().catch(noop);
  prevVideo = firstVideo;
};

const onCarouselChange = (slideId?: number) => {
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
  const newVideo = document.querySelector(`.carousel-cell.is-selected video`) as HTMLVideoElement;
  newVideo.play().catch(noop);
  prevVideo = newVideo;
};

new Flickity( '#projects-carousel', {
  on: {
    change: onCarouselChange,
    ready: onCarouselReady,
  },
  pageDots: false,
  wrapAround: true,
});