let menu = document.querySelector("#Menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
// Show search
let search = document.querySelector("#search-icon");
search.onclick = () => {
  let search_form = document.querySelector("#search-form");
  search_form.classList.toggle("active");
};
// Hide search
let close_icon = document.querySelector("#close");
close_icon.onclick = () => {
  let search_form = document.querySelector("#search-form");
  search_form.classList.remove("active");
};

// Swiper funtion
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
var swiper = new swiper(".review-slider",{
  spaceBetween:30,
  centeredSlides:true,
  autoplay:{

    delay:3000, //เวลาในการเลื่อน
    disableOnInteraction : false ,
   },
    pagination :[
       el : ".swiper-pagination ",
        clickable:true,
     },
      loop:true,
       breakpoints:{ 
        0:{ 
          slidesPerView:1,
         },640:{
           slidesPerView:2,
            768 :{ 
              slidesPerView :3,
              1024:{ 
                slidesPerView : 3
  }
})