const sortSelect =
document.getElementById("sort");

if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        () => {

            const grid =
                document.getElementById("videoGrid") ||
                document.getElementById("projectGrid");

            if (!grid) return;

            const items =
                [...grid.children];

            const sortType =
                sortSelect.value;

            items.sort((a, b) => {

                if (
                    sortType === "newest"
                ) {

                    return Number(
                        b.dataset.year
                    ) - Number(
                        a.dataset.year
                    );

                }

                if (
                    sortType === "oldest"
                ) {

                    return Number(
                        a.dataset.year
                    ) - Number(
                        b.dataset.year
                    );

                }

                return Number(
                    a.dataset.order
                ) - Number(
                    b.dataset.order
                );

            });

            items.forEach(item =>
                grid.appendChild(item)
            );

        }
    );

}

const videoCards =
document.querySelectorAll(
    ".video-card"
);

const videoLightbox =
document.getElementById(
    "videoLightbox"
);

const fullscreenVideo =
document.getElementById(
    "fullscreenVideo"
);

const videoClose =
document.querySelector(
    ".video-close"
);

videoCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            fullscreenVideo.src =
            card.dataset.video;

            videoLightbox.classList.add(
                "active"
            );

            fullscreenVideo.play();

        }
    );

});

videoClose?.addEventListener(
    "click",
    () => {

        fullscreenVideo.pause();

        fullscreenVideo.src = "";

        videoLightbox.classList.remove(
            "active"
        );

    }
);

videoLightbox?.addEventListener(
    "click",
    (e) => {

        if(
            e.target === videoLightbox
        ){

            fullscreenVideo.pause();

            fullscreenVideo.src = "";

            videoLightbox.classList.remove(
                "active"
            );

        }

    }
);

