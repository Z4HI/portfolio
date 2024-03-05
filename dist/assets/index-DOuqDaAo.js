(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();function n(){const s=document.querySelector(".site-wrapper");document.querySelector("body");const r=document.createElement("div");r.classList.add("background"),r.innerHTML=`     
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
        <li>Contact</li>
      </ul>
      </div>
  </div>
</div>

`,s.appendChild(r);const t=document.createElement("div");t.classList.add("AboutMe"),t.innerHTML=`
About Me
`}const c=document.querySelector(".site-wrapper"),l=document.querySelector(".preloader");window.onload=function(){l.classList.add("loaded"),c.classList.add("loaded"),n(),document.querySelector(".background").addEventListener("mousemove",r=>{Object.assign(document.documentElement,{style:`
            --move-x:${(r.clientX-window.innerWidth/2)*-.01}deg;
            --move-y:${(r.clientY-window.innerHeight/2)*.02}deg;
            `})})};
