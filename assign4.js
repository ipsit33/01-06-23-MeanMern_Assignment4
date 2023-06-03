// Restaurant Main Page

fetch("http://localhost:8081/resData",{
    method: "GET"
})
.then(response=>response.json())
.then(data=>renderData(data));

const show = document.getElementById("rest");

function renderData(data){
    data.map((el)=>{
        const div = document.createElement("div");
    
        const image = document.createElement("img");
        image.src=el.url;

        const name = document.createElement("h3");
        name.innerText=el.name;
    
        const rev = document.createElement("p");
        rev.innerText=el.rev;
    
    
        div.append(image,name,rev);
        show.append(div);
    });
}










