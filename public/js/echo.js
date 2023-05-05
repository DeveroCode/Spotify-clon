import data from '../json/echo-para..json'assert { type: "json" };
const container = document.querySelector('.playlist');
const screenWidth = window.innerWidth;

window.onload = function () {
    getAllPlaylist();
}


function getAllPlaylist() {
    const playlists = Object.values(data.hecho);

    playlists.forEach((playlist, index) => {
        if (screenWidth >= 999 && index < 6) {
            const card = document.createRange().createContextualFragment(`
            <div class="playlist__cont">
                <div class="playlist-image">
                    <img src=${playlist.album_image} alt="${playlist.playlist}">
                </div>
                <div class="playlist__information">
                    <h3>${playlist.playlist}</h3>
                    <span>
                        ${playlist.description}
                    </span>
                </div>
            </div>
        `);

            container.append(card);
        } else if (screenWidth >= 900 && index < 3) {
            const card = document.createRange().createContextualFragment(`
            <div class="playlist__cont">
                <div class="playlist-image">
                    <img src=${playlist.album_image} alt="${playlist.playlist}">
                </div>
                <div class="playlist__information">
                    <h3>${playlist.playlist}</h3>
                    <span>
                        ${playlist.description}
                    </span>
                </div>
            </div>
        `);

            container.append(card);
        }
    });
}
