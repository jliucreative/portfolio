console.log("hello");

//destinations
$("#cyclocrossB").click(function(){
        $("#cyclocross").toggle();
        $("#mountain").toggle(false);
        $("#road").toggle(false);
    });

$("#mountainB").click(function(){
        $("#mountain").toggle();
        $("#road").toggle(false);
        $("#cyclocross").toggle(false);
    });

$("#roadB").click(function(){
        $("#road").toggle();
        $("#mountain").toggle(false);
        $("#cyclocross").toggle(false);
    });

//safety
$(document).ready(function () {
  $('#rrt').click(function(){
    $('#rrp').toggle();
  });
});

$(document).ready(function () {
  $('#et').click(function(){
    $('#ep').toggle();
  });
});

$(document).ready(function () {
  $('#bvt').click(function(){
    $('#bvp').toggle();
  });
});

//trips
var slides = ["images/cycling1.jpg", "images/cycling2.jpg", "images/cycling3.jpg", "images/cycling4.jpg", "images/cycling5.jpg", "images/cycling6.jpg", "images/cycling7.jpg"];
var count = 2;

$(document).ready(function () {
  setInterval(switchImage,1000);
});

function switchImage() {
  $("#slideImg").animate(1000, function () {
    if (count < 6) {
      count++;
    } else {
      count = 0;
    }
     $("#slideImg").attr("src", slides[count]).animate(1000);
  });
}
