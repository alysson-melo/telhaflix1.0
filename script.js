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

if (window.innerWidth >= 768) {

    function trailerOn() {
        const banner = document.querySelector('.banner')
        const trailer = document.querySelector('.trailer-off')

        banner.classList.add('banner-off')
        trailer.classList.remove('trailer-off')
        trailer.classList.add('trailer-on')

        trailer.currentTime = 0
        trailer.volume = 0

        const bntMute = document.querySelector('.btn-mute')
        bntMute.classList.add('btn-mute-active')
        bntMute.addEventListener('click', mute)
        bntMute.innerHTML = 'volume_off'

        function mute() {
            if (trailer.volume == 0) {
                trailer.volume = 1
                bntMute.innerHTML = 'volume_up'
            } else {
                trailer.volume = 0
                bntMute.innerHTML = 'volume_off'
            }
        }

        trailer.play()

        trailer.addEventListener('ended', () => {
            trailerOff()
        })
    }

    function trailerOff() {
        const banner = document.querySelector('.banner')
        const trailer = document.querySelector('.trailer-on')
        const bntMute = document.querySelector('.btn-mute')

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
                    bntMute.classList.remove('btn-mute-active')
                    bntMute.addEventListener('click', mute)

                    function mute() {
                        if (trailer.volume == 0) {
                            trailer.volume = 1
                            bntMute.innerHTML = 'volume_up'
                        } else {
                            trailer.volume = 0
                            bntMute.innerHTML = 'volume_off'
                        }
                    }

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

    if (document.querySelector('.banner')) {
        const bannerObserver = new IntersectionObserver(handleIntersection)
        const banner = document.querySelector('.banner')
        bannerObserver.observe(banner)
    }
}