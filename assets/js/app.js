const mobileMenu = document.querySelector('.mobile-menu')
const openMenuBtn = document.querySelector('#open-menu-btn')
const closeMenuBtn = document.querySelector('#close-menu-btn')

openMenuBtn.addEventListener('click', () =>{
    mobileMenu.classList.add('open')
})
closeMenuBtn.addEventListener('click', () =>{
    mobileMenu.classList.remove('open')
})