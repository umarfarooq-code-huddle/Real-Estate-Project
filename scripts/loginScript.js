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