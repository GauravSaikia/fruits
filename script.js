let searchBox = document.querySelector(".searchbox");
document.querySelector("#search-bar").onclick = () => {
    searchBox.classList.toggle("active");
    navBar.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginBar.classList.remove("active");
}

let shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-bar").onclick = () => {
    shoppingCart.classList.toggle("active");
    navBar.classList.remove("active");
    searchBox.classList.remove("active");
    loginBar.classList.remove("active");
}

let loginBar = document.querySelector(".login-form");
document.querySelector("#login-bar").onclick = () => {
   loginBar.classList.toggle("active");
   navBar.classList.remove("active");
   searchBox.classList.remove("active");
   shoppingCart.classList.remove("active");
}

let navBar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
navBar.classList.toggle("active");
searchBox.classList.remove("active");
shoppingCart.classList.remove("active");
loginBar.classList.remove("active");
}
window.onscroll=()=>{
    navBar.classList.remove("active");
    searchBox.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginBar.classList.remove("active");
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autopaly:{
        delay:7500,
        disableOnInteraction:false,
    },
   centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
     
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,      
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autopaly:{
        delay:7500,
        disableOnInteraction:false,
    },
   centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
     
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,      
      },
    },
  });
