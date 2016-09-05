    var link = document.querySelector(".fb-button");
    var popup = document.querySelector(".modal-window");
    var close = document.querySelector(".feedback-close");
    var username = popup.querySelector("[name=username]");
    var form = popup.querySelector("feedback-form");
    var overlay =document.querySelector(".overlay");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.add("modal-content-show");
      overlay.classList.add("modal-content-show");
      username.focus();
    });

    close.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
    });

    

     window.addEventListener("keydown", function(event){
        if (event.keyCode ===27) {
          if (popup.classList.contains("modal-content-show")) {
              popup.classList.remove("modal-content-show");
              popup.classList.remove("modal-error")
            }
        }
      });


link

$(function() {
                /*************  Initialize Price Range Slider *************/
                $( "#slider-range" ).slider({
                        range: true,
                        min: 0,
                        max: 900,
                        step: 10, // Use this determine the amount of each interval
                        values: [ 100, 500 ], // The default range
                        slide: function( event, ui ) {
                                $( "#min-price" ).val( ui.values[ 0 ]);// for input text box
                                $( "#max-price" ).val(ui.values[ 1 ]);
                                $( "#my_min" ).val(ui.values[ 0 ]); // Display and selected the min Price
                                $( "#my_max" ).val(ui.values[ 1 ]); // Display and selected the max Price
                        }
                });
        /*************  Set Initial Value of the Dropdown Box *************/
                //For dropdown box
                $( "#my_min" ).val($( "#slider-range" ).slider( "values", 0 ));
                $( "#my_max" ).val($( "#slider-range" ).slider( "values", 1 ));
        

   /************* When user choose from dropdown box directly *************/
                $("select.price_range").change(function () {
                        $myMinValue = $("#my_min option:selected").val();
                        $myMaxValue = $("#my_max option:selected").val();
                        //Make changes on the slider itself
                        if($myMinValue <= $myMaxValue) {
                                $( "#slider-range" ).slider({
                                        values: [$myMinValue, $myMaxValue]                                                     
                                });
                        } else {
                                alert("Invalid Input");
                        }
                });
       $('a[href="#"]').click(function(){return false});

          });