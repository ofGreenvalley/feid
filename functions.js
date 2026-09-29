/* =========================================
   FEID — MULTIVERSE SYSTEM
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("intro");
    const startButton = document.getElementById("start");

    const menu = document.querySelector(".menu");
    const menuButton = document.getElementById("menuButton");


    /* =========================================
       SISTEMA DE ARRANQUE
       ========================================= */

    if (startButton && intro) {

        startButton.addEventListener("click", () => {

            startButton.disabled = true;

            startButton.textContent = "CONNECTING...";

            setTimeout(() => {

                intro.classList.add("hidden");

            }, 900);

        });

    }


    /* =========================================
       MENÚ
       ========================================= */

    if (menu && menuButton) {

        menuButton.addEventListener("click", () => {

            menu.classList.toggle("open");

        });

    }


    /* =========================================
       CERRAR MENÚ AL HACER CLICK FUERA
       ========================================= */

    document.addEventListener("click", (event) => {

        if (
            menu &&
            !menu.contains(event.target)
        ) {

            menu.classList.remove("open");

        }

    });


    /* =========================================
       SISTEMA DE REALIDADES
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
        document.querySelectorAll(".reality span");


    function changeReality() {

        realityElements.forEach((element, index) => {

            const randomReality =
                realities[
                    Math.floor(
                        Math.random() * realities.length
                    )
                ];

            element.textContent = randomReality;

        });

    }


    /* Cambiar las realidades periódicamente */

    setInterval(changeReality, 4500);


    /* =========================================
       ESTADO DEL MULTIVERSE CORE
       ========================================= */

    const stabilityElement =
        document.querySelector(
            ".panel-footer span:nth-child(2)"
        );

    const statusElement =
        document.querySelector(".panel-status");


    function updateCore() {

        if (!stabilityElement || !statusElement) {
            return;
        }


        const stability =
            (Math.random() * 15 + 5).toFixed(1);


        stabilityElement.textContent =
            `STABILITY: ${stability}%`;


        if (stability < 8) {

            statusElement.textContent =
                "● CRITICAL";

        } else {

            statusElement.textContent =
                "● UNSTABLE";

        }

    }


    setInterval(updateCore, 3000);


    /* =========================================
       EFECTO DE GLITCH ALEATORIO
       ========================================= */

    const screen =
        document.querySelector(".multiverse-screen");


    function glitch() {

        if (!screen) {
            return;
        }


        screen.classList.add("glitch-active");


        setTimeout(() => {

            screen.classList.remove("glitch-active");

        }, 180);

    }


    setInterval(() => {

        if (Math.random() > 0.45) {

            glitch();

        }

    }, 2200);


    /* =========================================
       MENSAJE DE CONSOLA
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
