

    var link = document.querySelector(".btn-write-us");
    var popup = document.querySelector(".modal-content");
    var close = document.querySelector(".modal-content-close");

    // var mapLink = document.querySelector(".map");
    // var mapPopup = document.querySelector(".modal-map");
    // var mapClose = document.querySelector(".map-close");
    
    var username = popup.querySelector("[name=username]");
    var email = popup.querySelector("[name=email]")
    var form = popup.querySelector("form");
    var storage = localStorage.getItem("email");
    var comment = popup.querySelector("[name=comment]");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      username.focus();
      if (storage) {
        email.value = storage;
        }
    });

    // mapLink.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   mapPopup.classList.add("modal-map-show");
    //   });


    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    });

    // mapClose.addEventListener("click", function(event) {
    //   event.preventDefault();
    //   mapPopup.classList.remove("modal-map-show");
    // });

    form.addEventListener("submit", function(event) {
        if (!username.value || !email.value || !comment.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {localStorage.setItem("email", email.value);
      }
      });

     window.addEventListener("keydown", function(event){
        if (event.keyCode ===27) {
          if (popup.classList.contains("modal-content-show")) {
              popup.classList.remove("modal-content-show");
              popup.classList.remove("modal-error")
            }
        }
      });

    // range

jQuery(document).ready(function(){


/* слайдер цен */

jQuery("#slider").slider({
  min: 0,
  max: 1000,
  values: [0,1000],
  range: true,
  stop: function(event, ui) {
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    
    },
    slide: function(event, ui){
    jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
    jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

jQuery("input#minCost").change(function(){

  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    jQuery("input#minCost").val(value1);
  }
  jQuery("#slider").slider("values",0,value1);  
});

  
jQuery("input#maxCost").change(function(){
    
  var value1=jQuery("input#minCost").val();
  var value2=jQuery("input#maxCost").val();
  
  if (value2 > 3000) { value2 = 3000; jQuery("input#maxCost").val(3000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    jQuery("input#maxCost").val(value2);
  }
  jQuery("#slider").slider("values",1,value2);
});

