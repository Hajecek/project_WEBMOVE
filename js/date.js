




var today = new Date();

var day = today.getDate() ;
var month = today.getMonth() + 1;
var year = today.getFullYear();

var d = new Date();
var days = ["Neděle","Pondělí","Úterý","Středa","Čtvrtek","Pátek","Sobota"];


if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

var out = document.getElementById("datum-1");

out.innerHTML ="Datum:" + " " + day + "." + month + "." + year + " " + "," + "<span style='color:#ffffffe7;margin-left:6px'>" + days[d.getDay()] + "</span>";