import * as analogDOM from './analogDOM.js';
import { PROJECTS } from './projects.js';
var projectElems = [];
PROJECTS.forEach(function (project, index) {
    var $video = (analogDOM.createElement("video", { className: "hero-bg", "aria-hidden": "true", loop: true, muted: true, src: project.videoSrc }));
    var $carouselItem = (analogDOM.createElement("div", { "class": "carousel-cell hero" },
        $video,
        analogDOM.createElement("div", { className: "hero-content" }, project.title)));
    var $description = (analogDOM.createElement("div", { className: "project-description" },
        analogDOM.createElement("h3", null, project.title),
        analogDOM.createElement("p", { className: "project-technologies" }, project.technologies.join(', ')),
        project.description,
        project.buttons.map(function (button) { return (analogDOM.createElement("a", { className: "triangle button", href: button.href },
            analogDOM.createElement("i", { className: "fa fa-" + button.icon, "aria-hidden": "true" }),
            button.text)); })));
    if (index === 0) {
        $video.autoplay = true;
        $description.classList.add('visible');
    }
    projectElems.push({ project: project, $video: $video, $carouselItem: $carouselItem, $description: $description });
});
analogDOM.render(document.querySelector('#projects'), analogDOM.createElement(analogDOM.Fragment, null,
    analogDOM.createElement("div", { className: "main-carousel", id: "projects-carousel" }, projectElems.map(function (_a) {
        var $carouselItem = _a.$carouselItem;
        return $carouselItem;
    })),
    analogDOM.createElement("div", { "class": "project-descriptions" }, projectElems.map(function (_a) {
        var $description = _a.$description;
        return $description;
    }))));
// I don't care if the video fails to start playing, so we're swallowing those errors.
var noop = function () { return void 0; };
var prevSlideId = 0;
var onCarouselReady = function () {
    // Redundant attempts to start video
    projectElems[0].$video.play()["catch"](noop);
};
var onCarouselChange = function (slideId) {
    console.log('slideId', slideId, 'prevSlideId', prevSlideId);
    var prevProject = projectElems[prevSlideId];
    prevProject.$description.classList.remove('visible');
    prevProject.$video.pause();
    if (typeof slideId === 'number') {
        var newProject = projectElems[slideId];
        newProject.$description.classList.add('visible');
        newProject.$video.play()["catch"](noop);
        prevSlideId = slideId;
    }
};
new Flickity('#projects-carousel', {
    on: { ready: onCarouselReady, change: onCarouselChange },
    pageDots: false,
    wrapAround: true
});
//# sourceMappingURL=code.js.map