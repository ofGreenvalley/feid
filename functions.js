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

    intro.style.opacity = "0";

    setTimeout(function () {

        intro.style.display = "none";

        home.style.opacity = "1";

        home.style.pointerEvents = "auto";

    }, 1000);

});


/* =========================
   MENÚ
   ========================= */

menuButton.addEventListener(
    "click",
    function () {

        menuOptions.classList.toggle(
            "active"
        );

    }
);
