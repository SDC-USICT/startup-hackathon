import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function Tracks() {
    AOS.init();
  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="h-[55vh] flex justify-center items-center text-5xl text-lred bg-[#232731] mt-32"
      >
        Tracks <br /> TO be Decided... <br /> (Whether to be made or not...)
      </section>
    </div>
  );
}

export default Tracks