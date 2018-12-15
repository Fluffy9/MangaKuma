---
title: "Register"
date: "2017-03-28T00:02:24+01:00"
type: "login"
---
<script>
function Register(){
	username = $("#username")[0].value;
	password = $("#password")[0].value;
	confirmpassword = $("#confirm_password")[0].value;
	email = $("#email")[0].value;
	
//create new user with provided data of the form
	firebase.auth().createUserWithEmailAndPassword(username + "@hentaku.org", password)
	  .then(function(firebaseUser) {
		console.log("User " + firebaseUser.user.uid + " created successfully!");
		updateFirestore(username, email, firebaseUser.user.uid);
		return firebaseUser.user;
	  }).catch(function(error) {
		alert(error.toString().replace("email address","username"));
	  });

}
function updateFirestore(username, email, uidNewUser) {
  //push data into firestore using the uid provided

  db.collection("users").doc(uidNewUser).set({
		 userId: uidNewUser,		
		 name: username,
		 email: email
	})
	.then(function() {
		console.log("Document successfully written!");
		window.location = "/";
		
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});

}

$(document).ready(function(){
	var password = document.getElementById("password"), confirm_password = document.getElementById("confirm_password");

	function validatePassword(){
	  if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Passwords Don't Match");
	  } else {
		confirm_password.setCustomValidity('');
	  }
	}

	password.onchange = validatePassword;
	confirm_password.onkeyup = validatePassword;

	/*username = $("#exampleInputUsername1");
	password = $("#exampleInputPassword2");
	confirmpassword = $("#exampleConfirmPassword1");
	email = $("#exampleInputEmail1");
	$("#Login").click(function(){
	});*/
});
</script>

<div style="text-align:center; margin:0px auto;">
<a href="/" style="text-decoration:none; "><h1 style="width:200px; margin: 0px auto;"><span class="gtext">HENTAKU</span></h1></a>
	</br>
	<div style="width:300px; margin:0px auto;">
	  <div class="alert alert-info " style="margin: 10px auto;">
		<strong>Remember:</strong>
		<span id="error">We cannot help you recover your account if you don't set an email</span>
	  </div>
	<form role="form" action="javascript:;" onsubmit="return Register();" name="newUserForm" id="newUserForm" >
    <div>
        <div class="form-div form-signin">
            <div class="form-group" style="margin: 0px;">
                <input id="username" type="text" style="border-radius: .25em .25em 0 0;border-bottom: 0px;" class="form-control" placeholder="Username" name="username" required autofocus></input>
                <input id="password" type="password" style="border-radius: 0 0 0 0;" class="form-control top-buffer-sm" placeholder="Password" name="password" required></input>
                <input id="confirm_password" type="password" style="border-radius: 0 0 0 0;" class="form-control top-buffer-sm" placeholder="Confirm Password" name="confirm_password" required></input>
                <input id="email" type="email" style="border-radius: 0 0 .25em .25em;" class="form-control top-buffer-sm" placeholder="Email" name="email" autofocus></input>
            </div>
        </div>
    </div>
    <div style="margin: 10px auto 5px auto;">
		<button id="createUserSubmit" type="submit" class="btn btn-primary" style="width: 100%; margin-top:5px">Register</button>
		</div>
	</form>
	  <div style="display:inline-block; width:100%">Already have an account? <a style="margin:0; color: var(--color3)" href="/login/">Login</a></div>
	</div>
</div>

