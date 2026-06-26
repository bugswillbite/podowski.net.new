/* ==========================================
   PROJECT IMAGE DATABASE
========================================== */

const imageRoot =
    window.location.pathname.includes("/game-dev/")
        ? "../../../images/"
        : "../../images/";

const img = (relativePath) =>
    `${imageRoot}${relativePath}`;

const projects = {

    sourcecode: [

        img("webdesign/sourcecode/sourcecode2.png"),
        img("webdesign/sourcecode/sourcecode3.png"),
        img("webdesign/sourcecode/sourcecode4.png"),
        img("webdesign/sourcecode/sourcecode5.png")

    ],

    seneca: [

        img("webdesign/seneca/seneca.jpg")

    ],

    prophitt: [

        img("webdesign/prophitt/carousel1.png"),
        img("webdesign/prophitt/carousel2.png"),
        img("webdesign/prophitt/carousel3.png"),
        img("webdesign/prophitt/carousel4.png"),
        img("webdesign/prophitt/carousel5.png")

    ],

    swea: [

        img("graphicdesign/swea/carousel1.png"),
        img("graphicdesign/swea/carousel2.png"),
        img("graphicdesign/swea/carousel3.png"),
        img("graphicdesign/swea/carousel4.png")

    ],

    legacy: [

        img("graphicdesign/legacy/carousel1.png"),
        img("graphicdesign/legacy/carousel2.png"),
        img("graphicdesign/legacy/carousel3.png")

    ],

    appropriation: [

        img("video/carousel1_app.png"),
        img("video/carousel2_app.png"),
        img("video/carousel3_app.png"),
        img("video/carousel4_app.png"),
        img("video/carousel5_app.png")

    ],

    glitch: [

        img("video/carousel1_glitch.png"),
        img("video/carousel2_glitch.png"),
        img("video/carousel3_glitch.png"),
        img("video/carousel4_glitch.png"),
        img("video/carousel5_glitch.png")

    ],

    musicvideo: [

        img("video/carousel1_mv.png"),
        img("video/carousel2_mv.png"),
        img("video/carousel3_mv.png"),
        img("video/carousel4_mv.png"),
        img("video/carousel5_mv.png")

    ],

    experimental: [

        img("video/carousel1_exp.png"),
        img("video/carousel2_exp.png"),
        img("video/carousel3_exp.png"),
        img("video/carousel4_exp.png"),
        img("video/carousel5_exp.png")

    ],

    painting: [

        img("art/painting/carousel_paint1.png"),
        img("art/painting/carousel_paint2.png"),
        img("art/painting/carousel_paint3.png"),
        img("art/painting/carousel_paint4.png"),
        img("art/painting/carousel_paint5.png")

    ],

    sculpture: [

        img("art/sculpture/carousel1.png"),
        img("art/sculpture/carousel2.png"),
        img("art/sculpture/carousel3.png"),
        img("art/sculpture/carousel4.png"),
        img("art/sculpture/carousel5.png")

    ],

    threed: [

        img("art/3D/carousel1.png"),
        img("art/3D/carousel2.png"),
        img("art/3D/carousel3.png"),
        img("art/3D/carousel4.png"),
        img("art/3D/carousel5.png")

    ],

    gamedevelopment: [

        img("art/3D/crashOverride/coNEW.png"),
        img("art/3D/crashOverride/map1.png"),
        img("art/3D/crashOverride/uiFull.png"),
        img("art/3D/crashOverride/buggieieie.png"),
        img("art/3D/crashOverride/C0Zero2.png")

    ],

    crashoverride: [

        img("art/3D/crashOverride/sky.png"),
        img("art/3D/crashOverride/map1.png"),
        img("art/3D/crashOverride/uiFull.png"),
        img("art/3D/crashOverride/buggieieie.png"),
        img("art/3D/crashOverride/C0Zero2.png")

    ],

    mysa: [

        img("art/gamedev/mysa/mysa1.png"),
        img("art/gamedev/mysa/mysa2.png"),
        img("art/gamedev/mysa/mysa3.png"),
        img("art/gamedev/mysa/mysa4.png"),
        img("art/gamedev/mysa/mysa5.png")

    ],

    luvdrive: [

        img("art/3D/luvdrive/LDR1.png"),
        img("art/3D/luvdrive/LDR2.png"),
        img("art/3D/luvdrive/LDR7.png"),
        img("art/3D/luvdrive/LDR4.png"),
        img("art/3D/luvdrive/LDR5.png")

    ],

    decorate: [

        img("art/gamedev/decorate/dmr7.png"),
        img("art/gamedev/decorate/dmr8.png"),
        img("art/gamedev/decorate/dmr9.png"),
        img("art/gamedev/decorate/dmr_5.png"),
    ],

    moonstruck: [

        img("art/3D/moonstruck/ms.png"),
        img("art/3D/moonstruck/MS2.png"),
        img("art/3D/moonstruck/MS3.png"),
        img("art/3D/moonstruck/MS4.png"),
    ]
};

