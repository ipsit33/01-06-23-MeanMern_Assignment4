// Login Page

const email = document.getElementById("email");
const pass = document.getElementById("password");

function findUser(){
    fetch("http://localhost:8080/logData",{
        method: "GET"
    })
    .then(response => response.json())
    .then(data => {
        const user = data.find(el=>el.email === email.value && el.password === pass.value);
        if(user){
            alert("Logged In Successfully",window.location.href="./assign4_form.html");
        }
        else{
            alert("⚠Register your account first !!",window.location.href="./assign4_createacc.html");
        }
    });
}