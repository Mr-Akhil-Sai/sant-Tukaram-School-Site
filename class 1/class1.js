let backBtn = document.querySelector(".backBtn");

let aside = document.createElement("aside");
let body = document.querySelector("body");
body.appendChild(aside);
aside.classList.add("asideClass1");
addingElementsToAside(aside);


function addingElementsToAside(aside) {
  let heading = document.createElement("h1");
  let marati = document.createElement("p");
  let hindi = document.createElement("p");
  let english = document.createElement("p");
  let maths = document.createElement("p");
  let evs = document.createElement("p");
  heading.innerHTML = "Class <br> &nbsp;&nbsp;&nbsp; 1";
  marati.innerHTML = "Marati";
  hindi.innerHTML = "Hindi";
  english.innerHTML = "English";
  maths.innerHTML = "Maths";
  evs.innerHTML = "EVS";
  addingStylesToAsideElements(
    aside,
    heading,
    marati,
    hindi,
    english,
    maths,
    evs
  );
}

function addingStylesToAsideElements(
  aside,
  heading,
  marati,
  hindi,
  english,
  maths,
  evs
) {
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
  marati.addEventListener("click", () => window.open("./marati.html", "_self"));
  hindi.addEventListener("click", () => window.open("./hindi.html", "self"));
  english.addEventListener("click", () =>
    window.open("./english.html", "self")
  );
  maths.addEventListener("click", () => window.open("./maths.html", "self"));
  evs.addEventListener("click", () => window.open("./evs.html", "self"));
}

function menuCollapse(aside) {
  aside.style.display = "none";
  menu.style.display = "flex";
}

function homePage() {
  window.open("../index.html", "self");
}

function previousPage() {
  window.open("./class1.html", "self");
}
