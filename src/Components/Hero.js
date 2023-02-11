import React from "react";
import { MdOutlineComputer } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  AOS.init();

  return (
    <div>
      <section
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto h-[85vh]"
      >
        <div className="flex flex-row ">
          {/* LEFT HERO */}
          <div className="basis-1/2 pt-32 pl-16">
            <div className="text-7xl font-semibold text-slate-200">
              Startup hackathon
            </div>
            <div className="text-mred text-xl mt-2">
              learn | teach | explore
            </div>
            <div className="text-justify text-gray-400 mt-2">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              recusandae natus tenetur sed voluptate quas aliquam itaque
              debitis, vel quae doloribus nostrum facilis nemo voluptatibus,
              quaerat animi nulla aperiam excepturi.{" "}
            </div>
            <div className="bg-lred hover:bg-mred px-8 py-2 rounded-lg text-slate-200 hover:text-slate-300 hover:bg-red-650 cursor-pointer  w-fit font-semibold mt-24">
              REGISTER
            </div>
          </div>
          {/* RIGHT HERO  */}
          <div className="basis-1/2 flex justify-center items-center text-lred  ">
            TO BE CHANGED
            <MdOutlineComputer color="#C4001D" size={200} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
