// ---------------------
// MENU
// ---------------------

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

// ---------------------
// TRAILER HOME
// ---------------------

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
                }, 3000)
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

// ---------------------
// BOTAO DO TRAILER
// ---------------------
if (window.innerWidth >= 768) {
    const btnAssistir = document.querySelector('#banner-button-play')
    const btnDetalhes = document.querySelector('#banner-button-detalhes')

    btnAssistir.addEventListener('click', () => {
        alert('não é um site pirata não meu mano kkkkkkkkkkkkkkkkkkkkkkkkkkk, ainda')
    })

    btnDetalhes.addEventListener('click', () => {
        alert('não é um site pirata não meu mano kkkkkkkkkkkkkkkkkkkkkkkkkkk, ainda')
    })
}
// ---------------------
// CARROSSEL HOME
// ---------------------

const wrapper1 = document.querySelector(".wrapper1");
const carousel1 = wrapper1.querySelector(".carousel");
const firstCardWidth1 = carousel1.querySelector(".card-carousel").offsetWidth;
const arrowBtns1 = wrapper1.querySelectorAll("i");

const wrapper2 = document.querySelector(".wrapper2");
const carousel2 = wrapper2.querySelector(".carousel");
const firstCardWidth2 = carousel2.querySelector(".card-carousel").offsetWidth;
const arrowBtns2 = wrapper2.querySelectorAll("i");

const wrapper3 = document.querySelector(".wrapper3");
const carousel3 = wrapper3.querySelector(".carousel");
const firstCardWidth3 = carousel3.querySelector(".card-carousel").offsetWidth;
const arrowBtns3 = wrapper3.querySelectorAll("i");

function setupCarousel(wrapper, carousel, firstCardWidth, arrowBtns) {
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    }

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
    }
    autoPlay();

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
}

setupCarousel(wrapper1, carousel1, firstCardWidth1, arrowBtns1);
setupCarousel(wrapper2, carousel2, firstCardWidth2, arrowBtns2);
setupCarousel(wrapper3, carousel3, firstCardWidth3, arrowBtns3);
