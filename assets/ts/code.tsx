import * as analogDOM from './analogDOM.js';
import { PROJECTS } from './projects.js';

const projectElems: {
  project: CodeProject;
  $video: HTMLVideoElement;
  $carouselItem: HTMLDivElement;
  $description: HTMLDivElement;
}[] = [];

PROJECTS.forEach((project, index) => {
  const $video = (<video className="hero-bg" aria-hidden="true" loop muted src={project.videoSrc}/>) as HTMLVideoElement;
  const $carouselItem = (
    <div class="carousel-cell hero">
      {$video}
      <div className="hero-content">{project.title}</div>
    </div>
  ) as HTMLDivElement;
  const $description = (
    <div className="project-description">
      <h3>{project.title}</h3>
      <p className="project-technologies">{project.technologies.join(', ')}</p>
      {project.description}
      {project.buttons.map((button) => (
        <a className="triangle button" href={button.href}>
          <i className={`fa fa-${button.icon}`} aria-hidden="true"></i>
          {button.text}
        </a>
      ))}
    </div>
  ) as HTMLDivElement;
  if (index === 0) {
    $video.autoplay = true;
    $description.classList.add('visible');
  }
  projectElems.push({ project, $video, $carouselItem, $description });
});

analogDOM.render(document.querySelector('#projects') as HTMLElement,
  <>
    <div className="main-carousel" id="projects-carousel">
      {projectElems.map(({ $carouselItem }) => $carouselItem)}
    </div>
    <div class="project-descriptions">
      {projectElems.map(({ $description }) => $description)}
    </div>
  </>
);

// I don't care if the video fails to start playing, so we're swallowing those errors.
const noop = () => void 0;

let prevSlideId: number = 0;

const onCarouselReady = () => {
  // Redundant attempts to start video
  projectElems[0].$video.play().catch(noop);
}

const onCarouselChange = (slideId?: number) => {
  console.log('slideId', slideId, 'prevSlideId', prevSlideId);
  const prevProject = projectElems[prevSlideId];
  prevProject.$description.classList.remove('visible');
  prevProject.$video.pause();

  if (typeof slideId === 'number') {
    const newProject = projectElems[slideId];
    newProject.$description.classList.add('visible');
    newProject.$video.play().catch(noop);
    prevSlideId = slideId;
  }
};

new Flickity( '#projects-carousel', {
  on: { ready: onCarouselReady, change: onCarouselChange },
  pageDots: false,
  wrapAround: true,
});