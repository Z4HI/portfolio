(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function n(){const o=document.querySelector(".site-wrapper"),i=document.createElement("img");i.src="./images/mee.png";const r=document.createElement("div");r.classList.add("background"),r.innerHTML=`     
<div class="layers_container">
  <div class="layer i_1"></div>
  <div class="layer i_2" ></div>
  <div class="layer i_25" ></div>
  <div class="layer Heading">
        ZAHI ZUHAIR <br> <h6>DEVELOPER</h6>
  </div>
  <div class="layer me"><img src="./images/mee.png" alt=""></div>
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

`,o.appendChild(r);const s=document.createElement("div");s.classList.add("AboutMe"),s.innerHTML=`
About Me
`}const d=document.querySelector(".site-wrapper"),l=document.querySelector(".preloader"),a=document.querySelector(".light"),u=document.querySelector("body");window.onload=function(){l.classList.add("loaded"),n();const o=document.querySelector(".background");d.classList.add("fadeIn"),o.addEventListener("mousemove",i=>{Object.assign(document.documentElement,{style:`
            --move-x:${(i.clientX-window.innerWidth/2)*-.01}deg;
            --move-y:${(i.clientY-window.innerHeight/2)*.02}deg;
            `})})};a.addEventListener("click",()=>{u.classList.toggle("mode"),document.querySelector(".nav").classList.toggle("light")});
