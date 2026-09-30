let player = null;
let playerReady = false;
let progressTimer = null;

function onYouTubeIframeAPIReady() {

    player = new YT.Player("youtubePlayer", {

        height: "1",
        width: "1",

        videoId: "Qq5QJxZaZTI",

        playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            playsinline: 1,
            rel: 0
        },

        events: {

            onReady: function () {
                playerReady = true;
            },

            onStateChange: function (event) {

                const playerButton =
                    document.getElementById("playerButton");

                if (!playerButton) return;

                if (event.data === YT.PlayerState.PLAYING) {

                    playerButton.textContent = "❚❚";

                    startProgress();

                } else {

                    playerButton.textContent = "▶";

                    stopProgress();
                }
            }
        }
    });
}


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

    const playerButton =
        document.getElementById("playerButton");


    const messagePanel =
        document.getElementById("messagePanel");

    const friendsPanel =
        document.getElementById("friendsPanel");

    const musicPanel =
        document.getElementById("musicPanel");


    function closePanels() {

        if (messagePanel)
            messagePanel.classList.remove("open");

        if (friendsPanel)
            friendsPanel.classList.remove("open");

        if (musicPanel)
            musicPanel.classList.remove("open");
    }


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


    if (plusButton) {

        plusButton.addEventListener("click", function (event) {

            event.stopPropagation();

            closePanels();

        });
    }


    if (playerButton) {

        playerButton.addEventListener("click", function (event) {

            event.stopPropagation();

            if (!playerReady || !player) {
                return;
            }

            const state = player.getPlayerState();

            if (state === YT.PlayerState.PLAYING) {

                player.pauseVideo();

            } else {

                player.playVideo();

            }

        });
    }


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


function startProgress() {

    stopProgress();

    progressTimer = setInterval(function () {

        if (!player || !playerReady) return;

        const current =
            player.getCurrentTime();

        const duration =
            player.getDuration();

        if (!duration) return;


        const percentage =
            (current / duration) * 100;


        const progressFill =
            document.getElementById("progressFill");

        const currentTime =
            document.getElementById("currentTime");

        const durationElement =
            document.getElementById("duration");


        if (progressFill) {

            progressFill.style.width =
                percentage + "%";
        }


        if (currentTime) {

            currentTime.textContent =
                formatTime(current);
        }


        if (durationElement) {

            durationElement.textContent =
                formatTime(duration);
        }

    }, 500);
}


function stopProgress() {

    if (progressTimer) {

        clearInterval(progressTimer);

        progressTimer = null;
    }
}


function formatTime(seconds) {

    seconds = Math.floor(seconds || 0);

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
