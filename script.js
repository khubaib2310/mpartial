function onClickMenu() {
  document.querySelector(".burger-menu").style.display = "block";
  document.querySelector(".cross").style.display = "block";
  document.querySelector(".burger").style.display = "none";
}

function onClickMenu2() {
  document.querySelector(".burger-menu").style.display = "none";
  document.querySelector(".burger").style.display = "block";
  document.querySelector(".cross").style.display = "none";
}

function defaultDisplay() {
  if (window.innerWidth > 997) {
    document.querySelector(".burger-menu").style.display = "none";
    document.querySelector(".burger").style.display = "none";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".burger-menu").style.display = "none";
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".burger").style.display = "block";
  }
}
window.addEventListener("resize", defaultDisplay);

const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput = () => {
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = value / 2 + "%";
  slideValue.classList.add("show");
};
inputSlider.onblur = () => {
  slideValue.classList.remove("show");
};
