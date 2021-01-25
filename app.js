let menu = document.querySelector(".menu");
let schlName = document.querySelector(".schlName");
let tagLine = document.querySelector(".tagLine");

function menuOpen(){
    let aside = document.createElement("aside");
    let body = document.querySelector("body");
    body.appendChild(aside);
    aside.classList.add("aside");
    menu.style.display = "none";

    addingElementsToAside(aside);
}

function addingElementsToAside(aside){
    let crossBtn = document.createElement("button");
    crossBtn.innerHTML = `<i class="lni lni-cross-circle"></i>`;
    crossBtn.addEventListener("click", ()=>menuCollapse(aside));
    crossBtn.classList.add("crossBtn");
    aside.appendChild(crossBtn);
    for(let i = 0 ; i <10 ; i++){
        let i = document.createElement("p");
        i.innerHTML = "class";
        i.classList.add("classBox");
        aside.appendChild(i);
    }
}

function menuCollapse(aside){
    aside.style.display = "none";
    menu.style.display = "flex";
}

