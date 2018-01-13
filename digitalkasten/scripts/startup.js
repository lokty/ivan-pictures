function includeHTML() {
  $( "#navbar" ).load( "navbar.html");
  $( "#frame1" ).load( "frame1.html");
  $( "#passport" ).load( "passport.html");
  $( "#frame3" ).load( "frame3.html");
  $( "#envelope" ).load( "envelope.html");
  $( "#compass" ).load( "compass.html");
  $( "#yellowblock" ).load( "yellowblock.html");
  $( "#team" ).load( "team.html");
  $( "#menu" ).load( "menu.html");
  $( "#prices" ).load( "prices.html");
  $( "#about" ).load( "about.html");
  $( "#register" ).load( "register.html");
  $( "#footer" ).load( "footer.html");

};

function startParallax() {
  $('.glasses').parallaxElement();
  $('.glasses').parallaxElement({
    defaultSpeed:  0.2,   // Integer - Default speed if `data-speed` is not present
    useOffset:     true,  // Boolean - Whether or not to start animations below bottom of viewport
    defaultOffset: 200,   // Distance before element appears to start animation
    disableMobile: true, // Boolean - allow function to run on mobile devices
    minWidth:      false  // Integer - minimum width the function should fire
  });

  $('.lock').parallaxElement();
  $('.lock').parallaxElement({
    defaultSpeed:  0.2,   // Integer - Default speed if `data-speed` is not present
    useOffset:     true,  // Boolean - Whether or not to start animations below bottom of viewport
    defaultOffset: 200,   // Distance before element appears to start animation
    disableMobile: true, // Boolean - allow function to run on mobile devices
    minWidth:      false  // Integer - minimum width the function should fire
  });
}

function calcStopPosition(scrollPosition) {
  var screenHeight = $(window).height();
  console.log("scroll position: ", scrollPosition);
  var phoneLeftover = Math.round((screenHeight - $("#phone").height()) / 2);
  var screenCenter = Math.round(screenHeight / 2);
  console.log("screen center: ", screenCenter);
  var centerPosition = Math.round(screenCenter - ($("#phone").height() / 2));
  var positionDifference = phoneInitPosition - centerPosition;
  console.log("perfect center position: ", centerPosition);
  console.log("difference: ", positionDifference);

  var phoneStopPosition = positionDifference;
  console.log("phone init position: ", phoneInitPosition);
  console.log("screen height: ", screenHeight);
  console.log("phone height: ", $("#mobile").height());
  console.log("screen leftovers: ", phoneLeftover);
  console.log("phone stop position: ", phoneStopPosition);
  $("#divider").offset({top: phoneInitPosition, left: 0});
  $("#divider2").offset({top: centerPosition, left: 0});

  return phoneStopPosition;
}

window.onresize = function() {
  calcStopPosition();
  console.log("resized!");
}

function toggleMenu() {
  $(document).on('click', function (event) {


    if ($(event.target).hasClass("point")) {
      $target = $(event.target);
    } else {
      if (($(event.target).is("h2")) || ($(event.target).is("p"))) {
        $target = $(event.target).parent();
      } else {
        $target = undefined;
      }
    }

    if ($target) {
      console.log($target.prev());
      console.log($target.next());
      var zIndex = $target.css("z-index");
      if ($target.hasClass( "opened" )) {
        $target.removeClass('opened');
        $target.addClass('closed');
        console.log(zIndex);
        $target.css("z-index", zIndex - 1);
        $(".point").css("border", "1px solid #afafaf");
        $target.find($(".fa-angle-down")).css("display", "initial");
        $target.find($(".fa-angle-up")).css("display", "none");

      } else {
        $(".point").removeClass("opened");
        $(".point").addClass("closed");
        $target.next().css("margin-top", "-10px");
        $target.addClass('opened');
        $target.removeClass('closed');
        $(".point").css("border", "1px solid #afafaf");
        $(".fa-angle-up").css("display", "none");
        $(".fa-angle-down").css("display", "initial");

        $target.find($(".fa-angle-down")).css("display", "none");
        $target.find($(".fa-angle-up")).css("display", "initial");

        $target.css("border-top", "1px solid #afafaf");
        $target.next().css("border-top", "0px solid #afafaf");
        $target.siblings().css("z-index", 1);
        $target.css("z-index", zIndex + 1);
        $target.prev().css("border-bottom", "0px solid #afafaf");
      }

    }

    // console.log($target);
  });
}

function scrollThenFix() {
  var screenHeight = $(window).height();
  var screenCenter = Math.round(screenHeight / 2);
  var phoneLeftover = Math.round((screenHeight - $("#phone").height()) / 2);

  console.log(mobileInitPosition);
  console.log(screenCenter);


  $( window ).scroll(function() {
    var scroll = $(window).scrollTop().valueOf();
    // console.log(scroll);
    // if (typeof phoneStopPosition === 'undefined') {
    //   phoneStopPosition = calcStopPosition(scroll);
    // }

    if (scroll > mobileInitPosition - phoneLeftover) {
      // console.log("triggered");
      $("#phone").addClass("overscrolled");
      $("#phone").removeClass("scrolled");

      $("#phone").css("top", mobileInitPosition);
    } else {
      $("#phone").removeClass("overscrolled");
      $("#phone").addClass("scrolled");
      $("#phone").css("top", "50%");


      // $("#phone").css("top", mobileInitPosition);
    }
    // console.log(scroll);
    // console.log(phoneStopPosition);
    // if (scroll > phoneStopPosition) {
    //   $("#phone").addClass("scrolled");
    //   // console.log($("#phone").position().top);
    // } else {
    //   $("#phone").removeClass("scrolled");
    //   // if (scroll)
    // }
  });
}

var phoneInitPosition,
    phoneStopPosition;

$(document).ready(function(){
  includeHTML();

  setTimeout(function(){
    phoneInitPosition = $("#phone").offset().top;
    mobileInitPosition = $("#mobile").offset().top + 10;

    // calcStopPosition($(window).scrollTop().valueOf());
    scrollThenFix();
    toggleMenu();
  }, 100);
  startParallax();
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  })
});
