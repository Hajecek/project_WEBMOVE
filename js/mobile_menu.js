let menutoggle = document.querySelector('.toggle');
let bb = document.querySelector('.menu_mobile_onclick');
let aa = document.querySelector("html");
let social_media = document.querySelector(".social_media");
let three_span = document.querySelector(".three_span");
let arrow_footer = document.querySelector(".arrow_footer");

menutoggle.onclick= function(){
    menutoggle.classList.toggle('active');
    bb.classList.toggle('active');
    aa.classList.toggle('active');
    three_span.classList.toggle('active');
    social_media.classList.toggle('active');
    arrow_footer.classList.toggle('active');
} ;



   


