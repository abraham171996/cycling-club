const openMenu = document.querySelector("#hamburger-btn");
const mobile_navbar  = document.querySelector(".mobile-navbar ")
const mobile_btn = document.querySelector("#mobile-btn")
const fixed_Menu = document.querySelector(".header-bottom")


function openMenuOnClick(e) {
    // Check if the clicked element is not the openMenu itself
    if (e.target !== openMenu) {
        openMenu.classList.add("fa-bars");
        openMenu.classList.remove("fa-xmark");
        mobile_navbar.style.left = "-100%";
    }
}
function toggleMenu() {
    if (openMenu.classList.contains("fa-bars")) {
        openMenu.classList.remove("fa-bars");
        openMenu.classList.add("fa-xmark");
        mobile_navbar.style.left = "0"
    } else if (openMenu.classList.contains("fa-xmark")) {
        openMenu.classList.remove("fa-xmark");
        openMenu.classList.add("fa-bars");
        mobile_navbar.style.left = "-100%"
    }
}
function fixedMenu(){
    if(window.scrollY >=650){
        fixed_Menu.style.position = "fixed"
        fixed_Menu.style.width = "85%"
    }
    if(window.scrollY <= 150){
        fixed_Menu.style.position = ""
        fixed_Menu.style.width = "auto"
    }
}


openMenu.addEventListener("click", toggleMenu);
mobile_btn.addEventListener("click",toggleMenu)
window.addEventListener("click", openMenuOnClick);
window.addEventListener("scroll",fixedMenu)

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click",topFunction)
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function () {
  var $grid = $(".cards-bottom").isotope({
    // options
  });

  // filter items on button click
  $(".cards ul").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // Initialize LightGallery on the gallery element
  lightGallery(document.getElementById("animated-thumbnails"), {
    thumbnail: true, // Enable thumbnails
  });
});

var swiper = new Swiper(".brand-mySwiper", {
        
      
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    loop: true,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const textBtn = document.querySelectorAll(".text-button");
  const par = document.querySelectorAll(".par");
  
  textBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      par[i].classList.toggle("show");
    });
  });
  
 