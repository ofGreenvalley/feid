document.addEventListener("DOMContentLoaded", function () {

    const pressButton = document.getElementById("pressButton");
    const avatarButton = document.getElementById("avatarButton");
    const plusButton = document.getElementById("plusButton");
    const friendsButton = document.getElementById("friendsButton");
    const musicButton = document.getElementById("musicButton");

    const messagePanel = document.getElementById("messagePanel");
    const friendsPanel = document.getElementById("friendsPanel");
    const musicPanel = document.getElementById("musicPanel");

    const playerButton = document.getElementById("playerButton");
    const progressBar = document.getElementById("progressBar");
    const progressFill = document.getElementById("progressFill");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");

    let player = null;
    let playerReady = false;
    let progressTimer = null;


    /* =========================
       YOUTUBE
    ========================== */

    function createPlayer() {

        if (player || typeof YT === "undefined") {
            return;
        }

        player = new YT.Player("youtubePlayer", {

            videoId: "6Dh2m38wG8Q",

            playerVars: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                fs: 0,
                playsinline: 1,
                rel: 0
            },

            events: {

                onReady: function () {

                    playerReady = true;

                    duration.textContent =
                        formatTime(player.getDuration());

                },

                onStateChange: function (event) {

                    if (
                        event.data ===
                        YT.PlayerState.PLAYING
                    ) {

                        playerButton.textContent = "Ⅱ";

                        playerButton.setAttribute(
                            "aria-label",
                            "Pausar"
                        );

                        startProgress();
                    }


                    if (
                        event.data ===
                        YT.PlayerState.PAUSED
                    ) {

                        playerButton.textContent = "▶";

                        playerButton.setAttribute(
                            "aria-label",
                            "Reproducir"
                        );

                        stopProgress();
                    }


                    if (
                        event.data ===
                        YT.PlayerState.ENDED
                    ) {

                        playerButton.textContent = "▶";

                        playerButton.setAttribute(
                            "aria-label",
                            "Reproducir"
                        );

                        progressFill.style.width = "0%";

                        currentTime.textContent = "0:00";

                        stopProgress();
                    }

                }

            }

        });

    }


    /* =========================
       API DE YOUTUBE
    ========================== */

    window.onYouTubeIframeAPIReady = function () {

        createPlayer();

    };


    /* =========================
       POR SI LA API YA CARGÓ
    ========================== */

    if (typeof YT !== "undefined") {

        createPlayer();

    }


    /* =========================
       CERRAR PANELES
    ========================== */

    function closePanels() {

        messagePanel.classList.remove("open");

        friendsPanel.classList.remove("open");

        musicPanel.classList.remove("open");

    }


    /* =========================
       TIEMPO
    ========================== */

    function formatTime(seconds) {

        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes =
            Math.floor(seconds / 60);

        const secondsLeft =
            Math.floor(seconds % 60);

        return (
            minutes +
            ":" +
            String(secondsLeft).padStart(2, "0")
        );

    }


    /* =========================
       PROGRESO
    ========================== */

    function updateProgress() {

        if (!playerReady || !player) {
            return;
        }

        const current =
            player.getCurrentTime();

        const total =
            player.getDuration();

        if (
            !Number.isFinite(current) ||
            !Number.isFinite(total) ||
            total <= 0
        ) {
            return;
        }

        const percentage =
            (current / total) * 100;

        progressFill.style.width =
            Math.min(100, Math.max(0, percentage)) + "%";

        currentTime.textContent =
            formatTime(current);

        duration.textContent =
            formatTime(total);

    }


    function startProgress() {

        stopProgress();

        updateProgress();

        progressTimer =
            setInterval(
                updateProgress,
                500
            );

    }


    function stopProgress() {

        if (progressTimer) {

            clearInterval(progressTimer);

            progressTimer = null;

        }

    }


    /* =========================
       INICIAR
    ========================== */

    pressButton.addEventListener(
        "click",
        function () {

            document.body.classList.add("leaving");

            /*
             * El usuario acaba de interactuar
             * con la página, por lo que aquí
             * intentamos iniciar la música.
             */

            if (playerReady && player) {

                player.playVideo();

            }

        }
    );


    /* =========================
       AVATAR
    ========================== */

    avatarButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                messagePanel.classList.contains("open");

            closePanels();

            if (!isOpen) {

                messagePanel.classList.add("open");

            }

        }
    );


    /* =========================
       AMIGOS
    ========================== */

    friendsButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                friendsPanel.classList.contains("open");

            closePanels();

            if (!isOpen) {

                friendsPanel.classList.add("open");

            }

        }
    );


    /* =========================
       MÚSICA
    ========================== */

    musicButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                musicPanel.classList.contains("open");

            closePanels();

            if (!isOpen) {

                musicPanel.classList.add("open");

            }

        }
    );


    /* =========================
       PLAY / PAUSA
    ========================== */

    playerButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (!playerReady || !player) {
                return;
            }

            const state =
                player.getPlayerState();

            if (
                state ===
                YT.PlayerState.PLAYING
            ) {

                player.pauseVideo();

            } else {

                player.playVideo();

            }

        }
    );


    /* =========================
       BARRA DE PROGRESO
    ========================== */

    progressBar.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            if (!playerReady || !player) {
                return;
            }

            const rect =
                progressBar.getBoundingClientRect();

            const position =
                event.clientX - rect.left;

            const percentage =
                Math.min(
                    1,
                    Math.max(
                        0,
                        position / rect.width
                    )
                );

            const total =
                player.getDuration();

            if (
                Number.isFinite(total) &&
                total > 0
            ) {

                player.seekTo(
                    total * percentage,
                    true
                );

            }

        }
    );


    /* =========================
       +
    ========================== */

    plusButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            closePanels();

        }
    );


    /* =========================
       CERRAR FUERA
    ========================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !event.target.closest(".floating-panel") &&
                !event.target.closest(".avatar-button") &&
                !event.target.closest(".side-button")
            ) {

                closePanels();

            }

        }
    );

});
