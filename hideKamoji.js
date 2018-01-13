   function hideKamoji() {
      var offset2 = $(".about").offset(); 
      var kamoji_position = offset2.top - 300;

     // var kamoji_position = 2660;

      if (($( window ).width() < 1250) || (($(window).scrollTop() < kamoji_position))) {
        $('.kamoji_wrapper').css('opacity', 0);
      } else {
        $('.kamoji_wrapper').css('opacity', 1);
      }
    }

    $( window ).resize(function() {
      hideKamoji();
    });

    $( window ).ready(function() {
      hideKamoji();

    });


    $( window ).scroll(function() {
        var offset2 = $(".about").offset(); 
        var kamoji_position = offset2.top - 700;

      //  var kamoji_position = 2660;
        if ($(window).scrollTop() > kamoji_position) {
        $('.kamoji_wrapper').css('opacity', 1);

        var newcoord = ('-' + ($(window).scrollTop() - kamoji_position) + 'px');
         $('.kamoji_wrapper').css('bottom', newcoord);
//         $('.reset').css('opacity', 0);

      } else {
        $('.kamoji_wrapper').css('opacity', 0);
//        $('.reset').css('opacity', 1);
      }
      
     if ($(window).scrollTop() > (kamoji_position - 700)) { 
         $('.reset').css('opacity', 0);    
     } else {
         $('.reset').css('opacity', 1); 
       
     }


      hideKamoji();



    });


