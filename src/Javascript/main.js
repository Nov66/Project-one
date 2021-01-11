//menu-toggler
// $(document).ready(function(){
//     $('.navbar__container__menu-toggler').click(function(){
//         $(this).toggleClass("menu-toggler--active");
//         $(".navbar__container__menu").toggleClass("menu--active");
//     });
// });

const menuToggler = document.querySelector("navbar__container__menu-toggler");
const navMenu = document.querySelector("navbar__container__menu");

navbar__container__menu-toggler.addEventListener("click", () => {
    menuToggler.classList.toggle("active");
    navMenu.classList.toggle("open");
});
