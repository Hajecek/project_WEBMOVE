$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

      });
  }); 


/*navbar scroll*/
  $(window).scroll(function () {
    var height = $('body').height();
    var scrollTop = $(window).scrollTop();
    if(scrollTop <= 0){
         $('.logo_small_left').css({ "display" : "inline",});
         $('.navbar-fixed-top').css({ "position" : "fixed", "top" : "0px"});
         setTimeout(function(){  $('#navbar').css({ "background" : "transparent",}); }, 400);
    }
    else {
         $('.logo_small_left').css({ "display" : "inline",});
         setTimeout(function(){  $('#navbar').css({ "background" : "rgba(28, 35, 46, 0.363)",}); }, 100);
         
        
   }
});





/* scroll to show aside navigation */

$(window).scroll(function () {
  var height = $('body').height();
  var scrollTop = $(window).scrollTop();
  if(scrollTop <= 200){
        document.querySelector("body").style.width="100%";
  }
  else{
    document.querySelector("body").style.width="100%";
       }
});