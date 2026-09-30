document.addEventListener("DOMContentLoaded", function () {

    const pressButton =
        document.getElementById("pressButton");

    const avatarButton =
        document.getElementById("avatarButton");

    const plusButton =
        document.getElementById("plusButton");

    const friendsButton =
        document.getElementById("friendsButton");

    const musicButton =
        document.getElementById("musicButton");

    const messagePanel =
        document.getElementById("messagePanel");

    const friendsPanel =
        document.getElementById("friendsPanel");

    const musicPanel =
        document.getElementById("musicPanel");

    const playerButton =
        document.getElementById("playerButton");

    const audio =
        document.getElementById("audioPlayer");

    const progressBar =
        document.getElementById("progressBar");

    const progressFill =
        document.getElementById("progressFill");

    const currentTime =
        document.getElementById("currentTime");

    const duration =
        document.getElementById("duration");


    /* =========================
       INICIAR + AUTOPLAY
    ========================== */

    if (pressButton) {

        pressButton.addEventListener("click", function () {

            /*
             * El clic del usuario en INICIAR
             * permite intentar comenzar el audio.
             */

            if (audio) {

                audio.play()
                    .then(function () {

                        if (playerButton) {
                            playerButton.textContent = "❚❚";
                        }

                    })
                    .catch(function (error) {

                        console.log(
                            "No se pudo iniciar la música:",
                            error
                        );

                    });

            }


            /*
             * Mostrar el interior.
             */

            document.body.classList.add("leaving");

        });

    }


    /* =========================
       CERRAR PANELES
    ========================== */

    function closePanels() {

        if (messagePanel) {
            messagePanel.classList.remove("open");
        }

        if (friendsPanel) {
            friendsPanel.classList.remove("open");
        }

        if (musicPanel) {
            musicPanel.classList.remove("open");
        }

    }


    /* =========================
       AVATAR
    ========================== */

    if (avatarButton) {

        avatarButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                messagePanel &&
                messagePanel.classList.contains("open");

            closePanels();

            if (!isOpen && messagePanel) {

                messagePanel.classList.add("open");

            }

        });

    }


    /* =========================
       AMIGOS
    ========================== */

    if (friendsButton) {

        friendsButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                friendsPanel &&
                friendsPanel.classList.contains("open");

            closePanels();

            if (!isOpen && friendsPanel) {

                friendsPanel.classList.add("open");

            }

        });

    }


    /* =========================
       MÚSICA
    ========================== */

    if (musicButton) {

        musicButton.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen =
                musicPanel &&
                musicPanel.classList.contains("open");

            closePanels();

            if (!isOpen && musicPanel) {

                musicPanel.classList.add("open");

            }

        });

    }


    /* =========================
       BOTÓN +
    ========================== */

    if (plusButton) {

        plusButton.addEventListener("click", function (event) {

            event.stopPropagation();

            closePanels();

        });

    }


    /* =========================
       PLAY / PAUSE
    ========================== */

    if (playerButton && audio) {

        playerButton.addEventListener("click", function (event) {

            event.stopPropagation();

            if (audio.paused) {

                audio.play()
                    .then(function () {

                        playerButton.textContent = "❚❚";

                    })
                    .catch(function (error) {

                        console.log(
                            "Error reproduciendo audio:",
                            error
                        );

                    });

            } else {

                audio.pause();

                playerButton.textContent = "▶";

            }

        });


        /* =========================
           AUDIO REPRODUCIÉNDOSE
        ========================== */

        audio.addEventListener("play", function () {

            if (playerButton) {
                playerButton.textContent = "❚❚";
            }

        });


        /* =========================
           AUDIO PAUSADO
        ========================== */

        audio.addEventListener("pause", function () {

            if (playerButton) {
                playerButton.textContent = "▶";
            }

        });


        /* =========================
           DURACIÓN
        ========================== */

        audio.addEventListener("loadedmetadata", function () {

            if (duration) {

                duration.textContent =
                    formatTime(audio.duration);

            }

        });


        /* =========================
           PROGRESO
        ========================== */

        audio.addEventListener("timeupdate", function () {

            if (!audio.duration) {
                return;
            }


            const percentage =
                (audio.currentTime / audio.duration) * 100;


            if (progressFill) {

                progressFill.style.width =
                    percentage + "%";

            }


            if (currentTime) {

                currentTime.textContent =
                    formatTime(audio.currentTime);

            }

        });


        /* =========================
           FINAL
        ========================== */

        audio.addEventListener("ended", function () {

            if (playerButton) {
                playerButton.textContent = "▶";
            }


            if (progressFill) {
                progressFill.style.width = "0%";
            }


            if (currentTime) {
                currentTime.textContent = "0:00";
            }

        });


        /* =========================
           BARRA DE PROGRESO
        ========================== */

        if (progressBar) {

            progressBar.addEventListener("click", function (event) {

                if (!audio.duration) {
                    return;
                }


                const rect =
                    progressBar.getBoundingClientRect();


                const position =
                    (event.clientX - rect.left) /
                    rect.width;


                audio.currentTime =
                    position * audio.duration;

            });

        }

    }


    /* =========================
       CERRAR PANELES
    ========================== */

    document.addEventListener("click", function (event) {

        if (
            !event.target.closest(".floating-panel") &&
            !event.target.closest(".avatar-button") &&
            !event.target.closest(".side-button")
        ) {

            closePanels();

        }

    });


    /* =========================
       FORMATO DE TIEMPO
    ========================== */

    function formatTime(seconds) {

        if (!seconds || isNaN(seconds)) {
            return "0:00";
        }


        seconds =
            Math.floor(seconds);


        const minutes =
            Math.floor(seconds / 60);


        const remaining =
            seconds % 60;


        return (
            minutes +
            ":" +
            String(remaining).padStart(2, "0")
        );

    }

});
