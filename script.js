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
  if (window.innerWidth > 960) {
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
