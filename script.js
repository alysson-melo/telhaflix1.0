if (window.innerWidth <= 768) {
    const nav = document.querySelector('.nav-menu')
    const header = document.querySelector('.header')
    const barra = document.querySelector('.barra')
    const menu = document.querySelector('.menu')
    const logoTv = document.querySelector('.logo-tv')

    nav.addEventListener('click', clickNav)
    nav.addEventListener('touchstart', clickNav)

    function clickNav(event) {
        if (event.type === 'touchstart') event.preventDefault()
        header.classList.toggle('header-active')
        barra.classList.toggle('barra-active')
        menu.classList.toggle('menu-active')
        logoTv.classList.toggle('logo-tv-active')
        logoTv.classList.toggle('logo-tv')
    }
}