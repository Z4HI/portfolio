import './style.css'
import backgroundpage from './background.js'
const sitewrapper = document.querySelector(".site-wrapper")
const preloader = document.querySelector('.preloader')
const DarkModeToggle = document.querySelector(".light")
const body = document.querySelector('body')


window.onload = function(){


    preloader.classList.add('loaded')
    backgroundpage()
    const background = document.querySelector('.background')
    sitewrapper.classList.add('fadeIn')
    background.addEventListener('mousemove', e =>{
        Object.assign(document.documentElement,{
            style: `
            --move-x:${(e.clientX - window.innerWidth/2) * -.01}deg;
            --move-y:${(e.clientY - window.innerHeight/2) * .02}deg;
            `
        })
    })
}

DarkModeToggle.addEventListener('click',()=>{

    body.classList.toggle('mode')
    document.querySelector('.nav').classList.toggle('light')

})





