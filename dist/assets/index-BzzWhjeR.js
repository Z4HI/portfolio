(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(){const s=new URL(""+new URL("me-C-fFvZ01.png",import.meta.url).href,import.meta.url),r=document.querySelector(".site-wrapper"),o=document.createElement("img");o.src="./images/mee.png";const i=document.createElement("div");i.classList.add("background"),i.innerHTML=`     
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

`,r.appendChild(i);const e=document.createElement("div");e.classList.add("AboutMe"),e.innerHTML=`
About Me
`}const d=document.querySelector(".site-wrapper"),l=document.querySelector(".preloader"),a=document.querySelector(".light"),u=document.querySelector("body");window.onload=function(){l.classList.add("loaded"),c();const s=document.querySelector(".background");d.classList.add("fadeIn"),s.addEventListener("mousemove",r=>{Object.assign(document.documentElement,{style:`
            --move-x:${(r.clientX-window.innerWidth/2)*-.01}deg;
            --move-y:${(r.clientY-window.innerHeight/2)*.02}deg;
            `})})};a.addEventListener("click",()=>{u.classList.toggle("mode"),document.querySelector(".nav").classList.toggle("light")});
