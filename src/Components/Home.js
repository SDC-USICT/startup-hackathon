import { React, useState,useRef } from "react";
import "./CSS/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero";
import WhenAndWhere from "./WhenAndWhere";
import Arrow from "./Arrow";
import Sponsors from "./Sponsors";
import Goals from "./Goals";
import Tracks from "./Tracks";
import Faqs from "./Faqs";
import OrganisingTeam from "./OrganisingTeam";
import Register from "./Register";
import Timeline from "./Timeline";

function Home() {
  AOS.init();
 const paraRef = useRef(null);
 const clickHandler = () => {
   paraRef.current &&
     paraRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
 };
  return (
    <>
      <div>
        <Hero />
        <div onClick={clickHandler} className="cursor-pointer">
          <Arrow />
        </div>
        <div ref={paraRef}>
          <WhenAndWhere />
        </div>{" "}
        <Sponsors />
        <Goals />
        <Tracks />
        <Timeline />
        <Faqs />
        <Register />
        <OrganisingTeam />
        {/* FOOTER */}
      </div>
    </>
  );
}
export default Home;
