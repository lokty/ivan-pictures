$(function(){
  var prev_height = 0;
  var auto_height = 0;
  $(".company").on({
      mouseenter: function (event) {
        prev_height = $( this ).css("height");
        $( this ).css("height", "auto");
        auto_height = $( this ).css("height");
        $( this ).css("height", prev_height);
        this.offsetHeight;
        $( this ).css("height", auto_height);
        
      },
      mouseleave: function (event) {
        $( this ).css("height", prev_height);
        drag = false;
      }
  });
});
  
