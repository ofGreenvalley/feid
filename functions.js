const pressButton = document.getElementById("pressButton");

const avatarButton = document.getElementById("avatarButton");
const plusButton = document.getElementById("plusButton");
const friendsButton = document.getElementById("friendsButton");
const musicButton = document.getElementById("musicButton");

const messagePanel = document.getElementById("messagePanel");
const friendsPanel = document.getElementById("friendsPanel");
const musicPanel = document.getElementById("musicPanel");


/* =========================
   INICIAR
========================= */

pressButton.addEventListener("click", () => {

    document.body.classList.add("leaving");

});


/* =========================
   CERRAR TODOS LOS PANELES
========================= */

function closePanels() {

    messagePanel.classList.remove("open");

    friendsPanel.classList.remove("open");

    musicPanel.classList.remove("open");

}


/* =========================
   AVATAR
========================= */

avatarButton.addEventListener("click", () => {

    const isOpen = messagePanel.classList.contains("open");

    closePanels();

    if (!isOpen) {
        messagePanel.classList.add("open");
    }

});


/* =========================
   AMIGOS
========================= */

friendsButton.addEventListener("click", () => {

    const isOpen = friendsPanel.classList.contains("open");

    closePanels();

    if (!isOpen) {
        friendsPanel.classList.add("open");
    }

});


/* =========================
   MÚSICA
========================= */

musicButton.addEventListener("click", () => {

    const isOpen = musicPanel.classList.contains("open");

    closePanels();

    if (!isOpen) {
        musicPanel.classList.add("open");
    }

});


/* =========================
   +
========================= */

plusButton.addEventListener("click", () => {

    closePanels();

});
