function togglePassword(){

const password = document.getElementById("password");

if(password.type === "password"){
password.type = "text";
}
else{
password.type = "password";
}

}

document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

// temporary login simulation
window.location.href = "dashboard.html";

});