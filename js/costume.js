/* ==========================================
   PROJECT IMAGE DATABASE
========================================== */

const projects = {

    sourcecode: [

        "../../images/webdesign/sourcecode/sourcecode2.png",
        "../../images/webdesign/sourcecode/sourcecode3.png",
        "../../images/webdesign/sourcecode/sourcecode4.png",
        "../../images/webdesign/sourcecode/sourcecode5.png"

    ],

    seneca: [

        "../../images/webdesign/seneca/seneca.jpg"

    ],

    prophitt: [

        "../../images/webdesign/prophitt/carousel1.png",
        "../../images/webdesign/prophitt/carousel2.png",
        "../../images/webdesign/prophitt/carousel3.png",
        "../../images/webdesign/prophitt/carousel4.png",
        "../../images/webdesign/prophitt/carousel5.png"

    ],

    swea: [

        "../../images/graphicdesign/swea/carousel1.png",
        "../../images/graphicdesign/swea/carousel2.png",
        "../../images/graphicdesign/swea/carousel3.png",
        "../../images/graphicdesign/swea/carousel4.png",
        
    ],

    legacy: [

        "../../images/graphicdesign/legacy/carousel1.png",
        "../../images/graphicdesign/legacy/carousel2.png",
        "../../images/graphicdesign/legacy/carousel3.png",

    ],

    appropriation: [

        "../../images/video/carousel1_app.png",
        "../../images/video/carousel2_app.png",
        "../../images/video/carousel3_app.png",
        "../../images/video/carousel4_app.png",
        "../../images/video/carousel5_app.png"

    ],

    glitch: [

        "../../images/video/carousel1_glitch.png",
        "../../images/video/carousel2_glitch.png",
        "../../images/video/carousel3_glitch.png",
        "../../images/video/carousel4_glitch.png",
        "../../images/video/carousel5_glitch.png"

    ],

    musicvideo: [

        "../../images/video/carousel1_mv.png",
        "../../images/video/carousel2_mv.png",
        "../../images/video/carousel3_mv.png",
        "../../images/video/carousel4_mv.png",
        "../../images/video/carousel5_mv.png"

    ],    

        experimental: [

        "../../images/video/carousel1_exp.png",
        "../../images/video/carousel2_exp.png",
        "../../images/video/carousel3_exp.png",
        "../../images/video/carousel4_exp.png",
        "../../images/video/carousel5_exp.png"

    ],

    painting: [

        "../../images/art/painting/carousel_paint1.png",
        "../../images/art/painting/carousel_paint2.png",
        "../../images/art/painting/carousel_paint3.png",
        "../../images/art/painting/carousel_paint4.png",
        "../../images/art/painting/carousel_paint5.png"

    ],

    sculpture: [

        "../../images/art/sculpture/carousel1.png",
        "../../images/art/sculpture/carousel2.png",
        "../../images/art/sculpture/carousel3.png",
        "../../images/art/sculpture/carousel4.png",
        "../../images/art/sculpture/carousel5.png"

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

const images =
projectKey && projects[projectKey]
    ? projects[projectKey]
    : [];

const image =
document.getElementById(
    "carouselImage"
);

const nextBtn =
document.querySelector(
    ".next"
);

const prevBtn =
document.querySelector(
    ".prev"
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

/* ==========================================
   LIGHTBOX SUPPORT FOR .gallery-item3
========================================== */

const galleryItems3 =
document.querySelectorAll(".gallery-item3");

if (galleryItems3.length > 0) {

    let currentGallery3Index = 0;

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

    const gallery3Images =
    [...galleryItems3];

    function openGallery3(index) {

        currentGallery3Index = index;

        lightboxImage.src =
        gallery3Images[index].src;

        lightbox.classList.add("active");

    }

    gallery3Images.forEach((img, index) => {

        img.addEventListener("click", () => {

            openGallery3(index);

        });

    });

    lightboxPrev?.addEventListener("click", () => {

        if (
            !gallery3Images.length ||
            !lightbox.classList.contains("active")
        ) return;

        currentGallery3Index--;

        if (currentGallery3Index < 0) {

            currentGallery3Index =
            gallery3Images.length - 1;

        }

        lightboxImage.src =
        gallery3Images[currentGallery3Index].src;

    });

    lightboxNext?.addEventListener("click", () => {

        if (
            !gallery3Images.length ||
            !lightbox.classList.contains("active")
        ) return;

        currentGallery3Index++;

        if (
            currentGallery3Index >=
            gallery3Images.length
        ) {

            currentGallery3Index = 0;

        }

        lightboxImage.src =
        gallery3Images[currentGallery3Index].src;

    });

    lightboxClose?.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

}
