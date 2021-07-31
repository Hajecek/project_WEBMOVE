$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

      });
  }); 



  $(window).scroll(function () {
    var height = $('body').height();
    var scrollTop = $(window).scrollTop();
    if(scrollTop == 0){
         $('.logo_small_left').css({ "display" : "block",});
         $('.navbar-fixed-top').css({ "top" : "0",});
    }
    else {
         $('.logo_small_left').css({ "display" : "none",});
   }
});