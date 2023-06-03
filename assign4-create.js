// Create Account JS
const takenemail = document.getElementById("email");
const takenpassword = document.getElementById("password");
const takenname = document.getElementById("name");
const takenphone = document.getElementById("mobile");

const div = document.getElementById("create_id");

const btn = document.createElement("button");
btn.innerText = "Register";
btn.addEventListener("click",submitData);

div.append(btn);

function submitData(){
  if(takenemail.value !== "" && takenpassword.value !== "" && takenname.value !== "" && takenphone.value !== ""){
    const obj ={
      id: Date.now(),
      email: takenemail.value,
      password: takenpassword.value,
      name: takenname.value,
      phone: takenphone.value
    };

    fetch("http://localhost:8080/logData",{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(()=>{
      alert("Registration Successful !!!");
      window.location.href = "./assign4_login.html";
    })
    .catch(err => alert("Error Occured: "+err));
    // .then(response=> response.json())
    // .then(data => console.log(data))
    // .catch(err=> alert("Error Occured: "+err));
  }
  else{
    alert("Fill in the details");
  }
}