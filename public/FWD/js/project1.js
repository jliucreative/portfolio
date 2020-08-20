console.log('test');

//fade elements{
$("#susTitle1").fadeIn(2000);
    console.log('faded');



//moving elements
$(document).ready(function() {
	$("#arrow").animate({left: "80%"}, 1500);
});

$(document).ready(function() {
	$("#laying").animate({right: "0%"}, 1500);
});

$(document).ready(function() {
	$(".portraitsz").animate({top: "20%"}, 1500);
});


//typing effect
$(document).ready(function(){
	typeWriter();
});

var i = 0;
var txt = 'On January 15, 1947 a woman and her daughter found a dead body.';
// var txt2 = 'bloop';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("holder").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//on mouseenter
//sus1
susTitle1.addEventListener('mouseenter', function() {
    document.getElementById('df1').style.display = 'inline-block';
}, false);

df1.addEventListener('mouseenter', function() {
    document.getElementById('df2').style.display = 'inline-block';
}, false);

df2.addEventListener('mouseenter', function() {
    document.getElementById('df3').style.display = 'inline-block';
}, false);

df3.addEventListener('mouseenter', function() {
    document.getElementById('df4').style.display = 'inline-block';
}, false);

df4.addEventListener('mouseenter', function() {
    document.getElementById('df5').style.display = 'inline-block';
}, false);

df5.addEventListener('mouseenter', function() {
    document.getElementById('df6').style.display = 'inline-block';
}, false);

df6.addEventListener('mouseenter', function() {
    document.getElementById('df7').style.display = 'inline-block';
}, false);

df7.addEventListener('mouseenter', function() {
    document.getElementById('arrowHover').style.display = 'inline-block';
}, false);


//bio
info0.addEventListener('mouseenter', function() {
    document.getElementById('info1').style.display = 'inline-block';
}, false);

info1.addEventListener('mouseenter', function() {
    document.getElementById('info2').style.display = 'inline-block';
}, false);

info2.addEventListener('mouseenter', function() {
    document.getElementById('arrowHover').style.display = 'inline-block';
}, false);
