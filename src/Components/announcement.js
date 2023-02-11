import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Announce from "./Announce";
function Announcement() {
  AOS.init();
  return (
    <>
      <div className="container mx-auto">
        <div
          className=" hel text-7xl text-mred font-bold mt-4 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Announcement
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <Announce
            time={"FEB 11 - 05:45 PM"}
            title={"Registrations are going live soon!!!"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae deserunt facilis maxime eos dolore quasi ratione alias aspernatur. Eum officiis velit voluptatibus? Iusto harum et reiciendis minima repudiandae incidunt."
            }
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <Announce
            time={"FEB 11 - 05:45 PM"}
            title={"Registrations are going live soon!!!"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae deserunt facilis maxime eos dolore quasi ratione alias aspernatur. Eum officiis velit voluptatibus? Iusto harum et reiciendis minima repudiandae incidunt."
            }
          />
        </div>
      </div>
    </>
  );
}


export default Announcement;
