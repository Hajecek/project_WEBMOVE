function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    
    
    if(h == 0){
        h = 12;
    }
 
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();







function ahojky(){
    $(".home").addClass("animate__animated animate__fadeOut animate__delay-2s");
    document.querySelector(".onas").style.display="block";
    $(".group li:nth-child(2)").addClass("active");


}


function domu(){
    $(".home").removeClass("animate__animated animate__fadeOut animate__delay-2s");
    $(".home").addClass("animate__animated animate__fadeIn");

}

