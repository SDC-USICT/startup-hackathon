import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Sponsors() {
    AOS.init();
  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="h-[55vh] flex justify-center items-center text-5xl text-lred bg-[#232731] mt-32"
      >
        Sponsers <br /> TO be Decided... <br /> (Whether to be made or not...)
      </section>
    </div>
  );
}

export default Sponsors