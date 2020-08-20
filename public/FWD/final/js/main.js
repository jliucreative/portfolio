// Get a reference to the database service
var database = firebase.database();

// Create a storage reference from our storage service
var storageRef = database.ref("report");

//create instance of the Google provider instance
var provider = new firebase.auth.GoogleAuthProvider();

//user status div
var user_info = document.getElementById("report_form");

//current user
var current_user = null;

// var ref2 = firebase.database().ref().child('report');
// ref2.once('name', function(snapshot){
//   if (snapshot.exists()) {
//     var nameVar = data.val().name;
//   }
//   $('#info').happened(nameVar);
// })

// function authenticate(){
// 	firebase.auth().getRedirectResult().then(function(result) {
// 	  if (result.credential) {
// 	    // This gives you a Google Access Token. You can use it to access the Google API.
// 	    var token = result.credential.accessToken;
// 	  }
// 	  else {
// 		  //google sign-in redirect
// 		  firebase.auth().signInWithRedirect(provider);
// 	  }
// 	  // The signed-in user info
// 	  current_user = result.user;
// 	  user_info.innerHTML = "Hi, " + current_user.displayName;
// 	}).catch(function(error) {
// 	  // Handle Errors here.
// 	  var errorCode = error.code;
// 	  var errorMessage = error.message;
// 	  // The email of the user's account used.
// 	  var email = error.email;
// 	  // The firebase.auth.AuthCredential type that was used.
// 	  var credential = error.credential;
// 	});
// }
//
// function signOut(){
// 	firebase.auth().signOut().then(function() {
// 		// Sign-out successful
// 		status.innerHTML = "";
// 	}).catch(function(error) {
// 		// An error happened
// 	});
// }
//
// //setting an event listener for change of authentication state
// firebase.auth().onAuthStateChanged(function(user) {
// 	current_user=user;
// 	if (user) {
//     	// User is signed in
// 		user_info.innerHTML = "Hi, " + user.displayName;
//   	} else {
//     	// No user is signed in
// 		// user_info.innerHTML ="";
//   	}
// });

// function goodbye(){
// 	$('#place_order').hide();
// 	alert("Thanks for visiting");
// }

function report()
{
	// if (current_user) {
	// User is signed in

		//name
		var name = $("#name").val();
		//email
		var email = $("#email").val();
		//phone
		var phone = $("#phone").val();
		//location
		var location = $("#location").val();

		//write to firebase
		storageRef.push({
			name: name,
      email: email,
      phone: phone,
      location: location
    })//.then(window.location.href = "firebase_order_confirm.html");
			return false;
		// } else {
		// 	window.location.href = "firebase_order_fail2.html";
		// 	}
	}
	// else {
	// 	// No user is signed in.
	// 	alert("Please sign in to place an order");
	// }
// }



$(document).ready(function() {
	$('#report_form').submit(function(event){ //attaches the submit listener to the form
		report();
		event.preventDefault(); //prevents page from being reloaded
		});
	// $('#signin').click(authenticate);
	// $('#signout').click(signOut);
}); // end ready
