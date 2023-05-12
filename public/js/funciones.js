import data from '../json/echo-para..json' assert { type: "json" };
import mixesP from '../json/mixes.json' assert { type: "json" };
import recientemente from '../json/reciente.json' assert { type: "json" };

const container = document.querySelector('.playlist');
const containerMixes = document.querySelector('.mixes');
const screenWidth = window.innerWidth;

window.onload = function () {
    getAllPlaylist();
    getMixes();
    getRecientemente();
}


function getAllPlaylist() {
    const playlists = Object.values(data.hecho);

    container.innerHTML = '';

    playlists.forEach((playlist, index) => {
        if (screenWidth >= 988) {
            const card = document.createRange().createContextualFragment(`
                <div class="playlist__cont">
                    <div class="playlist-image">
                        <img src=${playlist.album_image} alt="${playlist.playlist}">
                    </div>
                    <div class="playlist__information">
                        <h3>${playlist.playlist}</h3>
                        <span class="uppercase">
                            ${playlist.description}
                        </span>
                    </div>
                </div>
            `);

            container.append(card);
        } else if (screenWidth < 999 && index < 3) {
            const card = document.createRange().createContextualFragment(`
                <div class="playlist__cont">
                    <div class="playlist-image">
                        <img src=${playlist.album_image} alt="${playlist.playlist}">
                    </div>
                    <div class="playlist__information">
                        <h3>${playlist.playlist}</h3>
                        <span class="uppercase">
                            ${playlist.description}
                        </span>
                    </div>
                </div>
            `);

            container.append(card);
        }
    });

    // Agregar evento de escucha para cambios en el tamaño de la pantalla
    // window.addEventListener('resize', getAllPlaylist);
}

function getMixes() {
    const mixes = Object.values(mixesP.mixes);
    containerMixes.innerHTML = '';
    mixes.forEach((mix, index) => {
        if (screenWidth >= 988) {
            const card = document.createRange().createContextualFragment(`
                <div class="playlist__cont">
                    <div class="playlist-image">
                        <img src=${mix.album_image} alt="${mix.playlist}">
                    </div>
                    <div class="playlist__information">
                        <h3>${mix.playlist}</h3>
                        <span class="uppercase">
                            ${mix.description}
                        </span>
                    </div>
                </div>
            `);

            containerMixes.append(card);
        } else if (screenWidth < 999 && index < 3) {
            const card = document.createRange().createContextualFragment(`
                <div class="playlist__cont">
                    <div class="playlist-image">
                        <img src=${mix.album_image} alt="${mix.playlist}">
                    </div>
                    <div class="playlist__information">
                        <h3>${mix.playlist}</h3>
                        <span class="uppercase">
                            ${mix.description}
                        </span>
                    </div>
                </div>
            `);

            containerMixes.append(card);
        }
    });

    // window.addEventListener('resize', getMixes);
}


function getRecientemente() {
    const recientes = Object.values(recientemente.reciente);
    const containerRecientes = document.querySelector('.reciente');
    containerRecientes.innerHTML = '';

    recientes.forEach((reciente, index) => {
        if (screenWidth >= 988) {
            const card = document.createRange().createContextualFragment(`
                <div class="playlist__cont">
                    <div class="playlist-image">
                        <img src=${reciente.album_image} alt="${reciente.playlist}">
                    </div>
                    <div class="playlist__information">
                        <h3>${reciente.playlist}</h3>
                        <span class="uppercase">
                            ${reciente.description}
                        </span>
                    </div>
                </div>
            `);

            containerRecientes.append(card);
        } else if (screenWidth < 999 && index < 3) {
            const card = document.createRange().createContextualFragment(`
                <div class="playlist__cont">
                    <div class="playlist-image">
                        <img src=${reciente.album_image} alt="${reciente.playlist}">
                    </div>
                    <div class="playlist__information">
                        <h3>${reciente.playlist}</h3>
                        <span class="uppercase">
                            ${reciente.description}
                        </span>
                    </div>
                </div>
            `);

            containerRecientes.append(card);
        }
    });

    // window.addEventListener('resize', getRecientemente);
}   