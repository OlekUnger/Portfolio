
var link = document.querySelector(".product-item_img");
var popup = document.querySelector(".product-item_enlarge");
var linkClose = document.querySelector(".overlay")

link.addEventListener("click", function(event) {
     	event.preventDefault();
     	popup.classList.add("scale-enlarge"); 
     });	 

linkClose.addEventListener("click", function(event) {
     	event.preventDefault();
     	popup.classList.remove("scale-enlarge"); 
     });

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

 $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          items: 1,
          slideSpeed: 800,
          navigationText: false,
          mouseDrag: true,
          touchDrag: true
          // "singleItem:true" is a shortcut for:
          //  
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });

