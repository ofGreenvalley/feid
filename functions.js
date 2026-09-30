document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ELEMENTOS
       ========================================= */

    const intro = document.getElementById("intro");
    const startButton = document.getElementById("start");

    const menu = document.getElementById("menu");
    const menuButton = document.getElementById("menuButton");

    const menuOptions =
        document.querySelectorAll(
            "#menuOptions button"
        );

    const sections =
        document.querySelectorAll(".section");


    /* =========================================
       BOTÓN INICIAR
       ========================================= */

    if (startButton) {

        startButton.addEventListener("click", function () {

            startButton.disabled = true;

            startButton.textContent =
                "CONNECTING...";

            setTimeout(function () {

                intro.classList.add("hidden");

            }, 700);

        });

    }


    /* =========================================
       MENÚ
       ========================================= */

    if (menuButton) {

        menuButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                menu.classList.toggle("open");

            }
        );

    }


    /* =========================================
       CAMBIAR SECCIÓN
       ========================================= */

    menuOptions.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const target =
                    button.getAttribute(
                        "data-section"
                    );


                sections.forEach(function (section) {

                    section.classList.remove(
                        "active"
                    );

                });


                const selected =
                    document.getElementById(
                        "section-" + target
                    );


                if (selected) {

                    selected.classList.add(
                        "active"
                    );

                }


                menu.classList.remove("open");

            }
        );

    });


    /* =========================================
       CERRAR MENÚ AL HACER CLICK AFUERA
       ========================================= */

    document.addEventListener(
        "click",
        function (event) {

            if (
                menu &&
                !menu.contains(event.target)
            ) {

                menu.classList.remove("open");

            }

        }
    );


    /* =========================================
       CAMBIO DE REALIDADES
       ========================================= */

    const realities = [
        "REALITY_01",
        "REALITY_07",
        "REALITY_13",
        "REALITY_42",
        "REALITY_99",
        "REALITY_∞"
    ];

    const realityElements =
        document.querySelectorAll(
            ".reality span"
        );


    function changeReality() {

        realityElements.forEach(
            function (element) {

                const randomReality =
                    realities[
                        Math.floor(
                            Math.random() *
                            realities.length
                        )
                    ];

                element.textContent =
                    randomReality;

            }
        );

    }


    setInterval(
        changeReality,
        4500
    );


    /* =========================================
       ESTABILIDAD DEL CORE
       ========================================= */

    const stability =
        document.querySelector(
            ".panel-footer span:nth-child(2)"
        );

    const status =
        document.querySelector(
            ".panel-status"
        );


    function updateCore() {

        if (!stability || !status) {
            return;
        }


        const value =
            (
                Math.random() * 15 + 5
            ).toFixed(1);


        stability.textContent =
            "STABILITY: " + value + "%";


        if (value < 8) {

            status.textContent =
                "● CRITICAL";

        } else {

            status.textContent =
                "● UNSTABLE";

        }

    }


    setInterval(
        updateCore,
        3000
    );


    /* =========================================
       REPRODUCTOR
       ========================================= */

    const audio =
        document.getElementById(
            "audioPlayer"
        );

    const playButton =
        document.getElementById(
            "playButton"
        );

    const progressBar =
        document.getElementById(
            "progressBar"
        );

    const progressContainer =
        document.getElementById(
            "musicProgress"
        );

    const currentTime =
        document.getElementById(
            "currentTime"
        );


    if (
        audio &&
        playButton &&
        progressBar
    ) {


        playButton.addEventListener(
            "click",
            function () {

                if (!audio.src) {

                    alert(
                        "Todavía no hay una canción conectada."
                    );

                    return;

                }


                if (audio.paused) {

                    audio.play();

                    playButton.textContent =
                        "Ⅱ";

                } else {

                    audio.pause();

                    playButton.textContent =
                        "▶";

                }

            }
        );


        audio.addEventListener(
            "timeupdate",
            function () {

                if (!audio.duration) {
                    return;
                }


                const percent =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;


                progressBar.style.width =
                    percent + "%";


                const minutes =
                    Math.floor(
                        audio.currentTime / 60
                    );

                const seconds =
                    Math.floor(
                        audio.currentTime % 60
                    );


                currentTime.textContent =
                    String(minutes).padStart(2, "0")
                    + ":" +
                    String(seconds).padStart(2, "0");

            }
        );


        audio.addEventListener(
            "ended",
            function () {

                playButton.textContent =
                    "▶";

                progressBar.style.width =
                    "0%";

            }
        );


        /* CLICK EN LA BARRA */

        if (progressContainer) {

            progressContainer.addEventListener(
                "click",
                function (event) {

                    if (!audio.duration) {
                        return;
                    }


                    const rect =
                        progressContainer
                            .getBoundingClientRect();


                    const position =
                        (
                            event.clientX -
                            rect.left
                        ) / rect.width;


                    audio.currentTime =
                        position *
                        audio.duration;

                }
            );

        }

    }


    /* =========================================
       CONSOLA
       ========================================= */

    console.log(
        "%c FEID MULTIVERSE SYSTEM ",
        "color:#00ff73;font-size:16px;font-weight:bold;"
    );

    console.log(
        "%c SYSTEM ONLINE ",
        "color:#ffffff;"
    );

});
