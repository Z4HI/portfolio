(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function c(){const r=document.querySelector(".site-wrapper");document.querySelector("body");const i=document.createElement("div");i.classList.add("background"),i.innerHTML=`     
<div class="layers_container">
  <div class="layer i_1"></div>
  <div class="layer i_2" ></div>
  <div class="layer i_25" ></div>
  <div class="layer Heading">
        ZAHI ZUHAIR <br> <h6>DEVELOPER</h6>
  </div>
  <div class="layer me"><img src="./images/me.png" alt=""></div>
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

`,r.appendChild(i);const o=document.createElement("div");o.classList.add("AboutMe"),o.innerHTML=`
About Me
`}const n=document.querySelector(".site-wrapper"),l=document.querySelector(".preloader"),a=document.querySelector(".light"),u=document.querySelector("body");window.onload=function(){l.classList.add("loaded"),c();const r=document.querySelector(".background");n.classList.add("fadeIn"),r.addEventListener("mousemove",i=>{Object.assign(document.documentElement,{style:`
            --move-x:${(i.clientX-window.innerWidth/2)*-.01}deg;
            --move-y:${(i.clientY-window.innerHeight/2)*.02}deg;
            `})})};a.addEventListener("click",()=>{u.classList.toggle("mode"),document.querySelector(".nav").classList.toggle("light")});
