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
