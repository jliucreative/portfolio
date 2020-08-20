console.log('p2 js connected');

$(document).ready(function() {

  if ("geolocation" in navigator) {


    $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
    var table_body = "";
    $.each(data, function(k, v) {
	table_body += "<tr><td>" + k + "</td><td><b>" + v + "</b></td></tr>";
    });
    $("#GeoResults").html(table_body);
    $("#test").html( data.lat +'l');
    var lat = data.lat;
    var longit = data.lon;
    console.log(lat);
    console.log(longit);

//});

$(document).ready(function () {
  $("#search-button").click(submitted);
});

function submitted(){
  var city_name = document.getElementById('query').value;
  console.log(city_name);
}
console.log(city_name);



   // navigator.geolocation.getCurrentPosition(showcityname);

   // function showcityname(position) {

     //var lat = position.coords.latitude;//need
     //var longit = position.coords.longitude;//need
     // var latitude_text = document.getElementById("latitude-val");
     // var altitude_text = document.getElementById("altit");
     var city_name;
     var temp;
     var dHigh;
     // var country_name;
     // var weather_description;
     var apiKey = "1e254b9a3f1219e566056d5cffa0ed03";//myAPIKeyDaily

     $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function(data) {
       // city_name = data["name"];
       // country_name = data["sys"]["country"];
       // weather_description = data["weather"][0]["description"];
       weatherID = data["weather"][0]["id"];
       temp = data["main"]["temp"];
       temp = Math.round(((temp -273.15)*1.8) +32);
       // pressure = data["main"]["pressure"];
       // wind_speed = data["wind"]["speed"];
       // one= data[]

       dHigh = data['main']['temp_max']
       dHigh = Math.round(((dHigh -273.15)*1.8) +32);
       dLow = data['main']['temp_min']
       dLow = Math.round(((dLow -273.15)*1.8) +32);


       $('#dailyHigh').html(dHigh + ' °F');
       $('#dailyLow').html(dLow + ' °F');

       // $('#test').html(weatherID);


// TEMP BRACKET RULES
       if (temp <= 65) {
         $('#wear').html('+ wear heavy coat')
       }

       else if (66 <= temp && temp <= 73) {
         $('#wear').html('+ wear light coat')
       }

       else if (74 <= temp && temp <= 77) {
         $('#wear').html('+ warm weather clothes'
         + '</br>'
         +'+ no jacket needed')
       }

       else if (78 <= temp && temp <= 85) {
         $('#wear').html('+ hot weather clothes'
         + '</br>'
         +'+ no sleeves on top')
       }

       else {
         $('#wear').html('+ melting weather clothes' + '</br>' + '+ swimsuit if acceptable')
       }
// TEMP BRACKET end
// DONT FORGET ++ ICON switch
// weatherID=801;
       switch (weatherID) {
        case 800:
        $('#condition').html('Sun')
         $('#bring').html('+ sunglasses')
           break;
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
          $('#condition').html('Thunder')
          $('#bring').html('+ umberella or windbreaker')
          $("#dailyWeatherIcon").css("background-image", "url('img/thund.png')");
          $("html").css("background-color", 'lightgrey');
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
          $('#condition').html('Rain')
          $('#bring').html('+ umberella or windbreaker')
          $("#dailyWeatherIcon").css("background-image", "url('img/rain.png')");
          $("html").css("background-color", 'lightgrey');
          break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
          $('#condition').html('Snow')
          $('#bring').html('+ gloves or scarf')
          $("#dailyWeatherIcon").css("background-image", "url('img/snow.png')");
          $("html").css("background-color", 'lightgrey');
          break;
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
        case 762:
        case 771:
        case 781:
          $('#condition').html('Low Visibility')
          $('#bring').html('+ be careful with driving and crossing roads')
          $("#dailyWeatherIcon").css("background-image", "url('img/fog.png')");
          $("html").css("background-color", 'lightgrey');
          break;
        case 801:
        case 802:
          $('#condition').html('Part Cloud')
          $('#bring').html('+ a jacket' + '<br>' + '+ sunglasses')
          $("#dailyWeatherIcon").css("background-image", "url('img/part.png')");
          // $("html").css("background-color", 'lightgrey');
          break;
        case 803:
        case 804:
          $('#condition').html('Clouds')
          $('#bring').html('+ umbrella or windbreaker just in case')
          $("#dailyWeatherIcon").css("background-image", "url('img/cloud.png')");
          $("html").css("background-color", 'lightgrey');
          break;

          break;

          break;

            break;

       }

     }) //api call end

   })

 }//geolocation if


})