/* ==========================================
   CAROUSEL
========================================== */

let current = 0;

const bodyProject =
document.body?.dataset?.project;

const projectKey =
bodyProject
    ? bodyProject.replace(/-/g, "").toLowerCase()
    : null;

const resolvedProjectKey =
    projectKey && projects[projectKey]
        ? projectKey
        : projectKey === "gamedev"
            ? "gamedevelopment"
            : projectKey === "game-development"
                ? "gamedevelopment"
                : null;

const images =
    resolvedProjectKey && projects[resolvedProjectKey]
        ? projects[resolvedProjectKey]
        : [];

const image =
document.getElementById(
    "carouselImage"
);

const nextBtn =
document.querySelector(
    ".carousel-btn.next, .next"
);

const prevBtn =
document.querySelector(
    ".carousel-btn.prev, .prev"
);

if(image && images.length){

    image.src = images[0];

    if(nextBtn){

        nextBtn.addEventListener(
            "click",
            () => {

                current++;

                if(current >= images.length){

                    current = 0;
                }

                image.src =
                images[current];

            }
        );

    }

    if(prevBtn){

        prevBtn.addEventListener(
            "click",
            () => {

                current--;

                if(current < 0){

                    current =
                    images.length - 1;
                }

                image.src =
                images[current];

            }
        );

    }

}

/* ==========================================
   ACCORDION SECTIONS
========================================== */

const toggles =
document.querySelectorAll(
    ".section-toggle"
);

toggles.forEach(toggle => {

    toggle.addEventListener(
        "click",
        () => {

            const row =
            toggle.closest(
                ".case-row"
            );

            if(!row) return;

            row.classList.toggle(
                "collapsed"
            );

            const icon =
            toggle.querySelector(
                ".toggle-icon"
            );

            if(icon){

                icon.textContent =
                row.classList.contains(
                    "collapsed"
                )
                ? "+"
                : "−";

            }

        }
    );

});

/* ==========================================
   LIGHTBOX
========================================== */

const lightbox =
document.getElementById(
    "lightbox"
);

const lightboxImage =
document.getElementById(
    "lightbox-image"
);

const lightboxClose =
document.querySelector(
    ".lightbox-close"
);

const lightboxPrev =
document.querySelector(
    ".lightbox-prev"
);

const lightboxNext =
document.querySelector(
    ".lightbox-next"
);

/* ==========================================
   GALLERY IMAGES
========================================== */

const galleryItems =
document.querySelectorAll(
    ".gallery-item"
);

const albumImages =
document.querySelectorAll(
    ".album-cover"
);

const gallerySources =
Array.from(galleryItems)
.map(item => item.src);

const albumSources =
Array.from(albumImages)
.map(item => item.src);

let currentImages = [];
let currentIndex = 0;

/* ==========================================
   LIGHTBOX FUNCTIONS
========================================== */

function openLightbox(images,index){

    if(
        !lightbox ||
        !lightboxImage
    ) return;

    currentImages = images;

    currentIndex = index;

    lightboxImage.src =
    currentImages[currentIndex];

    lightbox.classList.add(
        "active"
    );

}

function closeLightbox(){

    if(!lightbox) return;

    lightbox.classList.remove(
        "active"
    );

}

function showPrevious(){

    if(
        !lightboxImage ||
        !currentImages.length
    ) return;

    currentIndex =
    (
        currentIndex - 1 +
        currentImages.length
    )
    %
    currentImages.length;

    lightboxImage.src =
    currentImages[currentIndex];

}

function showNext(){

    if(
        !lightboxImage ||
        !currentImages.length
    ) return;

    currentIndex =
    (
        currentIndex + 1
    )
    %
    currentImages.length;

    lightboxImage.src =
    currentImages[currentIndex];

}

