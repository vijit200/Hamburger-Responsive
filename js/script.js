let burger = document.querySelector(".burger")

let navbar = document.querySelector(".navbar")

let rightnav = document.querySelector(".right-nav")

let navlist = document.querySelector(".nav-list")


burger.addEventListener("click",()=>{
    navlist.classList.toggle('v-list');
    rightnav.classList.toggle('v-list')
    navbar.classList.toggle('h-nav')

})