let dark__mode = document.querySelector('#darkmode')
let elBody = document.querySelector('#body')



dark__mode.addEventListener('click', function () {
    elBody.classList.toggle('dark')
    
})