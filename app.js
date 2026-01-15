let form = document.querySelector(".form");
let inputs = document.querySelectorAll("input");
let body = document.querySelector("body");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");
     
    let img = document.createElement("img");
    img.setAttribute("src", inputs[2].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[0].value;

    let h5 = document.createElement("h5");
    h5.textContent = inputs[1].value;

    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    card.appendChild(profile);
    profile.appendChild(img);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);


    body.appendChild(card);
    console.log(card);

    inputs.forEach(function(val){
        if(val.type !== "submit"){
            val.value = "";
        }
        
    })

})
