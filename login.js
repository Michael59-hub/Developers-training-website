function confirm(){
    var a= document.getElementById("password").value;
    var b= document.getElementById("password2").value;
    if(a===b && a!==""){
        document.getElementsByTagName("form")[0].setAttribute("action", "Project.html");
    }else if(a===""){
        alert("Enter a password");
    }else if(a!==b){
        alert("The password you confirmed isn't correct");
    }
}
//you can also use the onsubmit attribute in your html
function showPassword(){
    var a = document.getElementById("password");
    a.setAttribute("type", "text");
}
function showPassword2(){
    var a = document.getElementById("password2");
    a.setAttribute("type", "text");
}
function hidePassword(){
    var a = document.getElementById("password");
    a.setAttribute("type", "password");
}
function hidePassword2(){
    var a = document.getElementById("password2");
    a.setAttribute("type", "password");
}