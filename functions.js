document.addEventListener("DOMContentLoaded", function () {

    const pressButton =
        document.getElementById("pressButton");

    if (pressButton) {

        pressButton.addEventListener("click", function () {

            document.body.classList.add("leaving");

        });

    }


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


    /* AVATAR */

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


    /* AMIGOS */

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


    /* MÚSICA */

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


    /* + */

    if (plusButton) {

        plusButton.addEventListener("click", function (event) {

            event.stopPropagation();

            closePanels();

        });

    }


    /* CERRAR PANELES */

    document.addEventListener("click", function (event) {

        if (
            !event.target.closest(".floating-panel") &&
            !event.target.closest(".avatar-button") &&
            !event.target.closest(".side-button")
        ) {

            closePanels();

        }

    });

});
