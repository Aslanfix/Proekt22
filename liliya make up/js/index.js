let elBurgerMenu = document.querySelector('.header_burger')
let elHeaderList = document.querySelector('.header_list')



elBurgerMenu.addEventListener('click', () => {
    elHeaderList.classList.toggle('flex')
})