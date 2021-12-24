/*SHOW SECTION ONAS*/
function ahojky(){
    $(".group li:nth-child(1)").removeClass("active");
    $(".onas").addClass("animate__animated animate__fadeIn");
    $(".hh").addClass("animate__animated animate__fadeInLeft animate__delay-1s");
    $(".name").addClass("animate__animated animate__fadeInDown animate__delay-0.5s");
   /*WEBMOVE 1.0 anima.*/ $(".webmove_number").addClass("animate__animated animate__fadeInDown animate__delay-1s"); 
  document.querySelector(".home").style.display="none";
  $(".group li:nth-child(2)").addClass("active");
  document.querySelector(".preload_section").style.display="flex";
  
  const timeout_loading = setTimeout(myGreeting, 1200);
function myGreeting() {
    document.querySelector(".onas").style.display="block";
    document.querySelector(".preload_section").style.display="none";
    return timeout_loading();
}


  
  
  $(".li_one").removeClass("active");
  $(".li_two").addClass("active");
  
  }
  
  
  
  /*SHOW SECTION HOME*/
  function domu(){
    $(".group li:nth-child(2)").removeClass("active");
    document.querySelector(".onas").style.display="none";
    $(".group li:nth-child(1)").addClass("active");
    $(".home").addClass("animate__animated animate__fadeIn");
    document.querySelector(".preload_section").style.display="flex";
   document.querySelector("body").style.overflow="hidden";
    const timeout_loading = setTimeout(myGreeting, 1200);
    function myGreeting() {
        document.querySelector(".home").style.display="block";
        document.querySelector(".preload_section").style.display="none";
        document.querySelector("body").style.overflow="scroll";
        return timeout_loading();
    }
  


    $(".li_one").addClass("active");
    $(".li_two").removeClass("active");
  
  }