// swiper js
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay:{
      delay:4000,
    }
  });

// slick
$(document).ready(function(){
  $('.artist_list').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    swipeThreshold: 20,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }
    ]
  });
});

$(document).ready(function(){
  $('.hamburger').click(function(){
      $('.header_menu_container').toggleClass('active');
      $('.overlay_bg').toggleClass('active');
  });

  $('.overlay_bg').click(function(){
      $('.header_menu_container').removeClass('active');
      $('.overlay_bg').removeClass('active');
  });
});