import data from '../json/echo-para..json'assert { type: "json" };
const container = document.querySelector('.playlist');
const screenWidth = window.innerWidth;

window.onload = function () {
    getAllPlaylist();
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
    window.addEventListener('resize', getAllPlaylist);
}

