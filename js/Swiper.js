var testimonialThumbs = new Swiper(".testimonial-comment", {
    spaceBetween: 0,
    autoplay: true,
    loop: true,
    speed: 1000,
    thumbs: {
        swiper: testimonialThumbs
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