/* ==========================================
   REGULAR GALLERY
========================================== */

galleryItems.forEach(
    (item,index) => {

        item.addEventListener(
            "click",
            () => {

                openLightbox(
                    gallerySources,
                    index
                );

            }
        );

    }
);

/* ==========================================
   ALBUM COVERS
========================================== */

albumImages.forEach(
    (item,index) => {

        item.addEventListener(
            "click",
            () => {

                openLightbox(
                    albumSources,
                    index
                );

            }
        );

    }
);

/* ==========================================
   LIGHTBOX CONTROLS
========================================== */

if(lightboxClose){

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}

if(lightboxPrev){

    lightboxPrev.addEventListener(
        "click",
        showPrevious
    );

}

if(lightboxNext){

    lightboxNext.addEventListener(
        "click",
        showNext
    );

}

if(lightbox){

    lightbox.addEventListener(
        "click",
        (e) => {

            if(
                e.target === lightbox
            ){

                closeLightbox();

            }

        }
    );

}

/* ==========================================
   KEYBOARD NAVIGATION
========================================== */

document.addEventListener(
    "keydown",
    (e) => {

        if(
            !lightbox ||
            !lightbox.classList.contains(
                "active"
            )
        ) return;

        if(e.key === "ArrowLeft"){

            showPrevious();

        }

        if(e.key === "ArrowRight"){

            showNext();

        }

        if(e.key === "Escape"){

            closeLightbox();

        }

    }
);

/* ==========================================
   PROMOTIONAL MATERIALS
========================================== */

const promoImages =
document.querySelectorAll(
    ".promo-cover"
);

const promoSources =
Array.from(promoImages)
.map(item => item.src);

promoImages.forEach(
    (item,index) => {

        item.addEventListener(
            "click",
            () => {

                openLightbox(
                    promoSources,
                    index
                );

            }
        );

    }
);

/* ==========================================
   VIDEO LIGHTBOX
========================================== */

const videoThumbs =
document.querySelectorAll(
    ".video-thumb"
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

videoThumbs.forEach(
    thumb => {

        thumb.addEventListener(
            "click",
            () => {

                fullscreenVideo.src =
                thumb.dataset.video;

                videoLightbox.classList.add(
                    "active"
                );

                fullscreenVideo.play();

            }
        );

    }
);

if(videoClose){

    videoClose.addEventListener(
        "click",
        () => {

            fullscreenVideo.pause();

            fullscreenVideo.src = "";

            videoLightbox.classList.remove(
                "active"
            );

        }
    );

}

if(videoLightbox){

    videoLightbox.addEventListener(
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

}

/* ==========================================
   LIGHTBOX SUPPORT FOR .gallery-item2
========================================== */

const galleryItems2 =
document.querySelectorAll(".gallery-item2");

if (galleryItems2.length > 0) {

    let currentGallery2Index = 0;

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImage =
    document.getElementById("lightbox-image");

    const lightboxClose =
    document.querySelector(".lightbox-close");

    const lightboxPrev =
    document.querySelector(".lightbox-prev");

    const lightboxNext =
    document.querySelector(".lightbox-next");

    const gallery2Images =
    [...galleryItems2];

    function openGallery2(index) {

        currentGallery2Index = index;

        lightboxImage.src =
        gallery2Images[index].src;

        lightbox.classList.add("active");

    }

    gallery2Images.forEach((img, index) => {

        img.addEventListener("click", () => {

            openGallery2(index);

        });

    });

    lightboxPrev?.addEventListener("click", () => {

        if (
            !gallery2Images.length ||
            !lightbox.classList.contains("active")
        ) return;

        currentGallery2Index--;

        if (currentGallery2Index < 0) {

            currentGallery2Index =
            gallery2Images.length - 1;

        }

        lightboxImage.src =
        gallery2Images[currentGallery2Index].src;

    });

    lightboxNext?.addEventListener("click", () => {

        if (
            !gallery2Images.length ||
            !lightbox.classList.contains("active")
        ) return;

        currentGallery2Index++;

        if (
            currentGallery2Index >=
            gallery2Images.length
        ) {

            currentGallery2Index = 0;

        }

        lightboxImage.src =
        gallery2Images[currentGallery2Index].src;

    });

    lightboxClose?.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}
