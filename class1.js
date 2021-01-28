let menu = document.querySelector(".menuBtn");

function menuOpen() {
  let aside = document.createElement("aside");
  let body = document.querySelector("body");
  body.appendChild(aside);
  aside.classList.add("aside");
  menu.style.display = "none";
  addingElementsToAside(aside);
}

function addingElementsToAside(aside) {
  let crossBtn = document.createElement("button");
  crossBtn.innerHTML = `<i class="lni lni-cross-circle"></i>`;
  crossBtn.addEventListener("click", () => menuCollapse(aside));
  crossBtn.classList.add("crossBtn");
  aside.appendChild(crossBtn);
  
}

function menuCollapse(aside) {
  aside.style.display = "none";
  menu.style.display = "flex";
}

function openNewPage() {
  window.open("./class1.html", "_self");
}
