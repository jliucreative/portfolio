// console.log('lab5connected');

var ref = firebase.database().ref('count');
// console.log(ref);

$(document).ready(function () {
  $("#lab5Button").click(countIt);
  // document.getElementById('clicked').innerHTML = number;
});

function countIt(){
  ref.transaction(function(number){
    // console.log(number);
    number = number+.5;
    document.getElementById('clicked').innerHTML = number;
    return number;
  })
}
