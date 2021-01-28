let menu = document.querySelector(".menuBtn");
let backBtn = document.querySelector(".backBtn");

function menuOpen() {
  let aside = document.createElement("aside");
  let body = document.querySelector("body");
  body.appendChild(aside);
  aside.classList.add("asideClass1");
  menu.style.display = "none";
  addingCrossBtnAside(aside);
}

function addingCrossBtnAside(aside) {
  let crossBtn = document.createElement("button");
  crossBtn.innerHTML = `<i class="lni lni-cross-circle"></i>`;
  crossBtn.addEventListener("click", () => menuCollapse(aside));
  crossBtn.classList.add("crossBtn");
  aside.appendChild(crossBtn);
  addingElementsToAside(aside);
}

function addingElementsToAside(aside){
    let heading = document.createElement("h1");
    let marati = document.createElement("p");
    let hindi = document.createElement("p");
    let english = document.createElement("p");
    let maths = document.createElement("p");
    let evs = document.createElement("p");
    heading.innerHTML = "Class <br> &nbsp;&nbsp; 1";
    marati.innerHTML = "Marati";
    hindi.innerHTML = "Hindi";
    english.innerHTML = "English";
    maths.innerHTML = "Maths";
    evs.innerHTML = "EVS";
    addingStylesToAsideElements(aside, heading, marati, hindi, english, maths, evs);
}

function addingStylesToAsideElements(aside,heading, marati, hindi, english, maths, evs){
    aside.appendChild(heading);
    aside.appendChild(marati);
    aside.appendChild(hindi);
    aside.appendChild(english);
    aside.appendChild(maths);
    aside.appendChild(evs);
    heading.classList.add("class1Heading");
    marati.classList.add("marati");
    hindi.classList.add("hindi");
    english.classList.add("english");
    maths.classList.add("maths");
    evs.classList.add("evs");
    marati.addEventListener("click", ()=>window.open("./marati.html", "_self") );
}

function menuCollapse(aside) {
  aside.style.display = "none";
  menu.style.display = "flex";
}

function homePage(){
  window.open("../index.html", "self");
}

function previousPage(){
  window.open("./class1.html", "self");
}