    $( window ).scroll(function() {
    var offset = $(".about").offset(); 
    var offset_top = offset.top;
    var newmargin = 0;
//     console.log(offset_top, $(window).scrollTop());
    var scrollTop = $(window).scrollTop();
    if (scrollTop > (offset_top - 300)) {
       newmargin = 0; 
       $('.celeb_pics img').css('bottom', newmargin);
    } else {
       newmargin = -200; 
       $('.celeb_pics img').css('bottom', newmargin);
    }

//     $('body').css('height', (offset_top + 400)); 
    });


