// script.js

const video = document.getElementById('custom-video');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volumeControl');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Update the progress bar as the video plays
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

// Allow users to seek to a specific point in the video
progressBar.addEventListener('input', () => {
    const value = progressBar.value;
    const newTime = (value / 100) * video.duration;
    video.currentTime = newTime;
});

// Volume control functionality
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value / 100;
});

// Fullscreen functionality
const urlParams = new URLSearchParams(window.location.search);
const videoSrc = urlParams.get('video');
if (videoSrc) {
    document.getElementById('custom-video').src = videoSrc;
}

fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    }
});
