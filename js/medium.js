const sortSelect =
document.getElementById("sort");

const projectGrid =
document.getElementById("projectGrid");

sortSelect.addEventListener("change", () => {

    const projects =
    Array.from(
    projectGrid.children
    );

    if(sortSelect.value === "newest"){

        projects.sort((a,b)=>
        b.dataset.year -
        a.dataset.year);

    }

    if(sortSelect.value === "oldest"){

        projects.sort((a,b)=>
        a.dataset.year -
        b.dataset.year);

    }

    if(sortSelect.value === "custom"){

        projects.sort((a,b)=>
        a.dataset.order -
        b.dataset.order);

    }

    projectGrid.innerHTML = "";

    projects.forEach(project => {

        projectGrid.appendChild(
        project);

    });

});

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

const galleryItems =
document.querySelectorAll(
    ".gallery-item img"
);

const lightbox =
document.getElementById(
    "lightbox"
);

const lightboxImage =
document.getElementById(
    "lightbox-image"
);

const closeBtn =
document.querySelector(
    ".lightbox-close"
);

let currentIndex = 0;

galleryItems.forEach((item,index)=>{

    item.addEventListener(
        "click",
        ()=>{

            currentIndex = index;

            lightboxImage.src =
            item.src;

            lightbox.classList.add(
                "active"
            );

        }
    );

});

closeBtn?.addEventListener(
    "click",
    ()=>{

        lightbox.classList.remove(
            "active"
        );

    }
);

document.querySelector(
    ".lightbox-prev"
)?.addEventListener(
    "click",
    ()=>{

        currentIndex =
        (currentIndex - 1 +
        galleryItems.length)
        %
        galleryItems.length;

        lightboxImage.src =
        galleryItems[currentIndex].src;

    }
);

document.querySelector(
    ".lightbox-next"
)?.addEventListener(
    "click",
    ()=>{

        currentIndex =
        (currentIndex + 1)
        %
        galleryItems.length;

        lightboxImage.src =
        galleryItems[currentIndex].src;

    }
);