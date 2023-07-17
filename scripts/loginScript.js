/**
 * The function "loadLoginForm" creates a login form with input fields for username and password, and a
 * login button, when a proceed button is clicked on frontend
 */

function loadLoginForm(){
    var loginBox = document.getElementById("login-box")
      
    loginBox.innerHTML=`
    <form>
        <input id="username" placeholder="Enter your Email">
        
        <br><br>
        
        <input id="password" type="password" placeholder="Enter your Password">
        
        <br><br>
        
        <input id="login-button" onclick="login()" type="button" value="Login">
        
    </form>
    `
}




/**
 * The login function checks if the entered username and password match a specific value, and if so,
 * sets a flag in local storage and redirects the user to the main page; otherwise, it displays an
 * alert indicating wrong credentials.
 */
async function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="umerfarooq@gmail.com" && password=="123456")
    {
        localStorage.setItem("isLoggedIn","true")
        console.log("Logged In")
        window.location="/mainpage.html"
    }
    else{
        alert("Wrong Credentials")
    }
}


document.addEventListener("DOMContentLoaded", loadingPage);

function loadingPage(){
    var mainDiv = document.getElementById("main");
    mainDiv.innerHTML = `<img class="center" src="images/loader-2.gif">`

    setTimeout(()=>{
        mainDiv.outerHTML = `<div class="bg-image"></div>
        <div class="bg-text">
          <h1>Welcome To Real Estate Web Site</h1>
          <p>Here you can find your dream property</p>
          <div id="login-box">
          <div onclick="loadLoginForm()" class="button-on-landing-page" id="btn-proceed">Get Started</div>
        </div> `
    },4000)
}