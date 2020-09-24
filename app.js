//form object
var form = document.querySelector('form');


//function to send data to the backend but here if only logs data
function sendData(data){
    console.log(data);
}

//initializing user data to pass to the backend
var user = {
    fname : "fname",
    lname : "lname",
    email : "email",
    pass : "pass"
};


//on Google sign up 
function onSignIn(googleUser) {
    // collecting data from google api :
    var profile = googleUser.getBasicProfile();
    user.fname = profile.getGivenName();
    user.lname = profile.getFamilyName();
    user.email = profile.getEmail();
    sendData(user);

    // The ID token needed to pass to the backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

//this function logs ad alert data after user submits
form.addEventListener( "submit", function ( event ) {
    const data = new FormData(form);
    user.fname = data.get('firstname');
    user.lname = data.get('lastname');
    user.email = data.get('email');
    user.password = data.get('password');
    sendData(user);
    alert(user.fname+', your account has been created !!');
});





