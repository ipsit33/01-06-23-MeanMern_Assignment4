// Form Page
const takenname = document.getElementById("rname");
const takenurl = document.getElementById("imgurl");
const takenrev = document.getElementById("rreview");

function submitForm(){
    if(takenname.value !== "" && takenurl.value !== "" && takenrev.value !== ""){
        const obj={
            name: takenname.value,
            url: takenurl.value,
            rev: takenrev.value
        };

        fetch("http://localhost:8081/resData",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then(() =>{
            alert("Form Submitted Successfully 🥳🥳");
            window.location.href="./assign4_main.html";
        });       
        
    }
    else{
        alert("⚠Please fill in the details !!");
    }
}