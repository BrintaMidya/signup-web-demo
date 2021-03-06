//initializing facebook sdk and Button;


window.fbAsyncInit = function() {
    FB.init({
        appId      : '995198537570179',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
    });
    
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });  
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response){
    if(response.status === 'connected'){
        console.log('logged in and auth');
    }
    else{
        console.log('not auth');
    }
}