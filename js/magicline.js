(function($) {
  //Set up variables including current left offset of the navigation
  var $slidingMenu = $('.group'),
      el_width,
      el_left_offset,
      el_parent,
      slider_line;
  //Set up resize function on the window to reset that offset should it change because of the centering
  $(window).load(function() {
    
    
    $slidingMenu.each(function() {
      //Append the magic line to the nav     
      $(this).append('<li class="sliding-line"></li>');
      
      var start_el_width = 0,
          start_el_offset = 0,
          active_el = $(this).find('.active');
      
      if(active_el.length) {
        start_el_width = active_el.outerWidth();
        start_el_offset = active_el.position().left;
      }
      //Set up position and width of the magic line for the current page item
      $(this).find('.sliding-line').css({
        'width': start_el_width + 'px',
        'left': start_el_offset + 'px'
      })
      //Also set the original width and position as data, so it can be used to animate back to
      .data('width', start_el_width)
      .data('left', start_el_offset);
      
    });
  });



//On hover, calculate the new width and new left position and animate to it
$slidingMenu.find('li a').hover(function () {
  el_parent = $(this).parent();
  el_width = el_parent.outerWidth();
  el_left_offset = $(this).position().left;
  slider_line = el_parent.siblings('.sliding-line');
  slider_line.stop().animate({
    'width': el_width + 'px',
    'left': el_left_offset + 'px'
  });
  //On the hover callback (mouse out), animate back to original
}, function () {
  var start_el_width = 0,
    start_el_offset = 0,
    active_el = $('#example-one').find('.active');

  if (active_el.length) {
    start_el_width = active_el.outerWidth();
    start_el_offset = active_el.position().left;
  }

  $('#example-one').find('.sliding-line')
    .data('width', start_el_width)
    .data('left', start_el_offset);
  slider_line.stop().animate({
    'width': start_el_width + 'px',
    'left': start_el_offset + 'px'
  });

});
  
})(jQuery);










/*SHOW SECTION ONAS*/
function ahojky(){
  $(".group li:nth-child(1)").removeClass("active");
  $(".onas").addClass("animate__animated animate__fadeIn");
  $(".hh").addClass("animate__animated animate__fadeInLeft animate__delay-2s");
  $(".name").addClass("animate__animated animate__fadeInDown animate__delay-0.5s");
document.querySelector(".home").style.display="none";
$(".group li:nth-child(2)").addClass("active");
document.querySelector(".onas").style.display="block";


$(".li_one").removeClass("active");
$(".li_two").addClass("active");

}



/*SHOW SECTION HOME*/
function domu(){
  $(".group li:nth-child(2)").removeClass("active");
  document.querySelector(".onas").style.display="none";
  $(".group li:nth-child(1)").addClass("active");
  $(".home").addClass("animate__animated animate__fadeIn");
  document.querySelector(".home").style.display="block";
 
  

  $(".li_one").addClass("active");
  $(".li_two").removeClass("active");

}