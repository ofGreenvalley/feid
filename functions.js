const start = document.getElementById("start");

const intro = document.getElementById("intro");

const home = document.getElementById("home");

const menuButton =
    document.getElementById("menuButton");

const menuOptions =
    document.getElementById("menuOptions");


/* =========================
   ENTRAR
   ========================= */

start.addEventListener("click", function () {

    intro.classList.add("entering");

    setTimeout(function () {

        intro.style.display = "none";

        home.classList.add("visible");

        home.style.pointerEvents = "auto";

    }, 1200);

});


/* =========================
   MENÚ
   ========================= */

menuButton.addEventListener(
    "click",
    function () {

        menuOptions.classList.toggle("active");

    }
);

/* =========================================
   MULTIVERSE CORE GLITCH
   ========================================= */

const multiverseScreen =
    document.querySelector(".multiverse-screen");

if (multiverseScreen) {

    function multiverseGlitch() {

        multiverseScreen.classList.add("heavy-glitch");

        setTimeout(function () {

            multiverseScreen.classList.remove(
                "heavy-glitch"
            );

        }, 120 + Math.random() * 220);

    }

    setInterval(function () {

        if (Math.random() > 0.35) {
            multiverseGlitch();
        }

    }, 2500);

}
