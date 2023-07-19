jQuery(document).ready(function ($) {

  /*marquee*/
  $mqRight = $('.marquee-right').marquee({
    duration: 50000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  $mqRight = $('.marquee-left').marquee({
    duration: 50000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });


  /*slider*/
  var swiperLogo = new Swiper(".slider-logo", {
    slidesPerView: "auto",
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      576: {
       loop:false,
        centeredSlides: false,
      },
    }
  });

  /*slider*/
  var swiperTestimonials = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 5,

    loop:true,
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /*accordion */
  $(function() {
    $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
    $(document).on('click', '.accordion > .accordion-item .accordion-thumb', function (e){
      $(this).parent('.accordion-item').siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      $(this).parent('.accordion-item').toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
    })
  });
});