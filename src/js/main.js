const spinerText = document.querySelector('.spiner__text')
const spinerBox = document.querySelector('.spiner')
let inputValue = 'inbox24'
let timeout
let index = 1
let speed = 130
// let mouseCursor = document.querySelector('.cursor')
// let links = document.querySelectorAll('a')

// function cursor(e) {
//     mouseCursor.style.top = e.pageY + 'px'
//     mouseCursor.style.left = e.pageX + 'px'
// }
// links.forEach(link => {
//     link.addEventListener('mouseleave', () => {
//         mouseCursor.classList.remove('link-grow')
//     })

//     link.addEventListener('mouseover', () => {
//         mouseCursor.classList.add('link-grow')
//     })
// })

// window.addEventListener('mousemove', cursor)


setTimeout(() => {
    spinerBox.style.display = "none";
    // spinerBox.style.opacity = "-1";
    document.body.style.overflow = "visible"
    // spinerBox.style.transform = "translateX(200%)"
}, 3100)

const spinerTimeout = () => {
    setTimeout(spinerWritingAnimation, 1500)
    document.body.style.overflow = "hidden"

}

const spinerWritingAnimation = () => {
    spinerText.innerHTML = inputValue.slice(0, index);
    index++;
    if (index > inputValue.length) return;
    timeout = setTimeout(spinerWritingAnimation, speed);
}
window.onload = spinerTimeout;

// const navBtn = document.querySelector('.hamburger')
// const handleNav = () => {
//     navBtn.classList.toggle('is-active')
// }
const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();
// navBtn.addEventListener('click', handleNav)







const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion__btn')

function openAccordionItems() {

    if (this.nextElementSibling.classList.contains('active')) {
        this.nextElementSibling.classList.remove('active')
        this.classList.remove('active-two')
        this.parentElement.classList.remove('active-three')

    } else {

        closeAccordionItem()
        this.nextElementSibling.classList.toggle('active')
        this.classList.toggle('active-two')
        this.parentElement.classList.toggle('active-three')

    }

}

const closeAccordionItem = () => {
    const allActiveItems = document.querySelectorAll('.accordion__info')
    allActiveItems.forEach(item => item.classList.remove('active'))


    const accordionTile = document.querySelectorAll('.accordion__tile')
    accordionTile.forEach(item => item.classList.remove('active-three'))

    const AcordionBtn = document.querySelectorAll('.accordion__btn')
    AcordionBtn.forEach(item => item.classList.remove('active-two'))
}

const clickOutsideAccordion = e => {
    if (
        e.target.classList.contains('accordion__btn') ||
        e.target.classList.contains('accordion__info') ||
        e.target.classList.contains('accordion__info-text')
    )
        return

    closeAccordionItem()
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))

window.addEventListener('click', clickOutsideAccordion)

// const nav = document.querySelector('.navbar')

// const addShadow = () => {
//     if (window.scrollY >= 300) {
//         nav.classList.add('shadow-bg')
//     } else {
//         nav.classList.remove('shadow-bg')
//     }
// }

// window.addEventListener('scroll', addShadow)


const cookieBox = document.querySelector('.cookie')
const cookieBtn = document.querySelector('.cookie__box-link--accept')

const showCookieBox = () => {
    const cookies = localStorage.getItem('cookie')
    if (cookies) {
        cookieBox.classList.add('hidden-cookies')
    }
}

const hideCookieBox = () => {
    localStorage.setItem('cookie', 'true')
    cookieBox.classList.add('hidden-cookies')
}

showCookieBox()
cookieBtn.addEventListener('click', hideCookieBox)
