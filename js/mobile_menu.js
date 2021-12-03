let menutoggle = document.querySelector('.toggle');
let bb = document.querySelector('.menu_mobile_onclick');
let aa = document.querySelector("html");

let three_span = document.querySelector(".three_span");


menutoggle.onclick= function(){
    menutoggle.classList.toggle('active');
    bb.classList.toggle('active');
    aa.classList.toggle('active');
    three_span.classList.toggle('active');
   
} ;




