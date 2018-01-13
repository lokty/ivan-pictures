   function hideBatman() {
     
     var delta = 50;
     
     var arny = 70 - delta;
     var emma = 290 - delta;
     var barak = (-160) - delta;
     var south = 450 - delta;
     
      if ($( window ).width() < 1150) {
        
        $('.arny').css('margin-left', arny);
        $('.emma').css('margin-left', emma);
        $('.barak').css('margin-left', barak);
        $('.south').css('margin-left', south);
        $('.batman').css('opacity', 0);
       } else {
         
         arny = arny + delta;
         emma = emma + delta;
         barak = barak + delta;
         south = south + delta;
         
        $('.arny').css('margin-left', arny);
        $('.emma').css('margin-left', emma);
        $('.barak').css('margin-left', barak);
        $('.south').css('margin-left', south);
        $('.batman').css('opacity', 1);
        
         
       }
     
     
      
     
   }

    $( window ).resize(function() {
      hideBatman();
    });

    $( window ).ready(function() {
      hideBatman();

    });
