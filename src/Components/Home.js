import React from "react";
import { Link } from "react-router-dom";
import "./CSS/home.css";
function Home() {
  return (
    <>
      <div>
        {/* navbar */}
        <section className=" flex gap-x-96 flex-row border-b-2 border-slate-700 h-16 justify-center items-center sticky">
                  <div className="text-xl text-white
          ">Logo</div>
          <div className="flex flex-row gap-x-16 justify-center items-center">
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100 text-l">
              About
            </div>
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
              Sponsors
            </div>
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
              FAQs
            </div>
            <div className="text-slate-200  hover:text-slate-400 cursor-pointer hover:border-b-2 border-red-900 px-1 hover:ease-out duration-100">
              Contact Us
            </div>
            <div className="bg-red-600 hover:bg-red-700 px-8 py-2 rounded-lg text-slate-200 hover:text-slate-300 hover:bg-red-650 cursor-pointer">
              <div className="">Register</div>
            </div>
          </div>
        </section>
        {/* hero */}
      </div>
    </>
  );
}
export default Home;
