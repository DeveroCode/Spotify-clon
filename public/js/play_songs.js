import songs from '../json/musics.json' assert { type: "json" };
const data = Object.values(songs.musicas);
// Buttons
const btnPlay = document.querySelector('.play');
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.previous');
const progressBar = document.querySelector('.progress');

const play = document.querySelector('.play-image');
const pause = document.querySelector('.pause-image');

// Variables
let playing = false;
let audio;
let currentIndex = 0;
let songSrc = data[currentIndex].cancion;

// Cargamos todas las funciones
document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    btnPlay.addEventListener('click', allSong);
    btnPrev.addEventListener('click', nextSong);
    btnNext.addEventListener('click', prevSong);
}

function allSong() {
    btnPlay.setAttribute('data-src', songSrc);

    if (!audio) {
        audio = new Audio(songSrc);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('timeupdate', updateProgress);
        dataSongs(currentIndex);
    }

    if (!playing) {
        audio.play();
        play.classList.add('hidden');
        pause.classList.add('block');
        audio.addEventListener('timeupdate', updateProgress);
        playing = true;
    } else {
        audio.pause();
        play.classList.remove('hidden');
        pause.classList.remove('block');
        audio.addEventListener('timeupdate', updateProgress);
        pause.classList.add('hidden');
        playing = false;
    }

}

function nextSong() {
    currentIndex++;
    if (currentIndex >= data.length) {
        currentIndex = 0;
    }
    songSrc = data[currentIndex].cancion;
    if (audio) {
        audio.pause();
        play.classList.add('hidden');
        pause.classList.remove('block');
    }
    setTimeout(() => {
        audio = new Audio(songSrc);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('timeupdate', updateProgress);
        dataSongs(currentIndex);
        audio.play();
        pause.classList.add('block');
    }, 200);
}

function prevSong() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = data.length - 1;
    }
    songSrc = data[currentIndex].cancion;
    if (audio) {
        audio.pause();
    }
    setTimeout(() => {
        audio = new Audio(songSrc);
        audio.addEventListener('ended', nextSong);
        audio.addEventListener('timeupdate', updateProgress);
        dataSongs(currentIndex);
        audio.play();
        pause.classList.add('block');
    }, 200);
}

function dataSongs(currentIndex) {
    const cont = document.querySelector('.album-preview');

    const albumHTML = `
    <div class="image-album">
      <img src="${data[currentIndex].image_album}" alt="">
    </div>
    <div class="text-album">
      <a href="#" class="color">${data[currentIndex].artist}</a>
      <a href="#" class="color">${data[currentIndex].name}</a>
    </div>
  `;

    const albumFragment = document.createRange().createContextualFragment(albumHTML);

    cont.innerHTML = '';
    cont.appendChild(albumFragment);
}

function updateProgress() {
    const currentTime = audio.currentTime;
    const currentTimeSong = document.querySelector('.current');
    const durationSong = document.querySelector('.total-song');
    const duration = audio.duration;
    const progress = currentTime / duration * 100;

    currentTimeSong.textContent = formatTime(currentTime);
    durationSong.textContent = formatTime(duration);

    progressBar.style.width = `${progress}%`;
}

function formatTime(times) {
    const minutes = Math.floor(times / 60);
    const seconds = Math.floor(times % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}