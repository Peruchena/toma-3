$(document).ready(function(){
    $('.cards').slick({
    autoplay: true,
    autoplaySpeed: 750,
    arrows: true,
    prevArrow: document.querySelector(".prevBtn"),
    nextArrow: document.querySelector(".nextBtn"),
    infinite: true,
    pauseOnFocus: true,
    slide: document.querySelector(".tema"),
    slidesToShow: 1,
    slidesToScroll: 1,
    });
  });
