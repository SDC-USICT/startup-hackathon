import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
    AOS.init();
  return (
    <div>
      <section
        data-aos="fade-down"
        data-aos-duration="1000"
        className=" flex gap-x-96 flex-row border-b-2 border-slate-700 h-16 justify-center items-center "
      >
        <div
          className="text-xl text-white
    "
        >
          <Link to="/">Logo</Link>
        </div>
        <div className="flex flex-row gap-x-16 justify-center items-center">
          <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100 text-l">
            About
          </div>
          <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
            Team
          </div>
          <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
            FAQs
          </div>
          <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
            Contact Us
          </div>
          <div className="bg-lred hover:bg-mred px-8 py-2 rounded-lg text-slate-200 hover:text-slate-300 hover:bg-red-650 cursor-pointer font-semibold">
            <div className="">REGISTER</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
