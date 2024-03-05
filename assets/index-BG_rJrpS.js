(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function n(){const s=new URL(""+new URL("me-C-fFvZ01.png",import.meta.url).href,import.meta.url);console.log(s);const i=document.querySelector(".site-wrapper"),o=document.createElement("img");o.src="./images/mee.png";const r=document.createElement("div");r.classList.add("background"),r.innerHTML=`     
<div class="layers_container">
  <div class="layer i_1"></div>
  <div class="layer i_2" ></div>
  <div class="layer i_25" ></div>
  <div class="layer Heading">
        ZAHI ZUHAIR <br> <h6>DEVELOPER</h6>
  </div>
  <div class="layer me"><img src="${s}" class = "meIMG" alt=""></div>
  <div class="layer i_4">
    <canvas class="rain"></canvas>
  </div>
  <div class="layer i_5"></div>
  <div class="layer i_6"></div>
  <div class="layer gradient"></div>
  <div class="layer i_7">
    <div class="nav">
      <ul>
        <li>ABOUT ME</li>
        <li>SKILLS</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
      </div>
  </div>
</div>

`,i.appendChild(r);const e=document.createElement("div");e.classList.add("AboutMe"),e.innerHTML=`
About Me
`}const l=document.querySelector(".site-wrapper"),d=document.querySelector(".preloader"),a=document.querySelector(".light"),u=document.querySelector("body");window.onload=function(){d.classList.add("loaded"),n();const s=document.querySelector(".background");l.classList.add("fadeIn"),s.addEventListener("mousemove",i=>{Object.assign(document.documentElement,{style:`
            --move-x:${(i.clientX-window.innerWidth/2)*-.01}deg;
            --move-y:${(i.clientY-window.innerHeight/2)*.02}deg;
            `})})};a.addEventListener("click",()=>{u.classList.toggle("mode"),document.querySelector(".nav").classList.toggle("light"),document.querySelector(".i_1").classList.toggle("light")});
