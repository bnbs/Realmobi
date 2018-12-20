var backdrop = document.querySelector(".backdrop");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var subItems = document.querySelector(".mobile-nav__sub-items");
var plusSignContainer = document.querySelector("#plus-sign-container");
var plusSignImage = document.querySelector(".mobile-nav__item--plus-sign");
var showSubItems = false;

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeSidebar();
});

toggleButton.addEventListener("click", function () {

  showSubItems = false;

  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function () {
    backdrop.classList.add("open");
  }, 10);
});

plusSignContainer.addEventListener("click", function () {

  showSubItems = !showSubItems;
  if (showSubItems) {
    subItems.classList.add("open");
    plusSignImage.classList.add("rotate-plus-sign");
  } else {
    subItems.classList.remove("open");
    plusSignImage.classList.remove("rotate-plus-sign");
  }
});

function closeSidebar() {

  backdrop.classList.remove("open");
  setTimeout(function () {
    backdrop.style.display = "none";
  }, 200);
}

window.onscroll = function() {myFunction()};

var mainHeader = document.querySelector('.main-header');

function myFunction() {

    if (window.pageYOffset >= 96) {
      mainHeader.classList.add("sticky");
    } else{
      mainHeader.classList.remove("sticky");
    }  
}