"use strict";
// I don't care if the video fails to start playing, so we're swallowing those errors.
var noop = function () { return void 0; };
var prevVideo = null;
var onCarouselReady = function () {
    var firstVideo = document.querySelector(".carousel-cell.is-selected video");
    firstVideo.play()["catch"](noop);
    prevVideo = firstVideo;
};
var onCarouselChange = function (slideId) {
    var prevDescription = document.querySelector('.project-description.visible');
    if (prevDescription) {
        prevDescription.classList.remove('visible');
    }
    if (prevVideo) {
        prevVideo.pause();
    }
    var newDescription = document.querySelector(".project-description[data-slide=\"" + slideId + "\"]");
    if (newDescription) {
        newDescription.classList.add('visible');
    }
    var newVideo = document.querySelector(".carousel-cell.is-selected video");
    newVideo.play()["catch"](noop);
    prevVideo = newVideo;
};
new Flickity('#projects-carousel', {
    on: {
        change: onCarouselChange,
        ready: onCarouselReady
    },
    pageDots: false,
    wrapAround: true
});
//# sourceMappingURL=code.js.map