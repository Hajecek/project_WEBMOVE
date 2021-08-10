
$(document).ready(function () {
  
  'use strict';
  
   var c, currentScrollTop = 0,
       navbar = $('#navbar');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });
  
});


/*navbar scroll*/
  $(window).scroll(function () {
    var height = $('body').height();
    var scrollTop = $(window).scrollTop();
    if(scrollTop == 0){
         setTimeout(function(){  $('#navbar').css({ "background" : "transparent",}); }, 400);
    }
    else {
         setTimeout(function(){  $('#navbar').css({ "background" : "rgba(28, 35, 46, 0.363)",}); }, 00);
         
        
   }
});









/* scroll to show aside navigation */

$(window).scroll(function () {
  var height = $('body').height();
  var scrollTop = $(window).scrollTop();
  if(scrollTop <= 600){
        document.querySelector("#aside_pc_nav").style.opacity="0";
        document.querySelector("#aside_pc_nav").style.zIndex="-1";
  }
  else{
    document.querySelector("#aside_pc_nav").style.opacity="1";
    document.querySelector("#aside_pc_nav").style.zIndex="9999";

       }
});







/*01*/
$(window).scroll(function () {
  var height = $('body').height();
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 550){
    $("#one").removeClass("active_aside");
    $("#two").addClass("active_aside");
   
  }
  else{
    $("#one").addClass("active_aside");
    $("#two").removeClass("active_aside");
    $("#three").removeClass("active_aside");
       }
});




/*02*/
$(window).scroll(function () {
  var height = $('body').height();
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 1450){
    $("#two").removeClass("active_aside");
    $("#three").addClass("active_aside");
  }
  else{
    $("#two").addClass("active_aside");
    $("#three").removeClass("active_aside");
       }
});




/*03*/
$(window).scroll(function () {
  var height = $('body').height();
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 2050){
    $("#three").removeClass("active_aside");
    $("#four").addClass("active_aside");
  }
  else{
    $("#four").removeClass("active_aside");
       }
});



/*04*/
$(window).scroll(function () {
  var height = $('body').height();
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 3550){
    $("#four").removeClass("active_aside");
    $("#five").addClass("active_aside");
  }
  else{
    $("#five").removeClass("active_aside");
       }
});