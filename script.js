if (window.innerWidth <= 768) {
    const hamburger = document.querySelector('.hamburguer')
    const barra = document.querySelector('.barra')
    const menu = document.querySelector('.menu')
    hamburger.addEventListener('click', clickNav)

    function clickNav() {
        barra.classList.toggle('barra-active')
        menu.classList.toggle('menu-active')
        hamburger.classList.toggle('hamburger-active')
    }
}

// if (window.innerWidth <= 768) {
//     const hamburger = document.querySelector('.hamburguer')
//     const barra = document.querySelector('.barra')
//     const menu = document.querySelector('.menu')
//     hamburger.addEventListener('click', clickNav)
//     hamburger.addEventListener('touchstart', clickNav)

//     function clickNav(event) {
//         if (event.type === 'touchstart') event.preventDefault()
//         barra.classList.toggle('barra-active')
//         menu.classList.toggle('menu-active')
//         hamburger.classList.toggle('hamburger-active')
//     }
// }