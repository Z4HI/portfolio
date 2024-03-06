
export default function backgroundPage(){

const meImageURL = new URL('./images/me.png',import.meta.url)
const sitewrapper = document.querySelector(".site-wrapper")
const me = document.createElement('img')
me.src = "./images/mee.png"
const bg = document.createElement('div')
bg.classList.add('background')
bg.innerHTML = 

`     
<div class="layers_container">
  <div class="layer i_1"></div>
  <div class="layer i_2" ></div>
  <div class="layer i_25" ></div>
  <div class="layer Heading">
        ZAHI ZUHAIR <br> <h6>DEVELOPER</h6>
  </div>
  <div class="layer me"><img src="${meImageURL}" class = "meIMG" alt=""></div>
  <div class="layer i_4">
    <canvas class="rain"></canvas>
  </div>
  <div class="layer i_5"></div>
  <div class="layer i_6"></div>
  <div class="layer gradient"></div>
  <div class="layer i_7">
    <div class="nav">
      <ul>
        <li><span>ABOUT ME</span></li>
        <li><span>SKILLS</span></li>
        <li><span>PROJECTS</span></li>
        <li><span>CONTACT</span></li>
      </ul>
      </div>
  </div>
</div>

`
sitewrapper.appendChild(bg)

const AboutMe = document.createElement('div')
AboutMe.classList.add('AboutMe')
AboutMe.innerHTML = `
About Me
`

}