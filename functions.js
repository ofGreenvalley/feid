const start = document.getElementById("start");

const intro = document.getElementById("intro");
const home = document.getElementById("home");

const menuButton =
    document.getElementById("menuButton");

const menuOptions =
    document.getElementById("menuOptions");


/* =========================
   ENTRAR AL XATSPACE
   ========================= */

start.addEventListener("click", function () {

    // Activar transición
    intro.classList.add("entering");

    setTimeout(function () {

        // Ocultar completamente Latveria
        intro.style.display = "none";

        // Mostrar HOME
        home.classList.add("visible");

        home.style.pointerEvents = "auto";

    }, 1200);

});


/* =========================
   MENÚ FEID
   ========================= */

menuButton.addEventListener(
    "click",
    function () {

        menuOptions.classList.toggle("active");

    }
);
