
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