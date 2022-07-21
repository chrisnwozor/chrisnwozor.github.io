let button = document.getElementById("login-button");
let loginform = document.getElementById("login-form");
let loginerror = document.getElementById("ctn2");


function signin(e){
    e.preventDefault();
    let usr = loginform.username.value;
    let psw = loginform.password.value;
    if(usr=== "admin" && psw === "123"){
        window.location.href = "welcome.html"
    }else {
        loginerror.style.opacity = 1;
    }
}

button.addEventListener("click", signin);







