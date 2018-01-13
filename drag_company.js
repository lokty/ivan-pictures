$(function(){
  
 var drag = false; 
 var wrapper_init_pos = 0;
 var currentMousePos = 0;
 var prevMousePos = 0;
 var drag_amount = 0;
 var wrapper_new_pos = 0;
 var mouse_init_pos = 0;
 var prev_wrapper_pos = 0;
 
  
 $(document).mousemove(function(event) {
        if (drag===true) {
          
         currentMousePos = event.pageX;
          if (prevMousePos === 0) {prevMousePos = event.pageX;}
         drag_amount = mouse_init_pos - currentMousePos;
         prev_wrapper_pos = wrapper_new_pos;
         wrapper_new_pos = wrapper_init_pos - (drag_amount* 2);
         $("#companies_wrapper").css("left", wrapper_new_pos);
//         $("#slider").css("left", ((wrapper_new_pos)/2.3 - 460));
         
          
         
         
         prevMousePos = currentMousePos;
         
        } 
    }); 
  
  
 $( ".company" ).mousedown(function() {
  drag = true;
  wrapper_init_pos = parseInt($('#companies_wrapper').css('left'), 10);
  if (mouse_init_pos === 0) {mouse_init_pos = event.pageX; }
 });
  
 $( ".company" ).mouseup(function() {
  drag = false;
  prevMousePos = 0;
  mouse_init_pos = 0;
  if (parseInt($('#companies_wrapper').css('left'), 10) < 0) {$("#companies_wrapper").css("left", 0); } 
  if (parseInt($('#companies_wrapper').css('left'), 10) > 2180) {$("#companies_wrapper").css("left", 2180); } 

 });
  
    $("#companies_wrapper").on({
      mouseleave: function (event) {
        drag = false;
      }
    })

  
  
});
