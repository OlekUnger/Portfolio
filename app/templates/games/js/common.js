$(document).ready(function(){

  $('.slideshow').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 238,
    slideMargin: 10,
    speed: 900,
    
  });

  $('a[href="#"]').click(function(){return false})
});


// var link1 = document.querySelector(".link-1");
// var link2 = document.querySelector(".item-img");
// var close = document.querySelector(".close");
// var popup = document.querySelector(".product-card");

// link1.addEventListener("click", function(event) {
//       event.preventDefault();
//       popup.classList.add("modal-content-show");
//  });

// link2.addEventListener("click", function(event) {
//       event.preventDefault();
//       popup.classList.add("modal-content-show");
//  });
  
//  close.addEventListener("click", function(event) {
//       event.preventDefault();
//       popup.classList.remove("modal-content-show");
//  });     






