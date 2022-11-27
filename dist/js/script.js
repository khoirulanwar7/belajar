const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('nav-mene')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    hamburger.classList.toggle('hidden')
})

window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop;

    if(window.pageYOffset> fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

