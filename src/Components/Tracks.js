import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import "./CSS/track.css"
function Tracks() {
    AOS.init();
  return (
    <div>
      {/* <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="h-[55vh] flex justify-center items-center text-5xl text-lred bg-[#232731] mt-32"
      >
        Tracks <br /> TO be Decided... <br /> (Whether to be made or not...)
      </section> */}
      <div id="tracks">

<div class="title-track">
    <h1>TRACKS</h1>
</div>

<div class="track-container">

    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
            <img src={require("./images/map.png")} alt="" />
                AI-ML
            </div>
            <div class="flip-card-back">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis!
            </div>
        </div>
    </div>
    

    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
            <img src={require("./images/map.png")} alt="" />
                WEB3
            </div>
            <div class="flip-card-back">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis!
            </div>
        </div>
    </div>


    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
            <img src={require("./images/map.png")} alt="" />
                ANDROID
            </div>
            <div class="flip-card-back">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis!
            </div>
        </div>
    </div>


    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
            <img src={require("./images/map.png")} alt="" />
                HealthCare
            </div>
            <div class="flip-card-back">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis!
            </div>
        </div>
    </div>

    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
            <img src={require("./images/map.png")} alt="" />
                EDTech
            </div>
            <div class="flip-card-back">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis!
            </div>
        </div>
    </div>

    <div class="flip-card-container">
        <div class="flip-card">
            <div class="flip-card-front">
            <img src={require("./images/map.png")} alt="" />
                Open Innovation
            </div>
            <div class="flip-card-back">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis!
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default Tracks