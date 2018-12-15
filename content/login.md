---
title: "Login"
date: "2017-03-28T00:02:24+01:00"
type: "login"
---

<script>
function Login(){
	username = $("#username")[0].value;
	password = $("#password")[0].value;
	firebase.auth().signInWithEmailAndPassword(username + "@hentaku.org", password).then(function(){window.location="/";}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  alert(errorMessage);
	  // ...
	});
}
</script>

<div style="text-align:center; margin:0px auto;">
<a href="/" style="text-decoration:none; "><h1 style="width:200px; margin: 0px auto;"><span class="gtext">HENTAKU</span></h1></a>
	</br>
	<div style="width:300px; margin:0px auto;">
	<form role="form" action="javascript:;" onsubmit="return Login();" name="LoginForm" id="LoginForm" >
    <div>
        <div class="form-div form-signin">
            <div class="form-group" style="margin: 0px;">
                <input id="username" type="text" style="border-radius: .25em .25em 0 0;border-bottom: 0px;" class="form-control" placeholder="Username" name="username" required autofocus></input>
                <input id="password" type="password" style="border-radius: 0 0 .25em .25em;" class="form-control top-buffer-sm" placeholder="Password" name="password" required></input>
            </div>
        </div>
    </div>
    <div style="margin: 10px auto 5px auto;">
		<button id="createUserSubmit" type="submit" class="btn btn-primary" style="width: 100%; margin-top:5px">Login</button>
		</div>
	</form>
		  <div style="display:inline-block; width:100%">Need an account? <a style="margin:0; color: var(--color3)" href="/register/">Register</a></div>
		  <div style="display:inline-block; width:100%">Forgot your password? <a style="margin:0; color: var(--color3)" href="/reset/">Reset Password</a></div>
	</div>
</div>

