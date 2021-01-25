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
    for(let i = 1 ; i <= 10 ; i++){
        let paragraph = document.createElement("p");
        paragraph.innerHTML = "class " + i;
        paragraph.classList.add("classBox");
        aside.appendChild(paragraph);
    }
}

function menuCollapse(aside){
    aside.style.display = "none";
    menu.style.display = "flex";
}

