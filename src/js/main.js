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

// setTimeout(() => {
//     spinerBox.style.display = "none";
//     // spinerBox.style.opacity = "-1";
//     document.body.style.overflow = "visible"
//     // spinerBox.style.transform = "translateX(200%)"
// }, 3100)

// const spinerTimeout = () => {
//     setTimeout(spinerWritingAnimation, 1500)
//     document.body.style.overflow = "hidden"

// }

// const spinerWritingAnimation = () => {
//     spinerText.innerHTML = inputValue.slice(0, index);
//     index++;
//     if (index > inputValue.length) return;
//     timeout = setTimeout(spinerWritingAnimation, speed);
// }
// window.onload = spinerTimeout;

// const navBtn = document.querySelector('.hamburger')
// const footerYear = document.querySelector('.footer__year')
// const handleNav = () => {
//     navBtn.classList.toggle('is-active')
// }
// const handleCurrentYear = () => {
//     const year = (new Date).getFullYear();
//     footerYear.innerText = year;
// }
// navBtn.addEventListener('click', handleNav)
// handleCurrentYear();