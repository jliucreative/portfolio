console.log("hello");

//
// LAB4 API
//
$(document).ready(function () {
  $("#lab4Button").click(keyword_search);
});

function keyword_search() {
  //get search value
  var search_term = $('#query').val();

  //set search parameters
  var params = {
    q: search_term,
    part: 'snippet',
    maxResults: 1,
    key: "AIzaSyB9sA6hpuTZ8rOOAh5z5A3tcnSMPP2JUJA"
  }

  //url for search
  var url = 'https://www.googleapis.com/youtube/v3/search';

  //get JSON results
  $.getJSON(url, params, showResults);
}

function showResults(response) {
  console.log(response);
  var result_items = response.items;
  //clear results
  $("#results").empty();
  //loop through the items array calling the anonymous function for each item passing in the index and item
  $.each(result_items, function (index, item) {
    //video
    //gets the id of the video
		var id = item.id.videoId;
		//defines an iframe for the video
		var video = '<iframe class="video-result" src="https://www.youtube.com/embed/' + id + '" frameborder="0">';
		//appends a video div with the video iframe to results
		$("#results").append("<div class='video'>" + video);
  });
}
//lab4end


//
//LAB2 JQUERY
//

//1. ---
//main page content fades in on page load
$(function() {
  //adapted from fade in from api.jquery.com + class example.
    $("#loadFade").fadeIn(2000);
    console.log('faded');
});

//2. ---
//image slideshow of "banner" adapted from class example.
var slides = ["img/3.png", "img/2.png", "img/1.png"];
var count = 0;

$(document).ready(function () {
  setInterval(switchImage,1000);

});

function switchImage() {
  $("#bannerImg").animate(1000, function () {
    if (count < 2) {
      count++;
    } else {
      count = 0;
    }
     $("#bannerImg").attr("src", slides[count]).animate(1000);
  });
  // console.log(slides[count]);
}

//3. ---
//click banner -- toggle menu adapted from api.jquery.com --toggle event

$(document).ready(function () {
  $('.banner').click(function(){
    $('.expandedMenu').slideToggle();
  });
});

//
//Lab1 JavaScript-----
//
var p = document.getElementById('projects');
var l = document.getElementById('labs');
var j = document.getElementById('journal');
var button = document.getElementById('button');
var menu = document.getElementById('menuOptions');

//MOUSEENTER + MOUSELEAVE-- non css manipulation (lab01)
//--moved to separate js file

// p.addEventListener('mouseenter', function() {
//     this.src = 'img/projects.png';
// }, false);
//
// p.addEventListener('mouseleave', function() {
//     this.src = 'img/bwProjects.png';
// }, false);
//
// l.addEventListener('mouseenter', function() {
//     this.src = 'img/labs.png';
// }, false);
//
// l.addEventListener('mouseleave', function() {
//     this.src = 'img/bwLabs.png';
// }, false);
//
// j.addEventListener('mouseenter', function() {
//     this.src = 'img/journal.png';
// }, false);
//
// j.addEventListener('mouseleave', function() {
//     this.src = 'img/bwJournal.png';
// }, false);

//HAMBURGER-- css manipulation (lab01)
button.addEventListener("click", show, false);
function show(e){
  menu.style.display = "flex";
  this.removeEventListener("click", show, false);
  this.addEventListener("click",hide, false);
}
function hide(e){
  menu.style.display = "none";
  this.removeEventListener("click", hide, false);
  this.addEventListener("click",show , false);
}



console.log("bye");
