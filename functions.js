document.addEventListener("DOMContentLoaded", () => {

    const pressButton = document.getElementById("pressButton");

    const avatarButton = document.getElementById("avatarButton");
    const friendsButton = document.getElementById("friendsButton");
    const musicButton = document.getElementById("musicButton");
    const plusButton = document.getElementById("plusButton");

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
       CERRAR PANELES
    ========================= */

    function closePanels() {

        messagePanel.classList.remove("open");
        friendsPanel.classList.remove("open");
        musicPanel.classList.remove("open");

    }


    /* =========================
       AVATAR
    ========================= */

    avatarButton.addEventListener("click", (event) => {

        event.stopPropagation();

        const abierto =
            messagePanel.classList.contains("open");

        closePanels();

        if (!abierto) {

            messagePanel.classList.add("open");

        }

    });


    /* =========================
       AMIGOS
    ========================= */

    friendsButton.addEventListener("click", (event) => {

        event.stopPropagation();

        const abierto =
            friendsPanel.classList.contains("open");

        closePanels();

        if (!abierto) {

            friendsPanel.classList.add("open");

        }

    });


    /* =========================
       MÚSICA
    ========================= */

    musicButton.addEventListener("click", (event) => {

        event.stopPropagation();

        const abierto =
            musicPanel.classList.contains("open");

        closePanels();

        if (!abierto) {

            musicPanel.classList.add("open");

        }

    });


    /* =========================
       +
    ========================= */

    plusButton.addEventListener("click", (event) => {

        event.stopPropagation();

        closePanels();

    });


    /* =========================
       CLIC FUERA
    ========================= */

    document.addEventListener("click", (event) => {

        if (
            !event.target.closest(".floating-panel") &&
            !event.target.closest(".avatar-button") &&
            !event.target.closest(".side-button")
        ) {

            closePanels();

        }

    });

});
