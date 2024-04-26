if (window.innerWidth <= 768) {
    const hamburger = document.querySelector('.hamburguer')
    const barra = document.querySelector('.barra')
    const menu = document.querySelector('.menu')
    hamburger.addEventListener('touchstart', clickNav)

    function clickNav() {
        barra.classList.toggle('barra-active')
        menu.classList.toggle('menu-active')
        hamburger.classList.toggle('hamburger-active')
    }
}

if (window.innerWidth >= 768) {
    function trailerOn() {
        const banner = document.querySelector('.banner')
        const trailer = document.querySelector('.trailer-off')

        banner.classList.add('banner-off')
        trailer.classList.remove('trailer-off')
        trailer.classList.add('trailer-on')
        trailer.currentTime = 0
        trailer.play()

        trailer.addEventListener('ended', () => {
            trailerOff()
        })
    }

    function trailerOff() {
        const banner = document.querySelector('.banner')
        const trailer = document.querySelector('.trailer-on')

        if (document.querySelector('.trailer-on')) {
            const fadeAudio = setInterval(() => {
                if (trailer.volume > 0.10) {
                    trailer.volume -= 0.10
                } else {
                    clearInterval(fadeAudio)
                    trailer.pause()
                    trailer.volume = 1
                    banner.classList.remove('banner-off')
                    trailer.classList.remove('trailer-on')
                    trailer.classList.add('trailer-off')
                }
            }, 80)
        }
    }

    let timer

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timer = setTimeout(() => {
                    trailerOn()
                }, 4000)
            } else {
                clearTimeout(timer)
                trailerOff()
            }
        })
    }

    const bannerObserver = new IntersectionObserver(handleIntersection)
    const banner = document.querySelector('.banner')
    bannerObserver.observe(banner)
}







// if (window.innerWidth <= 768) {
//     const hamburger = document.querySelector('.hamburguer')
//     const barra = document.querySelector('.barra')
//     const menu = document.querySelector('.menu')
//     hamburger.addEventListener('touchstart', clickNav)

//     function clickNav() {
//         barra.classList.toggle('barra-active')
//         menu.classList.toggle('menu-active')
//         hamburger.classList.toggle('hamburger-active')
//     }
// }

// let firstLoad = 1

// function trailerOn() {
//     const banner = document.querySelector('.banner')
//     const trailer = document.querySelector('.trailer-off')

//     if (firstLoad == 1) {
//         banner.classList.add('banner-off')
//         trailer.classList.remove('trailer-off')
//         trailer.classList.add('trailer-on')
//         trailer.currentTime = 0
//         trailer.play()
//         firstLoad = 2
//     } else {
//         setTimeout(() => {
//             banner.classList.add('banner-off')
//             trailer.classList.remove('trailer-off')
//             trailer.classList.add('trailer-on')
//             trailer.currentTime = 0
//             trailer.play()
//         }, 3000)
//     }

// }

// function trailerOff() {
//     const banner = document.querySelector('.banner')
//     const trailer = document.querySelector('.trailer-on')

//     if (document.querySelector('.trailer-on')) {
//         const fadeAudio = setInterval(() => {
//             if (trailer.volume > 0.10) {
//                 trailer.volume -= 0.10
//             } else {
//                 clearInterval(fadeAudio)
//                 trailer.pause()
//                 trailer.volume = 1
//                 banner.classList.remove('banner-off')
//                 trailer.classList.remove('trailer-on')
//                 trailer.classList.add('trailer-off')
//             }
//         }, 80)
//     } else {
//         firstLoad = 2
//     }

// }

// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             trailerOn()
//         } else {
//             trailerOff()
//         }
//     })
// }

// setTimeout(() => {
//     const bannerObserver = new IntersectionObserver(handleIntersection)
//     const banner = document.querySelector('.banner')
//     bannerObserver.observe(banner)
// }, 4000)










// function trailerOn() {
//     const banner = document.querySelector('.banner')
//     const trailer = document.querySelector('.trailer-off')

//     banner.classList.add('banner-off')
//     trailer.classList.remove('trailer-off')
//     trailer.classList.add('trailer-on')
//     trailer.play()
// }

// function trailerOff() {
//     const trailer = document.querySelector('.trailer-off')
//     const banner = document.querySelector('.banner')

//     banner.classList.remove('banner-off')
//     trailer.classList.remove('trailer-on')
//     trailer.classList.add('trailer-off')
// }

// function verificarTempoDeRolagem() {
//     const banner = document.querySelector('.banner')
//     const limite = banner.offsetTop + banner.offsetHeight - window.innerHeight

//     if (window.scrollY >= limite) {
//         trailerOn()
//     } else {
//         trailerOff()
//     }
// }

// window.addEventListener('load', () => {
//     setTimeout(verificarTempoDeRolagem, 4000)
// })









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