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



/*SHOW PREIMAGE*/
$(function() {
    $('.group li:nth-child(1)').mouseenter(function() {
      $('.onas_show').css("right","20px").css( "bottom","20px");
    }).mouseleave(function () {
    $('.onas_show').css("bottom","-50%");
    });
  });


  




