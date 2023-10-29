// swiper js code java-script
var swiper = new Swiper("#swiper-1", {
    spaceBetween: 30,
    centeredSlides: true,
    effect:"fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true
  });

  // menu
  var menuu =document.querySelector(".menu1");
  var menuuu =document.querySelector(".menu2");
  var menuuuu =document.querySelector(".open-menu");

menuu.addEventListener("click" , function(){
     menuuuu.classList.toggle("active")
});