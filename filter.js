$(window).load(function(){
    var $container = $('.gallery_wrapper');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        masonry: {         //
          columnWidth: 50  //  это можно удалять
        },                 //
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.h_left_raw a').click(function(){
        $('.h_left_raw .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
          var offset = $(".about").offset(); 
         return false;
    });

        $('.right_raw_half a').click(function(){
            $('.right_raw_half .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             var offset = $(".about").offset(); 

             return false;
        });

        $('.reset a').click(function(){
            $('.reset .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
             });
             var offset = $(".about").offset(); 

             return false;
        });
  

});
