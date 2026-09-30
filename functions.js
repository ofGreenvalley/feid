/* =========================================
   FEID — MULTIVERSE SYSTEM
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const startButton = document.getElementById("start");

    const menu = document.querySelector(".menu");
    const menuButton = document.getElementById("menuButton");

    const menuOptions =
        document.querySelectorAll(
            ".menu-options button"
        );

    const sections =
        document.querySelectorAll(".section");


    /* =========================================
       INICIAR
       ========================================= */

    if (startButton && intro) {

        startButton.addEventListener("click", () => {

            startButton.disabled = true;

            startButton.textContent =
                "CONNECTING...";

            setTimeout(() => {

                intro.classList.add("hidden");

            }, 900);

        });

    }


    /* =========================================
       MENÚ
       ========================================= */

    if (menuButton && menu) {

        menuButton.addEventListener("click", (event) => {

            event.stopPropagation();

            menu.classList.toggle("open");

        });

    }


    /* =========================================
       CAMBIO DE SECCIONES
       ========================================= */

    menuOptions.forEach(button => {

        button.addEventListener("click", () => {

            const target =
                button.dataset.section;


            sections.forEach(section => {

                section.classList.remove("active");

            });


            const targetSection =
                document.getElementById(
                    `section-${target}`
                );


            if (targetSection) {

                targetSection.classList.add(
                    "active"
                );

            }


            menu.classList.remove("open");

        });

    });


    /* =========================================
       CERRAR MENÚ FUERA
       ========================================= */

    document.addEventListener("click", event => {

        if (
            menu &&
            !menu.contains(event.target)
        ) {

            menu.classList.remove("open");

        }

    });


    /* =========================================
       REALIDADES
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

        realityElements.forEach(element => {

            const random =
                realities[
                    Math.floor(
                        Math.random() *
                        realities.length
                    )
                ];

            element.textContent = random;

        });

    }


    setInterval(changeReality, 4500);


    /* =========================================
       CORE
       ========================================= */

    const stabilityElement =
        document.querySelector(
            ".panel-footer span:nth-child(2)"
        );

    const statusElement =
        document.querySelector(
            ".panel-status"
        );


    function updateCore() {

        if (
            !stabilityElement ||
            !statusElement
        ) {
            return;
        }


        const stability =
            (Math.random() * 15 + 5)
            .toFixed(1);


        stabilityElement.textContent =
            `STABILITY: ${stability}%`;


        statusElement.textContent =
            stability < 8
                ? "● CRITICAL"
                : "● UNSTABLE";

    }


    setInterval(updateCore, 3000);


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
            () => {

                if (!audio.src) {

                    alert(
                        "Añade primero el archivo de música al audioPlayer."
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
            () => {

                if (!audio.duration) {
                    return;
                }


                const progress =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;


                progressBar.style.width =
                    `${progress}%`;


                const minutes =
                    Math.floor(
                        audio.currentTime / 60
                    );

                const seconds =
                    Math.floor(
                        audio.currentTime % 60
                    );


                currentTime.textContent =
                    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

            }
        );


        audio.addEventListener(
            "ended",
            () => {

                playButton.textContent =
                    "▶";

                progressBar.style.width =
                    "0%";

            }
        );

    }


    /* =========================================
       CONSOLA
       ========================================= */

    console.log(
        "%c FEID MULTIVERSE SYSTEM ",
        "color:#00ff73;font-weight:bold;font-size:14px;"
    );

    console.log(
        "%c SYSTEM ONLINE ",
        "color:#fff;"
    );

});
